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


//Data-i18n para tradução do site
const translations = {
  en: {
    "nav.home": "Home",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "hero.title": "Welcome to my universe",
    "hero.subtitle": "Explore my projects as a Full-Stack Developer",
    "intro.subtitle": "Developer & Journalist",
    "intro.description": "Graduated in Journalism, technician in systems analysis and development and a software engineer in production. I have a lot of knowledge and experience with writing, communication, Java, C#, JavaScript (including libraries such as anime.js, gsap.js), Bootstrap, Tailwind, React & ReactNative",
    "projects.title": "My Projects",
    "project.description1": "Team production at Senai IT with the aim of solving the problem of overcrowding in a medical laboratory during the pandemic.",
    "project.github": "See GitHub",
    "project.figma": "See Figma",
    "project.title": "LuRique Fit - WebSite",
    "project.description2": "This project is for a Running Personal Trainer. He wanted greater proximity to his students and a way to share his work with more people.",
    "project.description3": "API project during the technical course at Senai. With ASP.NET core in Visual Studio IDE.",
    "project.description4": "Conclusion of the Code-tur project after making API and database (with MySQL).",
    "project.Test": "Test Project",
    "project.Running": "Project Running",
  },
  pt: {
    "nav.home": "Inicio",
    "nav.projects": "Projetos",
    "nav.contact": "Contato",
    "hero.title": "Bem vindo ao meu universo",
    "hero.subtitle": "Explore meus projetos como Desenvolvedor Full-Stack",
    "intro.subtitle": "Desenvolvedor & Jornalista",
    "intro.description": "Formado em Jornalismo, técnico em análise e desenvolvimento de sistemas e engenheiro de software em produção. Possuo amplo conhecimento e experiência com escrita, comunicação, Java, C#, JavaScript (incluindo bibliotecas como anime.js, gsap.js), Bootstrap, Tailwind, React e ReactNative.",
    "projects.title": "Meus Projetos",
    "project.description1": "Produção em equipe no Senai TI com o objetivo de solucionar o problema de superlotação em um laboratório médico durante a pandemia.",
    "project.github": "Ver GitHub",
    "project.figma": "Ver Figma",
    "project.title": "LuRique Fit - Site",
    "project.description2": "Este projeto é para um Personal Trainer de Corrida. Ele buscava maior proximidade com seus alunos e uma forma de compartilhar seu trabalho com mais pessoas.",
    "project.description3": "Projeto de API durante o curso técnico do Senai. Com ASP.NET Core com Visual Studio.",
    "project.description4": "Conclusão do projeto Code-tur após criação de API e banco de dados (com MySQL).",
    "project.Test": "Testar projeto",
    "project.Running": "Projeto Executando",
  }
};


//Troca do inglês para o português com base nos nomes das classes e texto trocado
let currentLang = "en";

function changeLanguage(lang) {
  const elements = document.querySelectorAll("[data-i18n]");

  elements.forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const newText = translations[lang][key];

    if (!newText) return;

    // Adiciona fade-out
    el.classList.add("fade-out");

    // Espera a animação de fade-out, troca o texto e aplica fade-in
    setTimeout(() => {
      el.textContent = newText;
      el.classList.remove("fade-out");
      el.classList.add("fade-in");

      // Remove fade-in depois de um tempo
      setTimeout(() => {
        el.classList.remove("fade-in");
      }, 300);
    }, 300);
  });
}

document.getElementById("langToggle").addEventListener("click", () => {
  currentLang = currentLang === "en" ? "pt" : "en";
  changeLanguage(currentLang);
});

document.addEventListener("DOMContentLoaded", () => {
  changeLanguage(currentLang);
});