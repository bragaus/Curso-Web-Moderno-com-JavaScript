function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve('Vishhh')
        }, tempo)
    })
}

function retornarValor() {
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 5000) 
    })
}

(async function executar() {
    let valor = await retornarValor()

    await esperarPor(1500)
    console.log(`Executando ${valor}...`)

    await esperarPor(1500)
    console.log(`Executando ${valor + 1}...`)

    await esperarPor(1500)
    console.log(`Executando ${valor + 2}...`)

})()

