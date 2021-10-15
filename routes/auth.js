const dotenv = require('dotenv')
const envpath = '../.env'
dotenv.config({envpath})
const router = require('express').Router();
const User = require('../models/User')
const bcrypt = require('bcrypt');
const cors = require('cors');
router.use(cors());
const jwt = require('jsonwebtoken');




const verify = (req,res,next) => {
    const authHeader = req.headers.authorization;
    if(authHeader) {
        const token = authHeader.split(' ')[1]
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, payload) => {
            if(err){
                return res.status(403).json({
                    error:true,
                    message:"",
                })
            }
            req.payload = payload; 
            next()
        })
    }else{ 
        res.status(401).json({
            error:true,
            message:"some normal error",
        })
    }
}
// register
router.post('/register', async (req,res) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt);
        const newUser = new User({
            name:req.body.name,
            surname:req.body.surname,
            username:req.body.username,
            email:req.body.email,
            password:hashedPass,   
        });
        const user = await newUser.save();
        res.status(200).json(user);
    }
    catch(err){
        res.status(500).json(err);
    }
})

//login

router.post('/login', async (req, res) => {
    try{
    const user = await User.findOne({username:req.body.username});
    !user && res.status(400).json("Wrong creditentials");
    const validated = await bcrypt.compare(req.body.password, user.password);
    !validated && res.status(403).json("Wrong creditentials");
    const { password, ...others} = user._doc;
   if(others){
       //generate access toekn
        const accessToken = jwt.sign({user:user}, process.env.ACCESS_TOKEN_SECRET)
        res.status(200).json({accessToken})
   }

    }catch(err){
        res.status(500).json(err);
    }
})

router.get('/', async (req,res) => {
    try{ 
        let users;
        users=await User.find();
        res.status(200).json(users)
    }catch(err){ 
        res.status(500).json(err);
    }
})

router.delete("/:id", verify, (req,res) =>{ 
  if(req.payload.id === req.params.id){
        res.status(200).json("user deleted!")
  }else{ 
      res.status(403).json("you are not allowed to do that action")
  }
})


module.exports = router