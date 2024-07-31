
function Navbar(){
    return(
        <>
            <div className="fixed flex justify-around p-5 mb-2 w-full items-center  top-0 z-10 bg-black bg-opacity-50 backdrop-blur-md ">
                <div className="hidden md:block"></div>
                <ul className="flex justify-between gap-10 list-none">
                    <li className="hover:border-b-4 hover:border-b-blue-400 duration-75 hover:text-lg"><a>Home</a></li>
                    <li className="hover:border-b-4 hover:border-b-blue-400 duration-75 hover:text-lg">
                        <a href="https://github.com/Anshul-Sharma01" target='_blank' rel='noreferrer'>
                            Github
                        </a>
                    </li>
                    <li className="hover:border-b-4 hover:border-b-blue-400 duration-75 hover:text-lg">
                        <a href='https://www.linkedin.com/in/anshul-sharma-8a678725a/' target='_blank' rel="noreferrer">
                            LinkedIn
                        </a>
                    </li>
                    <li className="hover:border-b-4 hidden md:block hover:border-b-blue-400 duration-75 hover:text-lg"><a href="#about">About</a></li>
                    <li className="hover:border-b-4 hidden md:block hover:border-b-blue-400 duration-75 hover:text-lg"><a href="#contact">Contact Me</a></li>
                </ul>

                <div className='hidden md:flex justify-between gap-5 '>
                    <button className="border-solid border-2 border-white font-semibold px-6 py-2 rounded-lg hover:text-blue-500 hover:bg-white">
                        <a href="#projects">My Projects</a>
                    </button>
                            <a href="https://drive.google.com/file/d/1TDvoPbcJsrPbBx90ausd8LuZRGIvHkSg/view?usp=sharing" className="border-solid border-2 border-blue-400 px-6 py-2 rounded-lg hover:text-white hover:bg-blue-500" target="_blank">
                                <button >
                                    My Resume
                                </button>
                            </a>
                </div>




            </div>
        </>
    )
}

export default Navbar;