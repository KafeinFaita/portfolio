import SectionTitle from "../components/SectionTitle";
import programmerImg from "../assets/programmer.png"

const About = () => {
    return (
        <div className="flex flex-col items-center p-10 lg:py-16 bg-gray-200/50" id="about">
            <SectionTitle title="ABOUT ME" />
            <div className="flex justify-center items-center flex-wrap max-w-6xl md:gap-10">
                <img src={programmerImg} alt="" className="mb-10 md:max-w-md lg:flex-1"/>
                <p className="lg:flex-1 leading-10">As a career-shifter with a passion for coding, I am driven to pursue a career in the industry. Through my dedication to learning and practicing various programming languages, I have developed a strong foundation in both frontend and backend web development and am eager to apply my skills in a professional setting. I am a motivated and detail-oriented individual with a strong work ethic and a willingness to learn and grow within a team. I am excited to contribute my talents and gain hands-on experience in a web developer position.</p>
            </div>
        </div>
    )
}

export default About;