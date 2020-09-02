// coleção dinâmica de pares chave/valor
const produto = new Object;
produto.nome = 'dex';
produto['deck de simstim'] = 'octogono';
produto.preco = 200

console.log(produto);
delete produto.nome;
delete produto['deck de simstim'];
console.log(produto);

const carro = {
    modelo: 'A4',
    valor: 98000,
    proprietario: {
        nome: 'Matheus',
        idade: 20
    },
    condutores: [
        { nome: 'condutor01', idade: 20 },
        { nome: 'condutor01', idade: 20 },
        { nome: 'condutor01', idade: 20 },
        { nome: 'condutor01', idade: 20 }
    ],
    calcularSeguro: () => {
        console.log(carro);
    }
};

carro.calcularSeguro();