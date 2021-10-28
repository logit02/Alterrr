import './contact.css'
import { useRef, useState } from 'react'
import axios from 'axios';
import { axiosInstance } from '../../../config';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Contact(){
    const nameRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();
    const messageRef = useRef();
    const notify = (mess) => toast(mess);

    const handleContact = async () => {
       await axiosInstance.post('/contact', {
            name:nameRef.current.value,
            email:emailRef.current.value,
            phone:phoneRef.current.value,
            message:messageRef.current.value
        }).then((res)=> {
            console.log(res.data)
            const mess = res.data
            nameRef.current.value=''
            emailRef.current.value=''
            phoneRef.current.value=''
            messageRef.current.value=''
            notify(mess)
            
        })
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
                <ToastContainer />
                <button id='submit-contact' onClick={handleContact}>Submit</button>
            </div>
           {/* <img src = {logo} alt='logo' className='big-logo'/> */}
           <div className='logo-parts'>
          
           </div>
        </div>
    )
}