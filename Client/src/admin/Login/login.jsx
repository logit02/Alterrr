import './login.css'
import lander from '../../Assets/Images/landerr.png'
import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import {axiosInstance} from '../../config'
import {update} from '../../redux/adminSlice'
import Cookies from 'js-cookie'
export default function Login () {
    const [error,setError] = useState("");
    const dispatch = useDispatch();
    const usernameRef = useRef();
    const passwordRef = useRef();
    const handleSubmit = async () => {
        const user = usernameRef.current.value; 
        const pass = passwordRef.current.value;
        try{
            const res = await axiosInstance.post("/admin/login", {
                username:user, 
                password:pass,
            }).then (data => {
                const accessToken = data.data.accessToken;
               console.log(accessToken)
                localStorage.setItem('token', accessToken);
                dispatch(update({
                    name:user,
                    isLoggedIn:true
                }))
                
            })
        }catch(err){
           console.log(err)
        }
    }
    return(
        <div id='wrap_login'>
            <div id='right'>
                <div id='form'>
                    <div id='form_wrap'>
                    <p id='title_login'>Login to Alterrr</p>
                    <p>{error}</p>
                    <div id='input_wrapper'>
                        <input placeholder='username' type='text' className='input' ref = {usernameRef}></input>
                        <input placeholder='password' type='password' className='input' ref = {passwordRef}></input>
                    </div>
                    <button  className='input' id='submit_button' onClick={handleSubmit}>Login</button>
                    </div>
                </div>
            </div>
          
        </div>
    )
}