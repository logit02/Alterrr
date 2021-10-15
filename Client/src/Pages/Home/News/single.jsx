import { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import axios from 'axios'
import './single.css'
import {Link} from 'react-router-dom'
import { axiosInstance } from '../../../config'
export default function Single(){

   
    const [news,setfullnews] = useState({})
    const location = useLocation()
    const path = location.pathname.split("/")[2]
    useEffect(()=> {
        const getNews = async () => {
            const res =await axiosInstance.get('/news/'+path)
            setfullnews(res.data)
            
        }
        getNews();
       
    },[path])
    return(
      <div className="singlePost">
        <div className="singlePostWrapper">
          {news.photo && (
            <img
            className="singlePostImg"
            src={news.photo}
            alt=""
            /> )}
        <h1 className="singlePostTitle">
        {news.title}  
        </h1>
        <div className="singlePostInfo">
          <div className='singlePostAuthor'>{new Date(news.createdAt).toDateString()}</div>
        </div>
        <p className="singlePostDesc">
          {news.desc}
        </p>
    </div>
      
  </div>
  )
}