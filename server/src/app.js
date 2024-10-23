import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import path from 'node:path'

import { productRoute } from './routes/products.routes.js'

const app = express()
const PORT = process.env.PORT || 4000
const corsOrigin = {
  origin: [
    'http://localhost:5173',
    'http://localhost:4000',
    'http://127.0.0.1:4000',
  ],
}

//middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use(morgan('dev'))
app.use(express.static(path.join(path.resolve(), 'src', 'uploads')))

//routes

app.get('/', (req, res) => {
  res.json({ message: 'hola' })
})

app.use('/', productRoute)

app.listen(4000, () => {
  console.log('Server running on port 4000')
})
