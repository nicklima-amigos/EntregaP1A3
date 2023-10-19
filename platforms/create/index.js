function handleSubmit(event) {
  event.preventDefault();
  const formData = new FormData(form);
  const categoryName = formData.get('name');
  if (categoryName.trim() == '') {
    alert('Por favor, insira o texto antes de clicar no botão.');
  } else {
    alert(`Plataforma ${categoryName} foi Criada!`);
    window.location.href = '/platforms/psn';
  }
}

const form = document.querySelector('#form');
form.addEventListener('submit', handleSubmit);
