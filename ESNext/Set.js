// não aceita repetição e não é indexado
const palavroes = new Set()

palavroes.add('caralho')
palavroes.add('Filha da puta')
palavroes.add('vai pro caralho')
palavroes.add('vai se fuder')
palavroes.add('lula livre')
palavroes.add('caralho')

console.log(palavroes)

const nomes = ['Molly', 'Case', 'Wintermute', 'Armitage', 'Corto']
const nomesSet = new Set(nomes)
console.log(nomesSet)