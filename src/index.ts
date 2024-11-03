import express from 'express'
import userRoutes from './routes/user';


const app = express();
const PORT = 3000

app.use(express.json())
app.use('/api/v1/user', userRoutes)

app.listen(PORT, () => {
    console.log('Running on Port 3000')
})