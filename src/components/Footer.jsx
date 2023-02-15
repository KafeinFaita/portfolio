import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

const links = [ 
    { icon: AiFillLinkedin, url: "https://www.linkedin.com/in/lynyrd-andres", key: "linkedin" },
    { icon: AiFillGithub, url: "https://github.com/KafeinFaita", key: "github" }
]

const Footer = () => {
    return (
        <div className='flex flex-col items-center bg-gray-700 text-white py-5'>
            <div className='flex text-2xl gap-4 mb-2'>
                {links.map(link => {
                    let Icon = link.icon;
                    return (
                        <a href={link.url} target="_blank" key={link.key}><Icon /></a>
                    )
                })}
            </div>
            <p>Portfolio by Lynyrd Andres</p>
        </div>
    )
}

export default Footer;