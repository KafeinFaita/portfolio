import Html5Plain from 'devicons-react/lib/icons/Html5Plain';
import Css3Plain from 'devicons-react/lib/icons/Css3Plain';
import JavascriptOriginal from 'devicons-react/lib/icons/JavascriptOriginal';
import NodejsOriginal from 'devicons-react/lib/icons/NodejsOriginal';





const Skills = () => {

    const skills = [
        { icon: Html5Plain, name: "HTML " },
        { icon: Css3Plain, name: "CSS" },
        { icon: JavascriptOriginal, name: "Javascript" },
        { icon: NodejsOriginal, name: "Node.js" }
    ]

    return (
        <div className="p-10">
            <h2 className="text-xl font-bold">MY SKILLS</h2>
            <div className="flex">
            {skills.map(skill => {
                let Icon = skill.icon;
                return (
                <div className='flex flex-col items-center'>
                    <Icon className='h-10' size="50"/>
                    <p>{skill.name}</p>
                </div>
                ) 
            })}
            </div>
            
            
        </div>
    )
}

export default Skills;