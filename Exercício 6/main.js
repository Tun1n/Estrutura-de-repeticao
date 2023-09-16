let n = parseInt(prompt("Digite um valor inteiro positivo:"));
let m = 0;

for (let i = 1; i <= n; i++) {
  if (i % 2 == 0) {
    m += i;
  }
}

alert("A soma dos números pares de 1 até " + n + " é: " + m);

