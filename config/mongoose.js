const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://rajeshpushp21:LwHbKUPbHRO0EweI@rajapi.qmenhky.mongodb.net/');

// Code for using the cloud mongodb atlas 
const connectParams={
    useNewUrlParser:true,
    useUnifiedTopology:true
}



const db = mongoose.connection

db.on('error', console.error.bind(console, 'error connecting to database'));

db.once('open', ()=>{
    console.log("successfully connected to database : mongoDB");
});

module.exports = mongoose;