import './collabs.css'
import armath from '../../../Assets/Images/armath.png'
import uate from '../../../Assets/Images/UATE.png'
export default function Collabs(){
    return(
        <div className='collabs'>
           <p>Our supporters</p>
           <h1>Folks that trust and sponsor us</h1>
           <img src = {armath} alt='armath' id='armath'/>
           <img src={uate} alt='uate' id='uate' />
        </div>
    )
}