// Notação literal: melhorias na versão ES6

const a = 1;
const b = 2;
const c = 3;

const obj1 = { a: a, b: b, c: c };
console.log(obj1);

const nomeAttr = 'nota';
const valorAttr = 7.87;

const obj3 = {}
obj3[nomeAttr] = valorAttr;
console.log(obj3);


// ES6:
const obj2 = { a, b, c };
console.log(obj2);

const obj4 = {[nomeAttr]: valorAttr};
console.log(obj4);

const obj5 = {
    funcao1: function() {
        // forma antiga
    },

    funcao2() {
        // ES6
    }
}
console.log(obj5);

