import './work.css'
import Vacant from './Vacant'
import {useState} from 'react'

export default function Work ({jobs}){ 
    
    const [jobtitle, setjobtitle] = useState(
        {
            "Software Developer":false,
            "DevOps":false,
            "Backend Developer":false,
            "QA Engineer":false,
            "Front-end Developer":false,
            "React Developer":false,
            "Java Engineer":false,
            "designer":false
        }
    )

    const handleCheck = e => {
        const {name} = e.target;
        if(jobtitle[name]===false){
            setjobtitle(prevState =>(
                {
                ...prevState,
                [name]:true    
                }));
            
        }else{
            setjobtitle(prevState =>(
                {
                ...prevState,
                [name]:false    
                }));
        }
       

        }
  
    return (
    <div id='work'>
        <div id ='sidebar'>
            <div id='main_sidebar'>
                <div id='search-div'>
                    <input placeholder='search' type='text' id='search'></input>
                </div>
                <div id='cat'>
                    <p className='check_title'>Experience level</p>
                    <div><input type='checkbox'  name='QA Engineer'/> Intern</div>
                    <div><input type='checkbox' name='Software Developer'/> Junior</div>
                    <div><input type='checkbox'  name='DevOps'/> Middle</div>
                   <div><input type='checkbox'  name='Backend Developer'/> Senior</div>
                    
                   
                   
                </div>
                <div id='cat'>
                    <p className='check_title'>Job titles</p>
                    <div><input type='checkbox' name='Software Developer' onChange={handleCheck}/> Software Developer</div>
                    <div><input type='checkbox'  name='DevOps' onChange={handleCheck}/> DevOps</div>
                   <div><input type='checkbox'  name='Backend Developer' onChange={handleCheck}/> Backend Developer</div>
                    <div><input type='checkbox'  name='QA Engineer' onChange={handleCheck}/> QA Engineer</div>
                   <div><input type='checkbox'  name='Front-end Developer' onChange={handleCheck}/> Front-end Developer</div>
                   <div><input type='checkbox'  name='React Developer' onChange={handleCheck}/> React Developer</div>
                    <div><input type='checkbox'  name='Java Engineer' onChange={handleCheck}/> Java Engineer</div>
                    <div><input type='checkbox' name='designer' onChange={handleCheck}/> designer</div>  
                    <button id='filter'>Filter</button>
                </div>
                
               
            </div>
        </div>
        <div id='main'>
            <div id='main_work'>
                 {jobs.map((j) =>(
                <Vacant job ={j} />
            ))}
            

            
            </div>
        </div>
    </div>
    )
}

