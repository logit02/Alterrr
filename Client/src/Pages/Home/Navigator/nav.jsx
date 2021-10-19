import './nav.css'
import logo from '../../../Assets/Images/logo.png'
import {Link} from 'react-router-dom'
import { Sling as Hamburger } from 'hamburger-react'
import { useState } from 'react'


export default function Navigator(){
    const [isOpen, setOpen] = useState(false)
    const signup = () => {
        window.location='/signin'
    }
    <Hamburger onToggle={toggled => {
        if (toggled) {
           setOpen(!isOpen)
        }
      }} />
    return(
    <div className={!isOpen ? 'nav-all' : "nav-falled"}>
       
        <div className='nav-left'>
            <div className={!isOpen ? 'nav-logo': "hidden-logo"}>
                <img src = {logo} alt='logo' className='logo'/> 
            </div>
            <div className={!isOpen ? 'nav-items' : "items-menu"}>
                <Link  to='/home'className={!isOpen? 'link' : "link-menu"}>Home</Link>
                <Link to='/about' className={!isOpen? 'link' : "link-menu"}>About Us</Link>
                <Link to='/allnews' className={!isOpen? 'link' : "link-menu"}>News</Link>
                <Link to='/allnews' className={!isOpen? 'link' : "link-menu"}>Blog</Link>
                <Link to='/job' className={!isOpen? 'link' : "link-menu"}>Job</Link>

            </div>
        </div>
        <div className='nav-right'>
            <div className='burger'>
                <Hamburger direction="right" color='#1E0E62' toggled={isOpen} toggle={setOpen}/>
            </div>
       

        
        <button className='sign-up' onClick = {signup}>Post a job</button>
       
        </div>
    </div>)
}