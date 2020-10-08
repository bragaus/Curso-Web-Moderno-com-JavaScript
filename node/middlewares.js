// middleware pattern (chain of responsability)
const passo1 = (ctx, next) => {
    ctx.valor1 = 'Case'
    next()
}

const passo2 = (ctx, next) => {
    ctx.valor2 = 'Molly'
    next()
}

const passo3 = ctx => ctx.valor3 = 'Wintermute'

const exec = (ctx, ...middlewares) => {
    const execPasso = indice => {
        middlewares && indice < middlewares.length &&
        middlewares[indice](ctx, () => execPasso(indice + 1))
    }
    execPasso(0)
}

const ctx = {}
exec(ctx, passo1, passo2, passo3)
console.log(ctx)