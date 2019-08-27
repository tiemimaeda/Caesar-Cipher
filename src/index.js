document.getElementById("btn-encode").addEventListener("click", clickencode);
function clickencode() {
  event.preventDefault();
  let mensagem = document.getElementById("message").value;
  let deslocamento = Number(document.getElementById("offset").value);
  let encodedMessage = window.cipher.encode(deslocamento, mensagem);
  document.getElementById("mensagemCifrada").innerHTML = `${encodedMessage}`;
} 

document.getElementById("btn-decode").addEventListener("click", clickdecode);
function clickdecode() {
  event.preventDefault();
  let mensagem = document.getElementById("message").value;
  let deslocamento = Number(document.getElementById("offset").value);
  let decodedMessage = window.cipher.decode(deslocamento, mensagem);
  document.getElementById("mensagemCifrada").innerHTML = `${decodedMessage}`;
}