import MaterialTable from "material-table";
import { useState, useEffect , useRef} from 'react';
import './jobs.css'

export default function Job(){
    const columns = [
        {
          title: "title",
          field: "Job_title",
        },
        {
          title: "Deadline",
          field: "deadline",
        },
        {
          title: "Location",
          field: "location",
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
    return( 
    <div className='job_wrapper'>
        <div className='job_top'>
            <p className='job_title'>Jobs</p>
        </div>
        <div className='job_bottom'>
    


        </div>
        <div className='write_jobs'>
            <p className='job_title'>Post a job</p>
            <div className='job_container'>
                <input placeholder='Job position' type='text' className='inputs' ></input>
                <input placeholder='Deadline' type='text' className='inputs' ></input>
                <input placeholder='Location' type='text' className='inputs' ></input>
                <input placeholder='Logo image URL' type='text' className='inputs' ></input>
                <input placeholder='Company image URL' type='text' className='inputs' ></input>
                <textarea className='text_input' placeholder='Job description' ></textarea>
                <button id ='submit' >Submit</button>
            </div>
        </div>
    </div>
    )
}