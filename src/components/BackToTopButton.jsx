import { BsFillArrowUpCircleFill } from 'react-icons/bs'
import { useEffect, useState } from 'react';

const BackToTopButton = () => {

    const [toTop, setToTop] = useState(false);

    // useEffect(() => {
        
    // }, [])

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
        toTop ? <span className="fixed bottom-8 right-8 text-4xl text-teal-600" id="top_button" onClick={handleScrollUp}><BsFillArrowUpCircleFill /></span> : null
    )
}

export default BackToTopButton;