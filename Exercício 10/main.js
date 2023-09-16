function fibonacci(N) {
    let sequencia = [];
    
    if (N >= 1) {
        sequencia.push(0);
    }
    if (N >= 2) {
        sequencia.push(1);
    }
    
    for (let i = 2; i < N; i++) {
      let proximonumero = sequencia[i - 1] + sequencia[i - 2];
      sequencia.push(proximonumero);
    }
    
    return sequencia;
  }
  

  function input() {
    let N = parseInt(prompt("Digite a quantidade de números da sequência de Fibonacci que você deseja gerar:"));
  
    if (isNaN(N) || N <= 0) {
      alert("Por favor, digite um número inteiro positivo.");
      return input();
    }
  
    return N;
  }
  
  let N = input();
  let numerofibo = fibonacci(N);
  console.log(`Os primeiros ${N} números da sequência de Fibonacci são: ${numerofibo.join(', ')}`);