import './land.css'
import TypeWriterEffect from 'react-typewriter-effect';
import  {useTranslation} from 'react-i18next'


const myRef = document.querySelector('.land-desc')
export default function Land(){

   
    return(
    <div className='land-all'>
        <div className='back'>
            <div className='text-value'>
                <p className='land-title'>Alterrr- the largest tech and hiring platform in Armenia !</p>
               
            <TypeWriterEffect
                    textStyle={{
                    fontFamily: 'Poppins-medium',
                    color: '#FFFFFF',
                    fontWeight: 500,
                    fontSize: '1.5em',
                    }}
                    startDelay={100}
                    cursorColor="#FFFFFF"
                    multiText={[
                    'Welcome to Alterrr!',
                    'We Build,We Aspire,We Teach.',
                    'Let your amazing journey begin <3 ',
                    ]}
                    loop={true}
                    nextTextDelay={800}
                    typeSpeed={60}
                />
            </div> 
            <div className='buttons-land'>
                <button className='button-land'>Browse</button>
                <button className='button-land'>Learn More</button>
            </div>
        </div>
        
    </div>
    )
}