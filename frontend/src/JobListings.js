import React from 'react'
import PostedJobs from './components/Recruiter job/PostedJobs'

function JobListings(props) {
    console.log(props)
    function hello(e) {
        console.log("FFF");
    }
    var postedJob = [
        {
            "company": "Tata",
            "designation": "Developer",
            "description": "Huge",
            "skill": "Python, Java",
            "link": "www.google.com",
            "yoe": 2,
            "salary": 55,
            "mail": "abc",
        },
    ]
    return (
        <>
            <div className="tab-content" id='allJobs'>
                <div className=''>
                    <div id="tab-1" className="tab-pane fade show p-0 active mb-2 grid grid-cols-4 gap-4">
                        {props.listedJobs && props.listedJobs.map((job, index) => (
                            <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg">
                                <img className="w-full" src="https://img.freepik.com/free-psd/silver-letters-glass-building-facade_145275-162.jpg" alt={job.title} />
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">{job.Title}</div>
                                    <p className="text-gray-700 text-base">{job.Company}</p>
                                </div>
                                <a href={job.Link} target='blank'>
                                    <button className="inline-block justify-center bg-green-600 rounded-full px-3 py-1 text-bold font-semibold text-white mr-2 mb-2">
                                        Apply Now
                                    </button>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>


                <div id="tab-2" className="tab-pane fade show p-0" onClick={hello}>
                    <PostedJobs postedJob={postedJob} />
                </div>
            </div>
        </>
    )
}

export default JobListings