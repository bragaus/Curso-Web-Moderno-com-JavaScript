Array.prototype.map2 = function(callback) {

    const newArray = []

    for (let i = 0; i < this.length; i++) {

        newArray.push(callback(this[i], i, this))

    }

    return newArray

}

const carrinho = [
    '{ "nome": "Borracha", "preco": 4.45 }',
    '{ "nome": "Lapis", "preco": 1.45 }',
    '{ "nome": "Papel pardo", "preco": 2.45 }',
    '{ "nome": "corretivo", "preco": 3.45 }'
]


// Retornar um array apenas com o preço
const apenasPreco2 = carrinho.map2(e => {
    let { preco } = JSON.parse(e)
    return preco
})

console.log(apenasPreco2)