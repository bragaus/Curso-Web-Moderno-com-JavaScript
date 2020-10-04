Array.prototype.forEach2 = function (callback) {
    
    for (let i = 0; i < this.length; i++) {

        callback(this[i], i, this)

    }

}

const aprovados = ['Matheus', 'Victor', 'Yuri', 'Thiago', 'William', 'Alex']


aprovados.forEach2((e, i, a) => { console.log(e, i, a) })