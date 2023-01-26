const Koa = require('koa');
const app = new Koa();
const Router = require('@koa/router');

var router = new Router(cu);

router.get('/customers', getAll)
  .get('/customers/:id', getById)
  .post('/customers/:id', add)
  .put('/customers/:id', update)
  .delete('/customers/:id', exclude);

app.use(router.routes());

async function getAll(ctx) {
    ctx.body = 'all customers json'
    ctx.status = 200;
}

async function getById(ctx) {
    ctx.body = ` customer ${ctx.params.id} got` 
    ctx.status = 200;
}

async function add(ctx) {
    ctx.status = 204;
}

async function update(ctx) {
    ctx.status = 204;
}

async function exclude(ctx) {
    ctx.status = 204;
}

console.log('listening on port 3000...')
app.listen(3000);