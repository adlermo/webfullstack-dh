// Buscando arquivo JSON
// let fs = require("fs")

// Lendo o arquivo pets.json em json
// let json = fs.readFileSync("pets.json", "utf-8")

// let pets = JSON.parse(json)

let pets = require("./pets.json")

// Retorne TRUE se encontrar
const contem = (agulha, palheiro) => palheiro.indexOf(agulha) > -1
// console.log(contem("Mesquits", nome))


const getPetsByName = nome => pets.filter(pet => contem(nome, pet.nome))

const getCastrados = () => pets.filter(pet => pet.castrado)

let porNome = getPetsByName("A")
let castrados = getCastrados()

console.log(castrados)
