import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const links = ["Home", "About", "Projects", "About"];

    const handleNav = () => {
        setNav(!nav);
    }

    return (
        <div className="flex p-4 justify-between">
            <h1 className="font-bold text-2xl">LOGO</h1>
            <div onClick={handleNav}>
                {nav ? <AiOutlineClose className='md:hidden'/> : <AiOutlineMenu className='md:hidden'/>}
            </div>

            {/* mobile navbar */}
            <div className={nav ? "fixed h-full border-r border-r-gray-800 w-[60%]" : "fixed -left-96"}>
                <ul className="pt-24">
{links.map(link => 
                    <li className="p-5 border-b">{link}</li>
)}
                </ul>
            </div>

            {/* desktop navbar */}
            <div className='hidden py-1 md:flex'>
                <ul className="flex">
{links.map(link => 
                    <li className='px-4'>{link}</li>
)}
                </ul>
            </div>
            
        </div>
    )
}

export default Navbar;