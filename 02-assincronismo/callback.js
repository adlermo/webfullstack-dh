// Escreva função SOMAR
const somar = (a, b) => a + b
const diff = (a, b) => a - b

const operar = (operacao, a, b) => {
    return operacao(a, b)
}

console.log(operar(diff, 4, 5))

