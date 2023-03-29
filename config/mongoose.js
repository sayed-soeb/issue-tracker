const mongoose = require('mongoose');

// here we are using the MongoDB Url we defined in our ENV file
let DB_URL = "mongodb+srv://sayedsoeb1:osomatsu@cluster0.9n5cij5.mongodb.net/issues?retryWrites=true&w=majority";

//connect to the database
mongoose.connect(DB_URL , 
  {
    usenewurlparser: true,
    useunifiedtopology: true
  }).then(()=>{
    console.log(`connection successful `);
  }).catch((err)=>{
    console.log(`error connecting to database` , err);
  })
 

// acquire connection (to check if its successful)
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error connecting to MongoDB'));

db.once('open', function () {
console.log('Connected to Database :: MongoDB');
});

module.exports = db;