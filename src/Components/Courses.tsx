import { IPackages } from "../Interface";
import done from '../assets/Images/done.png'
import primary from '../assets/Images/Primary-stage.jpg'
import prepare from '../assets/Images/Preparatory-stage.jpg'
import high from '../assets/Images/High-school.jpg'
import { Link } from "react-router-dom";
const Pricing = () => {


    const packages:IPackages[] = [
        {img:primary,name:'Primary stage',describtion:'A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    ,green:done},
        {img:prepare,name:'Preparatory stage',describtion:'A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    ,green:done},
        {img:high,name:'High school',describtion:'A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    ,green:done}
    ]


  return (
    <div  id="courses">
    <div className="md:px-14 p-4 max-w-2xl mx-auto mt-12">
      <div className="text-center">
            <h1 className="md:text-5xl text-3xl font-extrabold text-primary mb-2">Here are all our plans</h1>
            <p className=" text-tartiary md:w-5/6 mx-auto px-4">A simple paragraph is comprised of three major components. The which is often a declarative sentence.</p>
      </div>
    </div>
    <div className="md:px-14 p-4 mx-auto mb-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-8 md:w-100 mx-auto">
            {packages.map((pkg,idx)=>(
                <div className="border py-10 md:px-6 px-4 rounded-lg shadow-xl" key={idx}>
                    <img src={pkg.img}/>
                    <h3 className="text-3xl font-bold text-center text-primary mt-5">{pkg.name}</h3>
                    <p className="my-5 text-tartiary text-center">{pkg.describtion}</p>
                    <ul className="mt-4 space-y-2 px-4">
                        <li className="flex gap-3 items-center">
                            <img src={pkg.green} className="w-5 h-5" alt="" />
                            Videos of Lessons
                        </li>
                        <li className="flex gap-3 items-center">
                            <img src={pkg.green} className="w-5 h-5" alt="" />
                            Homework check
                        </li>
                        <li className="flex gap-3 items-center">
                            <img src={pkg.green} className="w-5 h-5" alt="" />
                            Additional practical task
                        </li>
                        <li className="flex gap-3 items-center">
                            <img src={pkg.green} className="w-5 h-5" alt="" />
                            Monthly conferences 
                        </li>
                        <li className="flex gap-3 items-center">
                            <img src={pkg.green} className="w-5 h-5" alt="" />
                            Personal advice from teachers
                        </li>
                    </ul>
                    <div className="w-full mx-auto mt-8 flex items-center justify-center">
                      <Link to='/category' className="btn-primary">Get started</Link>
                    </div>
                </div>
            ))}
        </div>
    </div>
    </div>
    
  )
}

export default Pricing
