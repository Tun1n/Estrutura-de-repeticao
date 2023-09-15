let N = parseInt(prompt("Digite um número inteiro positivo N:"));
let somaQuadrados = 0;

if (N <= 0 || isNaN(N)) {
    prompt("N deve ser um número inteiro positivo.");
} else {
    let i = 1;

    while (i <= N) {
        somaQuadrados += i * i;
        i++;
    }

    alert("A soma dos quadrados dos primeiros " + N + " números inteiros positivos é: " + somaQuadrados);
}