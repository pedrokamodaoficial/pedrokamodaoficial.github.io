<<<<<<< HEAD
//Criando animações e troca de cores do menu de navegação com IntersectionObserver 
const navbar = document.querySelector('.navbar');
const sectionHero = document.querySelector('#hero');
const sectionIntro = document.querySelector('#introduction');


let heroVisivel = false;
let introVisivel = false;


function atualizarNavbar() {
  if (heroVisivel) {
    navbar.classList.add('navbar-hero');
    navbar.classList.remove('navbar-inicio');
  } else if (introVisivel) {
    navbar.classList.remove('navbar-hero');
    navbar.classList.add('navbar-inicio');
  } else {
    // Se nenhuma estiver visível, deixa padrão inicial (ex: início branco)
    navbar.classList.add('navbar-inicio');
    navbar.classList.remove('navbar-hero');
  }
}

//Animando os textos da seção hero
const observerHero = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    heroVisivel = entry.isIntersecting;

    if (heroVisivel) {
      animarTexto();
    } else {
      resetarTexto();
    }

    atualizarNavbar();
  });
}, { threshold: 0.1 });

if (sectionHero) observerHero.observe(sectionHero);

//animando textos da seção introduction (muito semelhante a hero)
const observerIntro = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    introVisivel = entry.intersectionRatio >= 1.0;

    if (entry.intersectionRatio > 0.6) {
      animarIntroTextos();
    } else {
      resetarIntroTextos();
    }

    atualizarNavbar();
  });
}, { threshold: [0.6, 1.1] });

if (sectionIntro) observerIntro.observe(sectionIntro);
=======
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
>>>>>>> 80a960e1efb626a7dec9beef5c7906ed06b49216
