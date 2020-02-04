const pets = require('./pets.json')

const darBanho = pet => {
    pet.servicos.push({ nome: "banho", data: new Date() })
    console.log(`Dando banho em ${pet.nome}.`);
    return pet;
}

const tosar = pet => {
    pet.servicos.push({ nome: "tosa", data: new Date() })
    console.log(`Tosando ${pet.nome}.`);
    return pet;
}

const darVacina = pet => {
    if (!pet.vacinado) {
        console.log(`Vacinando ${pet.nome}.`);
        pet.servicos.push({ nome: 'vacina', data: new Date() })
    } else {
        console.log(`Erro: Pet ${pet.nome} já é vacinado!`)
    }
    return pet;
}

const mostrarServicos = pet => {
    let saida = ""
    for (let servico of pet.servicos) {
        if (servico.data != undefined) {
            saida += `${servico.nome}: ${servico.data.toLocaleDateString()} \n`
        } else {
            saida += `${servico}: data indefinida \n`
        }
    }
    return saida
}

const realizaServico = (pet, ...servico) => {
    for (let s of servico) { pet = s(pet) }
    return pet
}

console.log(realizaServico(pets[1], tosar, darBanho, darVacina))

console.log("\n\n\n" + mostrarServicos(pets[1]))