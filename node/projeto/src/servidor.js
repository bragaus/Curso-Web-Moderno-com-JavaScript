const porta = 3003

const express = require('express')
const app = express()

app.get('/produtos', (req, res, next) => {
    res.send({ nome: 'SimsTim', preco: 2222.45 }) // Converter para JSON
    next()
})

app.get('/produtos', (req, res, next) => {
    //res.send({ nome: 'Notebook', preco: 123.45 }) // Converter para JSON
    console.log({ nome: 'Notebook', preco: 123.45 })
})

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}.`)
})