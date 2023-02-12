import { BsFillArrowUpCircleFill } from 'react-icons/bs'
import { useState } from 'react';

const BackToTopButton = () => {

    const [toTop, setToTop] = useState(false);

    window.addEventListener("scroll", () => {
        window.scrollY > 100 ? setToTop(true) : setToTop(false);
    })

    const handleScrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        toTop ? <button className="fixed bottom-5 right-3 text-4xl text-teal-600" id="top_button" onClick={handleScrollUp}><BsFillArrowUpCircleFill /></button> : null
    )
}

export default BackToTopButton;