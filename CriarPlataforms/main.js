function alertCriarPlataforma(){

    let textoInserido = document.getElementById("nameInput").value;
    if(textoInserido.trim() == ""){
        alert("Por favor, insira o texto antes de clicar no botão.")

    } else {
        alert(`Plataforma ${textoInserido} foi Criada!`)
        window.location.href = "/GameHome"
    }
}