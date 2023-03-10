import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const links = [
        { name: "Home", url: "#home" },
        { name: "Skills", url: "#skills" },
        { name: "Projects", url: "#projects" },
        { name: "About", url: "#about" }
    ];

    const handleNav = () => {
        setNav(!nav);
    }

    return (
        <div className="flex p-4 justify-between bg-gray-700 text-white">
            <h1 className="font-bold text-2xl">{`<LYNYRD ANDRES />`}</h1>
            <div onClick={handleNav}>
                {nav ? <AiOutlineClose className='md:hidden'/> : <AiOutlineMenu className='md:hidden'/>}
            </div>

            {/* mobile navbar */}
            <div className={nav ? "fixed h-full border-r border-r-gray-800 w-[60%] bg-slate-800 -left-1 -top-4 z-10" : "fixed -left-96"}>
                <ul className="pt-24">
{links.map(link => 
                    <li className="p-5 border-b" key={link.name}><a href={link.url} onClick={handleNav}>{link.name}</a></li>
)}
                </ul>
            </div>

            {/* desktop navbar */}
            <div className='hidden py-1 md:flex'>
                <ul className="flex">
{links.map(link => 
                    <li className='px-4 font-medium hover:font-bold' key={link.name}><a href={link.url}>{link.name}</a></li>
)}
                </ul>
            </div>
            
        </div>
    )
}

export default Navbar;