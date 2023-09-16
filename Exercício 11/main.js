function contarVogais(palavra) {
    let vogais = "aeiouAEIOU";
    let contador = 0;
  
    for (let i = 0; i < palavra.length; i++) {
      if (vogais.includes(palavra[i])) {
        contador++;
      }
    }
  
    return contador;
  }
  
    let palavra = prompt("Digite uma palavra:");
  
  
    let quantidadeDeVogais = contarVogais(palavra);
  
  console.log(`A palavra "${palavra}" contém ${quantidadeDeVogais} vogais.`);