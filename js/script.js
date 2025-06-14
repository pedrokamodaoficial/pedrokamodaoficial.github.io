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
    navbar.classList.add('navbar-inicio');
    navbar.classList.remove('navbar-hero');
  }
}

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
}, { threshold: [0.6, 1.0] });

if (sectionIntro) observerIntro.observe(sectionIntro);

