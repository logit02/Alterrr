const express = require('express'); 
const app = express();
const dotenv = require('dotenv')
const mongoose =require('mongoose')
dotenv.config();
app.use(express.json());
const jwt = require("jsonwebtoken")
const path = require('path')
const cors = require('cors');

//Routes
const postRoute = require('./routes/posts')
const NewsRoute = require('./routes/news')
const JobRoute = require('./routes/jobs')
const ContactRoute = require('./routes/contact')
const UserRoute = require('./routes/auth')
const AdminRoute = require('./routes/admin')

mongoose.connect(process.env.MONGO_URL,  { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(console.log("connected to MongoDB"))
.catch((err)=> console.log(err));

//use routes
app.use('/backend/posts', postRoute)
app.use('/backend/news', NewsRoute)
app.use('/backend/jobs', JobRoute)
app.use('/backend/contact', ContactRoute)
app.use('/backend/users', UserRoute)
app.use('/backend/admin', AdminRoute)

app.use(cors({origin: '*'}));


/*app.use(express.static(path.join(__dirname, "/Client/build")));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/Client/build', 'index.html'));
});*/

//for hosting 
app.use(express.static(path.join(__dirname, "/Client/build")));


app.listen(process.env.PORT || 5000, ()=> {
    console.log(`listening on port ${process.env.PORT || 5000}`)
})