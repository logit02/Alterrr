import './singleWork.css'
import { useLocation } from 'react-router'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { AxiosInstance } from 'axios'
import { axiosInstance } from '../../../config'
export default function SingleWork(){
    const location = useLocation()
    const path = location.pathname.split("/")[2]
    const [job, myJob] = useState({})
    
    useEffect(() => {
        const getJob = async () => {
            const res = await axios.get('http://localhost:5000/jobs/'+ path)
            myJob(res.data)
        }
        getJob();
        console.log(job)
    },[path])
    return(
        <div className="singlePost">
        <div className="singlePostWrapper">
          {job.photo && (
            <img
            className="singlePostImg"
            src={job.photo}
            alt=""
            /> )}
        <h1 className="singlePostTitle">
        {job.job_title}  
        </h1>
        <div className="singlePostInfo">
         
        </div>
        <p className="singlePostDesc">
          {job.description}
          
        </p>
    </div>
      
  </div>
    )
}