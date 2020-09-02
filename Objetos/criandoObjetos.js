// Usando a notação literal.
const obj1 = { nome: 'Matheus' };
console.log(obj1);

// Objeto em JS:
console.log(typeof Object, typeof new Object);

// Função Construtora:
function Produto(nome, preco, desc) {
    this.nome = nome;
    this.getPrecoDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('dek', 900, 5);
const p2 = new Produto('Not', 1600, 10);

console.log(p1);

console.log(p1.getPrecoDesconto(), p2.getPrecoDesconto());

// Função Factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('João', 7980, 4);
const f2 = criarFuncionario('Plano', 11980, 1);
console.log(f1.getSalario(), f2.getSalario());

// Object.create
const filha = Object.create(null);
filha.nome = 'Maria';
console.log(filha);

// Uma função famosa que retorna objeto:
const fromJSON = JSON.parse('{"info": "teste", "desc": "another"}');
console.log(fromJSON.info);