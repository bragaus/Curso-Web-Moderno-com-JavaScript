Array.prototype.filter2 = function(callback) {

    const newArray = []

    for (let i = 0; i < this.length; i++) {

        if (callback(this[i], i, this)) {
            newArray.push(this[i])
        }

    }

    return newArray

}

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'ipad', preco: 4199, fragil: true },
    { nome: 'gtx', preco: 3100, fragil: true },
    { nome: 'copo de ferro', preco: 10, fragil: false },
    { nome: 'copo de vidro', preco: 5, fragil: true }
]

const preco = produtos.filter2(p => p.preco > 3000)
console.log(preco)