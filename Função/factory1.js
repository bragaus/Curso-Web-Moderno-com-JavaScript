//Uma função factory sempre retorna um objeto
function factory(nome, sobrenome) {
	return {
		nome: nome,
		sobrenome: sobrenome
	}
}

console.log(factory('Matheus', 'Braga'))

function criarProduto(nome, preco) {
	return {
		nome,
		preco,
		desconto: 0.1 // valor padrao
	}
}

console.log(criarProduto('Cyber', 'Punk'))
