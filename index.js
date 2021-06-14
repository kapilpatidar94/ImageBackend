require('./models/db');                       
require("dotenv").config();
const express = require('express');               
const cors = require('cors')
const ImageRoutes = require('./routes/ImageRoutes');   
const app = express()                 
     
app.use(cors());

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.use('/',ImageRoutes);
       
const PORT = process.env.PORT || 5000;
app.listen(PORT,console.log(`Port is running on ${PORT}`));