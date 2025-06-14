//Manipulando seção 
//Quem vou manipular? 
//Como vou manipular? 

gsap.to(".caixa" , { //.to = a ir; .from = de onde saiu --- gsap.fromTo = Os dois operando juntos, adicionando mais uma {} para a operação. 
    x:"18vw", //Mexendo no eixo X (Sem aspas = pixels; Com aspas pode ser definido em porcentagem ou até VH)
    y: "10vw", //Mexendo no eixo Y
    duration: 3.5, //Duração (Em segundos)
    opacity: 0.6,
})

// Função de animação com GSAP
function animarTexto() {
  gsap.to(".titulo", {
    y: 0,
    opacity: 1,
    duration: 1.5,
    ease: "power3.out"
  });

  gsap.to(".subtitulo", {
    y: 0,
    opacity: 1,
    delay: 0.5,
    duration: 1.5,
    ease: "power3.out"
  });
}

// Resetar a animação (opcional para repetir)
function resetarTexto() {
  gsap.set(".titulo", { y: 100, opacity: 0 });
  gsap.set(".subtitulo", { y: 100, opacity: 0 });
<<<<<<< HEAD
}

function animarIntroTextos() {
  gsap.fromTo(".intro-txt", {
    opacity: 0,
    y: -60
  }, {
    opacity: 1,
    y: 0,
    duration: 1,
    stagger: 0.3,
    ease: "power2.out"
  });
}

function resetarIntroTextos() {
  gsap.set(".intro-txt", { opacity: 0, y: -50 });
=======
>>>>>>> 80a960e1efb626a7dec9beef5c7906ed06b49216
}