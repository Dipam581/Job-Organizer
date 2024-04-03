import React from 'react';
import PostedJobs from '../Recruiter job/PostedJobs';

function Tab2() {
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
            <div id="tab-2" className="tab-pane fade show p-0">
                <PostedJobs postedJob={postedJob} />
            </div>
        </>
    )
}

export default Tab2