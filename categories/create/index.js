function handleSubmit(event) {
  event.preventDefault();
  const formData = new FormData(form);
  const categoryName = formData.get('name');
  if (categoryName.trim() === '') {
    alert('Por favor, insira o texto antes de clicar no botão.');
  } else {
    alert(`Categoria ${categoryName} foi Criada!`);
    window.location.href = '/platforms/psn';
  }
}

const form = document.querySelector('#categoryForm');
form.addEventListener('submit', handleSubmit);
