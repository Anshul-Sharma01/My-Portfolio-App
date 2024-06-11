import ProjectsCard from "../ProjectsCard/ProjectsCard";


function Projects(){

    return(
        <div className="hddn_class m-20">
            <h1 className="text-center text-5xl font-sans font-bold p-5 m-4">My Projects</h1>
            <div className="flex flex-wrap gap-20 justify-center items-center">
                <ProjectsCard ProjectName="Tic-Tac-Toe" imgSrc="https://img.freepik.com/free-vector/hands-holding-pencils-play-tic-tac-toe-people-drawing-crosses-noughts-simple-game-children-flat-vector-illustration-strategy-concept-banner-website-design-landing-web-page_74855-24786.jpg" Projectdesc="A Tic-Tac-Toe game using React js, I made use of Props and different hooks in this project" GithubLink="https://github.com/Anshul-Sharma01/Tic-tac-toe-using-React"/>
                
                <ProjectsCard ProjectName="Blogging-Site" inProgress="true" imgSrc="https://img.freepik.com/free-vector/blogging-fun-content-creation-online-streaming-video-blog-young-girl-making-selfie-social-network-sharing-feedback-self-promotion-strategy_335657-2386.jpg?size=626&ext=jpg" Projectdesc="A blogging site using MERN Stack" GithubLink="https://github.com/Anshul-Sharma01/Blogging-Site"/>
                <ProjectsCard ProjectName="Learning Management System" inProgress="true" imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY-RCPwfu2vuvnGQwfKCNEQadJCXoUqghFaQ&s" Projectdesc="A Learning Management System using MERN Stack in which backend is already implemented , just left with FrontEnd" GithubLink="https://github.com/Anshul-Sharma01/Learning-Management-System--LMS-"/>
                
            </div>
        </div>
    )

}

export default Projects;



