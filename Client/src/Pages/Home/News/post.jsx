import "./post.css";
import {Link} from 'react-router-dom'

  export default function Post( {newss} ) {
    return (
      <div className="post">
        
       
        {newss.photo ? (
                <img src={newss.photo} alt='logo' className="postImg"/>
                ) : <img  src={'https://images.pexels.com/photos/785418/pexels-photo-785418.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'} alt='logo' className="postImg"/> }
        
        <div className="postInfo">
          <div className="post-link">
             <Link className="postTitle" to={`/news/${newss._id} `}> 
           {newss.title}
              </Link>
            </div>
          
          
          <span className="postDate"><p>12.12.21</p></span>
        </div>
        <p className="postDesc">{newss.desc}</p>
      </div>
    );
  }