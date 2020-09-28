// Impedindo adição de novos atributos no objeto
const produto = Object.preventExtensions({
    nome: 'Impedindo Adição', preco: 222, tag: 'caralho'
});

console.log(produto);
produto.outroNome = 'Outro nome';
console.log(produto);
delete produto.tag;
console.log(produto);

// Impedindo adição e deleção de atributos no objeto
const selado = Object.seal({
    nome: 'Matheus'
});

console.log(selado);
delete selado.nome;
console.log(selado);

// Pode fazer porra nenhuma no objeto
const congelado = Object.freeze({
    nome: 'Mano',
    tamanho: 'Gang'
});

congelado.nome = 'Matheus'
delete congelado.tamanho;
congelado.produto = 'Aquele do bom'

console.log(congelado);
