require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

//middlewhere
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());






const CONNECTDB = process.env.MONGO_URI;
const PORT = process.env.PORT




//Import routes

const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');
const userRoutes = require('./routes/userRouter');



//connect DB    
mongoose.connect(CONNECTDB)
.then(()=>console.log('DB Connected'))
.catch((err)=>console.log(err));





//Routes middlewhere
app.use('/api',productRoutes);
app.use('/api',orderRoutes);
app.use('/api',userRoutes);



app.listen(PORT, ()=>(
    console.log('App is running on port ' + process.env.PORT)
));

