const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
mongoose.connect('mongodb://localhost/Konnect_development');

const db=mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to database"));

db.once('open',function(){
    console.log('Connected to Database');
});

module.exports = db; 