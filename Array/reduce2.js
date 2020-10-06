// Desafio 1: Todos os alunos são bolsistas?
Array.prototype.todosAlunosBolsistas = function() {

    for (let i = 0; i < this.length; i++) {

        if (!this[i]) return false 

    }

    return true
}

// Desafio 2: Algum aluno é bolsista?
Array.prototype.algumAlunoBolsista = function() {

    for (let i = 0; i < this.length; i++) {

        if (this[i]) return true

    }

    return false
}

const alunos = [
    { nome: 'tuka', nota: 0.1, bolsista: false },
    { nome: 'tales', nota: 7.0, bolsista: false },
    { nome: 'matheus', nota: 0.1, bolsista: false },
    { nome: 'matheus', nota: 0.1, bolsista: false },
]


// const todosBolsistas = alunos.map(e => e.bolsista)
// console.log(todosBolsistas.todosAlunosBolsistas())
// console.log(todosBolsistas.algumAlunoBolsista())

// Desafio 1: Todos os alunos são bolsistas?
console.log(alunos.map(e => e.bolsista).reduce((valorAnterior, valorAtual) => valorAnterior && valorAtual))

// Desafio 2: Algum aluno é bolsista?
console.log(alunos.map(e => e.bolsista).reduce((valorAnterior, valorAtual) => valorAnterior || valorAtual))