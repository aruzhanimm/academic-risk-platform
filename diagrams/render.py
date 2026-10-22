#!/usr/bin/env python3
"""Render editable diagram JSON as deterministic SVG using Python's standard library."""

import argparse
import json
import math
from pathlib import Path
import re
import sys
from xml.sax.saxutils import escape, quoteattr


ROOT = Path(__file__).resolve().parent
PALETTE = {
    "navy": "#17364d",
    "teal": "#087f8c",
    "muted": "#516778",
    "line": "#a6bac5",
    "pale": "#eff8f8",
    "light": "#f7fafc",
    "white": "#ffffff",
}
FONT = "Arial, Helvetica, sans-serif"


def attr(value):
    return quoteattr(str(value))


def number(value):
    value = float(value)
    if not math.isfinite(value):
        raise ValueError("Coordinates and sizes must be finite numbers")
    return format(value, ".3f").rstrip("0").rstrip(".") if value else "0"


def colour(value):
    return PALETTE.get(value, value)


def lines(value):
    return [value] if isinstance(value, str) else value


def text(x, y, value, size=20, weight="400", anchor="middle", fill="navy"):
    if size < 16:
        raise ValueError("Diagram text must be at least 16 SVG units")
    return (
        '<text x={} y={} font-family={} font-size={} font-weight={} '
        'text-anchor={} fill={}>{}</text>'.format(
            attr(number(x)), attr(number(y)), attr(FONT), attr(number(size)),
            attr(weight), attr(anchor), attr(colour(fill)), escape(value)
        )
    )


def text_block(node):
    title = lines(node.get("title", []))
    body = lines(node.get("body", []))
    title_size = node.get("title_size", 23)
    body_size = node.get("body_size", 20)
    title_step = title_size * 1.28
    body_step = body_size * 1.45
    gap = 14 if title and body else 0
    height = len(title) * title_step + len(body) * body_step + gap
    x = node["x"] + node["w"] / 2
    y = node["y"] + (node["h"] - height) / 2 + title_size
    result = []
    for value in title:
        result.append(text(x, y, value, title_size, "700"))
        y += title_step
    if body:
        y += gap + (body_size - title_size)
    for value in body:
        result.append(text(x, y, value, body_size, fill=node.get("body_fill", "muted")))
        y += body_step
    return result


def boundary(node):
    x, y, w, h = (node[key] for key in ("x", "y", "w", "h"))
    dashed = ' stroke-dasharray="9 6"' if node.get("dashed", True) else ""
    result = [
        '<rect x={} y={} width={} height={} rx="18" fill={} stroke={} '
        'stroke-width="2"{}/>'.format(
            attr(number(x)), attr(number(y)), attr(number(w)), attr(number(h)),
            attr(colour(node.get("fill", "light"))), attr(colour("line")), dashed
        )
    ]
    label_y = y + h - 24 if node.get("label_position") == "bottom" else y + 34
    result.append(text(x + 22, label_y, node["title"], node.get("title_size", 22), "700", "start"))
    if node.get("subtitle"):
        result.append(text(x + 22, label_y + 28, node["subtitle"], 17, anchor="start", fill="muted"))
    return result


def shape(node):
    kind = node["type"]
    x, y, w, h = (node[key] for key in ("x", "y", "w", "h"))
    fill = colour(node.get("fill", "white"))
    stroke = colour(node.get("stroke", "teal"))
    if kind == "box":
        result = ['<rect x={} y={} width={} height={} rx="16" fill={} stroke={} stroke-width="2.5"/>'.format(
            attr(number(x)), attr(number(y)), attr(number(w)), attr(number(h)), attr(fill), attr(stroke)
        )]
    elif kind == "ellipse":
        result = ['<ellipse cx={} cy={} rx={} ry={} fill={} stroke={} stroke-width="2.5"/>'.format(
            attr(number(x + w / 2)), attr(number(y + h / 2)), attr(number(w / 2)), attr(number(h / 2)), attr(fill), attr(stroke)
        )]
    elif kind == "database":
        depth = 20
        path = "M {x} {top} V {bottom} C {x} {curve} {right} {curve} {right} {bottom} V {top}".format(
            x=number(x), top=number(y + depth), bottom=number(y + h - depth),
            curve=number(y + h + depth / 3), right=number(x + w)
        )
        result = [
            '<path d={} fill={} stroke={} stroke-width="2.5"/>'.format(attr(path), attr(fill), attr(stroke)),
            '<ellipse cx={} cy={} rx={} ry={} fill={} stroke={} stroke-width="2.5"/>'.format(
                attr(number(x + w / 2)), attr(number(y + depth)), attr(number(w / 2)), attr(number(depth)), attr(fill), attr(stroke)
            ),
        ]
        node = dict(node, y=y + 20, h=h - 20)
    elif kind == "actor":
        cx = x + w / 2
        result = [
            '<circle cx={} cy={} r="22" fill="white" stroke={} stroke-width="3"/>'.format(attr(number(cx)), attr(number(y + 32)), attr(stroke)),
            '<path d={} fill="none" stroke={} stroke-width="3" stroke-linecap="round"/>'.format(
                attr("M {} {} V {} M {} {} H {} M {} {} L {} {} M {} {} L {} {}".format(
                    number(cx), number(y + 54), number(y + 135),
                    number(cx - 48), number(y + 85), number(cx + 48),
                    number(cx), number(y + 135), number(cx - 40), number(y + 195),
                    number(cx), number(y + 135), number(cx + 40), number(y + 195)
                )), attr(stroke)
            ),
            text(cx, y + 232, node["title"], 23, "700"),
        ]
        if node.get("subtitle"):
            result.append(text(cx, y + 260, node["subtitle"], 18, fill="muted"))
        return result
    else:
        raise ValueError("Unknown node type: " + kind)
    return result + text_block(node)


