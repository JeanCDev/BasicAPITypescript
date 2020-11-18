import express from 'express';
import routes from './routes';
import dotenv from 'dotenv';

const app = express();

app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 8080, ()=> {
  console.log('Server Started');
});