
function Navbar(){
    return(
        <>
            <div className="hidden md:flex justify-around p-5 mb-2 items-center sticky top-0 left-0 right-0 z-10 bg-black bg-opacity-50 backdrop-blur-md ">
                <div></div>
                <ul className="sm:flex  justify-between gap-10 list-none">
                    <li className="hover:border-b-4 hover:border-b-blue-400 duration-75 hover:text-lg"><a href="#">Home</a></li>
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
                    <li className="hover:border-b-4 hover:border-b-blue-400 duration-75 hover:text-lg"><a href="#">About</a></li>
                    <li className="hover:border-b-4 hover:border-b-blue-400 duration-75 hover:text-lg"><a href="#">Contact Me</a></li>
                </ul>

                <div className='flex justify-between gap-5'>
                    <button className="cursor-pointer text-white font-bold relative text-[14px] w-[9em] h-[3em] text-center bg-gradient-to-r from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90% bg-[length:400%] rounded-[30px] z-10 hover:animate-gradient-xy hover:bg-[length:100%] before:content-[''] before:absolute before:-top-[5px] before:-bottom-[5px] before:-left-[5px] before:-right-[5px] before:bg-gradient-to-r before:from-violet-500 before:from-10% before:via-sky-500 before:via-30% before:to-pink-500 before:bg-[length:400%] before:-z-10 before:rounded-[35px] before:hover:blur-xl before:transition-all before:ease-in-out before:duration-[1s] before:hover:bg-[length:10%] active:bg-violet-700 focus:ring-violet-700">
                        <a>Projects</a>
                    </button>

                    <button className="invert hover:rotate-2 brightness-150 dark:brightness-100 group hover:shadow-lg hover:shadow-yellow-700/60 transition ease-in-out hover:scale-105 p-1 rounded-xl bg-gradient-to-br from-yellow-800 via-yellow-600 to-yellow-800 hover:from-yellow-700 hover:via-yellow-800 hover:to-yellow-600">
                        <a href='src\assets\Data Scientist Resume.pdf' download="Anshul Resume.pdf">
                        <div className="px-6 py-2 backdrop-blur-xl bg-black/80 rounded-xl font-bold w-full h-full"><div className="group-hover:scale-100 flex group-hover:text-yellow-500 text-yellow-600 gap-1 ">
                            <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" className="w-6 h-6 stroke-yellow-600 group-hover:stroke-yellow-500 group-hover:stroke-{1.99}">
                                <path
                                strokeLinecap = "round"
                                strokeLinejoin = "round"
                                d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
                                ></path>
                            </svg>
                            Resume 
                        </div>
                    </div>
                    </a>
                    </button>

                </div>




            </div>
        </>
    )
}

export default Navbar;