import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";
import website from "../assets/Website.jpg";
import yourAnimeList from "../assets/your_anime_list.png";
import capcsi from "../assets/capcsi.png";
import portfolio from "../assets/portfolio.png";
import { AiOutlineLaptop, AiOutlineGithub } from "react-icons/ai";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const projects = [
    {
        title: "YourAnimeList",
        image: yourAnimeList,
        tech: ["Node.js", "MySQL", "jQuery", "Jikan API"],
        url: "https://anime-listing.onrender.com/",
        githubUrl: "https://github.com/KafeinFaita/anime-listing",
        description: "A full stack web application to demonstrate my knowledge in backend development using Node.js. The application consumes a third-party API to provide data for users. Allows users to create an account and add various anime shows to their personal list to keep track, rate, and review shows that they have watched."
    }, {
        title: "Personal Portfolio",
        image: portfolio,
        tech: ["React.js", "Tailwind CSS", "SwiperJS"],
        url: "https://lynyrdandres.onrender.com/",
        githubUrl: "https://github.com/KafeinFaita/portfolio",
        description: "My personal portfolio website, built using React.js and Tailwind CSS. Built from the ground up with responsiveness and simplicity in mind. It's the current web page you're in right now, and the slider in this section is built using the SwiperJS library."
    }, {
        title: "Christian School International",
        image: capcsi,
        url: "https://www.capcsi.com/",
        tech: ["Wordpress", "Divi Builder"],
        description: "A website for a private school client, built using WordPress with Divi Builder and Gravity Forms plugin. Features include custom roles for each school personnel, form handling, student enrollment processing, document file generation and printing."
    }, 
    {
        title: "Loan Management System (ongoing)",
        image: website,
        url: "https://andres-loaning-app.onrender.com/dashboard/",
        tech: ["Node.js", "React.js", "Tailwind CSS", "MongoDB"],
        description: "Still under development, my end goal for this web app is a management system to track loans."
    }
    
]

const Projects = () => {
    return (
        <div className="flex p-10 flex-col items-center lg:py-16" id="projects">
            <SectionTitle title="MY PROJECTS"/>
            <div className="md:flex md:gap-10 md:flex-wrap max-w-[1600px]">
                <Swiper 
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    navigation
                    slidesPerView={1}
                    spaceBetween={10}
                    breakpoints={{
                        800: {
                            slidesPerView: 2    
                        },
                        1200: {
                            slidesPerView: 3    
                        },
                    }}
                    className="w-screen py-5"
                >

                
                {projects.map(project => 
                    <SwiperSlide>
                    <div className="flex flex-col items-center text-center p-7 max-w-sm shadow-gray-400 shadow-lg h-full mx-auto" key={project.title}>
                        <img src={project.image} alt="" className="w-56" />
                        <h3 className="mt-4 text-xl font-medium">{project.title}</h3>
                        <div className="my-4">
                        {project.tech.map(tech => 
                            <span className="p-1.5 mx-1 bg-gray-700 rounded-lg text-white font-medium text-sm" key={tech}>{tech}</span>
                        )}
                        </div>
                        <p className="mb-5 text-left">{project.description}</p>
                            <div className="flex gap-4 mt-auto">
                                <Button title="Live Demo" icon={<AiOutlineLaptop className="inline-block" />} url={project.url} />

                                {project.title !== "Christian School International" ? <Button title="Code" icon={<AiOutlineGithub className="inline-block"/>} url={project.githubUrl} /> : null}
                                
                            </div>
                    </div>
                    </SwiperSlide>
                )}
                </Swiper>
                
            </div>
            
        </div>
    )
}

export default Projects;