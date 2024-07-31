import React from "react";
import Slider from "react-slick";
import ProjectCard from "../ProjectsCard/ProjectCard";



function ProjectCarousel(){
    var settings = {
        dots : true,
        infite : true,
        speed : 500,
        slidesToShow : 4,
        slidesToScroll : 1,
        initialSlide : 0,
        responsive : [
            {
                breakpoint : 1024,
                settings : {
                    slidesToShow : 2,
                    slidesToScroll : 1,
                    infinite : true,
                    dots : true
                }
            },
            {
                breakpoint : 880,
                settings: {
                    slidesToScroll : 1,
                    slidesToShow  : 1,
                    infinite : true,
                    dots : false
                }
            },
            {
                breakpoint : 600,
                settings : {
                    slidesToShow : 1,
                    slidesToScroll : 1,
                    initialSlide : 2
                }
            },
            {
                breakpoint : 480,
                settings : {
                    slidesToScroll : 1,
                    slidesToShow : 1
                }
            }
        ]
    };

    return(
        <div className="m-20 hddn_class">
            <h1 className="text-2xl font-bold font-sans p-4 ml-20 text-left pb-6"> My Projects</h1>
            <div className="slider-carousel p-10 m-2">
                <Slider {...settings}>
                    <div>
                        <ProjectCard
                        imgSrc="https://img.freepik.com/free-vector/hands-holding-pencils-play-tic-tac-toe-people-drawing-crosses-noughts-simple-game-children-flat-vector-illustration-strategy-concept-banner-website-design-landing-web-page_74855-24786.jpg" 
                        projectDesc="A simple tic-tac-toe game using React, made to learn state management in React using useState"
                        heading="Tic-Tac-Toe game"
                        tech1 = "React"
                        tech2 = "TailwindCss"
                        tech3 = "JavaScript"
                        GithubSrc="https://github.com/Anshul-Sharma01/Tic-tac-toe-using-React"
                        />
                    </div>
                    <div>
                        <ProjectCard 
                        imgSrc="https://img.freepik.com/free-vector/blogging-fun-content-creation-online-streaming-video-blog-young-girl-making-selfie-social-network-sharing-feedback-self-promotion-strategy_335657-2386.jpg?size=626&ext=jpg"
                        projectDesc="Blogging Site made using MERN stack and with the help of Tailwind Css still in progress"
                        heading="Blogging Site"
                        tech1="MongoDb"
                        tech2="ReactJs"
                        tech3="ExpressJs"
                        GithubSrc="https://github.com/Anshul-Sharma01/Blogging-Site"
                        />
                    </div>
                    <div>
                        <ProjectCard 
                        imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY-RCPwfu2vuvnGQwfKCNEQadJCXoUqghFaQ&s" 
                        heading="Learning Management System"
                        tech1="ReactJs"
                        tech2="TailwindCss"
                        tech3="MongoDB"
                        projectDesc="A Learning Management System made using MongoDb, ExpressJs, ReactJs and NodeJs i.e. MERN Stack along with Tailwind"
                        GithubSrc="https://github.com/Anshul-Sharma01/Learning-Management-System--LMS-"
                        />
                    </div>
                    <div>
                        <ProjectCard 
                        imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOA7PADBSLRY4wKklQ9-EOPMx_F2jdZ9_0eA&s"
                        tech1="ReactJs"
                        tech2="Axios"
                        tech3="TailwindCss"
                        heading="Pokedex using React"
                        projectDesc="A Pokedex project using React"
                        liveSrc="https://pokedex-reactproject.vercel.app/"
                        GithubSrc="https://github.com/Anshul-Sharma01/Pokedex-React"
                        />
                    </div>
                    
                </Slider>
            </div>
        </div>
    )
}


export default ProjectCarousel;







