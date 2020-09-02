function getPreco(imposto = 0, moeda = 'R$') {
	return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
	nome: 'Notebook',
	preco: 4589,
	desc: 0.15,
}

const carro = {
	preco: 4000,
	desc: 0.10
}

// console.log(getPreco.call(produto))
// console.log(getPreco.apply(carro))

//Quando é chamado uma função do tipo call é passado diretamente 
//nos parametros do call cada um dos parametros
//que serão passados para a função, o primeiro parametro sempre é o contexto e depois os valores
console.log(getPreco.call(carro, 0.1, 'R$'))

//na função do tipo apply no lugar de passar os parametros diretamente é necessario colocar um array
//então o primeiro parametro é o objeto que sera usado como contexto de execução daquela função e depois vou ter um array
//com todos os parametros dentro desse array
console.log(getPreco.apply(carro, [0.17, '$$$']))
