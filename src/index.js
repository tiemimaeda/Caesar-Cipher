function clickencode(){
    event.preventDefault();
    let mensagem = document.getElementById("message").value;
    let deslocamento = Number(document.getElementById("offset").value);
    let encodedMessage = window.cipher.encode(mensagem, deslocamento);
    document.getElementById("mensagemCifrada").innerHTML = `${encodedMessage}`;
} 

function clickdecode(){
    event.preventDefault();
    let mensagem = document.getElementById("message").value;
    let deslocamento = Number(document.getElementById("offset").value);
    let decodedMessage = window.cipher.decode(mensagem, deslocamento);
    document.getElementById("mensagemCifrada").innerHTML = `${decodedMessage}`;
}