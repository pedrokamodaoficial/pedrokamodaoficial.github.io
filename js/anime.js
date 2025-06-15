function createStar() {
  const star = document.createElement('div');
  star.classList.add('star');

  const starfield = document.getElementById('starfield');

  star.style.left = `${Math.random() * 100}%`;
  star.style.top = `${Math.random() * 100}%`;

  starfield.appendChild(star);

  anime({
    targets: star,
    translateY: [0, 50 + Math.random() * 50],
    opacity: [1, 0],
    duration: 3000 + Math.random() * 3000,
    easing: 'linear',
    complete: () => star.remove()
  });
}

// Executa apenas se a seção existir
if (document.getElementById('starfield')) {
  setInterval(() => {
    for (let i = 0; i < 3; i++) createStar();
  }, 200);
}
//Criando estrelas para a seção introduction (Que será branca com estrelas pretas, oposto da seção hero)
function criarEstrelasBrancas() {
  const canvas = document.getElementById("stars-white-bg");
  const ctx = canvas.getContext("2d");

  function ajustarCanvas() {
    const intro = document.getElementById("introduction");
    const projects = document.getElementById("projects");
    const alturaTotal = intro.offsetHeight + projects.offsetHeight;

    canvas.width = window.innerWidth;
    canvas.height = alturaTotal;
  }

  ajustarCanvas();

  const numStars = 100;
  const stars = [];

  for (let i = 0; i < numStars; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.5,
      speed: Math.random() * 0.3 + 0.1
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "black";
    for (let star of stars) {
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx.fill();

      star.y += star.speed;
      if (star.y > canvas.height) {
        star.y = 0;
        star.x = Math.random() * canvas.width;
      }
    }
    requestAnimationFrame(draw);
  }

  draw();

  window.addEventListener('resize', ajustarCanvas);
}

criarEstrelasBrancas();
