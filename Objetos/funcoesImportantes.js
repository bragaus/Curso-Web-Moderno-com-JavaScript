const pessoa = {
    nome: 'Matheus',
    idade: 23,
    peso: 70
}

console.log(Object.keys(pessoa));
console.log(Object.values(pessoa));
console.log(Object.entries(pessoa)); // Transforma os pares chave/valor em array

Object.entries(pessoa).forEach(e => {
    console.log(e);
});

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2020'
});

pessoa.dataNascimento = '12030123';
console.log(pessoa);

Object.defineProperty(pessoa, 'nome', {
    writable: false
});

pessoa.nome = 'caralho';
console.log(pessoa);

const dest = { a: 1 };
const o1 = { b: 2 };
const o2 = { c: 3, a: 4 };
const obj = Object.assign(dest, o1, o2);
console.log(obj);