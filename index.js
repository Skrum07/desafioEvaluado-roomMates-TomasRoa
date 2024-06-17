import express from 'express';
import userRouter from './userRouter.js';

const app = express();
const port = process .env.PORT || 3000 ;


//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.use('/', userRouter);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});



