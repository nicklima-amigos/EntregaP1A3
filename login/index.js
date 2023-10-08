function validateCredentials() {
  console.log('clicked');
  let email = document.querySelector('#email').value;
  let password = document.querySelector('#password').value;

  let expectedEmail = 'teste@gmail.com';
  let expectedPassword = '12345';

  if (email == expectedEmail && password == expectedPassword) {
    alert('Login bem sucedido!');

    window.location.href = '/platforms/psn';
    return;
  }
  alert('Email ou senha incorretos. Tente novamente');
}

const loginButton = document.querySelector('#loginButton');
loginButton.addEventListener('click', validateCredentials);
