

function TechCard({tech, techSrc}){
    return (
        <>
                <div className="duration-400 flex h-80 w-64 cursor-pointer flex-col items-center justify-center rounded-lg bg-blue-300 text-center text-black transition-transform hover:!scale-110 hover:scale-110 hover:!blur-none group-hover:scale-90 group-hover:blur-[10px] " >
                    <img src={techSrc} alt="techpic" width="200px" className="border-solid border-black rounded-3xl m-4"/>
                    <p className="font-bold text-2xl">{tech}</p>
                </div>
        </>
    )
}

export default TechCard;
