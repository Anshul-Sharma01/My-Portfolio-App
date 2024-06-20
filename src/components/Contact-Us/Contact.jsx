import { useState } from 'react';
import { CiMail } from 'react-icons/ci';
import { FaDiscord, FaGithub, FaLinkedin, FaTelegram, FaVoicemail } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Contact() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();

        if (!email || !name || !message) {
            setError('Please fill in all fields');
            return;
        }

        try {
            const response = await fetch('https://formspree.io/f/moqggnob', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, name, message })
            });

            if (response.ok) {
                setSuccess(true);
                setEmail('');
                setName('');
                setMessage('');
                // Display a popup message here
                toast.success('Message sent successfully', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            } else {
                const data = await response.json();
                setError(data.error || 'Failed to submit form');
                toast.error(data.error || 'Failed to submit form', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            }
        } catch (err) {
            console.error('Error submitting form:', err);
            setError('Failed to submit form');
            toast.error('Failed to submit form', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
    }

    return (
        <>
            <section className="bg-slate-900 m-50 hddn_class ml-40 mr-40 mt-40">
                <div className='pt-10'>
                    <h2 className=' text-xl tracking-tight font-extrabold text-center text-white pt-1  p-5 m-5'>My Online Presence</h2>
                    <div className='pb-10'>
                        <section className="flex gap-10 justify-center items-center">
                            <a
                            href="https://github.com/Anshul-Sharma01"
                            className="group flex justify-center p-2 rounded-md drop-shadow-xl bg-gradient-to-r from-gray-800 to-black text-white font-semibold hover:translate-y-3 transition-all duration-500 hover:from-[#331029] hover:to-[#310413] " target='_blank'
                        >
                            <svg
                            className="w-5"
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <FaGithub/>
                            </svg>
                            <span
                            className="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-10 duration-700"
                            >
                            GitHub
                            </span>
                        </a>
                        
                        <a
                            href="https://www.linkedin.com/in/anshulsharma29/"
                            className="group flex justify-center p-2 rounded-md drop-shadow-xl bg-gradient-to-r from-gray-800 to-black text-white font-semibold hover:translate-y-3 transition-all duration-500 hover:from-[#331029] hover:to-[#310413]" target='_blank'
                        >
                            <svg
                            className="w-5"
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <FaLinkedin/>
                            </svg>
                            <span
                            className="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-10 duration-700"
                            >
                            LinkedIn
                            </span>
                        </a>
                        
                        <a
                            href="https://discordapp.com/users/anshulsharma_30663"
                            className="group flex justify-center p-2 rounded-md drop-shadow-xl bg-gradient-to-r from-gray-800 to-black text-white font-semibold hover:translate-y-3 transition-all duration-500 hover:from-[#331029] hover:to-[#310413]" target='_blank'
                        >
                            <svg
                            className="w-5"
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <FaDiscord/>
                            </svg>
                            <span
                            className="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-10 duration-700"
                            >
                            Discord
                            </span>
                        </a>
                        
                        <a
                            href="mailto:sharma.ansh2926@gmail.com"
                            className="group flex justify-center p-2 rounded-md drop-shadow-xl bg-gradient-to-r from-gray-800 to-black text-white font-semibold hover:translate-y-3 transition-all duration-500 hover:from-[#331029] hover:to-[#310413]" target='_blank'
                        >
                            <svg
                            className="w-5"
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <CiMail/>
                            </svg>
                            <span
                            className="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-10 duration-700"
                            >
                            Email
                            </span>
                        </a>
                        </section>

                    </div>
                </div>
                <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Me</h2>

                    <form onSubmit={handleSubmit} className="space-y-8">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                            <input type="email" id="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
                        </div>
                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
                            <input type="text" id="name" name='Name' value={name} onChange={(e) => setName(e.target.value)} className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Your good name" required />
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                            <textarea id="message" rows="6" name='message' value={message} onChange={(e) => setMessage(e.target.value)} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                        </div>
                        {error && <div className="text-red-500">{error}</div>}
                        <button type="submit"  className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg  sm:w-fit  focus:ring-4 focus:outline-none hover:bg-blue-900 border-solid border-2 border-blue-300">Send message</button>
                        <p className="text-gray-700">*Your Message will directly reach me via email</p>
                    </form>
                </div>
                
            </section>
            <ToastContainer/>
        </>
    );
}

export default Contact;
