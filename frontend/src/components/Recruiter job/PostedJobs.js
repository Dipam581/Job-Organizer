import { React, useState } from 'react'

function PostedJobs(props) {
    const [data, setData] = useState([]);
    console.log("posted jobs", props.postedJob)

    const fetchData = async () => {
        console.log("data fetch started...")
        // const response = await fetch('http://localhost:8080/fetchData', {
        //     method: "GET",
        // })
        // const data = await response.json();
        // console.log("called db data", data)
        // var postedJob = [];

        // for(let key in data){
        //     let obj = {
        //         "company" : data[key].company,
        //         "designation" : data[key].designation,
        //         "description" : data[key].description,
        //         "skill" : data[key].skill,
        //         "link" : data[key].link,
        //         "yoe" : data[key].yoe,
        //         "salary" : data[key].salary,
        //         "mail" : data[key].mail,
        //     }
        //     postedJob.push(obj)
        // }

    };
    return (
        <>
            <div id="" className="p-0 mb-2">
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

                <a className="btn btn-primary py-3 px-5" href="">Browse More Jobs</a>
            </div>


            <div id="" className="grid grid-cols-4 gap-4 mb-8 p-10 border-2">
                <div className="border-0" style={{ "width": "15rem", "height": "10rem", "border-radius": "50%", "overflow": "hidden" }}>
                    <img className="" style={{ "width": "100%", "height": "auto" }} src="https://img.freepik.com/free-psd/silver-letters-glass-building-facade_145275-162.jpg" alt="sdsdf" />
                </div>
                <div className="col-span-1 border-0">
                    <div className='text-2xl font-medium mr-16 mt-6 font-serif'>Software Engineer </div>
                    <div className='text-xl font-medium mr-16 mt-2 font-serif text-gray-500'>Company - USA </div>

                    <div className='mr-16 mt-4'>
                        <span className='text-sm font-medium font-serif text-violet-500 border border-violet-200 rounded-xl p-1'>Full Time</span>
                        <span> | </span>
                        <span className='text-sm font-medium font-serif text-green-500 border border-green-200 rounded-xl p-1'>Python</span>
                        <span>   </span>
                        <span className='text-sm font-medium font-serif text-blue-500 border border-blue-200 rounded-xl p-1'>AWS</span>
                        <span>   </span>
                        <span className='text-sm font-medium font-serif text-yellow-500 border rounded-xl p-1 border-yellow-600'>Docker</span>
                        <span>   </span>
                    </div>
                </div>

                <div className="col-span-1 border-0">

                </div>
                <div className="col-span-1 border-0 flex flex-col items-center">
                    <button type="submit" className='cursor-pointer border-2 p-2 w-40 rounded-xl bg-cyan-500 text-white font-semibold text-lg hover:bg-green-500 hover:text-black'>Apply</button>
                    <div className="bg-gray-200 rounded-full dark:bg-gray-700 mt-2" style={{ width: '100%', maxWidth: '180px' }}>
                        <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center leading-none rounded-full" style={{ width: '90%' }}>90%</div>
                    </div>
                </div>


            </div>

        </>
    )
}

export default PostedJobs