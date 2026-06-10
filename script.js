const startBtn = document.getElementById('startBtn');
const inicio = document.getElementById('inicio');
const scanner = document.getElementById('scanner');
const resultado = document.getElementById('resultado');
const progress = document.getElementById('progress');
const shareBtn = document.getElementById('shareBtn');
const copied = document.getElementById('copied');

const phrases = [
  '🌿 Energia de jardim encontrada!',
  '🍄 Afinidade com cogumelos: altíssima!',
  '🧢 Chapéu pontudo interno detectado!',
  '✨ Mini fofura confirmada!',
  '🪄 Resultado final liberado!'
];

startBtn.addEventListener('click', () => {
  inicio.classList.add('hidden');
  scanner.classList.remove('hidden');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  runScan();
});

function runScan() {
  let value = 0;
  const list = document.getElementById('checks');
  list.innerHTML = '';

  const timer = setInterval(() => {
    value += 4;
    progress.style.width = `${value}%`;

    if (value === 20 || value === 40 || value === 60 || value === 80 || value === 100) {
      const li = document.createElement('li');
      li.textContent = phrases[Math.floor(value / 20) - 1];
      list.appendChild(li);
      createSparkles(10);
    }

    if (value >= 100) {
      clearInterval(timer);
      setTimeout(() => {
        scanner.classList.add('hidden');
        resultado.classList.remove('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        createSparkles(35);
      }, 900);
    }
  }, 90);
}

function createSparkles(amount) {
  for (let i = 0; i < amount; i++) {
    const sparkle = document.createElement('span');
    sparkle.className = 'sparkle';
    sparkle.textContent = ['✨', '🌿', '🍄', '🌸'][Math.floor(Math.random() * 4)];
    sparkle.style.left = `${Math.random() * 100}vw`;
    sparkle.style.top = `${55 + Math.random() * 35}vh`;
    sparkle.style.animationDelay = `${Math.random() * .5}s`;
    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 1900);
  }
}

shareBtn.addEventListener('click', async () => {
  const text = 'Fiz um teste mágico e deu confirmado: você é realmente uma gnomo de jardim encantado 🍄✨';
  try {
    await navigator.clipboard.writeText(text);
    copied.style.display = 'block';
    setTimeout(() => copied.style.display = 'none', 1800);
  } catch (e) {
    alert(text);
  }
});

setInterval(() => createSparkles(2), 2600);
