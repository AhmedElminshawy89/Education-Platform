import { BiArrowBack } from "react-icons/bi"
import { FaCloudDownloadAlt } from "react-icons/fa"
import { FaHeart, FaPlay } from "react-icons/fa6"
import { Link } from "react-router-dom"
import v from '../assets/Images/Preparatory-stage.jpg'
import { useState } from "react"
import video from '../assets/Images/video.mp4'
import { CgSearch } from "react-icons/cg"


const DetailsCourse = () => {

    const [play,setPlay] = useState(false)

  return (
    <div className='mt-[95px]'>
        <div className='md:px-14 p-4 mx-auto mb-8'>
            <div className='flex flex-wrap mb-6 gap-2 bg-main rounded min-sm:justify-between justify-evenly border border-gray-800 p-6'>
                <Link to={`/category`} className='md:text-xl text-primary text-sm flex gap-3 items-center font-bold text-dryGray'>
                    <BiArrowBack className='text-2xl text-primary'/>
                    New Course
                </Link>
                <div className='flex justify-end sm:w-auto w-full gap-5'>
                    <button className='bg-[#414040] hover:text-red-500 transitions bg-opacity-30 text-white px-4 py-2 rounded text-md'>
                        <FaHeart/>
                    </button>
                    <button className='bg-primary flex items-center  gap-2 hover:bg-transparent hover:text-primary transition-all ease-in-out border border-subMain transitions text-white rounded px-8 py-3 text-sm'>
                        <FaCloudDownloadAlt/> Download
                    </button>
                </div>
            </div>
            <div className="lg:flex justify-between gap-4 block">
                <div className="flex-[1] mb-10">
                    <div>
                        {
                        play ? (
                            <video controls autoPlay={play} className='w-full h-[400px] rounded'>
                                <source src={video} type='video/mp4' title={"Course"}/>
                            </video>
                        ):(
                            <div className='w-full h-[400px] rounded-lg overflow-hidden relative'>
                                <div className='absolute top-0 bottom-0 right-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center'>
                                    <button onClick={()=>setPlay(true)} className='bg-subMain hover:text-main transitions flex justify-center items-center border border-subMain text-white rounded-full w-20 h-20 font-medium text-xl'>
                                        <FaPlay/>    
                                    </button>                        
                                </div>
                                <img src={v} alt={""} className='w-full h-full object-cover rounded-lg ' />
                            </div>
                        )
                        }
                    </div>
                    <div className="bg-gray-200 w-full p-4 mt-2 rounded-md">
                        <p className="md:text-2xl text-lg text-primary font-bold">Learning reminders</p>
                        <p className="text-base text-tartiary font-bold my-4">
                        In this video, we will create a collection of react js tabs with dynamic data, it's a 100% responsive react js tabs component with react reusability tabs component
                        </p>
                        <p className="md:text-lg text-primary font-bold">Link:
                         <a className="text-base text-tartiary font-bold" href=" https://www.daulathussain.com"> https://www.daulathussain.com</a>
                         </p>
                    </div>
                </div>
                <div className="md:flex-[.45] flex-1 overflow-y-auto overflow-x-hidden">
                    <div className="relative">
                     <CgSearch className=" text-xl text-primary font-bold absolute top-[38%] transform -translate-x-1/2 -translate-y-1/2 left-4 "/>
                     <input type="text" placeholder="Search here..." className="py-3 px-8 bg-gray-200 outline-none border-none rounded-xl w-full mb-5"/>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="mb-8 flex gap-4">
                            <div className='relative w-[180px] h-[100px] rounded flex-1'>
                                <div className='absolute top-0 bottom-0 right-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center'>
                                    <button className='bg-subMain hover:text-main transitions flex justify-center items-center border border-subMain text-white rounded-full w-10 h-10 font-medium text-xl'>
                                        <FaPlay/>    
                                    </button>                        
                                </div>
                                <img src={v} alt={""} className='w-full h-full object-cover rounded-lg ' />
                            </div>
                            <div className="flex-[.9]">
                                <p className="text-lg text-primary font-semibold">Introduction(primary stage)</p>
                                <span className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit</span>
                            </div>
                        </div>
                        <div className="mb-8 flex gap-4">
                            <div className='relative w-[180px] h-[100px] rounded flex-1'>
                                <div className='absolute top-0 bottom-0 right-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center'>
                                    <button className='bg-subMain hover:text-main transitions flex justify-center items-center border border-subMain text-white rounded-full w-10 h-10 font-medium text-xl'>
                                        <FaPlay/>    
                                    </button>                        
                                </div>
                                <img src={v} alt={""} className='w-full h-full object-cover rounded-lg ' />
                            </div>
                            <div className="flex-[.9]">
                                <p className="text-lg text-primary font-semibold">Introduction(primary stage)</p>
                                <span className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit</span>
                            </div>
                        </div>
                        <div className="mb-8 flex gap-4">
                            <div className='relative w-[180px] h-[100px] rounded flex-1'>
                                <div className='absolute top-0 bottom-0 right-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center'>
                                    <button className='bg-subMain hover:text-main transitions flex justify-center items-center border border-subMain text-white rounded-full w-10 h-10 font-medium text-xl'>
                                        <FaPlay/>    
                                    </button>                        
                                </div>
                                <img src={v} alt={""} className='w-full h-full object-cover rounded-lg ' />
                            </div>
                            <div className="flex-[.9]">
                                <p className="text-lg text-primary font-semibold">Introduction(primary stage)</p>
                                <span className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit</span>
                            </div>
                        </div>
                        <div className="mb-8 flex gap-4">
                            <div className='relative w-[180px] h-[100px] rounded flex-1'>
                                <div className='absolute top-0 bottom-0 right-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center'>
                                    <button className='bg-subMain hover:text-main transitions flex justify-center items-center border border-subMain text-white rounded-full w-10 h-10 font-medium text-xl'>
                                        <FaPlay/>    
                                    </button>                        
                                </div>
                                <img src={v} alt={""} className='w-full h-full object-cover rounded-lg ' />
                            </div>
                            <div className="flex-[.9]">
                                <p className="text-lg text-primary font-semibold">Introduction(primary stage)</p>
                                <span className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit</span>
                            </div>
                        </div>
                        <div className="mb-8 flex gap-4">
                            <div className='relative w-[180px] h-[100px] rounded flex-1'>
                                <div className='absolute top-0 bottom-0 right-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center'>
                                    <button className='bg-subMain hover:text-main transitions flex justify-center items-center border border-subMain text-white rounded-full w-10 h-10 font-medium text-xl'>
                                        <FaPlay/>    
                                    </button>                        
                                </div>
                                <img src={v} alt={""} className='w-full h-full object-cover rounded-lg ' />
                            </div>
                            <div className="flex-[.9]">
                                <p className="text-lg text-primary font-semibold">Introduction(primary stage)</p>
                                <span className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit</span>
                            </div>
                        </div>
                        <div className="mb-8 flex gap-4">
                            <div className='relative w-[180px] h-[100px] rounded flex-1'>
                                <div className='absolute top-0 bottom-0 right-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center'>
                                    <button className='bg-subMain hover:text-main transitions flex justify-center items-center border border-subMain text-white rounded-full w-10 h-10 font-medium text-xl'>
                                        <FaPlay/>    
                                    </button>                        
                                </div>
                                <img src={v} alt={""} className='w-full h-full object-cover rounded-lg ' />
                            </div>
                            <div className="flex-[.9]">
                                <p className="text-lg text-primary font-semibold">Introduction(primary stage)</p>
                                <span className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DetailsCourse