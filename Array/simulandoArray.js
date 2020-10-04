const quaseArray = { 0: 'Rafael', 1: 'Ana', 2: 'Bia'}
console.log(quaseArray)

Object.defineProperty(quaseArray, 'toString', {
    value: function() { return Object.values(this) },
    enumerable: false // não aparecer no log
})

console.log(quaseArray.toString())