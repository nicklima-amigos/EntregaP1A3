function validarEmailSenha(){

    let emailInserido = document.getElementById("emailInput").value;
    let senhaInserida = document.getElementById("senhaInput").value;

    let emailEsperado = "teste@gmail.com"
    let senhaEsperada = "12345"

    if(emailInserido == emailEsperado && senhaInserida == senhaEsperada){
        alert("Login bem sucedido!")

        window.location.href = "/GameHome";
    } else {
        alert("Email ou senha incorretos. Tente novamente")
    }
}