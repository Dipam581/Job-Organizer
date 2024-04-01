import {React, useState} from 'react'

function PostedJobs() {
    const [data, setData] = useState([])
    const fetchData = async () => {
        console.log("data fetch started...")
        const response = await fetch('http://localhost:8080/fetchData', {
            method: "GET",
        })
        const data = await response.json();
        console.log("called db data", data)
        var postedJob = [];
        
        for(let key in data){
            let obj = {
                "company" : data[key].company,
                "designation" : data[key].designation,
                "description" : data[key].description,
                "skill" : data[key].skill,
                "link" : data[key].link,
                "yoe" : data[key].yoe,
                "salary" : data[key].salary,
                "mail" : data[key].mail,
            }
            postedJob.push(obj)
        }
        setData(postedJob);

    };
    return (
        <>

        </>
    )
}

export default PostedJobs