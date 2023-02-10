import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";
import website from '../assets/Website.jpg';
import { AiOutlineLaptop, AiOutlineGithub } from 'react-icons/ai';

const projects = [
    {
        title: "Anime Listing Website",
        image: website,
        tech: ["Node.js", "MySQL", "jQuery", "EJS"],
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia culpa itaque eaque impedit fugiat unde voluptas numquam eligendi, laudantium nobis."
    }, {
        title: "Personal Portfolio",
        image: website,
        tech: ["React.js", "Tailwind CSS"],
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia culpa itaque eaque impedit fugiat unde voluptas numquam eligendi, laudantium nobis."
    }, {
        title: "Anime Listing Website",
        image: website,
        tech: ["Node.js", "MySQL", "jQuery", "EJS"],
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia culpa itaque eaque impedit fugiat unde voluptas numquam eligendi, laudantium nobis."
    }
    
]

const Projects = () => {
    return (
        <div className="flex p-10 flex-col items-center border=">
            <SectionTitle title="MY PROJECTS"/>
            <div className="md:flex md:gap-5 md:flex-wrap max-w-7xl justify-center">
                {projects.map(project => 
                   
                <div className="flex flex-col items-center text-center p-7 max-w-sm mb-8 shadow-2xl shadow-gray-400">
                    <img src={project.image} alt="" className="w-56" />
                    <h3 className="mt-4 text-xl font-medium">{project.title}</h3>
                    <div className="my-4">
                    {project.tech.map(tech => 
                        <span className="p-1.5 mx-1 bg-gray-800 rounded-lg text-white font-medium text-sm">{tech}</span>
                    )}
                    </div>
                    <p>{project.description}</p>
                        <div className="mt-5 flex gap-4">
                            <Button title="Live Demo" icon={<AiOutlineLaptop className="inline-block"/>} />
                            <Button title="Code" icon={<AiOutlineGithub className="inline-block"/>} />
                        </div>
                </div>
                )}
                
            </div>
            
        </div>
    )
}

export default Projects;