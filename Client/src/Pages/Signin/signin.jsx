import './signin.css'
import {useRef, useState, useContext} from 'react'
import {axiosInstance} from '../../config'
import Cookies from 'js-cookie'
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { update } from "../../redux/userSlice"
import { Link } from 'react-router-dom';


export default function Signin(){
    const name = useSelector(state => state.user.name)
    const dispatch = useDispatch();
    const [error,setError] = useState("");
    const usernameRef = useRef();
    const passwordRef = useRef();
    const companyNameRef = useRef();
    const emailRef=useRef();
    const passwordcheclRef = useRef();
    const sizeRef=useRef();
    
    const history = useHistory();
    
    const userfocusHandle =() => {
        setError("")
        usernameRef.current.value= '';    
    }
    const passfocusHandle = () => {
        setError("")
        passwordRef.current.value= '';
    }


    const handleSignin = async (e) => {
        setError("");
        e.preventDefault(); 
        
        //login & password validation 
        let regex = new RegExp("^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$");
        var passregex = new RegExp("(?=.{8,20})");
        const user = usernameRef.current.value; 
        const pass = passwordRef.current.value;
        if(regex.test(user)) {
            if(passregex.test(pass)){
                setError("");
                try{
                    const res = await axiosInstance.post("/users/login", {
                        username:user, 
                        password:pass,
                    }).then (data => {
                        
                        const accessToken = data.data.accessToken;
                        console.log(accessToken)
                        dispatch(update({
                            name:user,
                            isLoggedIn:true
                        }))
                        Cookies.set("access", "Bearer " + accessToken)
                        history.push('/dashboard')
                    })
                }catch(err){
                   console.log(err)
                }
            }
        }else{
            setError("The inputs do not match the conditions");
        }
    }
    return(
        <div className='signin'>
            <div className='text-area'>
                <p id='title'>Join the largest hiring community</p>
                <p id='desc'>The most important part of the Startup is the samples. The samples form a set of 25 usable pages you can use as is or you can add new blocks.</p>
                <button id='learn-more'>Learn More</button>
            </div>
            <div className='form-area'>
                <div className='wh-area'>
                    <div className='top'>
                        <p id='wh-title'>Sign Up As a Collaborator </p>
                        <p className='error'>{error}</p>
                    </div>
                    <div className='buttons'>
                        <input className='sign-buttons' placeholder='Company Name' type='text' ref = {companyNameRef} onFocus={userfocusHandle} />
                        <input className='sign-buttons' placeholder='Your name' type='text' ref = {usernameRef} onFocus={userfocusHandle} />
                        <input className='sign-buttons' placeholder='Company Size' type='number' min='0'ref = {sizeRef} onFocus={userfocusHandle} />
                        <input className='sign-buttons' placeholder='Work email' type='email' ref = {emailRef} onFocus={userfocusHandle} />
                        <input className='sign-buttons' placeholder='Your password' type='password' ref = {passwordRef}  onFocus={passfocusHandle}/>
                        <input className='sign-buttons' placeholder='Repeat the password' type='password' ref = {passwordcheclRef}  onFocus={passfocusHandle}/>
                    </div>
                    <div className='logs'>
                        <button id='signup' onClick = {handleSignin}>Join</button>
                    </div>
                    <div className='haveacc'>
                        <p id='haveaccount'>Do have an accout?</p>
                        <Link id='signin' to ='/business'>Sign in </Link>
                    </div>
                    
                </div>
                
            </div>  
        </div>
    )
}

/* 

await axios.delete("/users/"+ id, {
    headers: {authorization: "Bearer" + user.accessToken };
})
*/