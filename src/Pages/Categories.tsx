import TabsRender from '../Components/tabs/Tabs'
import bg from '../assets/Images/bg.jpeg'
const Categories = () => {
  return (
    <div className='mt-[75px]'>
        <div className='relative'>
            <img src={bg} className='w-[100%] h-[350px] object-cover'/>
            <p className='absolute text-white top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 md:text-8xl text-4xl font-extrabold'>Courses</p>
        </div>
        <div>
            <TabsRender/>
        </div>
    </div>
  )
}

export default Categories
