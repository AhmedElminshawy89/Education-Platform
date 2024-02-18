import { motion } from "framer-motion"
import { IBaner } from "../Interface"
import { fadeIn } from "../Utils/Animation"
import { Link } from "react-router-dom"

const Banner = ({src,Title,Description,Fbtn,Secbtn}:IBaner) => {
  return (
    <div className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-24 ">
        <div className='gradientBg rounded-xl rounded-br-[100px] px-4 py-9'>
            <div className='flex flex-col md:flex-row-reverse items-center justify-between gap-10'> 
            <motion.div
                variants={fadeIn({ direction: 'down', delay: 0.2 })}
                initial='hidden'
                animate='show' // Use 'animate' instead of 'whileInView'
                viewport={{ once: false, amount: 0.7 }}
                >
                <img src={src} alt='' className='lg:h-[360px]' />
            </motion.div>
             <motion.div
                variants={fadeIn({ direction: 'up', delay: 0.2 })}
                initial='hidden'
                animate='show' 
                viewport={{ once: false, amount: 0.7 }}
                className='md:w-3/5'>
                    <h2 className='md:text-7xl text-4xl font-bold text-white mb-6 leading-relaxed'>{Title}</h2>
                    <p className='text-txt text-2xl mb-6'>{Description}</p>
                    <div className='space-x-6 space-y-4'>
                        <Link to={'/category'} className='btn-primary'>{Fbtn}</Link>
                        <button className='btn-primary'>{Secbtn}</button>
                    </div>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Banner
