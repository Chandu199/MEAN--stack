//importing modules
var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');


var app = express();

const route  = require('./routes/route');
//port no
const port = 3000;

//connect to mongo DB
mongoose.connect('mongodb://localhost:27017/contactlist')

//on conection
mongoose.connection.on('connected',()=> {
  console.log('Connected to database mongodb @ 27017' )
});

//error on connection
mongoose.connection.on('error',(err)=> {
  if(err){
    console.log('Error in Database connection'+err);
  }
});

//adding middleware
//cors binds between client and server - client uses port 4040 wehereas server uses port 3000, cors binds between both
app.use(cors());

//adding body-parser
app.use(bodyparser.json());

//route file
app.use('/api',route);

//testing server
app.get('/',(req,res)=> {
res.send('foobar');
});

//static files
//this joins present folder to public
app.use(express.static(path.join(__dirname,'public')));

//binding port to 3000
app.listen(port, ()=> {
  console.log('Server Started at port'+port);
});
