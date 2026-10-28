(() => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }));
  }

  const slider = document.getElementById('team-size');
  const teamCount = document.getElementById('team-count');
  const usCost = document.getElementById('us-cost');
  const zyroCost = document.getElementById('zyro-cost');
  const monthly = document.getElementById('monthly-savings');
  const annual = document.getElementById('annual-savings');
  const money = value => '$' + Math.round(value).toLocaleString('en-US');
  function updateSavings() {
    if (!slider) return;
    const count = Number(slider.value);
    const us = count * 4600;
    const zyro = count * 1600;
    const saved = us - zyro;
    const pct = Math.round(saved / us * 100);
    teamCount.textContent = `${count} agent${count === 1 ? '' : 's'}`;
    usCost.textContent = money(us);
    zyroCost.textContent = money(zyro);
    monthly.innerHTML = `${money(saved)} <em>(${pct}%)</em>`;
    annual.textContent = money(saved * 12);
  }
  if (slider) { slider.addEventListener('input', updateSavings); updateSavings(); }

  const form = document.getElementById('lead-form');
  const status = document.getElementById('form-status');
  if (form) {
    form.addEventListener('submit', event => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      const data = new FormData(form);
      const subject = encodeURIComponent(`ZyroCORP pilot enquiry — ${data.get('company')}`);
      const body = encodeURIComponent(
`New ZyroCORP website enquiry

Name: ${data.get('name')}
Work email: ${data.get('email')}
Phone: ${data.get('phone') || 'Not provided'}
Company: ${data.get('company')}
Business type: ${data.get('business')}
Support needed: ${data.get('service')}

Details:
${data.get('details') || 'Not provided'}

Please follow up with this prospect.`
      );
      status.textContent = 'Your email app should open with the enquiry pre-filled. Review the details and send the message to complete the request.';
      window.location.href = `mailto:hello@zyrocorp.com?subject=${subject}&body=${body}`;
    });
  }

  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  const fmt = zone => new Intl.DateTimeFormat('en-US', {timeZone: zone, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true}).format(new Date());
  function updateClocks() {
    const ny = document.getElementById('ny-time');
    const delhi = document.getElementById('delhi-time');
    try {
      if (ny) ny.textContent = fmt('America/New_York');
      if (delhi) delhi.textContent = fmt('Asia/Kolkata');
    } catch (_) {}
  }
  updateClocks();
  setInterval(updateClocks, 1000);
})();