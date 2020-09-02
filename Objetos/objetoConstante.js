const pessoa = { nome: 'Joao' };
pessoa.nome = 'Matheus';
console.log(pessoa);

Object.freeze(pessoa);
pessoa.nome = 'Case';

console.log(pessoa);