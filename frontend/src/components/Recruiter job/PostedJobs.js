import { React, useState, useEffect } from 'react';
import { GrPowerReset } from "react-icons/gr";
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

function PostedJobs(props) {
    const [data, setData] = useState([]);
    var postedJob = [];
    const [filterCompany, setfilterCompany] = useState([]);
    const [filterExp, setfilterExp] = useState([]);
    const [filterJobType, setfilterJobType] = useState([]);
    const [checkedFilters, setCheckedFilters] = useState({});
    console.log("posted jobs", props.postedJob);



    //Tooltip
    const tooltip = (
        <Tooltip id="tooltip" style={{ "font-size": "0.8rem", "opacity" : "0.4" }}>
            Reset Filter
        </Tooltip>
    );

    const fetchData = async () => {
        console.log("data fetch started...")
        const response = await fetch('http://localhost:8080/fetchData', {
            method: "GET",
        })
        const data = await response.json();
        console.log("called db data", data)

        for (let key in data) {
            let obj = {
                "company": data[key].company,
                "designation": data[key].designation,
                "description": data[key].description,
                "skill": data[key].skill,
                "link": data[key].link,
                "yoe": data[key].yoe,
                "salary": data[key].salary,
                "mail": data[key].mail,
            }
            postedJob.push(obj)
        }
        setData(postedJob);
    };
    useEffect(() => {
        fetchData();
    }, []);

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

    function fetchCompany() {
        let obj = data;
        let set1 = new Set();
        let set2 = new Set();
        let set3 = new Set();

        for (let key in obj) {
            if (!set1.has(obj[key].company)) {
                set1.add(obj[key].company);
            }
            if (!set2.has(obj[key].yoe)) {
                set2.add(obj[key].yoe);
            }
            // if(!set3.has(obj[key].type)){
            //     set3.add(obj[key].type);
            // }
        }
        setfilterCompany(Array.from(set1).sort());
        setfilterExp(Array.from(set2).sort());
        //setfilterJobType(Array.from(set3));
    }
    useEffect(() => {
        fetchCompany();
    }, [data]);

    //Filter posted jobs
    const handleCheckboxChange = (event) => {
        const { id, checked } = event.target;
        setCheckedFilters((prevState) => ({
            ...prevState,
            [id]: checked,
        }));
    };

    function filterJob() {
        console.log("clicked filter function");
        let comp = document.querySelectorAll('#comp');

    };

    //Reset all filters
    function resteFilter() {
        console.log("reset");
        let inputs = document.querySelectorAll('.check');
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].checked = false;
        }
    };

    return (
        <>
            {/* <div id="" className="p-0 mb-2">
                {props.postedJob && props.postedJob.map((job, index) => (
                    <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg">
                        <img className="w-full" src="https://img.freepik.com/free-psd/silver-letters-glass-building-facade_145275-162.jpg" alt={job.designation} />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{job.company}</div>
                            <p className="text-gray-700 text-base">{job.skill}</p>
                        </div>
                        <a href={job.link} target='blank'>
                            <button className="inline-block justify-center bg-green-600 rounded-full px-3 py-1 text-bold font-semibold text-white mr-2 mb-2">
                                Apply Now
                            </button>
                        </a>
                    </div>
                ))}
            </div> */}

            <div className="grid grid-cols-4 gap-4 mb-8">
                <div className="col-span-1 border-0">
                    {/* Fiter button start */}

                    <section className="relative">
                        <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
                            <div className="grid grid-cols-12">
                                <div className="col-span-12 w-full max-md:max-w-md max-md:mx-auto">
                                    <div className="box rounded-xl border-2 border-blue-600 bg-white p-6 w-full md:max-w-sm shadow-xl">
                                        <div className="flex items-center justify-between w-full pb-3 border-b border-gray-200 mb-7">
                                            <p className="font-bold text-xl leading-7 text-blue-800 font-serif ">Customize Job Search</p>
                                            <OverlayTrigger placement="bottom" overlay={tooltip}>
                                                <button className='' onClick={resteFilter}><GrPowerReset /></button>
                                            </OverlayTrigger>
                                        </div>


                                        <label className="font-medium font-serif text-lg leading-6 text-blue-600 float-left">Company</label>
                                        <br></br>
                                        <div className="box flex flex-col gap-2 ml-4 mt-2">
                                            {filterCompany &&
                                                filterCompany.map((comp, index) => (
                                                    <div key={index} className="flex items-center">
                                                        <input
                                                            id={`comp-${comp}-${index}`}
                                                            type="checkbox"
                                                            className="check w-5 h-5 appearance-none border border-gray-300 rounded-md mr-2 hover:border-indigo-500 hover:bg-indigo-100 checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')]"
                                                            onChange={handleCheckboxChange}
                                                            checked={checkedFilters[`comp-${comp}-${index}`]}
                                                        />
                                                        <label
                                                            htmlFor={`comp-${comp}-${index}`}
                                                            className="text-sm font-normal text-gray-600 leading-4 cursor-pointer font-serif"
                                                        >
                                                            {comp}
                                                        </label>
                                                    </div>
                                                ))}

                                        </div>

                                        <div>
                                            <label className="font-medium font-serif text-lg leading-6 text-blue-600 float-left">Experience</label>
                                            <br></br>
                                            <div className="box flex flex-col gap-2 ml-4 mt-2">
                                            {filterExp &&
                                                filterExp.map((exp, index) => (
                                                    <div key={index} className="flex items-center">
                                                        <input
                                                            id={`exp-${exp}-${index}`}
                                                            type="checkbox"
                                                            className="check w-5 h-5 appearance-none border border-gray-300 rounded-md mr-2 hover:border-indigo-500 hover:bg-indigo-100 checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')]"
                                                            onChange={handleCheckboxChange}
                                                            checked={checkedFilters[`exp-${exp}-${index}`]}
                                                        />
                                                        <label
                                                            htmlFor={`exp-${exp}-${index}`}
                                                            className="text-sm font-normal text-gray-600 leading-4 cursor-pointer font-serif"
                                                        >
                                                            {exp}
                                                        </label>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div>
                                            <label className="font-medium font-serif text-lg leading-6 text-blue-600 float-left">JobType</label>
                                            <br></br>
                                            <div className="box flex flex-col gap-2 ml-4 mt-2">
                                                <div className="flex items-center">
                                                    <input id="checkbox-default-1" type="checkbox" value="" className="w-5 h-5 appearance-none border border-gray-300  rounded-md mr-2 hover:border-indigo-500 hover:bg-indigo-100 checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')]" />
                                                    <label for="checkbox-default-1" id="type" className="text-sm font-normal text-gray-600 leading-4 cursor-pointer font-serif">20% or more</label>
                                                </div>

                                            </div>
                                        </div>

                                        <button className="w-full mt-6 py-2.5 flex items-center justify-center gap-2 rounded-full bg-indigo-600 text-white font-semibold text-xs shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-700 hover:shadow-indigo-200" onClick={filterJob}>
                                            <svg width="17" height="16" viewBox="0 0 17 16" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M14.4987 13.9997L13.1654 12.6663M13.832 7.33301C13.832 10.6467 11.1457 13.333 7.83203 13.333C4.51832 13.333 1.83203 10.6467 1.83203 7.33301C1.83203 4.0193 4.51832 1.33301 7.83203 1.33301C11.1457 1.33301 13.832 4.0193 13.832 7.33301Z"
                                                    stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                            Search
                                        </button>
                                    </div>
                                </div>
                                <div className="col-span-12 md:col-span-9"></div>
                            </div>

                        </div>
                    </section>




                    {/* Filter button end */}
                </div>
                <div className="col-span-3 border-0">
                    
                    {data && data.map((job, index) => (
                        <div key={index} className="grid grid-cols-4 gap-4 mb-8 border-2 rounded-lg border-blue-600">
                            <div className="border" style={{ "width": "15rem", "height": "10rem", "border-radius": "50%", "overflow": "hidden" }}>
                                <img className="" style={{ "width": "100%", "height": "auto" }} src={job.img ? job.img : "https://img.freepik.com/free-psd/silver-letters-glass-building-facade_145275-162.jpg"} alt="sdsdf" />
                            </div>
                            <div className="col-span-2 border-0">
                                <div className='text-2xl font-medium mr-16 mt-6 font-serif'>{job.desg} </div>
                                <div className='text-xl font-medium mr-16 mt-2 font-serif text-gray-500'>{job.company} </div>
                                <div className='mr-16 mt-4'>
                                    <span className='text-sm font-medium font-serif text-violet-500 border border-violet-200 rounded-xl p-1'>{job.type ? job.type : "Full Time"}</span>
                                    <span> | </span>

                                    {job.skill && job.skill.split(",").map((skill, index) => (
                                        <span key={index} className='text-sm font-medium font-serif border border-green-200 rounded-xl p-1 mr-1' style={{ "color": getColor(skill), "border-color": getColor(skill) }}>
                                            {skill}
                                        </span>
                                    ))}

                                    {/* <span className='text-sm font-medium font-serif text-blue-500 border border-blue-200 rounded-xl p-1'>AWS</span>
                                    <span>   </span>
                                    <span className='text-sm font-medium font-serif text-yellow-500 border rounded-xl p-1 border-yellow-600'>Docker</span>
                                    <span>   </span> */}
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
                </div>
            </div>



        </>
    )
}

export default PostedJobs