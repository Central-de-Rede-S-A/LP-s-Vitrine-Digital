document.addEventListener('DOMContentLoaded', function () {

    const main = document.getElementById('main-scroll');
    const nav = document.getElementById('sidebar-nav');
    const topbar = document.getElementById('topbar-current');

    const sections = Array.from(document.querySelectorAll('.section-anchor[id]'));
    const navItems = Array.from(nav.querySelectorAll('.nav-item[data-target]'));

    const labels = {
      'Início': 'Capa', 's-capa': 'Capa', 's-intro': 'Como Funciona',
      's-basico': 'Informações Básicas', 's-1': 'Hero', 's-2': 'Sobre',
      's-3': 'Benefícios', 's-4': 'Gestão', 's-5': 'Soluções Empresariais',
      's-6': 'Notícias', 's-7': 'Contato & Mensagens', 's-8': 'Footer',
      's-9': 'Institucional', 's-10': 'Analytics', 's-11': 'SEO & Configurações',
      's-12': 'Limites de Seções', 's-13': 'Domínio Customizado',
    };

    const setActive = (id) => {
      navItems.forEach(item => {
        item.classList.toggle('active', item.dataset.target === id);
      });
      if (topbar && labels[id]) topbar.textContent = labels[id];
    };

    // Scroll spy
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    }, { root: main, rootMargin: '-20% 0px -60% 0px', threshold: 0 });

    sections.forEach(s => observer.observe(s));
    setActive('s-capa');

    // Mobile menu toggle
    const toggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    const closeMenu = () => { sidebar.classList.remove('open'); overlay.classList.remove('open'); };
    if (toggle) toggle.addEventListener('click', () => { sidebar.classList.toggle('open'); overlay.classList.toggle('open'); });
    if (overlay) overlay.addEventListener('click', closeMenu);
    navItems.forEach(item => item.addEventListener('click', closeMenu));
});