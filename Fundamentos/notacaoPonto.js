console.log(Math.ceil(6.1));

const obj1 = {};
obj1.nome = 'Bola';
// Obj1['nome'] = 'Bola2'
console.log(obj1.nome);

function Obj(nome) {
    this.nome = nome;
    this.exec = function() {
        console.log('Exec...');
    }; 
};

const obj2 = new Obj('Madeira');
const obj3 = new Obj('Cadeira');
console.log(obj2.nome);
console.log(obj3.nome);
obj3.exec();