let dono = {
    nome: "Adler Orteney",
    cpf: "051.999.555-09",
    telefone: "(67) 99919-8409"
}

let pet = {
    ...dono,
    nome: "Nutt",
    idade: 5,
}

// console.log(pet)

// Spread Operator para funções
const somarComMensagem = (msg, ...numeros) => numeros.reduce((a, b) => a + b)

console.log(somarComMensagem("Somando com Spread", 1, 2, 3, 4))