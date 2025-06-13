// Definir as constantes observadas
const sectionHero = document.querySelector('#hero');
const navbar = document.querySelector('.navbar');

// Adcicionar o observador
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Criar a animação do texto ao entrar na tela
      animarTexto();

      // Alterar o menu de navegação
      navbar.classList.add('navbar-hero');
      navbar.classList.remove('navbar-inicio');
    } else {
      // Resetar texto para repetir ao voltar
      resetarTexto();

      // Mudar o menu de navegação para modo início
      navbar.classList.remove('navbar-hero');
      navbar.classList.add('navbar-inicio');
    }
  });
}, { threshold: 0.8 });

// Ativar observador
if (sectionHero) observer.observe(sectionHero);
