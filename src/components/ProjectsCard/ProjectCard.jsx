import React from "react";



function ProjectCard({ imgSrc, heading, projectDesc, tech1, tech2, tech3, liveSrc, GithubSrc  }){

    return (
        <>
            <div className="w-[300px] h-[450px] rounded-md border border-cyan-400 ">
                <img
                    src={imgSrc}
                    alt="Project Image"
                    className="h-[200px] w-full rounded-t-md object-cover"
                />
                <div className="p-4">
                    <h1 className="inline-flex items-center text-lg font-semibold">
                    {heading}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="h-4 w-4"
                    >
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                    </h1>
                    <p className="mt-3 text-sm text-gray-600">
                        {projectDesc}
                    </p>
                    <div className="mt-4">
                    <span className="mb-2 mr-2 inline-block rounded-full  px-3 py-1 text-[12px] font-semibold bg-gray-900 text-white">
                        {tech1}
                    </span>
                    <span className="mb-2 mr-2 inline-block rounded-full  px-3 py-1 text-[12px] font-semibold bg-gray-900 text-white">
                        {tech2}
                    </span>
                    <span className="mb-2 mr-2 inline-block rounded-full  px-3 py-1 text-[12px] font-semibold bg-gray-900 text-white">
                        {tech3}
                    </span>
                    </div>
                    <a href={GithubSrc} target="_blank">
                        <button
                        type="button"
                        className="mt-4 w-full rounded-xl bg-black px-2 py-1.5 text-sm border-blue-600 font-semibold border-solid border-2 text-white hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                        >
                        Project Repo
                        </button>
                    </a>
                    { 
                        liveSrc && 

                        <a href={liveSrc} target="_blank">
                            <button
                            type="button"
                            className="mt-4 w-full rounded-xl bg-black px-2 py-1.5 text-sm font-semibold border-solid border-2 text-white hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                            >
                            Live Link
                            </button>
                        </a>
                    }
                </div>
            </div>

        </>
    )


}


export default ProjectCard;

