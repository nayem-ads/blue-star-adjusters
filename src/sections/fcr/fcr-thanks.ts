// Thank-you receipt (74:2468 / 74:5089): fills "What you sent us" from the copy fcr-form.ts kept in sessionStorage.
// Re-runs on a "fcr:receipt" event (used by QA to inject the Figma sample request).
const NONE = 'None yet. You can send them after the first call.';
function render() {
  let data: Record<string, string> | null = null;
  try { data = JSON.parse(sessionStorage.getItem('fcr-receipt') || 'null'); } catch { data = null; }
  const receipt = document.querySelector<HTMLElement>('[data-receipt]');
  const title = document.querySelector<HTMLElement>('[data-thanks-title]');
  if (!receipt || !title || !data || !data.name) return;
  const first = data.name.split(/\s+/)[0];
  title.textContent = `Thank you, ${first}.`;
  receipt.querySelectorAll<HTMLElement>('[data-receipt-field]').forEach((el) => {
    const k = el.dataset.receiptField || '';
    el.textContent = k === 'docs' ? (data![k] || NONE) : (data![k] || '');
  });
  receipt.hidden = false;
}
render();
document.addEventListener('fcr:receipt', render);
