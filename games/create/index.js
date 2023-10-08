function handleSubmit(event) {
  event.preventDefault();
  console.log('submitted');
  const formData = new FormData(form);
  const title = formData.get('title');
  const genre = formData.get('genre');
  const price = formData.get('price');
  const developedBy = formData.get('developedBy');
  const releaseDate = formData.get('releaseDate');
  try {
    if (
      title.trim() !== '' &&
      genre.trim() !== '' &&
      price.trim() !== '' &&
      developedBy.trim() !== '' &&
      releaseDate.trim() !== ''
    ) {
      alert(`Game ${title} foi Criado!`);
      window.location.href = '/platforms/psn';
      return;
    }
    alert('Por favor, preencha todos os campos');
  } catch (e) {
    console.error(e);
    alert('Por favor, preencha todos os campos');
  }
}

const form = document.querySelector('#gameForm');
form.addEventListener('submit', handleSubmit);
