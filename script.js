    const botao = document.getElementById("sing-in");
    botao.addEventListener("click", function (event) {
      event.preventDefault();
      window.location.href = "ADMIN.html";
    });

function verificarSenha(event) {
  event.preventDefault(); // Impede o envio do formulário
  const senhaCorreta = "1234";
  const senhaDigitada = document.getElementById("senha").value;

  if (senhaDigitada === senhaCorreta) {
    window.location.href = "menu.html";
  } else {
    alert("Senha incorreta!");
  }
}
