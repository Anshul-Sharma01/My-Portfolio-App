import React from "react";
import { FaRegArrowAltCircleUp } from "react-icons/fa";



function Footer(){
    return(
        <>
            <ul className=" bg-black p-10 text-white flex justify-center align-items gap-10 hover:cursor-pointer">
                <li>Made with ❤️ </li>
                <li>&copy; 2024 Anshul Sharma</li>
                <li className="text-2xl " title="Back to top"><a href="#hero"><FaRegArrowAltCircleUp/></a></li>
            </ul>
        </>
    )
}

export default Footer;

