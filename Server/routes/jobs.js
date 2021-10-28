const router = require('express').Router();
const Job = require('../models/Job')
const cors = require('cors');
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
//get all jobs 
router.get('/', async (req,res) => {
    try{ 
        let jobs=await Job.find();
        res.status(200).json(jobs)
    }catch(err){ 
        res.status(500).json(err);
    }
})

//add a post 
router.post('/', verify ,async (req,res)=> {
    const job = new Job(req.body);
    try{ 
      const savedJob =await job.save();
      res.status(200).json(savedJob);
    }catch(err){ 
        res.status(500).json(err);
    }
})
//
router.get("/:id", async(req,res) =>{
    try{
        const onejob = await Job.findById(req.params.id);
        res.status(200).json(onejob);
    }catch(err){
        res.status(500).json(err)
    }
})

module.exports = router
