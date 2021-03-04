const Router = require('koa-router');
const router = new Router();

require('./students')(router);
require('./languages')(router);
require('./education')(router);
require('./goals')(router);
require('./ratings')(router);
module.exports = router;
