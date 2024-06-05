import express from 'express'
import mongoose from 'mongoose'
import otakuRoute from './routes/otakuRoute.js'
import cors from 'cors'


const app = express()

// Middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS POLICY
// Option 1: Allow All Origins with Default of cors(*)
app.use(cors());
// Option 2: Allow Custom Origins
// app.use(
//   cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type'],
//   })
// );

app.get('/' , (req, res) => {
    console.log(req);
    return res.status(234).send('Welcome To Otaku')
})

app.use('/otaku', otakuRoute)


mongoose
    .connect(process.env.MONGODB_CONNECTION)
    .then(() => {
        console.log('App Connected to database');
        app.listen(process.env.PORT, () => {
            console.log(`App is listening to port: ${process.env.PORT}`);
        })
    })
    .catch((error) => {
        console.log(error);
    })