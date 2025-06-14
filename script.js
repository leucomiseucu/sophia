const music = document.getElementById("bg-music");
const btn = document.querySelector(".volume-button");

// Inicializa a música mute para tentar autoplay sem bloqueio
window.addEventListener("load", () => {
  music.muted = true;   // começa mudo
  music.play().catch(() => {
    // Se autoplay for bloqueado, ficará mudo e pausado
    // Pode tratar aqui se quiser
  });
  btn.textContent = "🔇"; // indica que está mudo
});

function toggleMusic() {
  if (music.paused) {
    music.muted = false; // tira o mute para ouvir o som
    music.play();
    btn.textContent = "🔊";
  } else {
    music.pause();
    btn.textContent = "🔇";
  }
}
