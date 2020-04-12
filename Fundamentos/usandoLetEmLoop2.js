const funcs = []

for (let i = 1; i < 11; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]()
funcs[8]()