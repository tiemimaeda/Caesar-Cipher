window.cipher = {
  encode: encode,
  decode: decode, 
};

/*função para cifrar a mensagem*/
function encode(offset, message) { 
  let encodedMessage = "";
  
  for (let i in message) {
    if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) {  
      let encodeFormulaUpperCase = ((message.charCodeAt(i)- 65 + offset)% 26) + 65;
      encodedMessage += String.fromCharCode(encodeFormulaUpperCase);

    } else if (message.charCodeAt(i) >= 97 && message.charCodeAt(i) <= 122) {
      let encodeFormulaLowerCase = ((message.charCodeAt(i)- 97 + offset)% 26) + 97;
      encodedMessage += String.fromCharCode(encodeFormulaLowerCase);
      
    } else {
      encodedMessage += String.fromCharCode(message.charCodeAt(i));  
    }
  }
  return encodedMessage;
} 

/*função para decifrar a mensagem*/
function decode(offset, message) { 
  let decodedMessage = "";
  
  for (let i in message) {
    if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) {      
      let decodeFormulaUpperCase = ((message.charCodeAt(i)- 90 - offset)% 26) + 90;
      decodedMessage += String.fromCharCode(decodeFormulaUpperCase);

    } else if (message.charCodeAt(i) >= 97 && message.charCodeAt(i) <= 122) {
      let decodeFormulaLowerCase = ((message.charCodeAt(i)- 122 - offset)% 26) + 122;
      decodedMessage += String.fromCharCode(decodeFormulaLowerCase);

    } else {
      decodedMessage += String.fromCharCode(message.charCodeAt(i));  
    }
  }
  return decodedMessage;
}