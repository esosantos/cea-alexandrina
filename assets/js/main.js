document.addEventListener('DOMContentLoaded', () => {
  // Elementos
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.getElementById('navbarNav');
  const navLinks = document.querySelectorAll('.nav-link');
  const backToTop = document.getElementById('backToTop');

  // Variável para instância do Bootstrap Collapse (cache)
  let bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);

  // Função para fechar menu quando clicar em link (se o menu estiver visível)
  function handleNavLinkClick() {
    const isMobileView = window.getComputedStyle(navbarToggler).display !== 'none';
    if (isMobileView) {
      if (!bsCollapse) {
        bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });
      }
      bsCollapse.hide();
      // Atualiza estado do botão toggler para acessibilidade e visual
      navbarToggler.classList.add('collapsed');
      navbarToggler.setAttribute('aria-expanded', 'false');
    }
  }

  // Adiciona evento em cada link do menu
  navLinks.forEach(link => {
    link.addEventListener('click', handleNavLinkClick);
  });

  // --- Back to Top ---

  // Função para mostrar/esconder botão backToTop
  function toggleBackToTop() {
    if (window.scrollY > 300) {
      backToTop.style.display = 'block';
    } else {
      backToTop.style.display = 'none';
    }
  }

  // Debounce simples para melhorar performance do scroll
  let scrollTimeout;
  window.addEventListener('scroll', () => {
    if (scrollTimeout) clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(toggleBackToTop, 100);
  });

  // Inicializa botão escondido
  backToTop.style.display = 'none';

  // Evento click para scroll suave ao topo
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
