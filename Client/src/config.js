import axios from "axios"
export const axiosInstance = axios.create({
    baseURL : "http://localhost:5000/backend/"
    })
    // baseURL : !process.env.heroku ?  "http://localhost:5000/" : "https://alteringapp.herokuapp.com/backend/"
  //  baseURL : (process.env.LOCAL_URL !==undefined) ? process.env.LOCAL_URL : "https://alteringapp.herokuapp.com/backend/"