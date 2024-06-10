

function ProjectsCard({imgSrc, ProjectName, Projectdesc, GithubLink}){
    return(
        <>
            
            <div className="w-[300px] rounded-md border p-4 bg-[#483D8B] hddn_class  border-6 border-solid">
                <img
                    src={imgSrc}
                    alt="Project Info"
                    className="h-[200px] border-4 border-black border-solid w-full rounded-md object-cover"
                />
                <div className="p-4">
                    <h1 className="text-xl font-semibold">{ProjectName}</h1>
                    <p className="mt-3 text-md text-white">
                    {Projectdesc}
                    </p>
                    <a href={GithubLink} target="_blank">
                        <button
                        type="button" 
                        className="mt-4 rounded-sm bg-black px-8 py-3  font-semibold text-xl text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
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