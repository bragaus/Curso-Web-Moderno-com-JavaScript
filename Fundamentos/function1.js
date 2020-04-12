// Function sem retorno 
function imprimirSoma(a, b) {
    console.log(a + b)
}
imprimirSoma(2, 3)

// Function com retorno
function soma(a, b = 0) {
    return a + b
}
console.log(soma(2, 2))
