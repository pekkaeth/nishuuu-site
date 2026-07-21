const heartButton = document.querySelector('.heart-button');
const revealButton = document.querySelector('.reveal-button');
const secretMessage = document.getElementById('secretMessage');

function burstHearts(x, y) {
  const heart = document.createElement('div');
  heart.className = 'heart-pop';
  heart.textContent = '💗';
  heart.style.left = `${x}px`;
  heart.style.top = `${y}px`;
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 1100);
}

if (heartButton) {
  heartButton.addEventListener('click', (event) => {
    burstHearts(event.clientX, event.clientY);
    heartButton.textContent = 'You are so loved 💖';
  });
}

if (revealButton && secretMessage) {
  revealButton.addEventListener('click', () => {
    const box = secretMessage.parentElement;
    box.classList.remove('hidden');
    secretMessage.textContent = 'You make my heart feel like home, always and forever. 💕';
    revealButton.textContent = 'You are my favorite person';
  });
}
