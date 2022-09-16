import express from 'express';
import morgan from 'morgan';
import session from 'express-session';
import store from 'session-file-store';
import path from 'path';
import indexRouter from './routes/api/indexRouter';
// import apiUser from './routes/apiUser';

import jsxRender from './routes/render/jsxRender';

const PORT = 3000;
const app = express();

app.engine('jsx', jsxRender);
app.set('view engine', 'jsx');
app.set('views', path.join(__dirname, 'components'));

const FileStore = store(session);
const sessionConfig = {
  name: 'user_sid',
  secret: process.env.SESSION_SECRET ?? 'test',
  resave: true,
  saveUninitialized: false,
  store: new FileStore(),
  cookie: {
    maxAge: 1000 * 60 * 60 * 12,
    httpOnly: true,
  },
};
// app.use(
//   helmet({
//     crossOriginEmbedderPolicy: false,
//     // ...
//   })
// );
app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session(sessionConfig));
app.use(async (req, res, next) => {
//   const list = await Company.findAll();
//   res.locals.list = list;
  res.locals.path = req.originalUrl;
  res.locals.userLogin = req.session?.userLogin;
  next();
});

app.use('/', indexRouter);
// app.use('/api/v1/user', apiUser);

app.listen(PORT, () => console.log(`App has started on port ${PORT}`));
