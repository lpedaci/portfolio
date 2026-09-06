/* ------------------------------------------------------------------
   Hand-drawn icon set. One stroke weight, one corner language, so the
   marks feel like they belong to the same alphabet as the monogram.
   ------------------------------------------------------------------ */

const s = (d, extra = '') =>
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"${extra}>${d}</svg>`;

export const icon = {
  arrowUpRight: s('<path d="M7.5 16.5 16.5 7.5"/><path d="M8.6 7.5h7.9v7.9"/>'),
  arrowRight:   s('<path d="M4.5 12h14"/><path d="m13 6.5 5.5 5.5L13 17.5"/>'),
  arrowDown:    s('<path d="M12 4.5v14"/><path d="m5.8 12.4 6.2 6.2 6.2-6.2"/>'),
  arrowLeft:    s('<path d="M19.5 12h-14"/><path d="M11 6.5 5.5 12l5.5 5.5"/>'),
  play:         '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8.4 5.6a1 1 0 0 1 1.53-.85l8.2 5.15a1.2 1.2 0 0 1 0 2.03l-8.2 5.16a1 1 0 0 1-1.53-.85z"/></svg>',
  doc:          s('<path d="M6 3.6h7.2L18 8.4v12H6z"/><path d="M13 3.6v5h5"/><path d="M9 13h6M9 16.4h4"/>'),
  window:       s('<rect x="3.4" y="4.6" width="17.2" height="14.8" rx="2.4"/><path d="M3.4 9h17.2"/><path d="M6.4 6.8h.01M8.9 6.8h.01"/>'),
  sound:        s('<path d="M4.5 9.6v4.8"/><path d="M8.2 6.6v10.8"/><path d="M12 4v16"/><path d="M15.8 7.8v8.4"/><path d="M19.5 10.4v3.2"/>'),
  mail:         s('<rect x="3" y="5.2" width="18" height="13.6" rx="2.6"/><path d="m4.4 7.4 6.3 4.7a2.2 2.2 0 0 0 2.6 0l6.3-4.7"/>'),
  linkedin:     '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M5.2 3.4a2.1 2.1 0 1 1 0 4.2 2.1 2.1 0 0 1 0-4.2M3.4 9.1h3.7v11.5H3.4zM9.5 9.1h3.5v1.6a3.9 3.9 0 0 1 3.4-1.8c2.9 0 4.2 1.8 4.2 4.9v6.8h-3.7V14c0-1.5-.5-2.3-1.7-2.3s-2 .8-2 2.3v6.6H9.5z"/></svg>',
  github:       '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.2a9.8 9.8 0 0 0-3.1 19.1c.5.1.7-.2.7-.5v-1.8c-2.7.6-3.3-1.2-3.3-1.2-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.3-1.1.6-1.3-2.2-.3-4.5-1.1-4.5-4.9 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.7 1a9.4 9.4 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.8-2.3 4.6-4.5 4.9.4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5A9.8 9.8 0 0 0 12 2.2"/></svg>',
  behance:      '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8.6 5.4c1.9 0 3.3.8 3.3 2.8 0 1.2-.6 1.9-1.5 2.3 1.3.4 2 1.4 2 2.8 0 2.3-1.8 3.3-3.9 3.3H2.4V5.4zm-.4 4.4c.8 0 1.4-.4 1.4-1.2s-.5-1.2-1.4-1.2H5.1v2.4zm.2 4.8c1 0 1.6-.4 1.6-1.4s-.7-1.4-1.6-1.4H5.1v2.8zM15 6.3h5.3v1.3H15zM18 9.6c2.3 0 3.8 1.6 3.8 4v.6h-5.5c.1 1.2.8 1.9 2 1.9.8 0 1.4-.3 1.7-.9h2c-.4 1.6-1.8 2.6-3.7 2.6-2.5 0-4.1-1.7-4.1-4.1s1.6-4.1 3.8-4.1m-1.7 3.3h3.4c-.1-1-.7-1.7-1.7-1.7s-1.6.6-1.7 1.7"/></svg>',
  globe:        s('<circle cx="12" cy="12" r="8.4"/><path d="M3.6 12h16.8"/><path d="M12 3.6c2.2 2.3 3.3 5.2 3.3 8.4s-1.1 6.1-3.3 8.4c-2.2-2.3-3.3-5.2-3.3-8.4s1.1-6.1 3.3-8.4"/>'),
  spark:        s('<path d="M12 3.4c.7 4.3 2.3 5.9 6.6 6.6-4.3.7-5.9 2.3-6.6 6.6-.7-4.3-2.3-5.9-6.6-6.6 4.3-.7 5.9-2.3 6.6-6.6"/><path d="M18 16.2c.3 1.7 1 2.4 2.7 2.7-1.7.3-2.4 1-2.7 2.7-.3-1.7-1-2.4-2.7-2.7 1.7-.3 2.4-1 2.7-2.7"/>')
};

/* The LP monogram. One geometric stroke language, drawn on a 48 x 34 grid. */
export const monogram = (cls = '') =>
  `<svg class="${cls}" viewBox="0 0 48 34" fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">` +
  `<path d="M8 4v17a5 5 0 0 0 5 5h6.5"/>` +
  `<path d="M30 30V5h4.5a7 7 0 0 1 0 14H30"/>` +
  `</svg>`;

/* Same mark, rendered as a favicon on a clay ground. */
export const favicon = () => {
  const svg =
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">` +
    `<rect width="64" height="64" rx="15" fill="%23BE5735"/>` +
    `<g fill="none" stroke="%23FBF8F1" stroke-width="6.4" stroke-linecap="round" stroke-linejoin="round">` +
    `<path d="M17 17v13.5a5 5 0 0 0 5 5h4.5"/>` +
    `<path d="M38 47V19h4a7 7 0 0 1 0 14h-4"/>` +
    `</g></svg>`;
  return `data:image/svg+xml,${svg.replace(/"/g, "'").replace(/#/g, '%23').replace(/</g, '%3C').replace(/>/g, '%3E')}`;
};
