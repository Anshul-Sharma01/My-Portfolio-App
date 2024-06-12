import {FaGithub, FaLinkedinIn} from 'react-icons/fa';
import { VscMail } from "react-icons/vsc";

function Contact(){
    return(
        <>
            <div className="m-20 p-20 font-sans border-ridge border-2 flex flex-col gap-10">
                <h1 className="text-center text-2xl bg-white text-black p-3 font-bold rounded-lg mt-1">Contact Me</h1>
                <form>
                    <label htmlFor="nm">Name :</label>
                    <br />
                    <input type="text" id="nm" placeholder="Your Name ? " />
                    <br />
                    <br />
                    <label htmlFor="mail">Email : </label>
                    <br />
                    <input type="email" placeholder="Your Email ?" id="mail" />
                    <br />
                    <br />
                    <label htmlFor="message">Message : </label>
                    <br />
                    <textarea id="message" rows="5" cols="40" placeholder="Enter your message">
                    </textarea>
                    <br />
                    <br />
                    <button type="submit" className="border-solid border-white rounded-lg border-2 px-4 py-2 ">Submit</button>
                </form>

                <h2 className="text-xl font-sans bg-white text-black font-bold text-center rounded-lg p-3">My Online Presence</h2>
                <div className='flex gap-20'>
                    <div  className='border-solid border-white border-spacing-2 border-2 h-3/4 w-9 p-2'>
                        <a href="https://www.linkedin.com/in/anshulsharma29/" target='_blank'>
                            <FaLinkedinIn/>
                        </a>
                    </div>
                    <div  className='border-solid border-white border-spacing-2 border-2 h-3/4 w-9 p-2'>
                        <a href="https://github.com/Anshul-Sharma01/" target='_blank'>
                            <FaGithub/>
                        </a>
                    </div>
                    <div  className='border-solid border-white border-spacing-2 border-2 h-3/4 w-9 p-2'>
                        <a href="mailto:sharma.ansh2926@gmail.com" target='_blank' >
                            <VscMail/>
                        </a>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Contact;


