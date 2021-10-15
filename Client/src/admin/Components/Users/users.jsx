import './users.css'
import MaterialTable from "material-table";
import { useState, useEffect } from 'react';
import axios from 'axios'
import { axiosInstance } from '../../../config';

export default function Users(){
   
      const columns = [
        {
          title: "id",
          field: "_id",
        },
        {
          title: "Username",
          field: "username",
        },
        {
          title: "Email",
          field: "email",
        },
        {
          title: "Registered At",
          field: "createdAt",
        }
      ];

      const [data, setdata]= useState([])
      useEffect(() => {
        const fetchNews = async () => {
            const res = await axiosInstance.get('/users')
            setdata(res.data)
            console.log(res.data)
        } 
        fetchNews();
    }, [])
    console.log(data)
    
    return(
        <div className='users_wrapper'>
            <div className='top'>
                <p className='users_title'>Users</p>
            </div>
            <div className='bottom'>
            <MaterialTable 
                title="" 
                data={data} 
                columns={columns}
                options={{ search: true, paging: true,  exportButton: true }}
               
             />
            </div>
            
        </div>
    )
}