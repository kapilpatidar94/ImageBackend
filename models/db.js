const mongoose = require('mongoose');
require('./ImgSchema');                                           

mongoose.connect('mongodb://localhost:27017/', { 
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true
}, (err) => {
    if (!err) { console.log('Mongoose Connected.') }
    else { console.log('Error in DB connection : ' + err) }
});

