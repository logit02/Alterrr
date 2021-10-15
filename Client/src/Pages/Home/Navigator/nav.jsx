import './nav.css'
import logo from '../../../Assets/Images/logo.png'
import {Link} from 'react-router-dom'
import { Sling as Hamburger } from 'hamburger-react'
import { useState } from 'react'


export default function Navigator(){
    const [isOpen, setOpen] = useState(false)
    const signin = () => {
        window.location='/signin'
    }
    const signup = () => {
        window.location='/boot'
    }
    

    <Hamburger onToggle={toggled => {
        if (toggled) {
           // open a 
           setOpen(!isOpen)
        }
        
      }} />

   
    return(
    <div className={!isOpen ? 'nav-all' : "nav-falled"}>
       
        <div className='nav-left'>
            <div className={!isOpen ? 'nav-logo': "hidden-logo"}>
                <img src = {logo} alt='logo' className='logo'/>
                {/*<p>alterrr.com</p>*/} 
            </div>
            <div className={!isOpen ? 'nav-items' : "items-menu"}>
                <Link  to='/home'className={!isOpen? 'link' : "link-menu"}>Գլխավոր</Link>
                <Link to='/about' className={!isOpen? 'link' : "link-menu"}>Մեր Մասին</Link>
                <Link to='/allnews' className={!isOpen? 'link' : "link-menu"}>Նորություններ</Link>
                <Link to='/allnews' className={!isOpen? 'link' : "link-menu"}>Բլոգ</Link>
                <Link to='/job' className={!isOpen? 'link' : "link-menu"}>ԱՇխատանք</Link>

            </div>
        </div>
        <div className='nav-right'>
            <div className='burger'>
                <Hamburger direction="right" color='#1E0E62' toggled={isOpen} toggle={setOpen}/>
            </div>
       

        <button onClick = {signin} className='sign-in'>Մուտք</button>
        <button className='sign-up' onClick = {signup}>Գրանցվել</button>
       
        </div>
    </div>)
}