console.log(typeof Array, typeof new Array, typeof []);

let aprovados = new Array('Rats', 'Dix', 'Flatline') // Mano eu nunca vou fazer isso
console.log(aprovados)

aprovados = ['Molly', 'Case', 'Armitage']
console.log(aprovados)

aprovados.push('Wage', 'Wintermute')
console.log(aprovados)

aprovados.sort()
console.log(aprovados)

delete aprovados[0]
console.log(aprovados)

aprovados.splice(3,1)
console.log(aprovados)