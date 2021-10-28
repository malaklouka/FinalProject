const express = require('express')
const app = express()
const port = 5000
const path=require('path')
const bagRouter=require('./routes/bagRouter')
const productRouter = require('./routes/productRouter')
const orderrouter=require('./routes/orderRouter')
const Dmndrouter=require('./routes/demandeRouter')
const filterrouter=require('./routes/filter')
const uploadRouter=require('./routes/uploadRouter')
const connectdb=require('./config/connectdb')
require("dotenv").config()
app.use(express.json())
//connect to database
connectdb()
//routes
app.use("/user",require("./routes/auth"))
//every route in bagRouter should start by /aa
app.use('/aa',bagRouter)
app.use('/api/products', productRouter)
app.use('/order',orderrouter)
app.use('/dmnd',Dmndrouter)
app.use('/filter',filterrouter)

//app.use('/api/upload', uploadRouter)

//app.use('/uploads', express.static(path.join(__dirname, '/uploads')))
/*app.use("/bagg", require("./routes/bagg"))
app.use("/cust", require('./routes/customerRouter'))
app.use("/store", require('./routes/storeRouter'))*/


//listen to port 
app.listen(port, (erreur) => 
erreur? console.log(erreur): console.log(`server is running at port ${port}`))