const escola = [{
    nome: 'Tuma m1',
    alunos: [{
        nome: 'Mathues',
        nota: 0.2
    }, {
        nome: 'Achil',
        nota: 0.3
    }]
}, {
    nome: 'Tuma m2',
    alunos: [{
        nome: 'Mariah',
        nota: 7.0
    }, {
        nome: 'Rosana',
        nota: 10
    }]
}]

const getNotaAluno = aluno => aluno.nota
const getNotaTurma = turma => turma.alunos.map(getNotaAluno)
const notas1 = escola.map(getNotaTurma)
console.log(notas1)
console.log([].concat([8.1, 9.3], [9.1, 91]))

Array.prototype.flatMap = function (callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotaTurma)
console.log(notas2)