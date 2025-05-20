 const light = document.getElementById('light');
  let opacity = 0.3;
  let increasing = true;

  function pulse() {
    if (increasing) {
      opacity += 0.005;
      if (opacity >= 0.8) increasing = false;
    } else {
      opacity -= 0.005;
      if (opacity <= 0.3) increasing = true;
    }
    light.style.opacity = opacity;
    requestAnimationFrame(pulse);
  }

  pulse();  