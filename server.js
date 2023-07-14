const express = require('express')

const port = 5000 || 5001 || 5002
const app = express()
const cors = require('cors');

app.use(express.json())
app.use(cors());

//const authRoute = require('./routers/auth')

const productRoute = require('./routers/product')
const userRoute = require('./routers/user')

//connect to DB
require('./config/connectDB')



app.use('/products',productRoute);
app.use('/users',userRoute);

//
app.use('/uploads',express.static('./uploads'))

//starting server
app.listen(port,  async(req,res)=>{
    console.log(`server start on port ${port} `)
})