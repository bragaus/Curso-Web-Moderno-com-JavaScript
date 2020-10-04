const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
console.log(pilotos)

pilotos.shift() // remove o primeiro
console.log(pilotos)

pilotos.pop() // remove o ultimo
console.log(pilotos)

pilotos.unshift('Hamilton') // Adiciona na primeira posicao
console.log(pilotos)

pilotos.push('Verstappen') // adiciona na ultima posicao
console.log(pilotos)

// splice pode adicionar e remover
pilotos.splice(2, 0, 'Bottas', 'Massa') // Adicionar
console.log(pilotos)

pilotos.splice(3, 1) // remover
console.log(pilotos)

// slice retorna um novo array

// retorna um novo arrary sem o primeiro e o ultimo registro do array antigo
const novoArray = pilotos.slice(1, pilotos.length - 1) 
console.log(novoArray)