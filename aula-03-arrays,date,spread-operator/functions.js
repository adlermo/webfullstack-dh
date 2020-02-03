const pets = require('./pets.json')

const darBanho = pet => {
    pet.servicos.push("banho");
    console.log(`Dando banho em ${pet.nome}.`);
    return pet;
}

const vacinar = pet => {
    pet.vacinado ? console.log(`Pet ${pet.nome} já é vacinado!`) : 
        console.log(`Vacinando ${pet.nome}.`); 
        pet.vacinado = true;
    return pet;    
}

console.log(darBanho(pets[0]))

console.log(vacinar(pets[1]))
