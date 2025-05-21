import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import { connectDB } from './config/db';
import userRouter from '../routes/userRoute';
import materialRouter from '../routes/materialRoute';

const app = express();
const port = process.env.PORT || 4000;

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// DB Connect

connectDB()

// Routes

app.use('/api/user', userRouter)
app.use('/api/materials', materialRouter)

app.get('/', (req, res) => {
    res.send('API WORKING')
})

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);

})