import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import useragent from 'express-useragent';

export const app = express();

app.use(helmet());
app.use(cors());

app.use(compression());
app.use(morgan('dev'));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cookieParser());
app.set('trust proxy', 1);

app.use(useragent.express());

app.get('/', (req, res) => {
  return res.send('hi, running on port ' + process.env.PORT || '');
});

process.on('uncaughtException', function (err) {
  // Handle the error safely
  console.log(err);
});

export default app;
