import TechCard from "./TechCard";




function TechStack(){
    return(
        <div className="hddn_class m-20">
            <h1 className="text-2xl font-bold font-sans p-4 ml-4 text-left">My Tech Stack</h1>
            <div className="p-5 group mt-5 flex flex-row flex-wrap gap-8">
                
                <TechCard tech={"Html"}  techSrc={"https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png"}/>

                <TechCard tech={"CSS"} techSrc={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHPlU1ZjmDtTYorXqiip4hYId_heLT4MJ-1A&s"}/>

                <TechCard tech={"JavaScript"} techSrc={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPHQUeabRDH5SBUWiPBKck3K6EYOKk0cxivw&s"}/>

                <TechCard tech={"Node Js"} techSrc={"https://static-00.iconduck.com/assets.00/nodejs-icon-2048x2048-rueyo8fw.png"}/>

                <TechCard tech={"Express Js"} techSrc={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe_t3a2X90muVsCvCzTp9Cojd2rrUctwBrDA&s"}/>

                <TechCard tech={"EJS"} techSrc={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGgs7zmA2X55TVRum7fe9_03F2Y5hWmNjX4Q&s"}/>

                <TechCard tech={"MongoDb"} techSrc={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0vAX0g2Tk_VUh4H1k4KDNdr3t0B0EPRA14A&s"} />

                <TechCard tech={"React JS"} techSrc={"https://cdn.iconscout.com/icon/free/png-256/free-react-1-282599.png?f=webp"} /> 

                <TechCard techSrc={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvMOAPrLV8_sMUg-UVBsFz4MkUc5LgLlkjpA&s"} tech={"Python"}/>

                <TechCard techSrc={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX61n3C72WKicSb8JbCL9uF4MLhHvk9b8Yp07M4PjMo9O9e9K5DLvGI9loFxhzd7eTbPg&usqp=CAU"} tech={"C++"}/>
            </div>
        </div>
    )
}

export default TechStack;