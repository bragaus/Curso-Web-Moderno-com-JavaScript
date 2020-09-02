/* 01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores. */
function ex01(n1, n2) {
	const soma = n1 + n2
	const subtracao = n1 - n2
	const multiplicacao = n1 * n2
	const divisao = n1 / n2
	return `soma: ${soma} subtração: ${subtracao} multiplicação: ${multiplicacao} divisão: ${divisao}`
}
console.log(ex01(2,1))

/* 02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo). */
function ex02(pontoA, pontoB, pontoC) {
	if (pontoA === pontoC && pontoB === pontoC) {
		return 'Equilátero'
	} else if (pontoA !== pontoB && pontoB !== pontoC && pontoC !== pontoA) {
		return 'Escaleno'
	} else {
		return 'Isósceles'
	}
}
console.log(ex02(1,1,1))
console.log(ex02(1,2,3))
console.log(ex02(1,2,1))

// 03) Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.
function ex03(base, exponente){
	let exp = 1
	for(var i = 0; i < exponente; i++){
		exp *= base
	}
	return exp
}
console.log(ex03(2,5))

/* 04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores */
function ex04(dividendo, divisor) {
	const divisao = dividendo / divisor
	const resto = dividendo % divisor
	return `divisão ${divisao} e resto ${resto}`
}
console.log(ex04(10.12,5.3))

/* 05) Lidar com números em JavaScript pode dar muita dor de cabeça. Você já viu o que acontece quando faz o
seguinte comando no console: console.log(0.1 + 0.2); O resultado será: 0.30000000000000004. Outra coisa
importante de observar, é o fato que o ponto é utilizado no lugar da vírgula e vice versa. Com isso, vamos fazer
um exercício simples para mostrar dinheiro sempre da forma correta. Desenvolva uma função JavaScript para
que ela receba um valor como 0.30000000000000004 e retorne R$0,30 (observe a vírgula e o ponto). */
function ex05(n1) {
	return `R$ ${n1.toFixed(2)}`
}
console.log(ex05(30.30000000000000000004))

/* 06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.*/
