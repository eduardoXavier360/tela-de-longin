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



    function verificarSenha() {
      const senhaCorreta = "Edu@rdo1234";
      const senhaDigitada = document.getElementById("senha").value;

      if (senhaDigitada === senhaCorreta) {
        window.location.href = "menu.html";
      } else {
        alert("Senha incorreta! Acesso negado 🚫");
      }
    }