const express = require('express');
const dotenv = require('dotenv').config()
const colors = require('colors')
const connectDb = require('./config/db')
const PORT = process.env.PORT || 8000

connectDb();

const app = express();
const{errorHandler}= require('./middleware/errorMiddleware')
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.get('/', (req,res)=>{
 res.send("hello")
})
 app.use('/api/users', require('./routes/userRoutes'))
 app.use('/api/ticket', require('./routes/ticketRoutes'))
 app.use(errorHandler)
app.listen(PORT, ()=> console.log('listen'))