const createAccountAlert = () => {
  alert('Conta criada com sucesso!');
  window.location.href = '../platforms/psn/index.html';
};

const signupForm = document.querySelector('#signupForm');

signupForm.addEventListener('submit', (event) => {
  event.preventDefault();
  createAccountAlert();
});
