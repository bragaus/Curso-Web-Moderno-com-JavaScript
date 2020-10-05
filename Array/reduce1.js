const alunos = [
    { nome: 'tuka', nota: 0.1, bolsista: false },
    { nome: 'tales', nota: 7.0, bolsista: true },
    { nome: 'matheus', nota: 0.1, bolsista: false }
]

console.log(alunos.map(a => a.nota))

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
})

console.log(resultado)