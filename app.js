const Koa = require('koa')
const router = require('./routes/router');
const PORT = 3000;
const app = new Koa();

app.use(router.middleware());
app.use(router
  .get('/', (ctx)=> ctx.body = router.stack.map(({path}) => path).slice(0, -1))
  .middleware())
const start = async () => {
  try {
    // for drop db uncomment next line
    // await require('./utils/database').sync({ force: true });
    app.listen(PORT);
  } catch (e) {
    console.log(e);
  }
}

start();


