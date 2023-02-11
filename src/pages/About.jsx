import SectionTitle from "../components/SectionTitle";
import programmerImg from "../assets/programmer.png"

const About = () => {
    return (
        <div className="flex flex-col items-center p-10 lg:py-16 bg-gray-200/50" id="about">
            <SectionTitle title="ABOUT ME" />
            <div className="flex justify-center items-center flex-wrap max-w-6xl md:gap-10">
                <img src={programmerImg} alt="" className="mb-10 md:max-w-md lg:flex-1"/>
                <p className="lg:flex-1 leading-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex repellendus id eius, tempora temporibus quaerat hic harum asperiores veritatis voluptates repudiandae nesciunt eos mollitia magnam laborum doloremque adipisci? Autem, quidem repudiandae ab unde sit mollitia quam. Saepe, harum repellendus fugit recusandae suscipit a fugiat earum temporibus id totam, expedita, quam rerum. Quidem ab harum assumenda, ullam facilis porro magni ex optio officiis excepturi aut eius amet maiores, officia ducimus soluta voluptate? Libero, quod possimus facilis ullam nobis laborum voluptatibus enim.</p>
            </div>
        </div>
    )
}

export default About;