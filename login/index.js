function validateCredentials(event) {
  event.preventDefault();
  console.log('clicked');
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;

  const expectedEmail = 'teste@gmail.com';
  const expectedPassword = '12345';

  if (email == expectedEmail && password == expectedPassword) {
    alert('Login bem sucedido!');

    window.location.href = '/platforms/psn';
    return;
  }
  alert('Email ou senha incorretos. Tente novamente');
}

const loginForm = document.querySelector('#loginForm');
loginForm.addEventListener('submit', validateCredentials);
