import "../hook.css";
import Typed from 'typed.js';
import { useEffect, useRef } from 'react';
import useIntersectionObserver from "../../customHooks/useIntersectionObserver.js";

function Hero() {
    useIntersectionObserver(".hddn_class");

    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Programmer", "Developer"],
            startDelay: 150,
            typeSpeed: 200,
            backDelay: 150,
            backSpeed: 150,
            smartBackspace: true,
            showCursor: true,
            loop: true,
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <>
            <section className="flex flex-col sm:flex-row justify-center items-center hddn_class h-screen gap-8 sm:gap-12 pt-10 sm:pt-20">
                <div className="w-full sm:w-1/2 p-4 sm:p-8 flex flex-col sm:flex-row gap-4 sm:gap-8 ml-0 sm:ml-8 justify-center items-center">
                    <div className='flex flex-col justify-center items-center mt-5  mr-2 '>
                        <div className='w-5 h-5 rounded-full bg-white'></div>
                        <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-white to-black"></div>
                    </div>
                    <div className='flex flex-col gap-4 justify-center items-center text-center sm:text-justify'>
                        <h1 className="text-4xl sm:text-6xl font-sans font-bold hddn_class ml-0">
                            Hi, I am <span className="text-blue-300"> Anshul</span>
                        </h1>
                        <div className="container flex flex-col">
                            <p className="text-2xl">
                                <h1>
                                    I am a passionate&nbsp;
                                    <span className='text-blue-300 font-bold' ref={el}></span><br />
                                    with a love for turning ideas
                                    <br />into reality through programming...
                                </h1>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="hero_second_section w-full sm:w-1/2 flex justify-center mt-8 sm:mt-0">
                    <img src="https://i.pinimg.com/736x/51/87/bc/5187bc8637e7f1cab56309059539555a.jpg" className="rounded-full w-40 sm:w-80" alt="" />
                </div>
            </section>
        </>
    );
}

export default Hero;
