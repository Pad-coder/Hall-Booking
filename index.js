import express from 'express'
import Controller from './src/Controller/index.js'

const port= 8000
const app = express()

app.use(express.json())
app.use(Controller)

app.listen(port,()=>console.log(`Server listening in port: ${port}`))