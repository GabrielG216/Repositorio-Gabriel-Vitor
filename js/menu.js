// Menu móvel: estado acessível, fechamento ao navegar e tecla Escape.
(() => {
  const button = document.querySelector('#menu');
  const nav = document.querySelector('#navegacao');
  button.hidden = false;
  nav.classList.add('menu-ready');
  const close = () => {
    nav.classList.remove('is-open');
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-label', 'Abrir menu');
  };
  button.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    button.setAttribute('aria-expanded', String(open));
    button.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  });
  nav.addEventListener('click', event => { if (event.target.closest('a')) close(); });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && nav.classList.contains('is-open')) { close(); button.focus(); }
  });
  document.addEventListener('click', event => {
    if (!event.target.closest('.header')) close();
  });
  matchMedia('(max-width: 760px)').addEventListener('change', close);
})();
