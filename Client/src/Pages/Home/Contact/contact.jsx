import './contact.css'
import { useRef } from 'react'
import axios from 'axios';
import { axiosInstance } from '../../../config';
export default function Contact(){
    const nameRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();
    const messageRef = useRef();

    const handleContact = async () => {
        const res = await axiosInstance.post('/contact', {
            name:nameRef.current.value,
            email:emailRef.current.value,
            phone:phoneRef.current.value,
            message:messageRef.current.value
        })
        nameRef.current.value=''
        emailRef.current.value=''
        phoneRef.current.value=''
        messageRef.current.value=''
        
}
    return(
        <div className='contact-all'>
            <div className='text-part-contact'>
                <p className='title-contact'>
                    Get in touch with us
                </p>
                <p className='desc-contact'>
                    Please submit your information and our team will get in touch with you
                </p>
                <div className='buttons-part'>
                    <div className='buttons-contact'>
                        <input className='button-contact' type='text' placeholder='Your name' ref = {nameRef}/>
                        <input className='button-contact' type='text' placeholder='Your email'ref = {emailRef}></input>
                    </div>
                    <div className='buttons-contact'>
                        <input className='button-contact' type='text' placeholder=' Your phone number' ref = {phoneRef}/>
                    </div>
                        <textarea className='button-contact-message' type='text' placeholder=' Write your message here' ref = {messageRef}/>
                </div>
                <button id='submit-contact' onClick={handleContact}>Submit</button>
            </div>
           {/* <img src = {logo} alt='logo' className='big-logo'/> */}
           <div className='logo-parts'>
          
           </div>
        </div>
    )
}