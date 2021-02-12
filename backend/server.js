
const http = require('http');
const Koa = require('koa');
const serve = require('koa-static');
const mount = require('koa-mount');
const Router = require('koa-router');
const cors = require('koa2-cors');
const koaBody = require('koa-body');
// const moment = require('moment');
const logger = require('koa-logger');
const { rejects } = require('assert');
// const uuid = require('uuid').v4;

// process.env.PASETO_KEY = fs.readFileSync('./paseto_private.key');

const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./database/db.sqlite', (err) => {
  if (err) return console.error(err.message);
  // db.exec('PRAGMA foreign_keys = ON;');
  console.error('DB opened');
});

const app = new Koa();

// const frontend = new Koa();
// frontend.use(serve('../client/build'))
// app.use(mount('/admin', serve('../client/build/index')));
// app.use(mount('/', serve('../client/build')));

app.use(logger());
app.use(cors());
app.use(koaBody({
  json: true,
}));

const router = new Router();

router.get('/api/products', async (ctx, next) => {
  const products = await new Promise((resolve, reject) => {
    db.all(
      `SELECT products.*, product_types.name as type_name FROM products, product_types WHERE product_types.id = products.type_id`,
      (err, rows) => {
        if (err) reject(err);
        resolve(rows);
      }
    );
  });
  ctx.response.status = 200;
  ctx.response.body = products;
    
});

router.post('/api/login', async (ctx, next) => {
  const { email, password } = ctx.request.body;
  if (!email || !password) {
    ctx.response.status = 200;
    ctx.response.body = { success: false, err: 'bad data' };
    return true;
  }

  // const user = users.find((user) => user.email === email);
  // const user = await users.find([], 'email', Model.EQUAL, email);

  const users = await new Promise((resolve, reject) => {
    db.all(`SELECT * FROM users`, (err, rows) => {
      if (err) reject(err);
      resolve(rows);
    })
  });
  console.log(users);

  const user = await new Promise((resolve, reject) => {
    db.get(`SELECT * FROM users WHERE email = "${email}" LIMIT 1`, (err, row) => {
      if (err) reject(err);
      resolve(row);
    })
  });
  
  console.log(user);
  if (!user) return false;

  // const pwdCorrect = await users.verifyPassword({ ...user, password });
  // if (!pwdCorrect) return false;
  if (user.password !== password) return false;

  // const token = await users.getToken(user);
  // tokens.push([{ token, userID: user.id }]);

  ctx.response.status = 200;
  ctx.response.body = { success: true, user: { email: user.email } };

  // return next();
});

app.use(router.routes())
app.use(router.allowedMethods());

const port = process.env.PORT || 7070;
// const server = http.createServer(app.callback());
// server.listen(port);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
})
