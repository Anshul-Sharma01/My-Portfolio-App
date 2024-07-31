import React from "react";
import { FaRegArrowAltCircleUp } from "react-icons/fa";



function Footer(){
    return(
        <>
            <ul className=" bg-black p-10 text-white flex justify-center align-items gap-10 hover:cursor-pointer">
                <li>Made with ❤️ </li>
                <li>&copy; 2024 Anshul Sharma</li>
                <li className="text-2xl " title="Back to top"><a href="#hero"></a></li>
            </ul>

            <a href="#hero" className="md:fixed bottom-0 right-0 p-4 float-right animate-bounce">
                <FaRegArrowAltCircleUp className="transition-all w-14  hover:shadow-sm shadow-lg text-4xl"/>
            </a>
        </>
    )
}

export default Footer;

