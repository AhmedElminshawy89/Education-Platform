import {  Image } from "@chakra-ui/react";
import logo from '../assets/Images/logo.png'
import { GrLanguage } from "react-icons/gr";
import { IoMenu } from "react-icons/io5";
import { FaXmark } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";
import { INavItem } from "../Interface";
import {Link} from 'react-scroll'
import { NavLink, useLocation } from "react-router-dom";
// import {SunIcon, MoonIcon } from "@chakra-ui/icons";

const Navbar = () => {

    const location = useLocation()
    const isHomePage = location.pathname === '/';
    // const { colorMode, toggleColorMode } = useColorMode();
    const [openMenu,setOpenMenu] = useState<boolean>(false);
    const menuRef  = useRef<HTMLUListElement>(null);

    const toggleMenu = () => {
        setOpenMenu((prev)=>!prev)
    }

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
          if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
            setOpenMenu(false);
          }
        };
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
          document.removeEventListener('mousedown', handleOutsideClick);
        };
      }, [menuRef, setOpenMenu]);
      
    const navItems:INavItem[]= [
        {link:'Overview',path:'home'},
        {link:'Feature',path:'feature'},
        {link:'About',path:'about'},
        // {link:'Pricing',path:'pricing'}
        {link:'Courses',path:'courses'}
    ]
  return (
    <>
    <nav className="bg-white md:px-14 p-4 border-b  max-w-screen-2xl mx-auto text-primary fixed top-0 right-0 left-0">
        <div className="text-lg container mx-auto flex justify-between items-center font-medium">
            <div className="flex items-center space-x-8">
                <NavLink to="/" className="text-2xl font-semibold flex items-center space-x-3 text-primary uppercase">
                    <Image src={logo} className="w-10 inline-block items-center"/>
                    <span>edp</span>
                </NavLink>
                {isHomePage&&(
                <ul className="md:flex space-x-8 hidden">
                    {navItems.map(({link,path})=>(
                        <Link activeClass="active" spy={true} smooth={true} offset={-100} key={link} to={path} className="block hover:text-gray-300 cursor-pointer">{link}</Link>
                    ))}
                </ul>
                )}
                {/* <Button
              onClick={toggleColorMode}
              _hover={{ bg: "transparent" }}
              outline={"none"}
              backgroundColor={"transparent"}
              display={{ base: "none", md: "flex" }}
            >
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button> */}
            </div>
            <div className="space-x-8 hidden md:flex items-center">
                <a className="hidden lg:flex items-center" href="/">
                    <GrLanguage className="mr-2"/><span className=" hover:text-secondary transition-all duration-300">Language</span>
                </a>
                <NavLink to='/login' className="bg-secondary text-primary py-2 px-4 transition-all duration-300 rounded
                 hover:text-white font-semibold hover:bg-indigo-600">Sign up</NavLink>
            </div>
            <div className="md:hidden">
                <button onClick={toggleMenu} className="text-white focus:outline-none focus:text-gray-300">
                    {openMenu?<FaXmark className="w-8 h-8 text-primary"/>:<IoMenu className="w-8 h-8 text-primary"/>}
                </button>
            </div>
        </div>
    </nav>
    <div ref={menuRef as unknown as React.RefObject<HTMLDivElement>} className={`md:hidden transition-all duration-300 ${openMenu ? 'fixed top-0 right-0 left-0 scale-100  z-10':'scale-0 origin-right'}`}>
        {openMenu&&(
        <ul className={`md:hidden text-xl text-white space-y-4 px-4 pt-24 pb-5 relative bg-secondary ${openMenu?'block fixed top-0 right-0 left-0  z-10':'hidden'}
            transition-all duration-300 transform`}>
            {isHomePage&&(
            navItems.map(({link,path})=>(
                <Link onClick={toggleMenu} activeClass="active" spy={true} smooth={true} offset={-100} key={link} to={path} className="block hover:text-gray-300 cursor-pointer">{link}</Link>
            ))
            )}
            <div className="flex flex-col">
                <a className="flex items-center mb-4" href="/">
                    <GrLanguage className="mr-2"/><span className=" hover:text-primary transition-all duration-300">Language</span>
                </a>
                <NavLink to='/login' className=" text-white text-center bg-primary py-2 px-4 transition-all duration-300 rounded
                 hover:text-white font-semibold hover:bg-indigo-600">Sign up</NavLink>
            </div>
        </ul>  
         )} 
    </div>
    </>
  )
}

export default Navbar