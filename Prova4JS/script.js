// mathUtils.js

/**
 * Calcula o fatorial de um número inteiro positivo.
 * @param {number} n - O número inteiro positivo para calcular o fatorial.
 * @returns {number} - O fatorial do número.
 */
function calcularFatorial(n) {
    if (n < 0) throw new Error("O número deve ser um inteiro positivo.");
    if (n === 0 || n === 1) return 1;
    let resultado = 1;
    for (let i = 2; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}

/**
 * Gera a sequência de Fibonacci até um número máximo.
 * @param {number} max - O número máximo para gerar a sequência de Fibonacci.
 * @returns {number[]} - A sequência de Fibonacci até o número máximo.
 */
function sequenciaFibonacci(max) {
    if (max < 0) throw new Error("O número deve ser um inteiro positivo.");
    const fib = [0, 1];
    while (true) {
        const proximo = fib[fib.length - 1] + fib[fib.length - 2];
        if (proximo > max) break;
        fib.push(proximo);
    }
    return fib;
}


// Solicitar ao usuário um número inteiro positivo
const numero = parseInt(prompt("Digite um número inteiro positivo:"), 10);

// Validar o número
if (isNaN(numero) || numero < 0) {
    console.error("Por favor, insira um número inteiro positivo.");
} else {
    // Calcular o fatorial e a sequência de Fibonacci
    const fatorial = calcularFatorial(numero);
    const fibonacci = sequenciaFibonacci(numero);

    // Exibir os resultados
    console.log(`Fatorial de ${numero}: ${fatorial}`);
    console.log(`Sequência de Fibonacci até ${numero}: ${fibonacci.join(', ')}`);
}