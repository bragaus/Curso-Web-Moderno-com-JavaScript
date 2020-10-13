function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        try {
            if(Math.random() < chanceErro) {
                reject('Ocorreu um erro!')
            } else {
                resolve(valor)
            }
        } catch (e) {
            reject(e)
        }
    })
}

funcionarOuNao('testando...', 0.5)
    .then(valor => `Valor: ${valor}`)
    .then(valor => console.log(valor), erro => console.log(erro)) // Interessante