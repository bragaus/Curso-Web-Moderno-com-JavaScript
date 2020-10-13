function gerarNumeroEntre(min, max, tempo) {
    if(min > max) [max, min] = [min, max]
    return new Promise(resolve => {
        setTimeout(function() {
            const fator = max - min + 1
            const aleatorio = parseInt(Math.random() * fator) + min
            resolve(aleatorio)
        }, tempo)
    })
}

function gerarVariosNumeros() {
    return Promise.all([
        gerarNumeroEntre(1, 60, 4000),
        gerarNumeroEntre(4, 60, 4000),
        gerarNumeroEntre(3, 60, 4000),
        gerarNumeroEntre(2, 60, 4000),
        gerarNumeroEntre(10, 50, 4000),
    ])
}

console.time('promise')

gerarVariosNumeros()
    .then(console.log)
    .then(() => console.timeEnd('promise'))