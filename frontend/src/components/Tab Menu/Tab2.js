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
        {
            "company": "CTS",
            "designation": "Developer",
            "description": "Huge",
            "skill": "AWS, C++, Python, Java",
            "link": "www.google.com",
            "yoe": 1,
            "salary": 55,
            "mail": "abc",
        },
        {
            "company": "Wipro",
            "designation": "Developer",
            "description": "Huge",
            "skill": "Docker, Python, Java",
            "link": "www.google.com",
            "yoe": 5,
            "salary": 55,
            "mail": "abc",
        },
        {
            "company": "Nutarix",
            "designation": "Developer",
            "description": "Huge",
            "skill": " Python, Java , AWS",
            "link": "www.google.com",
            "yoe": 3,
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