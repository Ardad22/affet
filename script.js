// Slayt Gösterisi
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showNextSlide() {
  slides[currentSlide].style.display = 'none';
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].style.display = 'block';
}

setInterval(showNextSlide, 3000); // Her 3 saniyede bir değiştir

// Yapboz Oyunu
const canvas = document.getElementById('puzzle');
const ctx = canvas.getContext('2d');
let isSolved = false;

// Kalp Çizimi
function drawHeart() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.moveTo(150, 70);
  ctx.bezierCurveTo(130, 0, 50, 0, 50, 70);
  ctx.bezierCurveTo(50, 120, 150, 190, 150, 190);
  ctx.bezierCurveTo(150, 190, 250, 120, 250, 70);
  ctx.bezierCurveTo(250, 0, 170, 0, 150, 70);
  ctx.fillStyle = isSolved ? '#ff6b6b' : '#ccc';
  ctx.fill();
  ctx.stroke();
}

// Yapboz Kontrolü
canvas.addEventListener('click', () => {
  isSolved = true;
  drawHeart();
  document.querySelector('.game-message').innerText = 'Teşekkür ederim! Seni seviyorum! ❤️';
});

drawHeart();
