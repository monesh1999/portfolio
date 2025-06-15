const canvas = document.getElementById('space');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const stars = [];
const numStars = 100;

for (let i = 0; i < numStars; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 2 + 1,
    speed: Math.random() * 0.5 + 0.2,
    alpha: Math.random(),
    alphaChange: Math.random() * 0.02 + 0.01
  });
}

function draw() {
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  for (let star of stars) {
    star.alpha += star.alphaChange;
    if (star.alpha <= 0 || star.alpha >= 1) {
      star.alphaChange = -star.alphaChange;
    }

    ctx.strokeStyle = `rgba(255, 255, 255, ${star.alpha})`;
    ctx.lineWidth = 1.5;

    // Draw cross-shaped star (+)
    ctx.beginPath();
    // vertical line
    ctx.moveTo(star.x, star.y - star.size);
    ctx.lineTo(star.x, star.y + star.size);
    // horizontal line
    ctx.moveTo(star.x - star.size, star.y);
    ctx.lineTo(star.x + star.size, star.y);
    ctx.stroke();

    star.y += star.speed;
    if (star.y > canvas.height) {
      star.y = 0;
      star.x = Math.random() * canvas.width;
    }
  }

  requestAnimationFrame(draw);
}

draw();