const light = document.getElementById('light');
let opacity = 0.3;
let increasing = true;

function pulse() {
  if (increasing) {
    opacity += 0.005;
    if (opacity >= 0.8) {
      opacity = 0.8;
      increasing = false;
      setTimeout(() => requestAnimationFrame(pulse), 800); // pausa no brilho
      light.style.opacity = opacity;
      return;
    }
  } else {
    opacity -= 0.005;
    if (opacity <= 0.3) {
      opacity = 0.3;
      increasing = true;
      setTimeout(() => requestAnimationFrame(pulse), 800); // pausa no escuro
      light.style.opacity = opacity;
      return;
    }
  }

  light.style.opacity = opacity;
  requestAnimationFrame(pulse);
}

pulse();