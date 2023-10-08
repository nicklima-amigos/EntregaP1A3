function createGameAlert() {
  let gameName = document.getElementById('nameInput').value;
  if (gameName.trim() == '') {
    alert('Por favor, insira o texto antes de clicar no botão.');
  } else {
    alert(`Plataforma ${gameName} foi Criada!`);
    window.location.href = '/platforms/psn';
  }
}
