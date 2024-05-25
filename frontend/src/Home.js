
import React, { useEffect, useState } from 'react';
import './App.css';

import SearchBar from './SearchBar';
import JobListings from './JobListings';
import MainDesign from './MainDesign';

function Home(props) {
    const [searchQuery, setSearchQuery] = useState('');
    const [filters, setFilters] = useState([]);
    const [jobsData, setJobsData] = useState([]);
    const [compImg, setCompImg] = useState([]);
    const [company, setCompany] = useState({});
    const [location, setLocation] = useState({});


    //console.log("from main-", props)
    useEffect(() => {
        if (props.data.jobs && props.data.jobs.length > 0) { // Check if jobsData is not empty
            setJobsData(props.data.jobs);

        }
    }, [props.data.jobs]);

    useEffect(() => {
        if (props.data.compImg && props.data.compImg.length > 0) { // Check if jobsData is not empty
            setCompImg(props.data.compImg)
        }
    }, [props.data.compImg]);

    useEffect(() => {
        if (props.data.companySet && props.data.companySet.length > 0) { // Check if jobsData is not empty
            setCompany(props.data.companySet)
        }
    }, [props.data.companySet]);

    useEffect(() => {
        if (props.data.locationSet && props.data.locationSet.length > 0) { // Check if jobsData is not empty
            setLocation(props.data.locationSet)
        }
    }, [props.data.locationSet]);

    const dd = {
        "timeId": 1,
        "Title": "Hey",
        "Company": "XYZ",
        "location": "Kolk",
        "Link": "Hola",
        "Time_of_Post": 12,
    }

    // Filter jobs based on search query and selected filters
    // const filteredJobs = jobsData.filter(job => {
    //     const matchesSearchQuery = job.title.toLowerCase().includes(searchQuery.toLowerCase());
    //     const matchesFilters = filters.length === 0 || filters.includes(job.category);
    //     return matchesSearchQuery && matchesFilters;
    // });

    const handleSearch = query => {
        setSearchQuery(query);
    };

    const handleFilterChange = selectedFilters => {
        setFilters(selectedFilters);
    };

    return (
        <>
            {/* <div className='' style={{"background" : "linear-gradient(to right, #0a0f4b, #8c6a83, #4b96c9)"}}> */}
                {jobsData && company && location && <MainDesign jobs={jobsData} company={company} locationSet={location} />}
                {/* <MainDesign  jobs={jobsData}/> */}
                {/* {jobsData && <JobListings jobs={dd} />} */}

            {/* </div> */}
        </>
    );
}

export default Home;
