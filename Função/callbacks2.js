const notas = [7.7, 6.2, 5.2, 8.9, 3.6, 7.9, 1.1, 2.9, 3.4, 8.8]

// sem callback
let notasBaixas = []
let notasAltas = []
for(i in notas) {
	if(notas[i] < 7) {
		notasBaixas.push(notas[i])
	} else {
		notasAltas.push(notas[i])
	}
}

console.log(notasBaixas)
console.log(notasAltas)

// com callback
const notasBaixasCallBack = notas.filter(nota => nota < 7)
const notasAltasCallBack = notas.filter(nota => nota > 7)

console.log(notasBaixasCallBack)
console.log(notasAltasCallBack)
