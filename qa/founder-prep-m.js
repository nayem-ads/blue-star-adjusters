document.querySelectorAll('[data-node]').forEach(e=>{ if(!e.dataset.nodeM) e.removeAttribute('data-node') });
document.querySelectorAll('[data-node-m]').forEach(e=>{ e.dataset.node=e.dataset.nodeM });
const cb=document.querySelector('.bs-callbar'); if(cb){ cb.style.position='absolute'; cb.style.top='756px'; cb.style.bottom='auto'; }
