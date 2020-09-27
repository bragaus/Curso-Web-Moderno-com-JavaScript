const pai = { nome: 'Pedro', corCabelo: 'Preto' }

const filha1 = Object.create(pai); // Cria o objeto filha1 com o prototype no pai
filha1.nome = 'Ana';
console.log(filha1);
console.log(filha1.__proto__);

const filha2 = Object.create(pai, {
    // Writable é se pode ser sobrescrita
    // Enumerable é se vai ser visualizada em um console.log por exemplo
    nome: { value: 'Bia', writable: false, enumerable: false }
});

console.log(filha2);
filha2.nome = 'Carla';
console.log(filha2.nome);

const exemploForInProto = {
    atributo1: 'atributo1',
    atributo2: 'atributo2',
    atributo3: 'atributo3',
    atributo4: 'atributo4'
}

const exemploForIn = {
    __proto__: exemploForInProto,
    att1: 'att1',
    att2: 'att2',
    att3: 'att3',
}

console.log('__________________INDEREZANTY_________________________');

for (let keys in exemploForIn) {

    exemploForIn.hasOwnProperty(keys) ? 
        console.log(keys) : console.log(`proto: ${keys}`);

}
