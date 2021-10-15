import inesa from '../../Assets/Images/inesa.jpg'
import edik from '../../Assets/Images/edik.jpeg'
import garik from '../../Assets/Images/garik.jpg'
import './about.css'
export default function About(){
    return(
        <div id='about_wrapper'>
            <p id ='about_title'>Our team</p>
            <div id='people'>
                <div className='partition'>
                    <div className='people_items'>
                        <div className='change_image'></div>
                        {/*<img src={inesa} alt='inesa' className='img_people'/>*/}
                        <p className='name'>Inesa Toroyan</p>
                        <p className='position'>Full Stack Developer</p>
                    </div>
                    <div className='people_items'>
                        <div className='change_image_garik'></div>
                        <p className='name'>Garik Hayrapetyan</p>
                        <p className='position'>Graphic and UI/UX designer</p>
                        
                    </div>
                </div>
                <div className='partition'>
                    <div className='people_items'>
                        <div className='change_image_edik'></div>
                        <p className='name'>Edik Kazaryan</p>
                        <p className='position'>CI/CD specialist</p>
                    </div>
                    <div className='people_items'>
                        <div className='change_image_suren'></div>
                        <p className='name'>Suren Parsyan</p>
                        <p className='position'>Content Creator</p>
                    </div>
                </div>
            </div>
        </div>
    )
}