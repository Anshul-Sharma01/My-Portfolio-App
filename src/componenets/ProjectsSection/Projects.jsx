import ProjectsCard from "../ProjectsCard/ProjectsCard";


function Projects(){

    return(
        <>
        <h1 className="text-center text-5xl font-sans font-bold p-5 m-4">My Projects</h1>
            <div className="flex flex-wrap gap-20 justify-center items-center">
                <ProjectsCard ProjectName="Blogging-Site" imgSrc="https://img.freepik.com/free-vector/blogging-fun-content-creation-online-streaming-video-blog-young-girl-making-selfie-social-network-sharing-feedback-self-promotion-strategy_335657-2386.jpg?size=626&ext=jpg" Projectdesc="A blogging site using MERN Stack" GithubLink="https://github.com/Anshul-Sharma01/Blogging-Site"/>
                <ProjectsCard ProjectName="Blogging-Site" imgSrc="https://img.freepik.com/free-vector/blogging-fun-content-creation-online-streaming-video-blog-young-girl-making-selfie-social-network-sharing-feedback-self-promotion-strategy_335657-2386.jpg?size=626&ext=jpg" Projectdesc="A blogging site using MERN Stack" GithubLink="https://github.com/Anshul-Sharma01/Blogging-Site"/>
                <ProjectsCard ProjectName="Blogging-Site" imgSrc="https://img.freepik.com/free-vector/blogging-fun-content-creation-online-streaming-video-blog-young-girl-making-selfie-social-network-sharing-feedback-self-promotion-strategy_335657-2386.jpg?size=626&ext=jpg" Projectdesc="A blogging site using MERN Stack" GithubLink="https://github.com/Anshul-Sharma01/Blogging-Site"/>
                <ProjectsCard ProjectName="Blogging-Site" imgSrc="https://img.freepik.com/free-vector/blogging-fun-content-creation-online-streaming-video-blog-young-girl-making-selfie-social-network-sharing-feedback-self-promotion-strategy_335657-2386.jpg?size=626&ext=jpg" Projectdesc="A blogging site using MERN Stack" GithubLink="https://github.com/Anshul-Sharma01/Blogging-Site"/>
            </div>
        </>
    )

}

export default Projects;



