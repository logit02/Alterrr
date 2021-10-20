const router = require('express').Router();
const Contact = require('../models/Contact')
const cors = require('cors');
router.use(cors());
const jwt = require('jsonwebtoken')

//verify function
const verify = (req,res,next) => {
    const authHeader = req.headers.authorization;
    if(authHeader) {
        const token = authHeader
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, payload) => {
            if(err){
                return res.status(403).json({
                    error:true,
                    message:"wrong token",
                })
            }

            req.payload = payload; 
            next()
        })
    }else{ 
        res.status(401).json({
            error:true,
            message:"No header",
        })
    }
}

router.post('/',async(req,res)=> {
    try{
        const form = await new Contact(req.body);
        const savedForm = form.save();
        res.status(200).json({
            message:"Response successfully submitted!"
        })
    }catch(err){
        res.status(500).json({
            message:"Some Error occurred! Please try again or call via 099501035"
        });
    }
})

router.get('/',verify, async (req, res) => {
    try {
        let contacts;
        contacts = await Contact.find();
        res.status(200).json(contacts);
    }catch(err){ 
        res.status(500).json(err);
    }
})


module.exports = router