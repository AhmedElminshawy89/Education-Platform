import feature from '../assets/Images/features.png'
const Feature = () => {
  return (
    <div className="md:px-14 px-4 my-24 max-w-screen-2xl mx-auto" id='feature'>
      <div className="flex lg:flex-row flex-col items-start justify-between">
        <div className="lg:w-1/4 mr-8">
            <h3 className="text-3xl text-primary lg:w-1/2 font-bold mb-3">Why we are better than others</h3>
            <p className="text-base text-tartiary">A simple paragraph is comprised of three major components. The first sentence, which is often a declarative sentence, is called the “topic sentence.”</p>
        </div>
        <div className="w-full lg:w-3/4 flex">
            <div className='grid md:grid-cols-3 sm:grid-cols-1 items-start md:gap-12 gap-8 mt-8'>
                <div className='bg-[rgba(255,255,255,.04)] rounded-[35px] h-96 shadow-2xl p-8  flex justify-center items-center flex-wrap
                hover:-translate-y-4  transition-all duration-300 cursor-pointer'>
                    <img src={feature} alt="" />
                    <h5 className='text-2xl font-semibold text-primary px-5 text-center mt-5'>Conventient study schedule</h5>
                </div>
                <div className='bg-[rgba(255,255,255,.04)] rounded-[35px] h-96 shadow-2xl p-8 flex justify-center items-center flex-wrap
                hover:-translate-y-4  transition-all duration-300 cursor-pointer md:mt-16'>
                    <img src={feature} alt="" />
                    <h5 className='text-2xl font-semibold text-primary px-5 text-center mt-5'>Conventient study schedule</h5>
                </div>
                <div className='bg-[rgba(255,255,255,.04)] rounded-[35px] h-96 shadow-2xl p-8  flex justify-center items-center flex-wrap
                hover:-translate-y-4  transition-all duration-300 cursor-pointer'>
                    <img src={feature} alt="" />
                    <h5 className='text-2xl font-semibold text-primary px-5 text-center mt-5'>Conventient study schedule</h5>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Feature
