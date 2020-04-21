// Armazenando uma function em uma variavel
const imprimirSoma = function (a, b) {
    console.log(a + b)
} 
imprimirSoma(2, 3)

// Armazenando uma function arrow em uma variavel
const soma = (a, b) => {
    return a + b
}
console.log(soma(2, 3))

// Retorno implícito
const subtract = (a, b) => a - b
console.log(subtract(10, 5))

const imprimir2 = a => console.log(a)
imprimir2('Legal!!!')