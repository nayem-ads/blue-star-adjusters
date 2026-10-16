// Content kit helper: tiny inline markdown for copy strings. Supports [text](/route/), **bold**, *italic*. Escapes everything else.
const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
export const md = (s: string) =>
  esc(s)
    .replace(/\[([^\]]+)\]\(((?:\/|https?:\/\/)[^)\s]*)\)/g, (_m, t, h) =>
      `<a href="${h}" class="bs-kit-link"${h.startsWith('http') ? ' rel="noopener" target="_blank"' : ''}>${t}</a>`)
    .replace(/\*\*([^*]+)\*\*/g, '<strong class="font-semibold">$1</strong>')
    .replace(/(^|[^*])\*([^*]+)\*/g, '$1<em>$2</em>');
