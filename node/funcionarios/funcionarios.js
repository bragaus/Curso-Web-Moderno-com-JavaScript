const axios = require('axios')
const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'

axios.get(url).then(({data}) => {
    const china = data.filter(e => e.pais === 'China').filter(e => e.genero === 'F').reduce((anterior, atual) => {
        return anterior.salario < atual.salario ? anterior : atual
    })

    console.log(china)
})