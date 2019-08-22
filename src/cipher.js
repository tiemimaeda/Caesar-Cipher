// import { stringify } from "querystring";

window.cipher = {
  encode: encode,
  decode: decode, 
};

function encode(mensagem, deslocamento){
  //alert (message + offset);
  let encodedMessage = "";
  
  for (let i=0; i < mensagem.length; i++){
  let encodeFormula = ((mensagem.charCodeAt(i)- 65 + deslocamento)% 26) + 65;
  encodedMessage +=  String.fromCharCode(encodeFormula);
  }
  return encodedMessage;
} 

function decode(mensagem, deslocamento){
  let decodedMessage = "";
  
  for (let i=0; i < mensagem.length; i++){
  let decodeFormula = ((mensagem.charCodeAt(i)- 90 - deslocamento)% 26) + 90;
  decodedMessage +=  String.fromCharCode(decodeFormula);
  }
  return decodedMessage;
}