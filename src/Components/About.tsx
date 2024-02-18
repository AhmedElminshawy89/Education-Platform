import { Link } from 'react-router-dom'
import about from '../assets/Images/about.png'
import about2 from '../assets/Images/about2.png'
const About = () => {
  return (
    <div className="md:px-14 p-4 max-w-screen-lg md:mx-auto mt-[120px]" id='about'>
      <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
        <div className='md:w-1/2 w-100'>
            <img src={about}/>
        </div>
        <div className='md:w-2/4 w-100'>
            <h2 className='md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal'>
                We have been improving our product <span className=' text-secondary'> for many years.</span> 
            </h2>
            <p className='text-tartiary text-lg mb-7'>A good example of a paragraph contains a topic conclusion.'There are many different kinds of animals that live in China.</p>
            <Link to='/category' className='btn-primary'>Get Started</Link>
        </div>
      </div>
      <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-8 mt-[100px]'>
      <div className='md:w-1/2 w-100'>
            <img src={about2}/>
        </div>
        <div className='md:w-2/4 w-100'>
            <h2 className='md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal'>
            You can Practice at any <span className=' text-secondary'>time convinent for you.</span> 
            </h2>
            <p className='text-tartiary text-lg mb-7'>A good example of a paragraph contains a topic conclusion.'There are many different kinds of animals that live in China.</p>
            <Link to='/category' className='btn-primary'>Get Started</Link>
        </div>
      </div>
    </div>
  )
}

export default About
