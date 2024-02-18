import { useState } from "react"
import { IPackages } from "../Interface";
import done from '../assets/Images/done.png'
const Pricing = () => {

    const [isYearly , setIsYearly] = useState<boolean>(false);

    const packages:IPackages[] = [
        {name:'Primary stage',monthlyPrice:20,yearlyPrice:150,describtion:'A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    ,green:done},
        {name:'Advance',monthlyPrice:40,yearlyPrice:300,describtion:'A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    ,green:done},
        {name:'Premium',monthlyPrice:60,yearlyPrice:550,describtion:'A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    ,green:done}
    ]

    const toggle = () => {
        setIsYearly((prev)=>!prev)
    }

  return (
    <div  id="pricing">
    <div className="md:px-14 p-4 max-w-2xl mx-auto mt-12">
      <div className="text-center">
            <h1 className="md:text-5xl text-3xl font-extrabold text-primary mb-2">Here are all our plans</h1>
            <p className=" text-tartiary md:w-5/6 mx-auto px-4">A simple paragraph is comprised of three major components. The which is often a declarative sentence.</p>
           <div className="mt-16">
                <label htmlFor="toggle" className="inline-flex items-center cursor-pointer">
                    <span className="mr-8 text-2xl font-semibold text-primary">Monthly</span>
                    <div className={`w-14 h-6 ${isYearly?' bg-secondary':'bg-gray-300 '} rounded-full transition-all duration-300 ease-in-out`}>
                        <div className={`w-6 h-6 rounded-full bg-white
                         ${isYearly?'ml-8 bg-gray-300':'bg-primary '}  transition-all duration-300 ease-in-out`}>
                        </div>
                    </div>
                    <span className="ml-8 text-2xl font-semibold text-primary">Yearly</span>
                </label>
                <input type="checkbox" id="toggle" className="hidden" checked={isYearly} onChange={toggle}/>
           </div>
      </div>
    </div>
    <div className="md:px-14 p-4 mx-auto mb-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-8 md:w-100 mx-auto">
            {packages.map((pkg,idx)=>(
                <div className="border py-10 md:px-6 px-4 rounded-lg shadow-xl" key={idx}>
                    <h3 className="text-3xl font-bold text-center text-primary">{pkg.name}</h3>
                    <p className="my-5 text-tartiary text-center">{pkg.describtion}</p>
                    <p className="mt-5 text-center text-secondary text-4xl font-bold"> 
                        {isYearly?`$${pkg.yearlyPrice}`:`$${pkg.monthlyPrice}`}
                        <span className="text-base font-medium text-tartiary">/{isYearly?'Year':'Month'}</span>
                    </p>
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
                      <button className="btn-primary">Get started</button>
                    </div>
                </div>
            ))}
        </div>
    </div>
    </div>
    
  )
}

export default Pricing
