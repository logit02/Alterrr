import Post from './post'
import './FullNews.css'
import { useState , useEffect} from 'react'
import axios from 'axios'
import { axiosInstance } from '../../../config'
import Pagination from './pagination'
import ReactLoading from 'react-loading';

export default function FullNews(){
    const [isLoading, setLoading] = useState(true)
    const [news, setNews] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [ postsPerPage] = useState(9);
    const indexofLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexofLastPost - postsPerPage;
    const currentPosts = news.slice(indexOfFirstPost, indexofLastPost);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const Myitems = ({news, isLoading}) => {
        return (
           isLoading ? (
                <div className='div_spin' ><ReactLoading type='spokes' color='grey' height={'100%'} width={'100%'} className='spin' /></div>
           ) : (
               
            news.map((n) =>(
                <Post newss ={n} />))
           )
        )
    }
    useEffect(() => {
    const fetchNews = async () => {
        const res = await axiosInstance.get('/news')
        setNews(res.data)
        setLoading(false)
    } 
     fetchNews();
    },[])

    return(
        <div className='news'>
            <div id='right_bar'>
             <Myitems isLoading = {isLoading} news={currentPosts} />
             
             </div>
             <div className='bottom'>
             <Pagination postsPerPage={postsPerPage} totalPosts={news.length} paginate={paginate} />
             </div>
             
        </div>
)}