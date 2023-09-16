let numeros = [];
let soma = 0;

while (true) {
  let entrada = prompt("Digite um número (ou -1 para sair):");
  let numero = parseFloat(entrada);

  if (numero === -1) {
    break;
  }

  if (!isNaN(numero)) {
    numeros.push(numero);
    soma += numero;
  } else {
    prompt("Número inválido. Por favor, digite um número válido.");
  }
}

let media = 0;
if (numeros.length > 0) {
  media = soma / numeros.length;
}

prompt(`A média dos números inseridos é: ${media}`);