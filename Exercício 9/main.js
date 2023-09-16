let m = parseInt(prompt("Digite um número inteiro não negativo para calcular o fatorial:"));

function Fatorial(n) {
  if (n < 0) return "O fatorial não está definido para números negativos.";
  if (n === 0 || n === 1) return 1;
  return n * Fatorial(n - 1);
}

let resultado = Fatorial(m);
prompt(`O fatorial de ${m} é: ${resultado}`);