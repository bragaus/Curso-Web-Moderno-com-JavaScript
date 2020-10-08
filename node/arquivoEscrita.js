const fs = require('fs')
const { join } = require('path')

const produto = {
    nome: 'SimsTim',
    preco: 1200.00,
    desconto: 0
}

fs.writeFile(__dirname+'/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo Salvo!')
})

