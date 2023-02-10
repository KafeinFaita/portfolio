const Button = ({ title, icon }) => {
    return (
        <a className="bg-gray-800 text-white p-2" href="#">{icon ? icon : null} {title}</a>
    )
}

export default Button;