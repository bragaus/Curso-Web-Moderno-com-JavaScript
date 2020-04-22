function Carro(velocidadeMaxima = 200, delta = 5) {
	//atributo privado
	let velocidadeAtual = 0

	//metodo publico
	this.acelerar = function() {
		if(velocidadeAtual + delta <= velocidadeMaxima){
			velocidadeAtual += delta
		} else {
			velocidadeAtual = velocidadeMaxima
		}
	}

	//metodo publico
	this.getVelocidadeAtual = function(){
		console.log(velocidadeAtual)
	}
}

const uno = new Carro
uno.acelerar()
uno.acelerar()
uno.acelerar()
uno.acelerar()
uno.getVelocidadeAtual()

const ferrari = new Carro(350, 100)
ferrari.acelerar()
ferrari.getVelocidadeAtual()
