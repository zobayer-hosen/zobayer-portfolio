export const THEME_KEY = "zh-theme";
export const THEME_COLORS = { light: "#f0f3fa", dark: "#2a2a29" } as const;

/**
 * Runs in <head> before first paint: applies the saved or system theme and marks
 * that JS is available (which arms the scroll-reveal animations in CSS).
 */
export const themeInitScript = `(function () {
  var root = document.documentElement, t = null;
  root.classList.add('js');
  try { t = localStorage.getItem('${THEME_KEY}'); } catch (e) {}
  if (t !== 'light' && t !== 'dark') {
    t = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  root.setAttribute('data-theme', t);
})();`;
