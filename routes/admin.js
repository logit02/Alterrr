const dotenv = require('dotenv')
const envpath = '../.env'
dotenv.config({envpath})
const router = require('express').Router(); 
const cors = require('cors');
const bcrypt = require('bcrypt');
router.use(cors());
const jwt = require('jsonwebtoken')
const Admin = require('../models/Admin')

router.post('/register', async (req,res) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt);
        const newAdmin = new Admin({
            username:req.body.username,
            password:hashedPass,   
        });
        const admin = await newAdmin.save();
        res.status(200).json(admin);
    }
    catch(err){
        res.status(500).json(err);
    }
})


router.post('/login', async (req, res) => {
    try{
    const admin = await Admin.findOne({username:req.body.username});
    !admin && res.status(400).json("Wrong creditentials");
    const validated = await bcrypt.compare(req.body.password, admin.password);
    !validated && res.status(403).json("Wrong creditentials");
    const { password, ...others} = admin._doc;
   if(others){
       //generate access toekn
        const accessToken = jwt.sign({user:admin}, process.env.ACCESS_TOKEN_SECRET)
        res.status(200).json({accessToken})
   }

    }catch(err){
        res.status(500).json(err);
    }
})

module.exports = router