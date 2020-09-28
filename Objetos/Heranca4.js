function MeuObjeto() {
    this.mostrarNome = function(nome) {
        console.log(`Nome: ${nome}`)
    }
};
console.log(MeuObjeto.prototype);

const obj1 = new MeuObjeto();
const obj2 = new MeuObjeto();

obj1.mostrarNome('Matheus');
obj2.mostrarNome('Case');

console.log(obj1.__proto__ === obj2.__proto__);
console.log(MeuObjeto.prototype === obj1.__proto__);

MeuObjeto.prototype.nome = 'Anônimo'
MeuObjeto.prototype.falar = function(nome) {
    console.log(`Bom dia, ${this.nome}! Meu nome é ${nome}`);
}

MeuObjeto.prototype.falar('Matheus');

const obj3 = {};
obj3.__proto__ = MeuObjeto.prototype;
obj3.falar('Obj3');

// Resumindo:
console.log("___________________RESUMO DA ORCHESTRA______________________")
console.log("(new MeuObjeto).__proto__ === MeuObjeto.prototype: ", (new MeuObjeto).__proto__ === MeuObjeto.prototype);
console.log("MeuObjeto.__proto__ === Function.prototype: ", MeuObjeto.__proto__ === Function.prototype);
console.log("Function.prototype.__proto__ === Object.prototype: ", Function.prototype.__proto__ === Object.prototype);
console.log("Object.prototype.__proto__ === null: ", Object.prototype.__proto__ === null);