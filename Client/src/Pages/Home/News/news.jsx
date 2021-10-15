import './news.css'
import Post from './post'

export default function News({news}){

    return(
        <div className='news-all'>
            <div className='news-text'>
                <p className='news-title'> World wide IT news </p>
                <p className='news-desc'>We prepared some high-quality web-pages, that you can use in your projects. When you have to create your website you can use these templates.</p>
            </div>
            <div className='news-items'>
                { news.map((n) =>(
                    <Post newss ={n} />
                ))}
            </div>
            <button className='read-more-button' onClick={()=> window.location='/news'}>Read More</button>
        </div>

    )
}