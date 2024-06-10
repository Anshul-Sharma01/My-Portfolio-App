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
            <section className="flex justify-center items-center hddn_class h-100vh">
                <div className="w-1/2 p-8 flex gap-8 ml-12 justify-center items-center">
                    <div className='flex flex-col justify-center items-center mt-5  mr-2 '>
                        <div className='w-5 h-5 rounded-full bg-white'></div>
                        <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-white to-black" ></div>
                    </div>
                    <div className='flex flex-col gap-4 justify-center items-center text-justify'>
                        <h1 className="text-6xl font-sans font-bold hddn_class ml-0">
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
                <div className="hero_second_section w-1/2">
                    <img src="src/assets/coder_kid.png" alt="" />
                </div>
            </section>
        </>
    );
}

export default Hero;
