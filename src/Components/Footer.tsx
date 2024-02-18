import { Image } from "@chakra-ui/react";
import logo from '../assets/Images/logo.png'

const Footer = () => {
  return (
    <div className="bg-[#010851] md:px-14 p-4  max-w-screen-2xl text-white  mx-auto">
      <div className="my-12 flex flex-col md:flex-row gap-5">
        <div className="md:w-1/2 space-y-8">
            <a href="/" className="text-2xl font-semibold flex items-center space-x-3 text-primary uppercase">
                <Image src={logo} className="w-10 inline-block items-center"/>
                <span className="text-white">edp</span>
            </a>
            <p className="md:w-1/2">A simple paragraph is comprised of three major components. The first sentence, which is often a declarative sentence.</p>
            <div>
                <input type="email" placeholder="Your email..." name="email" id="email" 
                className="bg-[#9a7af159] py-2 px-4 rounded-md focus:outline-none"/>
                <input type="submit" value={'Subscribe'}
                className="bg-secondary py-2 px-8 -ml-2 rounded-xl focus:outline-none hover:bg-white hover:text-primary transition-all duration-300 cursor-pointer"/>
            </div>
        </div>
        <div className=" md:w-1/2 flex flex-col md:flex-row flex-wrap justify-between gap-8 items-start">
            <div  className=" space-y-4 mt-5">
                <h4 className="text-xl">Platform</h4>
                <ul className=" space-y-3">
                    <a href="/" className="block hover:text-gray-300">Overview</a>
                    <a href="/" className="block hover:text-gray-300">About</a>
                    <a href="/" className="block hover:text-gray-300">Features</a>
                    <a href="/" className="block hover:text-gray-300">Pricing</a>
                </ul>
            </div>
            <div  className=" space-y-4 mt-5">
                <h4 className="text-xl">Help</h4>
                <ul className=" space-y-3">
                    <a href="/" className="block hover:text-gray-300">How does it works?</a>
                    <a href="/" className="block hover:text-gray-300">Where to ask question?</a>
                    <a href="/" className="block hover:text-gray-300">How to play?</a>
                    <a href="/" className="block hover:text-gray-300">What is needed for this?</a>
                </ul>
            </div>
            <div  className=" space-y-4 mt-5">
                <h4 className="text-xl">Contacts</h4>
                <ul className=" space-y-3">
                    <a href="/" className="block hover:text-gray-300">(012) 1234-567-890</a>
                    <a href="/" className="block hover:text-gray-300">123 xyz xyz</a>
                    <a href="/" className="block hover:text-gray-300">qwuerybaihefv, qiwu - hrebcl</a>
                    <a href="/" className="block hover:text-gray-300">095467</a>
                </ul>
            </div>
        </div>
      </div>
      <hr />
      <div className="text-center my-4">@ XYZ 20XX --- 20XX. All rights reserved.</div>
    </div>
  )
}

export default Footer
