import headerImg from '../assets/header.jpg'
import { AiFillLinkedin, AiFillGithub, AiFillFileText } from 'react-icons/ai';
import Button from '../components/Button';

const links = [ 
    { icon: AiFillLinkedin, url: "https://www.linkedin.com/in/lynyrd-andres", key: "linkedin" },
    { icon: AiFillGithub, url: "https://github.com/KafeinFaita", key: "github" }
]

const Header = () => {
    return (
        <div className='text-center md:text-left' style={{backgroundImage: `url(${headerImg})`}} id="home">
            <div className='h-full w-full backdrop-blur bg-white/10 p-14 md:flex md:justify-center lg:py-28'>
                <div className='text-white'>
                    <p className='text-lg'>Hi, I'm</p>
                    <h1 className="text-5xl font-extrabold py-5 md:text-6xl">Lynyrd <span className='text-teal-500'>Andres</span></h1>
                    <h2 className='text-lg font-bold md:text-xl'>...and I'm a <span className='text-teal-500'>Fullstack Developer</span></h2>
                    <div className='flex text-4xl gap-10 justify-center my-7 md:justify-start'>
                        
                        {links.map(link => {
                            let Icon = link.icon;
                            return (
                                <a href={link.url} className='hover:text-teal-500' target="_blank" key={link.key}><Icon /></a>)
                            })
                        }
                        
                    </div>  
                    <p className='leading-8 max-w-4xl mb-5'>Passionate web developer with a strong foundation in frontend and backend development. Possesses a keen eye for detail, strong work ethic, and a willingness to learn and grow. Committed to creating engaging web experiences and contributing to the development of dynamic and innovative websites.</p>
                    <Button title="Resume" icon={<AiFillFileText className='inline-block'/>} url="https://drive.google.com/file/d/1LI8Rt0C5tVI1zFP_s2688DEwRySE__HV/view?usp=sharing" /> 
                </div>
                
            </div>
            
        </div>
    );
}

export default Header;