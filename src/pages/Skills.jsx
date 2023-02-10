import SectionTitle from '../components/SectionTitle';
import Html5Plain from 'devicons-react/lib/icons/Html5Plain';
import Css3Plain from 'devicons-react/lib/icons/Css3Plain';
import JavascriptOriginal from 'devicons-react/lib/icons/JavascriptOriginal';
import NodejsOriginal from 'devicons-react/lib/icons/NodejsOriginal';
import ExpressOriginal from 'devicons-react/lib/icons/ExpressOriginal';
import ReactOriginal from 'devicons-react/lib/icons/ReactOriginal';
import MysqlOriginal from 'devicons-react/lib/icons/MysqlOriginal';
import SqliteOriginal from 'devicons-react/lib/icons/SqliteOriginal';
import RubyOriginal from 'devicons-react/lib/icons/RubyOriginal';
import RailsPlainWordmark from 'devicons-react/lib/icons/RailsPlainWordmark';
import MongodbOriginal from 'devicons-react/lib/icons/MongodbOriginal';
import GitOriginal from 'devicons-react/lib/icons/GitOriginal';
import TailwindcssPlain from 'devicons-react/lib/icons/TailwindcssPlain';
import BootstrapOriginal from 'devicons-react/lib/icons/BootstrapOriginal';
import PhpOriginal from 'devicons-react/lib/icons/PhpOriginal';
import CodeigniterPlain from 'devicons-react/lib/icons/CodeigniterPlain';
import SocketioOriginal from 'devicons-react/lib/icons/SocketioOriginal';
import JqueryOriginal from 'devicons-react/lib/icons/JqueryOriginal';
import WordpressPlain from 'devicons-react/lib/icons/WordpressPlain';
import GithubOriginal from 'devicons-react/lib/icons/GithubOriginal';

const Skills = () => {

    const skills = [
        { icon: Html5Plain, name: "HTML " },
        { icon: Css3Plain, name: "CSS" },
        { icon: JavascriptOriginal, name: "Javascript" },
        { icon: NodejsOriginal, name: "Node.js" },
        { icon: ExpressOriginal, name: "Express.js" }, 
        { icon: ReactOriginal, name: "React.js" },
        { icon: MysqlOriginal, name: "MySQL" },
        { icon: SqliteOriginal, name: "SQLite" },
        { icon: RubyOriginal, name: "Ruby" },
        { icon: RailsPlainWordmark, name: "Rails" },
        { icon: MongodbOriginal, name: "MongoDB" },
        { icon: GitOriginal, name: "Git" },
        { icon: TailwindcssPlain, name: "Tailwind CSS" },
        { icon: BootstrapOriginal, name: "Bootstrap" },
        { icon: PhpOriginal, name: "PHP" },
        { icon: CodeigniterPlain, name: "CodeIgniter" },
        { icon: SocketioOriginal, name: "Socket.io" },
        { icon: JqueryOriginal, name: "jQuery" },
        { icon: WordpressPlain, name: "Wordpress" },
        { icon: GithubOriginal, name: "Github" }
    ]

    return (
        <div className="p-10 flex flex-col items-center" id="skills">
            <SectionTitle title="MY SKILLS" />
            <div className="flex justify-center flex-wrap gap-10 max-w-5xl">
            {skills.map(skill => {
                let Icon = skill.icon;
                return (
                <div className='flex flex-col items-center w-16 text-center'>
                    <Icon size="50"/>
                    <p className='pt-2'>{skill.name}</p>
                </div>
                ) 
            })}
            </div>
            
            
        </div>
    )
}

export default Skills;