let Koa = require('koa');
let Router = require('koa-router');
let KoaBodyparser = require('koa-bodyparser');

let app = new Koa();
let router = new Router();
//TODO sigterm
//TODO bodyparser
app.use(KoaBodyparser());
router
    .get('/', (ctx, next) => {
        console.log(ctx)
        ctx.body = 'Hello World';
    })
    .post('/users', async (ctx, next) => {
        ctx.body = ctx.request.body;
    })

app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(3000);
