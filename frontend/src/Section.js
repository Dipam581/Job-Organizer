import React from 'react';
import { SiBmcsoftware, SiPython, SiReact ,GrVirtualMachine, SiAltiumdesigner } from "react-icons/si";
import { DiJava } from "react-icons/di";
import { GiSewingMachine } from "react-icons/gi";

function Section() {
    const jobsData = [
        {
            title: "Software Engineer",
            openings: 5,
            totalJobs: 16,
            svg: <SiBmcsoftware />
        },
        {
            title: "Software Developer",
            openings: 25,
            totalJobs: 35,
            svg: <SiAltiumdesigner />
        },
        {
            title: "Python Developer",
            openings: 12,
            totalJobs: 21,
            svg: <SiPython />
        },
        {
            title: "Frontend Developer",
            openings: 7,
            totalJobs: 30,
            svg: <SiReact />
        },
        {
            title: "React.js Developer",
            openings: 12,
            totalJobs: 21,
            svg: <SiReact />
        },
        {
            title: "Java Developer",
            openings: 12,
            totalJobs: 21,
            svg: <DiJava />
        },
        {
            title: "Sr. Manager",
            openings: 12,
            totalJobs: 21,
            svg: <SiBmcsoftware />
        },
        {
            title: "SDE-III",
            openings: 12,
            totalJobs: 21,
            svg: <SiAltiumdesigner />
        },
        {
            title: "Data Engineer",
            openings: 12,
            totalJobs: 21,
            svg: <GiSewingMachine />
        },
        {
            title: "ML Engineer",
            openings: 12,
            totalJobs: 21,
            svg: <GiSewingMachine />
        }
    ]
    return (
        <>
            {jobsData.map((job, index) => (
                <div key={index} className="p-6 bg-white border-2 rounded-lg ease-in-out duration-300 hover:bg-orange-500 transform hover:scale-105">
                    <div className='border-2 rounded-3xl p-3 bg-yellow-500 ml-40 mr-40' style={{ "marginLeft": "139px", "marginRight": "139px" }}>
                        {job.svg}
                    </div>
                    <div className='text-2xl mt-4 font-semibold'>
                        {job.title}
                    </div>
                    <div className='border-2 rounded-md p-0.5 bg-gray-300 text-black font-normal absolute top-2 right-2'>
                        {job.openings} Openings
                    </div>
                    <div className='mt-4 ml-20 mr-20 p-1 bg-gray-300 border-2 rounded-lg shadow-xl'>
                        {job.totalJobs} Jobs
                    </div>
                </div>
            ))}
        </>
    )
}

export default Section