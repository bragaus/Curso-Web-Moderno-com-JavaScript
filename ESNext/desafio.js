const { rejects } = require('assert')
const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')

function exibirConteudo(caminho) {
    return new Promise((resolve, reject) => {

        fs.readFile(caminho, 'utf-8', (err, conteudo) => {
            resolve(conteudo.toString())
        })

    })
}

exibirConteudo(caminho)
    .then(conteudo => `O valor final é: ${conteudo}`)
    .then(console.log)

