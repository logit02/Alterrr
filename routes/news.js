const router = require('express').Router();
const Post = require('../models/News');
const cors = require('cors');
const News = require('../models/News');
const { json } = require('express');
router.use(cors());

const hey = () => {
    
}
router.post('/', async (req,res) => {
    const news = new News(req.body);
    try{ 
       const savedNews = await news.save();
       res.status(200).json(savedNews);
    }catch(err){ 
        res.status(500).json(err);
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