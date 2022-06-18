import bodyParser from 'body-parser';
import express from 'express';
import userRouter from './routes/user.js';
const app = express();


app.use(bodyParser.json());

//api/user
app.use('/api', userRouter);

app.listen(3000, () => {
  console.log(`Hey server is running on port 3000`)
})



