Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim;
};

const imprimirResultado = function(nota) {
    if (nota.entre(9, 10)) {
        console.log('Quadro de Honra');
    }
    else if(nota.entre(7, 8)) {
        console.log('Aprovado');
    }
    else if(nota.entre(4, 6)) {
        console.log('Recuperação');
    }
    else if(nota.entre(0, 3)){
        console.log('Reprovado');
    }
    else {
        console.log('Nota Invalida');
    }
}

imprimirResultado(9)
imprimirResultado(5)