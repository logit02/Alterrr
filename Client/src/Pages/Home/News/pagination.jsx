import './pagination.css'
import next from '../../../admin/icons/next.png'
import previous from '../../../admin/icons/previous.png'
const Pagination = ({postsPerPage, totalPosts, paginate}) => {
    console.log(postsPerPage  , totalPosts)
    const pageNumbers = [];
    for ( let i =1 ; i<=Math.ceil(totalPosts/postsPerPage); i++){ 
        pageNumbers.push(i);
    }
    console.log(pageNumbers)
   
    return(
        <div className='pagination'>
            <div className='page_container'>
            
                {pageNumbers.map((n) => 
                    <li key={n} className='page-item'>
                        <p onClick = {() => paginate(n)} className='page-link'>{n}</p>
                    </li>
                )}
                 <img src = {next} alt='next' className='icons'/>
            </div>
        </div>
    )
}

export default Pagination;

