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
    "project.description4": "The conclusion of the Code-tur project after making API and database (with MySQL) and learning how to use React and Bootstrap.",
    "project.Test": "Test Project",
    "project.Running": "Project Running",
    "contact.talk2me": "Talk to me!",
    "contact.name": "Full Name",
    "contact.message": "Text here...",
    "contact.sendMail": "Send e-mail",
    "contact.number": "Your Number (DDD)",
    "contact.sendZap": "Send message!",
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
    "project.description4": "A conclusão do projeto Code-tur após criação de API e banco de dados (com MySQL), aprendendo a utilizar React e implementando Bootstrap.",
    "project.Test": "Testar projeto",
    "project.Running": "Projeto Executando",
    "contact.talk2me":"Fale comigo!",
    "contact.name": "Nome Completo",
    "contact.message": "Escreva aqui...",
    "contact.sendMail": "Enviar e-mail",
    "contact.number": "Seu Número (Com DDD)",
    "contact.sendZap": "Enviar Mensagem!",
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

    el.classList.add("fade-out");

    setTimeout(() => {
      el.textContent = newText;
      el.classList.remove("fade-out");
      el.classList.add("fade-in");

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


//Script da seção de contato com botão alternando
const btnEmail = document.getElementById('btn-email');
const btnWhatsApp = document.getElementById('btn-whatsapp');
const formEmail = document.getElementById('form-email');
const formWhatsApp = document.getElementById('form-whatsapp');

  btnEmail.addEventListener('click', () => {
    formEmail.classList.remove('hidden');
    formWhatsApp.classList.add('hidden');
    btnEmail.classList.add('active');
    btnWhatsApp.classList.remove('active');
  });

  btnWhatsApp.addEventListener('click', () => {
    formWhatsApp.classList.remove('hidden');
    formEmail.classList.add('hidden');
    btnWhatsApp.classList.add('active');
    btnEmail.classList.remove('active');
  });

  formEmail.addEventListener('submit', function(e) {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem-email').value;
    window.location.href = `mailto:pedrokamoda@gmail.com?subject=Contato de ${nome}&body=${encodeURIComponent(mensagem)}%0AEmail: ${email}`;
  });

  formWhatsApp.addEventListener('submit', function(e) {
    e.preventDefault();
    const telefone = document.getElementById('telefone').value.replace(/\D/g, '');
    const mensagem = document.getElementById('mensagem-whatsapp').value;
    const link = `https://wa.me/5511972191767?text=${encodeURIComponent(mensagem)}`;
    window.open(link, '_blank');
  });