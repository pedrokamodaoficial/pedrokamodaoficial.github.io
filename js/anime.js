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

