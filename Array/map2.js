const carrinho = [
    '{ "nome": "Borracha", "preco": 4.45 }',
    '{ "nome": "Lapis", "preco": 1.45 }',
    '{ "nome": "Papel pardo", "preco": 2.45 }',
    '{ "nome": "corretivo", "preco": 3.45 }'
]


// Retornar um array apenas com o preço
const paraObjeto = json => JSON.parse(json)
const preco = produto => produto.preco

const apenasPreco1 = carrinho.map(paraObjeto).map(preco)
console.log(apenasPreco1)

const apenasPreco2 = carrinho.map(e => {
    let { preco } = JSON.parse(e)
    return preco
})

console.log(apenasPreco2)