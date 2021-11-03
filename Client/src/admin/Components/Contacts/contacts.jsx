import './contacts.css'
import MaterialTable from "material-table";
import { useState, useEffect } from 'react';
import axios from 'axios'
import { axiosInstance } from '../../../config';
export default function Contacts(){
    const columns = [
        {
          title: "Name",
          field: "name",
        },
        {
          title: "Email",
          field: "email",
        },
        {
          title: "Phone",
          field: "phone",
        },
        {
          title: "Message",
          field: "message",
        },
        {
            title: "Date",
            field: "createdAt",
          }
      ];
      const [data, setdata]= useState([])

  useEffect(() => {
    const fetchNews = async () => {
    const res = await axiosInstance.get('/contact')
      setdata(res.data)
    } 
    fetchNews();  
    }, [])

    

    return(
        <div className='contacts_wrapper'>
            <div className='top'>
                <p className='contacts_title'>Contacts</p>
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