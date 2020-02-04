// let, var, const

let cachorros = [
    {
        "nome": "Stark",
        "raca": "SRD",
        "peso": 13,
        "idade": 10,
        "porte": "médio",
        "sexo": "M",
        "dono": "Jonas",
        "alergias": [ "corantes", "Frutos do Mar" ],
        "castrado": false,
        "vacinas": [
            { "nome": "anti rábica", "date": "10/11/2015" },
            { "nome": "BC500", "date": "10/12/2015" }
        ]
    },
    {
        "nome": "Lala",
        "raca": "Pastor Alemão",
        "peso": 9,
        "idade": 6,
        "porte": "médio",
        "sexo": "F",
        "dono": "Jonas",
        "alergias": [],
        "castrado": true,
        "vacinas": [
            { "nome": "anti rábica", "date": "10/11/2015" },
            { "nome": "BC500", "date": "10/12/2015" }
        ]
    },
    {
        "nome": "Pluto",
        "raca": "São Bernardo",
        "peso": 17,
        "idade": 8,
        "porte": "grande",
        "sexo": "M",
        "dono": "Jonas",
        "alergias": ["Sabão"],
        "castrado": true,
        "vacinas": [
            { "nome": "anti rábica", "date": "10/11/2017" },
            { "nome": "BC500", "date": "10/12/2015" }
        ]
    },
    {
        "nome": "Rex",
        "raca": "Red Heeler",
        "peso": 12,
        "idade": 5,
        "porte": "médio",
        "sexo": "M",
        "dono": "Clayton Costa",
        "alergias": ["enlatados", "poeira"],
        "castrado": false,
        "vacinas": [
            { "nome": "anti rábica", "date": "10/08/2018" },
        ]
    }
];

/* console.log(cachorros.alergias[1]); // A segunda alergia do doguíneo

console.log(cachorros.vacinas[0].date); // Data da primeira vacina */


function informeCastrado(n) {
    let cachorro = cachorros[n]    
    return `Nome ${cachorro.nome} \nCastrado ${cachorro.castrado ? "SIM" : "NÃO"}`
}

function listaCastrados(){
    let dogs = []
    for(let x of cachorros) {
        if(x.castrado){
            dogs.push(x.nome)
        }
    }
    return dogs
}

console.log(listaCastrados())