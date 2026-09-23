// Free Claim Review form extras, on top of src/scripts/forms.ts (imported first, so its submit handler runs first):
// - "What happened" radio group validation (forms.ts only validates text/email/tel/select)
// - fills the error summary (74:2361 desktop list / 74:4980 mobile line) and moves focus to it
// - shows chosen file names in the upload box
// - on a valid submit, keeps a copy of the answers in sessionStorage for the thank-you receipt
import '../../scripts/forms.ts';

const ORDER = [
  { id: 'f-name', label: 'Full name', msg: 'enter your name.' },
  { id: 'f-phone', label: 'Phone', msg: 'enter a 10-digit number.' },
  { id: 'f-email', label: 'Email', msg: 'enter a full email address.' },
  { id: 'f-state', label: 'Property state', msg: 'choose a state.' },
  { id: 'f-what', label: 'What happened', msg: 'choose one option.' },
];

document.querySelectorAll<HTMLFormElement>('form[data-lead-form]').forEach((form) => {
  const group = form.querySelector<HTMLElement>('[data-group]');
  const radios = [...form.querySelectorAll<HTMLInputElement>('input[type=radio][name="What happened"]')];
  const summary = form.querySelector<HTMLElement>('[data-form-error]');
  const upload = form.querySelector<HTMLInputElement>('[data-upload]');
  const uploadHelp = form.querySelector<HTMLElement>('[data-upload-help]');
  const uploadDefault = uploadHelp?.textContent || '';

  const setGroup = (ok: boolean) => {
    if (!group) return;
    group.dataset.state = ok ? 'default' : 'error';
    group.setAttribute('aria-invalid', ok ? 'false' : 'true');
  };
  radios.forEach((r) => r.addEventListener('change', () => { if (group?.dataset.state === 'error') setGroup(true); }));

  upload?.addEventListener('change', () => {
    if (!uploadHelp) return;
    const names = [...(upload.files || [])].map((f) => f.name);
    uploadHelp.textContent = names.length ? names.join(', ') : uploadDefault;
  });

  const link = (id: string, text: string) => {
    const a = document.createElement('a');
    a.href = `#${id}`; a.textContent = text;
    a.addEventListener('click', (e) => {
      e.preventDefault();
      const el = id === 'f-what' ? radios[0] : document.getElementById(id);
      el?.focus(); el?.scrollIntoView({ block: 'center' });
    });
    return a;
  };

  form.addEventListener('submit', (e) => {
    const groupOk = radios.some((r) => r.checked);
    setGroup(groupOk);
    const bad = ORDER.filter((f) => f.id === 'f-what'
      ? !groupOk
      : document.getElementById(f.id)?.closest<HTMLElement>('[data-field]')?.dataset.state === 'error');
    if (!bad.length) {
      if (summary) summary.hidden = true;
      try {
        const val = (id: string) => (document.getElementById(id) as HTMLInputElement | null)?.value.trim() || '';
        const files = [...(upload?.files || [])].map((f) => f.name);
        sessionStorage.setItem('fcr-receipt', JSON.stringify({
          name: val('f-name'), phone: val('f-phone'), state: val('f-state'),
          what: radios.find((r) => r.checked)?.value || '', docs: files.join(', '),
        }));
      } catch { /* storage unavailable: the thank-you page falls back to a plain confirmation */ }
      return;
    }
    // forms.ts lets the submit through when only the radio group is invalid: stop it and undo its busy state.
    if (!e.defaultPrevented) {
      e.preventDefault();
      const btn = form.querySelector<HTMLButtonElement>('button[type=submit]');
      if (btn) { btn.disabled = false; btn.removeAttribute('aria-busy'); }
    }
    if (!summary) return;
    summary.querySelector('[data-summary-count]')!.textContent = String(bad.length);
    summary.querySelector('[data-summary-noun]')!.textContent = bad.length === 1 ? 'field' : 'fields';
    const list = summary.querySelector('[data-summary-list]')!;
    list.replaceChildren(...bad.map((f) => { const li = document.createElement('li'); li.append(link(f.id, `${f.label}: ${f.msg}`)); return li; }));
    const inline = summary.querySelector('[data-summary-inline]')!;
    inline.replaceChildren();
    bad.forEach((f, i) => {
      if (i) inline.append(', ');
      inline.append(link(f.id, i ? f.label.toLowerCase() : f.label));
    });
    summary.hidden = false;
    summary.focus();
  });
});
