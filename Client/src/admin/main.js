import './main.css'
import Home from './Components/Home/home'
import News from './Components/News/news'
import Sidebar from './Components/Sidebar/sidebar'
import Contacts from './Components/Contacts/contacts'
import Posts from './Components/Posts/posts'
import Users from './Components/Users/users'
import {Switch, Route, Redirect} from 'react-router-dom'
export default function Main(){
    const token = localStorage.getItem('token')
    return(
    
    <div className='main_container'>
           <div className='main_left'>
              <Sidebar />
           </div>
           <div className='main_right'>
               <Switch>
                <Route exact path = '/admin/home'>
                    <Home />
                </Route>
                <Route exact path = '/admin/news'>
                    <News />
                </Route>
                <Route exact path = '/admin/contacts'>
                    <Contacts />
                </Route>
                <Route exact path = '/admin/posts'>
                    <Posts />
                </Route>
                <Route exact path = '/admin/settings'>
                    <Home />
                </Route>
                <Route exact path = '/admin/users'>
                    <Users />
                </Route>
                <Redirect from ='/' to='/admin/home'></Redirect>
               </Switch>
            </div>
            <div className='panel'>
                <div className='panel_wraper'>
                    <p id='greet_user'>Hi, Inesa</p>
                    <div className='live_users'>
                        <p id='lives'>See who's live now</p>
                    </div>
                </div>
            </div>
       </div>
     
        
    )
}