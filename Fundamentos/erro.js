function tratarErroELancar(erro) {
    // throw new Error('...')
    // throw 10
    // throw true
    // throw 'mensage'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}
function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.ToUpperCase () + '!!!');
    }
    catch (e) {
        tratarErroELancar(e);
    }
    finally {
        console.log('final')
    }
};

const obj = { nome: 'Roberto'};
imprimirNomeGritado(obj);