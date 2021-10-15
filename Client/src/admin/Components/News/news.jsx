import './news.css'
import MaterialTable from "material-table";
import { useState, useEffect } from 'react';
import axios from 'axios'
import { axiosInstance } from '../../../config';
export default function Leads(){
  
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

      const [data, setdata]= useState([])
      useEffect(() => {
        const fetchNews = async () => {
            const res = await axiosInstance.get('/news')
            setdata(res.data)
            console.log(res.data)
        } 
        fetchNews();
    }, [])
    console.log(data)
    
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
                <input placeholder='title' type='text' className='inputs'></input>
                <input placeholder='URL of your image' type='text' className='inputs'></input>
                <select className='dropdown'>
                  <option value="Armenia" className='options'>Armenia</option>
                  <option value="Worldwide" className='options'>Worldwide</option>
                 
                </select>
                <textarea className='text_input' placeholder='Tell us your fascinating story'></textarea>
                <button id ='submit'>Submit</button>
              </div>
            </div>
        </div>
    )
}