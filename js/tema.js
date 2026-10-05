// Preferência local: funciona também quando o navegador bloqueia o armazenamento.
(() => {
  const root = document.documentElement;
  let saved;
  try { saved = localStorage.getItem('portfolio-tema'); } catch { /* Usa o tema padrão. */ }
  root.dataset.theme = saved === 'light' ? 'light' : 'dark';
  document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('#tema');
    const update = () => {
      const light = root.dataset.theme === 'light';
      button.setAttribute('aria-label', light ? 'Ativar tema escuro' : 'Ativar tema claro');
      button.setAttribute('aria-pressed', String(light));
      button.firstElementChild.textContent = light ? '☾' : '☼';
      document.querySelector('meta[name="theme-color"]').content = light ? '#faf8f5' : '#101012';
    };
    button.hidden = false;
    update();
    button.addEventListener('click', () => {
      root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
      try { localStorage.setItem('portfolio-tema', root.dataset.theme); } catch { /* Sem persistência. */ }
      update();
    });
  });
})();
