const router = require('express').Router();
const Post = require('../models/Post');
const cors = require('cors');
router.use(cors());

//add a post 
router.post('/', async (req,res)=> {
    const post = new Post(req.body);
    try{ 
      const savedPost =await post.save();
      res.status(200).json({
          status:"successfully posted!"
      });
    }catch(err){ 
        res.status(500).json(err);
    }
})
//get all posts 
router.get('/', async (req,res) => {
    try{ 
        let posts;
        posts = await Post.find();
        res.status(200).json(posts);
    }catch(err){ 
        res.status(500).json(err);
    }
})
//get one post by id 

router.get('/:id', async (req,res ) => { 
    try{ 
    const  post  = await Post.findById(req.params.id);
    res.status(200).json(post);
    }catch(err){ 
        res.status(500).json(err);
    }
} )
//

module.exports = router