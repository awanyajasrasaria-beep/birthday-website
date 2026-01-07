// Confetti on page load
window.onload = () => {
  confetti({
    particleCount: 180,
    spread: 100,
    origin: { y: 0.6 },
    colors: ['#ff6f91', '#ffc75f', '#845ec2', '#4d96ff']
  });
};

// Open love letter + start music
function openLetter() {
  document.getElementById("overlay").style.display = "flex";

  const music = document.getElementById("bgMusic");
  music.volume = 0.35; // soft romantic volume
  music.play();

  confetti({
    particleCount: 300,
    spread: 130,
    startVelocity: 45,
    origin: { y: 0.7 },
    colors: ['#ff6f91', '#ffc75f', '#845ec2', '#4d96ff']
  });
}

// Close letter + stop music (optional but classy)
function closeLetter() {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("bgMusic").pause();
}