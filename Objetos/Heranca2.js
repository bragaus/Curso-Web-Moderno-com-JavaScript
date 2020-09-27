// Cadeia de protótipos (prototype chain)

Object.prototype.nomeDoBisavo = 'QUEINAL';
const avo = { nomeDoAvo: 'ZYON' };
const pai = { __proto__: avo, nomeDoPai: 'FIOND' };
const filho = { __proto__: pai, nomeDoFilho: 'RADYCAU' };

console.log(filho.nomeDoPai);
console.log(filho.nomeDoAvo);
console.log(filho.nomeDoBisavo);

const carro = {

    velocidadeAtual: 0,
    velocidadeMaxima: 200,
    acelerarMais(delta) {
        if (this.velocidadeAtual + delta <= this.velocidadeMaxima) {
            this.velocidadeAtual += delta;
        } else {
            this.velocidadeAtual = this.velocidadeMaxima;
        }
    },
    status() {
        return `${this.velocidadeAtual}Km/h de ${this.velocidadeMaxima}km/h` 
    }

}

const ferrari = {
    modelo: 'f40',
    velocidadeMaxima: 324 // shadowing
}

const volvo = {
    modelo: 'v40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro);
Object.setPrototypeOf(volvo, carro);

console.log(ferrari);
console.log(volvo);

ferrari.velocidadeMaxima = 400;
ferrari.acelerarMais(400);
console.log(ferrari.status());