// Função para criptografar o texto
function criptografarTexto(texto) {
  var textoCriptografado = "";
  
  for (var i = 0; i < texto.length; i++) {
    var char = texto[i];
    var charCode = char.charCodeAt(0);
    
    // Adicione uma chave de deslocamento para cada caractere
    var charCodeCriptografado = charCode + 1;
    
    // Transforme o código criptografado de volta para caractere
    var charCriptografado = String.fromCharCode(charCodeCriptografado);
    
    textoCriptografado += charCriptografado;
  }
  
  return textoCriptografado;
}

// Função para descriptografar o texto
function descriptografarTexto(textoCriptografado) {
  var textoDescriptografado = "";
  
  for (var i = 0; i < textoCriptografado.length; i++) {
    var charCriptografado = textoCriptografado[i];
    var charCodeCriptografado = charCriptografado.charCodeAt(0);
    
    // Subtraia a chave de deslocamento para cada caractere criptografado
    var charCodeDescriptografado = charCodeCriptografado - 1;
    
    // Transforme o código descriptografado de volta para caractere
    var charDescriptografado = String.fromCharCode(charCodeDescriptografado);
    
    textoDescriptografado += charDescriptografado;
  }
  
  return textoDescriptografado;
}
