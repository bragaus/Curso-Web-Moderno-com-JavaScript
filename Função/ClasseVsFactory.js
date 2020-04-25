//Classe
class ClasseNome {
	constructor(nome) {
		this.nome = nome
	}

	falar() {
		console.log(`meu nome é ${this.nome}`)
	}
}

const falarNome = new ClasseNome('Matheus')
falarNome.falar()

//Função
const factoryNome = nome => {
	return {
		falar: () => console.log(`meu caralho se chama é ${nome}`)
	}
}

const p2 = factoryNome('Mathues')
p2.falar()

//Função construtora
function funcaoConstrutora(nome) {
	this.imprimirNome = () => {
		console.log(nome)
	}
}

const imprimir = new funcaoConstrutora('Hight Tech')
imprimir.imprimirNome()
