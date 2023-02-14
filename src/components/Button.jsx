const Button = ({ title, icon, url }) => {
    return (
        <a className="bg-teal-600 text-white p-2" href={url} target="_blank">{icon ? icon : null} {title}</a>
    )
}

export default Button;