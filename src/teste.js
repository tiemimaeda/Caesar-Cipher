window.cipher = {
    encode: encode,
    // decode: decode, 
  };
  
function encode(mensagem, deslocamento){
    let encodedMessage = "";
        
    for (let i=0; i < mensagem.length; i++){
        let encodeFormulaUpperCase = ((mensagem.charCodeAt(i)- 65 + deslocamento)% 26) + 65;
        let encodeFormulaLowerCase = ((mensagem.charCodeAt(i)- 97 + deslocamento)% 26) + 97
        
        if (encodeFormulaUpperCase >= 65 && encodeFormulaUpperCase <= 90) { 
        encodedMessage += String.fromCharCode(encodeFormulaUpperCase);
        } 

        else if (encodeFormulaLowerCase >= 97 && encodeFormulaLowerCase <= 122){
        encodedMessage += String.fromCharCode(encodeFormulaLowerCase)
        }

        else {
        encodedMessage += 'xxx'.charCodeAt();
        }

        encodedMessage += String.fromCharCode(encodedMessage)
    }
    return encodedMessage;
}