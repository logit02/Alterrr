import './Vacant.css'
import logo  from '../../../Assets/Images/logo2.png'
import calendar from '../../../Assets/Icons/calendar.png'
import location from '../../../Assets/Icons/placeholder.png'
import {Link} from 'react-router-dom'
export default function Vacant({job}){
    return(
        <div id='vacant'>
            <div id='image_part'>
            {job.photo ? (
                <img src={job.photo} alt='logo' id='logo'/>
                ) : <img src={logo} alt='logo' id='logo'/> }
            </div>
            <div id='text_part'>
                <Link to ={`/job/${job._id}`} id='job_name'>{job.job_title}</Link>
                <p id='company_name'>{job.company_name}</p>
            </div>
            <div id='detail_part'>
                <div>
                    <img src={calendar} alt='calendar' id='calendar'/>
                    <p>1{job.deadline}</p>
                </div>
                <div>
                    <img src={location} alt='location' id='location'/>
                    <p>{job.location}</p>
                </div>
            </div>
            <div id='button_part'>
                <button>Read More</button>
            </div>
        </div>
    )
}

