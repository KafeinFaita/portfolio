import picture from '../assets/blank-profile-picture.webp';
import { AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube, AiFillGithub } from 'react-icons/ai';

const Home = () => {

    console.log(picture)
    return (
        <div className='flex flex-col items-center text-center md:flex-row md:justify-center p-5'>
            
            <div className='my-8 w-60 h-60 rounded-full overflow-hidden md:my-0'>
                <img src={picture} alt=""/>
            </div> 
            <div className='mb-10 px-5'>
                <h1 className='text-4xl font-bold'>Hi, I'm Lynyrd Andres</h1>
                <h2 className='text-lg'>Fullstack Developer</h2>
                <div className='flex text-gray-600 text-4xl gap-10 justify-center my-7'>
                    <AiFillLinkedin />
                    <AiFillTwitterCircle />
                    <AiFillYoutube />
                    <AiFillGithub />
                </div>   
                <p className='leading-8 max-w-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus cupiditate a maiores molestiae praesentium vitae numquam accusantium voluptatem distinctio earum minus, placeat quod, iste quisquam quidem quo aliquid optio incidunt.</p>
            </div>
            
        </div>
    );
}

export default Home;