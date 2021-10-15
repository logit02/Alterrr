import './posts.css'
import MaterialTable from "material-table";
import { useState, useEffect , useRef} from 'react';
import axios from 'axios'
import Popup from 'react-popup';
import { axiosInstance } from '../../../config';

export default function Posts(){
  const titleRef = useRef();
  const UrlRef = useRef();
  const descRef = useRef();
  const [status, setStatus] = useState('')
  const columns = [
    {
      title: "id",
      field: "_id",
    },
    {
      title: "Title",
      field: "title",
    },
    {
      title: "Photo",
      field: "photo",
    },
      {
        title: "Admin",
        field: "username",
      },
    {
      title: "Date",
      field: "createdAt",
    }
  ];

      const [data, setdata]= useState([])
      useEffect(() => {
        const fetchNews = async () => {
            const res = await axiosInstance.get('/posts')
            setdata(res.data)
            console.log(res.data)

        } 
        fetchNews();
    }, [])
   
   
   
    const handlePost = async () => { 
        const res = await axiosInstance.post('/posts', { 
          title:titleRef.current.value,
          desc:descRef.current.value,
          photo:UrlRef.current.value,
        })
        titleRef.current.value=''
        descRef.current.value=''
        UrlRef.current.value=''
        setStatus(res.data.status)
      
    }
    
    return(
        <div className='leads_wrapper'>
            <div className='top'>
                <p className='posts_title'>Posts</p>
                
            </div>
            <div className='bottom'>
            <MaterialTable 
                title="" 
                data={data} 
                columns={columns}
                options={{ search: true, paging: true,  exportButton: true }}
               
             />

        
            </div>
            <div className='write_posts'>
              <p className='posts_title'>Create a Post</p>
              <p id = 'status'>{status}</p>
              <div className='write_container'>
                <input placeholder='title' type='text' className='inputs' ref={titleRef}></input>
                <input placeholder='URL of your image' type='text' className='inputs' ref = {UrlRef}></input>
                <textarea className='text_input' placeholder='Tell us your fascinating story' ref = {descRef}></textarea>
                <button id ='submit' onClick={handlePost}>Submit</button>
              </div>
            </div>
        </div>
    )
}