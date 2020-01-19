document.getElementById("btn-encode").addEventListener("click", clickencode);
function clickencode() {
  event.preventDefault();
  let message = document.getElementById("message").value;
  let offset = Number(document.getElementById("offset").value);
  let encodedMessage = window.cipher.encode(offset, message);
  document.getElementById("mensagemCifrada").innerHTML = `${encodedMessage}`;
} 

document.getElementById("btn-decode").addEventListener("click", clickdecode);
function clickdecode() {
  event.preventDefault();
  let message = document.getElementById("message").value;
  let offset = Number(document.getElementById("offset").value);
  let decodedMessage = window.cipher.decode(offset, message);
  document.getElementById("mensagemCifrada").innerHTML = `${decodedMessage}`;
}