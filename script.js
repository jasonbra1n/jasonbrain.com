const canvas = document.querySelector('.lights');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

function createLight() {
  return {
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 20 + 10,
    r: Math.random() * 255,
    g: Math.random() * 255,
    b: Math.random() * 255,
    alpha: Math.random() * 0.5 + 0.5,
    dx: (Math.random() - 0.5) * 2,
    dy: (Math.random() - 0.5) * 2
  };
}

const lights = [];
for (let i = 0; i < 20; i++) {
  lights.push(createLight());
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  lights.forEach(light => {
    ctx.beginPath();
    ctx.arc(light.x, light.y, light.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${light.r}, ${light.g}, ${light.b}, ${light.alpha})`;
    ctx.fill();

    light.x += light.dx;
    light.y += light.dy;

    if (light.x < 0 || light.x > canvas.width) light.dx *= -1;
    if (light.y < 0 || light.y > canvas.height) light.dy *= -1;
  });
  requestAnimationFrame(animate);
}

animate();

// Scroll to top button
const scrollToTopButton = document.querySelector('.scroll-to-top');
scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
  scrollToTopButton.style.display = window.scrollY > 300 ? 'block' : 'none';
});
