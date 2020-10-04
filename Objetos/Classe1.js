class Lancamento {
    constructor(nome = 'Generico', valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lancamentos) {
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }    
}

const salario = new Lancamento('Salario', 1300);
const contaDeLuz = new Lancamento('Conta de Luz', -300);

const contas = new CicloFinanceiro(6, 2020)
contas.addLancamentos(salario, contaDeLuz);

console.log(contas.sumario());