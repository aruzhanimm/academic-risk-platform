(() => {
  'use strict';
  // Demo data and formatting
  const seed = [
    { id: 1, date: '2026-10-05', hours: 24, deadlines: 2 },
    { id: 2, date: '2026-10-12', hours: 31, deadlines: 5 },
    { id: 3, date: '2026-10-19', hours: 28, deadlines: 3 }
  ];
  let records = seed.map(record => ({ ...record }));
  let selectedId = 3;
  let toastTimer;
  let chartRows = [];
  const $ = id => document.getElementById(id);
  const views = ['history', 'input', 'explanation', 'data_control'];
  const crumbs = { history: 'Overview', input: 'Add observation', explanation: 'Estimate', data_control: 'My data' };
  const dateObject = date => new Date(`${date}T12:00:00Z`);
  const dateLabel = date => dateObject(date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' });
  const shortDate = date => dateObject(date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', timeZone: 'UTC' });
  const offsetDate = (date, days) => { const value = dateObject(date); value.setUTCDate(value.getUTCDate() + days); return value.toISOString().slice(0, 10); };
  const validDate = date => /^\d{4}-\d{2}-\d{2}$/.test(date) && !Number.isNaN(dateObject(date).getTime()) && dateObject(date).toISOString().slice(0, 10) === date;
  const valueLabel = (value, unit = '') => value === null ? 'Not provided' : `${value}${unit}`;
  const sortedRecords = () => [...records].sort((a, b) => b.date.localeCompare(a.date) || b.id - a.id);

  function notify(message) {
    clearTimeout(toastTimer);
    $('toast').textContent = message;
    $('toast').hidden = false;
    toastTimer = setTimeout(() => { $('toast').hidden = true; }, 4500);
  }

  function updateWindows() {
    const date = $('observation-date').value;
    if (!validDate(date)) { $('hours-window').textContent = ''; $('deadlines-window').textContent = ''; return; }
    $('hours-window').textContent = `${dateLabel(offsetDate(date, -6))} – ${dateLabel(date)}`;
    $('deadlines-window').textContent = `${dateLabel(offsetDate(date, 1))} – ${dateLabel(offsetDate(date, 14))}`;
  }

  // History and chart
  function renderHistory() {
    const all = sortedRecords();
    const filter = $('history-filter').value;
    const shown = filter === 'empty' ? [] : filter === 'recent' ? all.slice(0, 2) : all;
    const latest = shown[0];
    const missingLabel = latest ? 'Not provided' : 'No observations';
    $('latest-hours').innerHTML = latest && latest.hours !== null ? `${latest.hours} <span>hours</span>` : `— <span>${missingLabel}</span>`;
    $('latest-deadlines').innerHTML = latest && latest.deadlines !== null ? `${latest.deadlines} <span>submissions</span>` : `— <span>${missingLabel}</span>`;
    if (!shown.length) {
      $('history-table').innerHTML = '<div class="empty-state"><h3>Your history starts here.</h3><p>This empty-state preview does not remove the sample records.</p><a href="#input" class="button secondary">Add an observation</a></div>';
    } else {
      $('history-table').innerHTML = `<table><caption class="visually-hidden">Synthetic workload observations</caption><thead><tr><th scope="col">Reference date</th><th scope="col">Study hours<br>Past 7 days</th><th scope="col">Known deadlines<br>Next 14 days</th><th scope="col"><span class="visually-hidden">Action</span></th></tr></thead><tbody>${shown.map(record => `<tr><td>${dateLabel(record.date)}<span class="table-detail">Synthetic observation</span></td><td>${valueLabel(record.hours, ' h')}</td><td>${valueLabel(record.deadlines)}</td><td><button class="table-link" type="button" data-record="${record.id}" aria-label="View result for ${dateLabel(record.date)}"><span>View result</span><svg class="icon" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7M7 7h10v10"/></svg></button></td></tr>`).join('')}</tbody></table>`;
    }
    renderChart(filter === 'empty' ? [] : shown.slice(0, 7).reverse());
  }

  function renderChart(rows) {
    chartRows = rows;
    if (!rows.length) {
      $('history-chart').innerHTML = '<div class="empty-state"><p>No observations to display in this preview.</p></div>';
      if ($('chart-period')) $('chart-period').textContent = 'No observation dates in this preview.';
      return;
    }
    const firstDate = rows[0].date;
    const lastDate = rows[rows.length - 1].date;
    const period = firstDate === lastDate ? dateLabel(firstDate) : `${dateLabel(firstDate)} – ${dateLabel(lastDate)}`;
    if ($('chart-period')) $('chart-period').textContent = `Observation dates: ${period}.`;
    const max = Math.max(40, Math.ceil(Math.max(...rows.map(row => row.hours ?? 0)) / 10) * 10);
    const width = Math.max(300, $('history-chart').clientWidth);
    const x = index => rows.length === 1 ? width / 2 : 52 + index * ((width - 80) / (rows.length - 1));
    const y = value => 145 - (value / max) * 115;
    const ticks = [0, max / 2, max];
    let grid = ticks.map(value => `<line x1="40" x2="${width - 14}" y1="${y(value)}" y2="${y(value)}" stroke="#e7ece3" stroke-dasharray="4 5"/><text x="32" y="${y(value) + 4}" text-anchor="end" fill="#64785f" font-size="11">${value}h</text>`).join('');
    let lines = '';
    rows.forEach((row, index) => {
      if (index > 0 && row.hours !== null && rows[index - 1].hours !== null) lines += `<line x1="${x(index - 1)}" y1="${y(rows[index - 1].hours)}" x2="${x(index)}" y2="${y(row.hours)}" stroke="#628875" stroke-width="2.5"/>`;
      if (row.hours !== null) grid += `<circle cx="${x(index)}" cy="${y(row.hours)}" r="5" fill="#fff" stroke="#4b7c63" stroke-width="2.5"/><text x="${x(index)}" y="${y(row.hours) - 14}" text-anchor="middle" fill="#41674e" font-size="12" font-weight="600">${row.hours}h</text>`;
      else grid += `<text x="${x(index)}" y="120" text-anchor="middle" fill="#899481" font-size="12">—</text>`;
      grid += `<text x="${x(index)}" y="177" text-anchor="middle" fill="#64785f" font-size="11">${shortDate(row.date)}</text>`;
    });
    $('history-chart').innerHTML = `<svg viewBox="0 0 ${width} 195" role="img" aria-label="Reported study hours for synthetic observations, ${period}. Missing values are not plotted as zero."><title>Reported study hours, synthetic observations: ${period}</title>${lines}${grid}</svg>`;
  }

  // Result states
  function renderSelected() {
    const selected = records.find(record => record.id === selectedId) || sortedRecords()[0];
    $('selected-date').textContent = selected ? dateLabel(selected.date) : 'No observation';
    $('selected-hours').textContent = selected ? valueLabel(selected.hours, ' hours') : 'Not provided';
    $('selected-deadlines').textContent = selected ? valueLabel(selected.deadlines, ' submissions') : 'Not provided';
  }

  function setResultState(state) {
    document.querySelectorAll('[data-result-state]').forEach(button => {
      const active = button.dataset.resultState === state;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    const insufficient = state === 'insufficient';
    $('result-state-tag').textContent = insufficient ? 'Insufficient data · Example' : 'Model unavailable';
    $('result-state-title').textContent = insufficient ? 'More information would be needed.' : 'No prediction model is connected.';
    $('result-state-description').textContent = insufficient
      ? 'This is a preview of a future state: an enabled model has found that its required information is incomplete or unusable. A real service would explain the specific missing inputs.'
      : 'This prototype has no evaluated prediction model. Adding more observations will not enable a prediction. You can still explore your history.';
    $('result-state-note').textContent = insufficient
      ? 'Preview only. No model is running and this state has not been inferred from your example observation. No score is produced.'
      : 'An unavailable estimate does not mean low risk or zero risk. No score or feature contribution has been generated.';
  }

  // Navigation and focus
  function showView(moveFocus = false) {
    const requested = location.hash.slice(1);
    const view = views.includes(requested) ? requested : 'history';
    document.querySelectorAll('.view').forEach(section => { section.hidden = section.id !== `view-${view}`; });
    document.querySelectorAll('[data-view]').forEach(link => { if (link.dataset.view === view) link.setAttribute('aria-current', 'page'); else link.removeAttribute('aria-current'); });
    $('breadcrumb').innerHTML = `Workspace <span>/</span> ${crumbs[view]}`;
    document.title = `${crumbs[view]} — Academic Risk Platform prototype`;
    if (view === 'history') renderHistory();
    if (view === 'explanation') { renderSelected(); setResultState('model'); }
    if (view === 'input') updateWindows();
    if (moveFocus) $('main').focus({ preventScroll: true });
    window.scrollTo(0, 0);
  }

  document.querySelector('.skip-link').addEventListener('click', event => {
    event.preventDefault();
    $('main').focus({ preventScroll: true });
    $('main').scrollIntoView({ block: 'start' });
  });

  // Observation validation
  function clearErrors() {
    ['date', 'hours', 'deadlines', 'consent'].forEach(name => { $(`${name}-error`).hidden = true; $(`${name}-error`).textContent = ''; });
    ['observation-date', 'study-hours', 'known-deadlines', 'demo-consent'].forEach(id => $(id).removeAttribute('aria-invalid'));
  }

  $('observation-form').addEventListener('submit', event => {
    event.preventDefault();
    clearErrors();
    let firstInvalid;
    const fail = (name, inputId, message) => { $(`${name}-error`).textContent = message; $(`${name}-error`).hidden = false; $(inputId).setAttribute('aria-invalid', 'true'); firstInvalid ||= $(inputId); };
    const date = $('observation-date').value;
    const hoursText = $('study-hours').value;
    const deadlineText = $('known-deadlines').value;
    const hours = hoursText === '' ? null : Number(hoursText);
    const deadlines = deadlineText === '' ? null : Number(deadlineText);
    if (!validDate(date)) fail('date', 'observation-date', 'Choose a valid observation date.');
    if ($('study-hours').validity.badInput || (hours !== null && (!Number.isFinite(hours) || hours < 0 || hours > 168))) fail('hours', 'study-hours', 'Enter a number from 0 to 168 hours, or leave this field blank.');
    if ($('known-deadlines').validity.badInput || (deadlines !== null && (!Number.isInteger(deadlines) || deadlines < 0 || deadlines > 100))) fail('deadlines', 'known-deadlines', 'Enter a whole number from 0 to 100, or leave this field blank. This is a demo entry limit.');
    if (!$('demo-consent').checked) fail('consent', 'demo-consent', 'Confirm that you understand the demonstration before adding a record.');
    if (firstInvalid) { firstInvalid.focus(); return; }
    const existing = records.find(record => record.date === date && record.hours === hours && record.deadlines === deadlines);
    if (existing) { selectedId = existing.id; notify('This exact demo observation is already in your history.'); }
    else { selectedId = Math.max(0, ...records.map(record => record.id)) + 1; records.push({ id: selectedId, date, hours, deadlines }); notify('Demo observation added to this tab only. Refreshing resets it.'); }
    $('history-filter').value = 'all';
    location.hash = 'history';
  });

  $('observation-date').addEventListener('input', updateWindows);
  $('history-filter').addEventListener('change', renderHistory);
  $('history-table').addEventListener('click', event => { const button = event.target.closest('[data-record]'); if (!button) return; selectedId = Number(button.dataset.record); location.hash = 'explanation'; });
  document.querySelectorAll('[data-result-state]').forEach(button => button.addEventListener('click', () => setResultState(button.dataset.resultState)));

  // Request previews and reset
  function resetRequestStatus() {
    $('request-status-title').textContent = 'No demo request yet';
    $('request-status-text').textContent = 'Choose a request type to preview the pending state.';
    $('request-status-detail').hidden = true;
  }
  document.querySelectorAll('[name=request-type]').forEach(input => input.addEventListener('change', () => {
    const deletion = input.value === 'delete';
    $('request-button-label').textContent = deletion ? 'Preview deletion request' : 'Preview export request';
    $('request-scope').textContent = deletion
      ? 'Your observations and associated results or snapshots. Retention rules, backup handling, and completion criteria must be agreed before a real deletion is offered.'
      : 'Your observations and any associated estimates. A real export would require ownership checks and a protected, expiring download.';
    $('request-confirm').checked = false;
    resetRequestStatus();
  }));
  $('data-form').addEventListener('submit', event => {
    event.preventDefault();
    if (!$('request-confirm').checked) return;
    const deletion = document.querySelector('[name=request-type]:checked').value === 'delete';
    $('request-status-title').textContent = deletion ? 'Deletion request preview' : 'Export request preview';
    $('request-status-text').textContent = 'No request was sent. No export or deletion was performed.';
    $('request-status-detail').hidden = false;
    notify('Showing a simulated pending request. No data operation was performed.');
  });
  $('reset-demo').addEventListener('click', () => {
    records = seed.map(record => ({ ...record })); selectedId = 3;
    $('observation-form').reset(); $('data-form').reset(); $('history-filter').value = 'all';
    clearErrors(); resetRequestStatus();
    $('request-button-label').textContent = 'Preview export request';
    $('request-scope').textContent = 'Your observations and any associated estimates. A real export would require ownership checks and a protected, expiring download.';
    setResultState('model'); updateWindows(); renderHistory();
    location.hash = 'history'; notify('Demo restored to the original synthetic observations.');
  });
  window.addEventListener('resize', () => renderChart(chartRows));
  window.addEventListener('hashchange', () => showView(true));
  updateWindows(); renderHistory(); renderSelected(); showView();
})();
