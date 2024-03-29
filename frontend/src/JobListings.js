// components/JobListings.js
import React from 'react';

function JobListings(props) {
    console.log("from listing-", props)
    return (
        <div>
            {/* {props.map(job => (
                <div key={job.timeId} className="job-listing">
                    <h2>{job.Title}</h2>
                    <p>{job.Company}</p>
                    <p>{job.Location}</p>
                    <p>{job.Link}</p>
                    <p>{job.Time_of_Post}</p>
                </div>
            ))} */}
            <div key={props.timeId} className="job-listing">
                <h2>{props.Title}</h2>
                <p>{props.Company}</p>
                <p>{props.Location}</p>
                <p>{props.Link}</p>
                <p>{props.Time_of_Post}</p>
            </div>
        </div>
    );
}

export default JobListings;
