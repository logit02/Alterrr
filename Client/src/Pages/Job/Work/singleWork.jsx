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
            const res = await axiosInstance.get('/jobs/'+ path)
            myJob(res.data)
        }
        getJob();
        console.log(job)
    },[path])
    return(
        <div className="singlePost">
        <div className="singlePostWrapper">
          {job.team_photo && (
            <img
            className="singlePostImg"
            src={job.team_photo}
            alt=""
            /> )}
        <h1 className="singlePostTitle">
        {job.job_title}  
        </h1>
        <p className="postDescSingle">
          {job.description}
          
        </p>
    </div>
    <div id='apply-but'>
      <button className='job_apply'>Apply</button>
      <button className='job_apply' id='web'>Visit the website</button>
      </div>

  </div>
    )
}