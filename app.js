let Koa = require('koa');
let Router = require('koa-router');
let KoaBodyparser = require('koa-bodyparser');

let app = new Koa();
let router = new Router();
app.use(KoaBodyparser());
router
    .get('/', (ctx, next) => {
        ctx.body = 'Hello World';
    })
    .post('/users', async (ctx, next) => {
        ctx.body = ctx.request.body;
    })
app
    .use(router.routes())
    .use(router.allowedMethods());


process.stdin.resume();

process.on('SIGTERM', () => {
    console.log('Received SIGINT. Press Control-Z to exit.');
});

function handle(signal) {
    console.log(`Received ${signal}`);
}

process.on('SIGINT', handle);
process.on('SIGTERM', handle);

app.listen(3000);
