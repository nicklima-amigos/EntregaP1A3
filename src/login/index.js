function validateCredentials(event) {
  event.preventDefault();
  const formData = new FormData(loginForm);
  const email = formData.get('email');
  const password = formData.get('password');

  const expectedEmail = 'teste@gmail.com';
  const expectedPassword = '12345';
  if (email === expectedEmail && password === expectedPassword) {
    alert('Login bem sucedido!');
    window.location.href = '../platforms/psn/index.html';
    return;
  } else if (!email || !password) {
    alert('Preencha todos os campos.');
    return;
  }

  alert('Email ou senha incorretos. Tente novamente');
}

const loginForm = document.querySelector('#loginForm');
loginForm.addEventListener('submit', validateCredentials);
