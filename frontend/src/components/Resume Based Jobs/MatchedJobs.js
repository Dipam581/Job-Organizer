import { React, useState, useEffect } from 'react';
import { GrPowerReset } from "react-icons/gr";
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

function MatchedJobs(props) {
    const [resumeData, setResumeData] = useState([]);
    const jobSkill = ["python", "java", "django", "react", "node", "docker", "aws", "llm", "spring boot", "javascript", "restfull api", "html"]

    useEffect(() => {
        if (props.resume_Data) {
            setResumeData(props.resume_Data);
        }
    }, [props.resume_Data]);

    var matchedObjeect = {};

    const fetchData = async () => {
        console.log("data fetch started...");
        const response = await fetch('http://localhost:8080/fetchData', {
            method: "GET",
        });
        const data = await response.json();
        console.log("Fetched jobs from backend in MatchedJobs.js", data);

        // Filter data- Start
        let resumeSkill = new Set(resumeData.skill);
        resumeSkill = Array.from(resumeSkill);
        let resumeName = resumeData.Name;
        let resumeDegree = resumeData.degrees;

        for (let key in data) {
            let skill = (data[key].skill).split(",");
            let counter = 0;
            for (let sk in skill) {
                if (resumeSkill.includes(skill[sk].trim().toLowerCase())) {
                    counter++;
                }
                if (counter > 2) {
                    const now = new Date();
                    const timestamp = now.getTime();
                    matchedObjeect[timestamp % 1000000] = data[key];
                    break;
                }
            }
        }


    };
    useEffect(() => {
        fetchData();
    }, [resumeData]);

    const getColor = (skill) => {
        const colorMap = {
            "java": "#008800",
            "python": "#7846AB",
            "c++": "#649AD2",
            "html": "#E34F26",
            "css": "#1572B6",
            "javascript": "#F7DF1E",
            "typeScript": "#3178C6",
            "restful apis": "#6DB33F",
            "docker": "#f97316",
            "aws": "#18a689"
        };
        return colorMap[skill.toLowerCase().trim()] || "#000000"; // Default to black if color not found
    };

    return (
        <>
            <div className="grid grid-cols-4 gap-4 mb-8">
                

                {/* <div className="col-span-3 border-0"> */}

                    {Object.keys(matchedObjeect).length > 0 && matchedObjeect.map((job, index) => (
                        <div key={index} className="grid grid-cols-4 gap-4 mb-8 border-2 rounded-lg border-blue-600">
                            <div className="border-2" style={{
                                "width": "15rem", // Original size
                                "height": "10rem", // Original size
                                "borderRadius": "50%",
                                "overflow": "hidden",
                                "backgroundImage": `url(${job.image ? job.image : "https://img.freepik.com/free-psd/silver-letters-glass-building-facade_145275-162.jpg"})`,
                                "backgroundSize": "contain", // This will ensure that the background covers the div area
                                "backgroundPosition": "center", // This will center the image within the div
                                "backgroundRepeat": "no-repeat"
                            }}>
                                
                            </div>

                            <div className="col-span-2 border-0">
                                <div className='text-2xl font-medium mr-16 mt-6 font-serif'>{job.desg} </div>
                                <div className='text-xl font-medium mr-16 mt-2 font-serif text-gray-500'>{job.company} </div>
                                <div className='mr-16 mt-4'>
                                    <span className='text-sm font-medium font-serif text-violet-500 border border-violet-200 rounded-xl p-1'>{job.type ? job.type : "Full Time"}</span>
                                    <span> | </span>

                                    {job.skill && job.skill.split(",").map((skill, index) => (
                                        jobSkill.includes(skill.toLowerCase().trim()) && (
                                            <span key={index} className='text-sm font-medium font-serif border border-green-200 rounded-xl p-1 mr-1' style={{ "color": getColor(skill), "border-color": getColor(skill) }}>
                                                {skill}
                                            </span>
                                        )
                                    ))}

                                    
                                </div>
                            </div>
                            <div className="col-span-1 border-0 flex flex-col items-center">
                                <a href={job.link} target='blank'>
                                    <button type="submit" className='cursor-pointer border-2 p-2 mt-11 w-40 rounded-xl bg-cyan-500 text-white font-semibold text-lg hover:bg-green-500 hover:text-black'>Apply</button>
                                </a>
                                <div className="bg-gray-200 rounded-full dark:bg-gray-700 mt-2" style={{ width: '100%', maxWidth: '150px' }}>
                                    <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center leading-none rounded-full" style={{ width: '69%' }}>69%</div>
                                </div>
                            </div>
                        </div>
                    ))}
                {/* </div> */}
            </div>



        </>
    )
}

export default MatchedJobs