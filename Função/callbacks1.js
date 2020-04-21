const fabricantes = ["Mercedes", "Audi", "Ferrari", "BMW"]

function imprimir(nome, indice) {
	console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(nomes => console.log(nomes))
