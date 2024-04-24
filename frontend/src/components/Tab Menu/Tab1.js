import { React, useState } from 'react'
import { MdArrowForwardIos } from "react-icons/md";

function Tab1(props) {

    const [currentPage, setCurrentPage] = useState(1);
    const [jobsPerPage] = useState(8);  // This can be adjusted or made dynamic

    const indexOfLastJob = currentPage * jobsPerPage;
    const indexOfFirstJob = indexOfLastJob - jobsPerPage;
    const currentJobs = props.listedJobs.slice(indexOfFirstJob, indexOfLastJob);

    const totalPages = Math.ceil(props.listedJobs.length / jobsPerPage);

    const goToNextPage = () => {
        setCurrentPage(currentPage + 1);
    };
    const goToPreviousPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };
    const goToPage = (number) => {
        setCurrentPage(number);
    };

    const renderPagination = () => (
        <div className="flex justify-center items-center space-x-2">
            <button onClick={goToPreviousPage} disabled={currentPage === 1} className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:bg-gray-300"><MdArrowForwardIos /></button>
            {Array.from({ length: totalPages }, (_, i) => (
                <button
                    key={i + 1}
                    onClick={() => goToPage(i + 1)}
                    // className={`px-4 py-2 ${currentPage === i + 1 ? 'bg-blue-600 text-white' : 'bg-gray-200'} rounded hover:bg-blue-500`}
                    className={`${currentPage === i + 1 ? 'bg-pink-500 text-white' : 'bg-gray-200'} mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-500 transition duration-150 ease-in-out hover:bg-light-300`}
                >
                    {i + 1}
                </button>
            ))}
            <button onClick={goToNextPage} disabled={currentPage === totalPages} className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:bg-gray-300"><MdArrowForwardIos /></button>
        </div>
    );


    return (
        <>
            <div id="tab-1" className="p-0 active mb-2 grid grid-cols-4 gap-4">
                {currentJobs && currentJobs.map((job, index) => (
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
            <div className='mt-4 mb-4'>
                {renderPagination()}
            </div>

        </>
    )
}

export default Tab1