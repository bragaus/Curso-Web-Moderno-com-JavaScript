const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'ipad', preco: 4199, fragil: true },
    { nome: 'gtx', preco: 3100, fragil: true },
    { nome: 'copo de ferro', preco: 10, fragil: false },
    { nome: 'copo de vidro', preco: 5, fragil: true }
]

const caro = produto => produto.preco > 500
const fragil = produto => produto.fragil
const produtosCaroseFrageis1 = produtos.filter(caro).filter(fragil)
console.log(produtosCaroseFrageis1)

const produtosCaroseFrageis2 = produtos.filter(p => p.preco > 500 && p.fragil)
console.log(produtosCaroseFrageis2)