def edge(node):
    points = " ".join("{},{}".format(number(x), number(y)) for x, y in node["points"])
    style = node.get("style", "request")
    stroke = {"request": "teal", "response": "navy", "manual": "muted", "association": "muted"}[style]
    dashed = ' stroke-dasharray="9 6"' if style == "manual" else ""
    marker = "" if style == "association" else ' marker-end="url(#arrow-{})"'.format(stroke)
    return '<polyline id={} points={} fill="none" stroke={} stroke-width="2.4" stroke-linejoin="round"{}{} />'.format(
        attr(node["id"]), attr(points), attr(colour(stroke)), dashed, marker
    )


def edge_label(node):
    label = node.get("label")
    if not label:
        return []
    values = lines(label["lines"])
    size = label.get("size", 17)
    step = size * 1.35
    width = label["w"]
    height = len(values) * step + 14
    x, y = label["x"], label["y"]
    result = ['<rect x={} y={} width={} height={} rx="7" fill="white"/>'.format(
        attr(number(x - width / 2)), attr(number(y - height / 2)), attr(number(width)), attr(number(height))
    )]
    baseline = y - (len(values) - 1) * step / 2 + size * 0.34
    for value in values:
        result.append(text(x, baseline, value, size, fill="muted"))
        baseline += step
    return result


def validate(data):
    if data.get("schema_version") != 1:
        raise ValueError("Expected schema_version 1")
    if data["width"] <= 0 or data["height"] <= 0:
        raise ValueError("Canvas dimensions must be positive")
    ids = set()
    for item in data["nodes"] + data["edges"]:
        identifier = item["id"]
        if not re.fullmatch(r"[a-z][a-z0-9-]*", identifier) or identifier in ids:
            raise ValueError("Invalid or repeated object ID: " + identifier)
        ids.add(identifier)
        if "points" in item:
            if len(item["points"]) < 2:
                raise ValueError("An edge needs at least two points")
            points = item["points"]
        else:
            if item["w"] <= 0 or item["h"] <= 0:
                raise ValueError("Node dimensions must be positive")
            points = [(item["x"], item["y"]), (item["x"] + item["w"], item["y"] + item["h"])]
        for x, y in points:
            number(x)
            number(y)
            if not 0 <= x <= data["width"] or not 0 <= y <= data["height"]:
                raise ValueError("Object outside the canvas: " + identifier)


def render(data):
    validate(data)
    width, height = data["width"], data["height"]
    result = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<svg xmlns="http://www.w3.org/2000/svg" width={} height={} viewBox={} role="img" aria-labelledby="diagram-title diagram-description">'.format(
            attr(number(width)), attr(number(height)), attr("0 0 {} {}".format(number(width), number(height))))
    ]
    result += ["<title id=\"diagram-title\">{}</title>".format(escape(data["title"])),
               "<desc id=\"diagram-description\">{}</desc>".format(escape(data["description"])), "<defs>"]
    for name in ("navy", "teal", "muted"):
        result.append('<marker id="arrow-{}" markerWidth="10" markerHeight="8" refX="9" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M 0 0 L 10 4 L 0 8 Z" fill={}/></marker>'.format(name, attr(colour(name))))
    result += ["</defs>", '<rect width="100%" height="100%" fill="white"/>',
               text(60, 63, data["title"], 34, "700", "start"),
               text(60, 101, data["subtitle"], 19, anchor="start", fill="muted")]
    for node in data["nodes"]:
        if node["type"] == "boundary":
            result += boundary(node)
    result.extend(edge(item) for item in data["edges"])
    for node in data["nodes"]:
        if node["type"] != "boundary":
            result += shape(node)
    for item in data["edges"]:
        result += edge_label(item)
    for item in data.get("annotations", []):
        result.append(text(item["x"], item["y"], item["text"], item.get("size", 18), anchor=item.get("anchor", "start"), fill="muted"))
    for index, value in enumerate(lines(data.get("footer", []))):
        result.append(text(60, height - 38 + index * 24, value, 17, anchor="start", fill="muted"))
    return "\n".join(result + ["</svg>", ""])


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--check", action="store_true", help="Check that committed exports match the JSON sources; do not write files")
    args = parser.parse_args()
    sources = sorted((ROOT / "sources").glob("*.json"))
    if not sources:
        parser.error("No diagram sources found")
    stale = []
    for source in sources:
        try:
            expected = render(json.loads(source.read_text(encoding="utf-8")))
            destination = ROOT / "exports" / (source.stem + ".svg")
            matches = destination.is_file() and destination.read_bytes() == expected.encode("utf-8")
            if args.check:
                if not matches:
                    stale.append(destination.name)
            elif not matches:
                destination.parent.mkdir(parents=True, exist_ok=True)
                destination.write_bytes(expected.encode("utf-8"))
            print("{} {}".format("OK" if matches else ("STALE" if args.check else "WROTE"), destination.name))
        except (OSError, ValueError, KeyError, TypeError) as error:
            print("{}: {}".format(source.name, error), file=sys.stderr)
            return 1
    return 1 if stale else 0


if __name__ == "__main__":
    sys.exit(main())
