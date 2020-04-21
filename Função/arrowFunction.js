
let dobros = (x) => {
    return 2 * x;
}

let dobro = x => 2 * x;

function Pessoa() {
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000);

    // setInterval( function () {
    //     this.idade++
    //     console.log(this.idade)
    // }, 1000)
}

// new Pessoa

let thisparam = function (param) {
    console.log(this === param)
}

let obj = {}

thisparam = thisparam.bind(obj)
thisparam(obj)
gthisparam(global)