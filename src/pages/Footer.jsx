import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

const Footer = () => {
    return (
        <div className='flex flex-col items-center bg-gray-800 text-white py-5'>
            <div className='flex text-2xl gap-4 mb-2'>
                <AiFillLinkedin />
                <AiFillGithub />
            </div>
            <p>Portfolio by Lynyrd Andres</p>
        </div>
    )
}

export default Footer;