

function ProjectsCard({imgSrc, ProjectName, Projectdesc, GithubLink, inProgress = false}){
    return(
        <>
            
            <div className="w-[300px] rounded-lg border p-4 bg-blue-600 border-6 border-solid hover:bg-violet-950 hover:cursor-pointer">
                <img
                    src={imgSrc}
                    alt="Project Info"
                    className="h-[200px] border-4 border-black border-solid w-full rounded-md object-cover"
                />
                <div className="p-4 w-fit">
                    <h1 className="text-xl font-semibold">{ProjectName}{inProgress ? "(In Progress)" : ""}</h1>
                    <p className="mt-3 text-md text-white font-mono">
                    {Projectdesc}
                    </p>
                    <a href={GithubLink}  target="_blank">
                        <button
                        type="button" 
                        className="mt-4 rounded-lg bg-white px-8 py-3  font-semibold text-xl text-blue-500 shadow-sm hover:bg-black/80 hover:border-white hover:border-2 hover:text-white"
                        >
                        Read
                        </button>
                    </a>
                </div>
            </div>
        </>
    )
}

export default ProjectsCard;