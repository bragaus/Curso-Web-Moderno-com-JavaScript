function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('js', 222);
const aula2 = new Aula('jar', 333);

console.log(aula1, aula2);

// Simulando o new
function novo(f, ...params) {
    const obj = {};
    obj.__proto__ = f.prototype;
    f.apply(obj, params);
    return obj;
}

const aula3 = novo(Aula, 'teste', 123);

console.log(aula3);