const express = require('express')
const app = express()
const port = 5000
const path=require('path')
const {OAuth2Client} = require('google-auth-library');

const bagRouter=require('./routes/bagRouter')
const productRouter = require('./routes/productRouter')
const orderrouter=require('./routes/orderRouter')
const Dmndrouter=require('./routes/demandeRouter')
const filterrouter=require('./routes/filter')
const adminrouter=require('./routes/adminRouter')
const storeRouter=require('./routes/storeRouter')
const uploadRouter=require('./routes/uploadRouter')
const connectdb=require('./config/connectdb')
require("dotenv").config()
const client = new OAuth2Client(process.env.REACT_APP_GOOGLE_CLIENT_ID);

app.use(express.json())

//connect to database
connectdb()
//routes
app.use("/user",require("./routes/auth"))
//every route in bagRouter should start by /aa
app.use('/aa',bagRouter)
app.use('/api/products', productRouter)
app.use('/dmnd',Dmndrouter)
app.use('/filter',filterrouter)
app.use('/admin',adminrouter)
app.use("/store", storeRouter)
app.use('/order',orderrouter)
//app.use('/api/upload', uploadRouter)

//app.use('/uploads', express.static(path.join(__dirname, '/uploads')))
/*app.use("/bagg", require("./routes/bagg"))
app.use("/cust", require('./routes/customerRouter'))
app.use("/store", require('./routes/storeRouter'))*/
const users = [];
function upsert(array, item) {
    const i = array.findIndex((_item) => _item.email === item.email);
    if (i > -1) array[i] = item;
    else array.push(item);
  }


app.post('/api/google-login', async (req, res) => {
    const { token } = req.body;
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.CLIENT_ID,
    });
    const { name, email, picture } = ticket.getPayload();
    upsert(users, { name, email, picture });
    res.status(201);
    res.json({ name, email, picture });
  });
  

app.use(express.static(path.join(__dirname, '/build')));
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/build/index.html'))
);


//listen to port 
app.listen(port, (erreur) => 
erreur? console.log(erreur): console.log(`server is running at port ${port}`))