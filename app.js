const Koa = require('koa');
const router = require('./routes/router');
const graphqlHTTP = require('koa-graphql');
const { PORT, flower } = require('./helper');
const schema = require('./graphQL/schema');
const rootValue = require('./graphQL/rootResolver');

const app = new Koa();

console.log('app.js, line 10...', rootValue);
app.use(router.routes()).use(router.allowedMethods());
app.use(
  router
    .all('/graphql', graphqlHTTP({
      schema,
      rootValue,
      graphiql: true
    }))
    .get('/', (ctx)=> {
      const allRouts = router.stack.map(({path}) => path).slice(0, -1);
      ctx.body = [
        ...allRouts.slice(0,-1),
        ...flower,
        ...allRouts.slice(-1)
      ];
    })
  .middleware())
const start = async () => {
  try {
    // for drop db uncomment next line
    // await require('./utils/database').sync({ force: true });
    app.listen(PORT, () => console.log(
      `KOA Server is now running on http://localhost:${PORT}`
    ));
  } catch (e) {
    console.log(e);
  }
};

start();


