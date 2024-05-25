import { React, useState, useEffect } from 'react';
import axios from 'axios';
// import ResumeBasedJobs from './Recruiter job/ResumeBasedJobs';
import MatchedJobs from './Resume Based Jobs/MatchedJobs';

function ResumeUpload({resumeClick}) {
    const [progress, setProgress] = useState(0);
    const [showMatchedJob, setShowMatchedJob] = useState(false);
    const [fileName, setFileName] = useState("");
    const [divFlag, setDivFlag] = useState("hidden");
    const [flag, setFlag] = useState(true);
    const [resume_Data, setData] = useState([]);

    //console.log("resume upload process called.");


    const handleFileUpload = async (event) => {
        setDivFlag("");

        //console.log("resume upload process called.");
        const file = event.target.files[0];
        setFileName(file?.['name'] || "");

        const reader = new FileReader();
        const formData = new FormData();
        formData.append('resume', file);

        const csrfToken = sessionStorage.getItem('csrfToken');
        try {
            const response = await fetch('http://127.0.0.1:8000/fetch/api/data/', {
                method: 'POST',
                body: formData,
            });
            var responseData = await response.json();
            console.log(responseData);
            setData(responseData.resume_details);
            setFlag(false);
            setShowMatchedJob(true);
            //fetchData()
        } catch (error) {
            console.error('Error:', error);
        }

        reader.onprogress = (e) => {
            const progressPercentage = Math.round((e.loaded / e.total) * 100);
            animateProgressBar(progress, progressPercentage);
        };
        setTimeout(() => {
            setDivFlag("hidden");
            setProgress(0);
            resumeClick();
        }, 3000);

        reader.onload = (e) => {
            // Here you can do something with the loaded file if needed
        };
        reader.readAsDataURL(file);
    };

    const animateProgressBar = (start, end) => {
        const step = 1;
        const duration = 1000; // Duration in milliseconds
        const totalSteps = Math.abs(end - start) / step;
        const increment = (end > start) ? step : -step;
        const timeInterval = duration / totalSteps;

        let currentProgress = start;
        const interval = setInterval(() => {
            currentProgress += increment;
            setProgress(currentProgress);
            if (currentProgress === end) {
                clearInterval(interval);
            }
        }, timeInterval);
    };

    //Fetch resume informations from backend
    const [resumeData, setResumeData] = useState([])
    //console.log("From HelloWorld.js comp:");
    const fetchData = async () => {

        try {
            const response = await fetch('http://127.0.0.1:8000/fetch/api/data/send');
            if (!response.ok) {
                throw new Error("Not found your request")
            }
            const result = await response.json();
            console.log(result)
            sessionStorage.setItem('csrfToken', result.csrfToken);
            setResumeData(result)
        } catch (error) {
            console.log("error in fetching data", error);
        }
    }




    return (
        <>
            {showMatchedJob && <MatchedJobs resume_Data={resume_Data} />}
            {/* {resume_Data && Object.values(resume_Data).length > 0 && <ResumeBasedJobs responseData={resume_Data} />} */}
            <div className="grid sm:grid-cols-2 gap-12 p-4 absolute mt-24" style={{ "z-index": "2", "width": "65rem", "margin-left": "20rem" }}>
                <div for="uploadFile1"
                    className="bg-green-400 text-center px-4 rounded w-full h-80 flex flex-col items-center justify-center border-2 border-gray-400 border-dashed font-[sans-serif] top-0 transition-transform duration-1000 transform">
                    <div className="py-6">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 mb-2 fill-gray-600 inline-block" viewBox="0 0 32 32">
                            <path
                                d="M23.75 11.044a7.99 7.99 0 0 0-15.5-.009A8 8 0 0 0 9 27h3a1 1 0 0 0 0-2H9a6 6 0 0 1-.035-12 1.038 1.038 0 0 0 1.1-.854 5.991 5.991 0 0 1 11.862 0A1.08 1.08 0 0 0 23 13a6 6 0 0 1 0 12h-3a1 1 0 0 0 0 2h3a8 8 0 0 0 .75-15.956z"
                                data-original="#000000" />
                            <path
                                d="M20.293 19.707a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L15 16.414V29a1 1 0 0 0 2 0V16.414z"
                                data-original="#000000" />
                        </svg>
                        <h4 className="text-base font-semibold text-gray-600">Drag and drop files here</h4>
                    </div>
                    <hr className="w-full border-gray-700 my-2" />
                    <div className="py-6">
                        <p className=" text-gray-700 font-semibold text-lg flex-1 mb-6">{fileName}</p>
                        <input type="file" id='uploadFile1' className="hidden" onChange={handleFileUpload} />
                        <label for="uploadFile1"
                            className="block cursor-pointer px-6 py-2.5 rounded text-gray-600 text-sm tracking-wider font-semibold border-none outline-none bg-gray-200 hover:bg-gray-100">Browse Files</label>
                        <p className="text-xs text-black mt-4">PDF, Docx are Allowed.</p>
                    </div>
                </div>
                <div className={`mt-24 ${divFlag}`}>
                    <h4 className="text-base text-white font-3xl">Uploading</h4>
                    <div className="space-y-8 mt-4">
                        <div className="flex flex-col">
                            <div className="flex mb-2">
                                <p className="text-sm text-white font-xl flex-1">{fileName}</p>
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-3 cursor-pointer shrink-0 fill-black hover:fill-red-500" viewBox="0 0 320.591 320.591">
                                    {/* <path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z" data-original="#000000"></path>
                                    <path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z" data-original="#000000"></path> */}
                                </svg>
                            </div>
                            <div className="bg-gray-300 rounded-full w-full h-2.5">
                                <div className="w-1/3 h-full rounded-full bg-green-600 flex items-center relative" style={{ width: `${progress}%`, transition: 'width 0.5s' }}>
                                    <span className="absolute text-xs right-0.5 bg-white w-2 h-2 rounded-full"></span>
                                </div>
                            </div>
                            <p className="text-sm text-white font-xl flex-1 mt-2">{progress}% done</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ResumeUpload