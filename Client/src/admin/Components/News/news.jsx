import './news.css'
import MaterialTable from "material-table";
import { useState, useEffect, useRef } from 'react';
import axios from 'axios'
import { axiosInstance } from '../../../config';
//notifs
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Editor, EditorState} from 'draft-js';

//main

export default function Leads(){
  const titleRef = useRef(); 
  const imageRef = useRef(); 
  const descRef = useRef();
  const [mess, setMess] = useState('')
  const notify = () => toast(mess);
  const alertmess = () => toast("No data provided")
  const [editorState, setEditorState] = useState(() =>
  EditorState.createEmpty(),
)
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
      title: "Date",
      field: "createdAt",
    }
  ];
  const styles = {
    editor: {
      border: '1px solid gray',
      minHeight: '6em'
    }
  };
  const [data, setdata]= useState([])
  useEffect(() => {
    const fetchNews = async () => {
      const res = await axiosInstance.get('/news')
      setdata(res.data)
    } 
    fetchNews();
    }, [])
    
  const handleNews = async () => {

    const newsdata = {
      title : titleRef.current.value,
      desc : descRef.current.value,
      photo : imageRef.current.value
    }
    const config = {
      headers: {"authorization":localStorage.getItem('token')}
    }
    if(Boolean(newsdata.title) && Boolean(newsdata.desc) && Boolean(newsdata.photo)){
    await axiosInstance.post('/news', newsdata, config)

    .then((res) => {
      console.log(res)
      setMess(res.data.message)
      titleRef.current.value=''
      descRef.current.value=''
      imageRef.current.value=''
      notify();
    })
  }else{
    alertmess();
  }
  }
    return(
        <div className='leads_wrapper'>
          
            <div className='top'>
                <p className='news_title'>News</p>
            </div>
            <div className='bottom'>
            <MaterialTable 
                title="" 
                data={data} 
                columns={columns}
                options={{ search: true, paging: true,  exportButton: true }}
             />
            </div>
            <div className='write_news'>
              <p className='news_title'>Create a News</p>
              <div className='write_container'>
                <input placeholder='title' type='text' className='inputs' ref={titleRef}></input>
                <input placeholder='URL of your image' type='text' className='inputs' ref={imageRef}></input>
                <select className='dropdown'>
                  <option value="Armenia" className='options'>Armenia</option>
                  <option value="Worldwide" className='options'>Worldwide</option>
                 
                </select>
                <textarea className='text_input' placeholder='Tell us your fascinating story' ref={descRef}></textarea>

                <ToastContainer />
                <button id ='submit' onClick={handleNews}>Submit</button>
              </div>
            </div>
        </div>
    )
}