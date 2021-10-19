const router = require('express').Router();
const Post = require('../models/News');
const cors = require('cors');
const News = require('../models/News');
const { json } = require('express');
const jwt = require('jsonwebtoken')
router.use(cors());

//verify 
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


//add a news
router.post('/', verify, async (req,res) => {
    const news = new News(req.body);
    try{ 
       const savedNews = await news.save();
       res.status(200).json({
           message:"success"
       });
    }catch(err){ 
        res.status(500).json({
            message:"something went wrong"
        });
    }
})

router.get('/', async (req, res) => {
  
    try {
        let news = await News.find();
        res.status(200).json(news);
    }catch(err){ 
        res.status(500).json(err);
    }
})
router.get("/:id", async(req,res) =>{
    try{
        const news = await News.findById(req.params.id);
        res.status(200).json(news);
    }catch(err){
        res.status(500).json(err)
    }
})

module.exports = router