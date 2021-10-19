import './App.css';
//Components
import Navigator from './Pages/Home/Navigator/nav'
import Land from './Pages/Home/Landing_page/land'
import News from "./Pages/Home/News/news"
import Question from './Pages/Home/Questions/question'
import Socials from './Pages/Home/Socials/socials'
import Contact from './Pages/Home/Contact/contact'
import Collabs from './Pages/Home/Collabs/collabs'
import Footer from './Pages/Home/Footer/footer'
import Signin from './Pages/Signin/signin'
import Job from './Pages/Job/job'
import FullNews from './Pages/Home/News/FullNews'
import Single from './Pages/Home/News/single'
import SingleWork from './Pages/Job/Work/singleWork'
import Main from './admin/main.js'
import News_lander from './Pages/Home/News/News_lander'
import Login from './admin/Login/login'
import About from './Pages/AboutUs/about'
import Account from './Pages/Business/Account/account'
//= imports from react
import {useState, useEffect} from 'react'
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'



//redux

import {axiosInstance} from './config.js'
import {useSelector} from 'react-redux'


//function main 

function App() {
  const [news, setNews] = useState([])
  //const cook = document.cookie.split(`${'token'}=`)[1]
  const token = localStorage.getItem('token');
  const user = useSelector(state => state.user)
  const admin = useSelector(state => state.admin)
  

 useEffect( () => {
  const fetchNews = async () => {
      const res = await axiosInstance.get('/news')
      setNews(res.data.slice(0,3))
  } 
   fetchNews();
  
},[])




  return (
    <Router>
      <Switch>
        <Route path='/home'>
          <div className="App">
              <Navigator/>
              <Land />
              <News news={news}/>
              <Question />
              <Socials />
              <Contact />
              <Collabs />
              <Footer />
          </div>
        </Route>
        <Route path='/about'>
              <Navigator />
              <About />
        </Route>
        <Route exact path='/news/:id'>
              <Navigator />
              <Single />
        </Route>
        <Route path='/allnews'>
              <Navigator />
              <News_lander />
              <FullNews />
        </Route>
        <Route exact path='/job/:id'>
              <Navigator />
              <SingleWork />
        </Route>
        <Route path='/job'>
              <Navigator />
              <Job />
        </Route>
        
        <Route path='/signin'>
              <Signin />
        </Route>
        <Route path='/admin'>
            {token ? <Main /> : <Login /> }
        </Route>
        <Route path='/business'>
           <Account />
        </Route>
      
        <Redirect from ='/' to='/home'></Redirect>
      </Switch>
    </Router>
  );
}

export default App;
