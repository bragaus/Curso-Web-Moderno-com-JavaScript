const notas = [2, 3, 4, 5, 89]

for(let i in notas) {
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

for(let i in pessoa) {
    console.log(`${i} = ${pessoa[i]}`)
}