window.cipher = {
  encode: encode,
  decode: decode, 
};

function encode(deslocamento, mensagem) { /*função para cifrar a mensagem*/
  let encodedMessage = "";
  
  for (let i=0; i < mensagem.length; i++) {
    if (mensagem.charCodeAt(i) >= 65 && mensagem.charCodeAt(i) <= 90) {  
      let encodeFormulaUpperCase = ((mensagem.charCodeAt(i)- 65 + deslocamento)% 26) + 65;
      encodedMessage += String.fromCharCode(encodeFormulaUpperCase);

    } else if (mensagem.charCodeAt(i) >= 97 && mensagem.charCodeAt(i) <= 122) {
      let encodeFormulaLowerCase = ((mensagem.charCodeAt(i)- 97 + deslocamento)% 26) + 97;
      encodedMessage += String.fromCharCode(encodeFormulaLowerCase);
      
      /* função para cifrar números } else if (mensagem.charCodeAt(i) >= 48 && mensagem.charCodeAt(i) <= 57) {
      let encodeFormulaNumber = ((mensagem.charCodeAt(i) - 48 + deslocamento)%10) + 48;
      encodedMessage += String.fromCharCode(encodeFormulaNumber);*/

    } else {
      encodedMessage += String.fromCharCode(mensagem.charCodeAt(i));  
    }
  }
  return encodedMessage;
} 

function decode(deslocamento, mensagem) { /*função para decifrar a mensagem*/
  let decodedMessage = "";
  
  for (let i=0; i < mensagem.length; i++) {
    if (mensagem.charCodeAt(i) >= 65 && mensagem.charCodeAt(i) <= 90) {      
      let decodeFormulaUpperCase = ((mensagem.charCodeAt(i)- 90 - deslocamento)% 26) + 90;
      decodedMessage += String.fromCharCode(decodeFormulaUpperCase);

    } else if (mensagem.charCodeAt(i) >= 97 && mensagem.charCodeAt(i) <= 122) {
      let decodeFormulaLowerCase = ((mensagem.charCodeAt(i)- 122 - deslocamento)% 26) + 122;
      decodedMessage += String.fromCharCode(decodeFormulaLowerCase);

      /* função para decifarar números } else if (mensagem.charCodeAt(i) >= 48 && mensagem.charCodeAt(i) <= 57) {
      let decodeFormulaNumber = ((mensagem.charCodeAt(i) - 57 - deslocamento)%10) + 57;
      decodedMessage += String.fromCharCode(decodeFormulaNumber);*/

    } else {
      decodedMessage += String.fromCharCode(mensagem.charCodeAt(i));  
    }
  }
  return decodedMessage;
}