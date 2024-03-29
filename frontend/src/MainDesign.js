import React from 'react'
import BounceLoader from "react-spinners/BounceLoader"
import { useState, useEffect } from 'react';
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
} from "@material-tailwind/react";

var fetchJobs = [];
function MainDesign(props) {
    console.log("from landing page-", props)
    let compfilter = props.company ? props.company : [];
    let locfilter = props.locationSet ? props.locationSet : [];
    const [selectedCompany, setSelectedCompany] = useState('');
    const [selectedLocation, setSelectedLocation] = useState('');
    const [selectedWord, setSelectedWord] = useState('');
    const [borderClass, setBorderClass] = useState('');

    
    if(props.jobs && props.jobs.length >0) fetchJobs = props.jobs;

    useEffect(() => {
        if (props.jobs.length > 0 && props.company.length > 0 && props.locationSet.length > 0) {
            setBorderClass('hidden');
        } else {
            setBorderClass('');
        }
    }, [props.jobs, props.company, props.locationSet]);


    const handleCompanyChange = param => (event) => {
        if(param == "company")  setSelectedCompany(event.target.value);
        else if(param == "location")  setSelectedLocation(event.target.value);
        else  setSelectedWord(event.target.value);
        
    };

    function searchJob(e){
        console.log("clicked in search")
        console.log(selectedCompany,selectedLocation);
    }


    function navigateDiv(e) {
        const jobsDiv = document.getElementById('allJobs');
        if (jobsDiv) {
            jobsDiv.scrollIntoView({ behavior: 'smooth' });
        }
    }

    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    const navList = (
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="flex items-center gap-x-2 p-1 font-medium"
            >
                <svg
                    width="16"
                    height="15"
                    viewBox="0 0 16 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M5 0.5C4.73478 0.5 4.48043 0.605357 4.29289 0.792893C4.10536 0.98043 4 1.23478 4 1.5C4 1.76522 4.10536 2.01957 4.29289 2.20711C4.48043 2.39464 4.73478 2.5 5 2.5H11C11.2652 2.5 11.5196 2.39464 11.7071 2.20711C11.8946 2.01957 12 1.76522 12 1.5C12 1.23478 11.8946 0.98043 11.7071 0.792893C11.5196 0.605357 11.2652 0.5 11 0.5H5ZM2 4.5C2 4.23478 2.10536 3.98043 2.29289 3.79289C2.48043 3.60536 2.73478 3.5 3 3.5H13C13.2652 3.5 13.5196 3.60536 13.7071 3.79289C13.8946 3.98043 14 4.23478 14 4.5C14 4.76522 13.8946 5.01957 13.7071 5.20711C13.5196 5.39464 13.2652 5.5 13 5.5H3C2.73478 5.5 2.48043 5.39464 2.29289 5.20711C2.10536 5.01957 2 4.76522 2 4.5ZM0 8.5C0 7.96957 0.210714 7.46086 0.585786 7.08579C0.960859 6.71071 1.46957 6.5 2 6.5H14C14.5304 6.5 15.0391 6.71071 15.4142 7.08579C15.7893 7.46086 16 7.96957 16 8.5V12.5C16 13.0304 15.7893 13.5391 15.4142 13.9142C15.0391 14.2893 14.5304 14.5 14 14.5H2C1.46957 14.5 0.960859 14.2893 0.585786 13.9142C0.210714 13.5391 0 13.0304 0 12.5V8.5Z"
                        fill="#90A4AE"
                    />
                </svg>

                <a href="#home" className="flex items-center text-black">
                    Home
                </a>
            </Typography>

            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="flex items-center gap-x-2 p-1 font-medium"
            >
                <svg
                    width="16"
                    height="15"
                    viewBox="0 0 16 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0 2.5C0 1.96957 0.210714 1.46086 0.585786 1.08579C0.960859 0.710714 1.46957 0.5 2 0.5H14C14.5304 0.5 15.0391 0.710714 15.4142 1.08579C15.7893 1.46086 16 1.96957 16 2.5V12.5C16 13.0304 15.7893 13.5391 15.4142 13.9142C15.0391 14.2893 14.5304 14.5 14 14.5H2C1.46957 14.5 0.960859 14.2893 0.585786 13.9142C0.210714 13.5391 0 13.0304 0 12.5V2.5ZM3.293 3.793C3.48053 3.60553 3.73484 3.50021 4 3.50021C4.26516 3.50021 4.51947 3.60553 4.707 3.793L7.707 6.793C7.89447 6.98053 7.99979 7.23484 7.99979 7.5C7.99979 7.76516 7.89447 8.01947 7.707 8.207L4.707 11.207C4.5184 11.3892 4.2658 11.49 4.0036 11.4877C3.7414 11.4854 3.49059 11.3802 3.30518 11.1948C3.11977 11.0094 3.0146 10.7586 3.01233 10.4964C3.01005 10.2342 3.11084 9.9816 3.293 9.793L5.586 7.5L3.293 5.207C3.10553 5.01947 3.00021 4.76516 3.00021 4.5C3.00021 4.23484 3.10553 3.98053 3.293 3.793ZM9 9.5C8.73478 9.5 8.48043 9.60536 8.29289 9.79289C8.10536 9.98043 8 10.2348 8 10.5C8 10.7652 8.10536 11.0196 8.29289 11.2071C8.48043 11.3946 8.73478 11.5 9 11.5H12C12.2652 11.5 12.5196 11.3946 12.7071 11.2071C12.8946 11.0196 13 10.7652 13 10.5C13 10.2348 12.8946 9.98043 12.7071 9.79289C12.5196 9.60536 12.2652 9.5 12 9.5H9Z"
                        fill="#90A4AE"
                    />
                </svg>
                <a href="#allJobs" className="flex items-center text-black">
                    Job Seekers
                </a>
            </Typography>

            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="flex items-center gap-x-2 p-1 font-medium"
            >
                <svg
                    width="14"
                    height="15"
                    viewBox="0 0 14 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M2 0.5C1.46957 0.5 0.960859 0.710714 0.585786 1.08579C0.210714 1.46086 0 1.96957 0 2.5V4.5C0 5.03043 0.210714 5.53914 0.585786 5.91421C0.960859 6.28929 1.46957 6.5 2 6.5H4C4.53043 6.5 5.03914 6.28929 5.41421 5.91421C5.78929 5.53914 6 5.03043 6 4.5V2.5C6 1.96957 5.78929 1.46086 5.41421 1.08579C5.03914 0.710714 4.53043 0.5 4 0.5H2ZM2 8.5C1.46957 8.5 0.960859 8.71071 0.585786 9.08579C0.210714 9.46086 0 9.96957 0 10.5V12.5C0 13.0304 0.210714 13.5391 0.585786 13.9142C0.960859 14.2893 1.46957 14.5 2 14.5H4C4.53043 14.5 5.03914 14.2893 5.41421 13.9142C5.78929 13.5391 6 13.0304 6 12.5V10.5C6 9.96957 5.78929 9.46086 5.41421 9.08579C5.03914 8.71071 4.53043 8.5 4 8.5H2ZM8 2.5C8 1.96957 8.21071 1.46086 8.58579 1.08579C8.96086 0.710714 9.46957 0.5 10 0.5H12C12.5304 0.5 13.0391 0.710714 13.4142 1.08579C13.7893 1.46086 14 1.96957 14 2.5V4.5C14 5.03043 13.7893 5.53914 13.4142 5.91421C13.0391 6.28929 12.5304 6.5 12 6.5H10C9.46957 6.5 8.96086 6.28929 8.58579 5.91421C8.21071 5.53914 8 5.03043 8 4.5V2.5ZM8 10.5C8 9.96957 8.21071 9.46086 8.58579 9.08579C8.96086 8.71071 9.46957 8.5 10 8.5H12C12.5304 8.5 13.0391 8.71071 13.4142 9.08579C13.7893 9.46086 14 9.96957 14 10.5V12.5C14 13.0304 13.7893 13.5391 13.4142 13.9142C13.0391 14.2893 12.5304 14.5 12 14.5H10C9.46957 14.5 8.96086 14.2893 8.58579 13.9142C8.21071 13.5391 8 13.0304 8 12.5V10.5Z"
                        fill="#90A4AE"
                    />
                </svg>
                <a href="#" className="flex items-center text-black">
                    Candidate
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="flex items-center gap-x-2 p-1 font-medium"
            >
                <svg
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M16 8.5C16 10.6217 15.1571 12.6566 13.6569 14.1569C12.1566 15.6571 10.1217 16.5 8 16.5C5.87827 16.5 3.84344 15.6571 2.34315 14.1569C0.842855 12.6566 0 10.6217 0 8.5C0 6.37827 0.842855 4.34344 2.34315 2.84315C3.84344 1.34285 5.87827 0.5 8 0.5C10.1217 0.5 12.1566 1.34285 13.6569 2.84315C15.1571 4.34344 16 6.37827 16 8.5ZM10 5.5C10 6.03043 9.78929 6.53914 9.41421 6.91421C9.03914 7.28929 8.53043 7.5 8 7.5C7.46957 7.5 6.96086 7.28929 6.58579 6.91421C6.21071 6.53914 6 6.03043 6 5.5C6 4.96957 6.21071 4.46086 6.58579 4.08579C6.96086 3.71071 7.46957 3.5 8 3.5C8.53043 3.5 9.03914 3.71071 9.41421 4.08579C9.78929 4.46086 10 4.96957 10 5.5ZM8 9.5C7.0426 9.49981 6.10528 9.77449 5.29942 10.2914C4.49356 10.8083 3.85304 11.5457 3.454 12.416C4.01668 13.0706 4.71427 13.5958 5.49894 13.9555C6.28362 14.3152 7.13681 14.5009 8 14.5C8.86319 14.5009 9.71638 14.3152 10.5011 13.9555C11.2857 13.5958 11.9833 13.0706 12.546 12.416C12.147 11.5457 11.5064 10.8083 10.7006 10.2914C9.89472 9.77449 8.9574 9.49981 8 9.5Z"
                        fill="#90A4AE"
                    />
                </svg>
                <a href="#" className="flex items-center text-black">
                    Contact
                </a>
            </Typography>

        </ul>
    );



    return (
        <>
            <Navbar className="mx-auto max-w-screen-2xl bg-gray-300 shadow-lg px-4 py-2 lg:px-8 lg:py-4 mt-2">
                <div id='home' className="container mx-auto flex items-center justify-between text-blue-gray-900">
                    <Typography
                        as="a"
                        href="#"
                        className="mr-4 cursor-pointer py-1.5 text-xl font-bold text-black"
                    >
                        Job Finder
                    </Typography>
                    <div className="hidden lg:block">{navList}</div>
                    <div className="flex items-center gap-x-1">
                        <Button variant="text" size="sm" className="hidden lg:inline-block">
                            <span>Log In</span>
                        </Button>
                        <Button
                            variant="gradient"
                            size="sm"
                            className="hidden lg:inline-block text-black bg-white border-2 border-blue-500"
                        >
                            <span>Upload Resume</span>
                        </Button>
                    </div>
                    <IconButton
                        variant="text"
                        className="ml-auto h-6 w-6 text-black hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                        ripple={false}
                        onClick={() => setOpenNav(!openNav)}
                    >
                        {openNav ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                className="h-6 w-6"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </IconButton>
                </div>
                <MobileNav open={openNav}>
                    <div className="container mx-auto">
                        {navList}
                        <div className="flex items-center gap-x-1">
                            <Button fullWidth variant="text" size="sm" className="">
                                <span>Log In</span>
                            </Button>
                            <Button fullWidth variant="gradient" size="sm" className="">
                                <span>Sign in</span>
                            </Button>
                        </div>
                    </div>
                </MobileNav>
            </Navbar>

            <div className="container m-auto">

                <div className="tab-className text-center fadeInUp mt-6" data-wow-delay="0.3s">

                    <div className="relative ">
                        <div className="relative">
                            <img className="w-full shadow-xl" src="https://cdn.rasayanika.com/wp-content/uploads/2023/12/kW7yv9eBdzpwekgJYNLRwa5Px.jpg" alt="" />
                            {/* <div className="absolute top-48 left-70">
                                <div className="container">
                                    <div className="row justify-content-start">
                                        <div className="border">
                                            <h1 className="text-green-500 font-bold text-6xl mb-4 border-l-8">Find The Perfect Job That</h1>
                                            <h1 className="text-green-500 font-bold text-6xl mb-4 border-l-8">You Deserved</h1>
                                        </div>
                                    </div>

                                    <div className=''>
                                        <button className="border-0 absolute left-6 mt-4 text-xl font-bold text-white bg-green-500" style={{ "width": "12rem", "height": "4rem" }} onClick={navigateDiv}>Find A Job</button>
                                        <button className="border-0 absolute left-60 mt-4 text-xl font-bold text-white bg-blue-500" style={{ "width": "12rem", "height": "4rem" }}>Search With Resume</button>
                                    </div>
                                </div>
                            </div> */}
                            <div className="absolute top-48 right-2">

                                <div className="grid grid-cols-1 gap-1 border-2 border-green-500 rounded-xl bg-white">
                                    <div className="p-6">
                                        <select id="companyDropdown" className="border-2 w-full text-left h-9 border-green-500" value={selectedCompany} onChange={handleCompanyChange("company")}>
                                            <option className='text-center' value="" disabled selected>Company</option>
                                            {compfilter && compfilter.length > 0 && compfilter.map((company, index) => (
                                                <option key={index} value={company}>{company}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="p-6">
                                        <select id="locationDropdown" className="border-2 w-full text-center h-9 border-green-500" value={selectedLocation} onChange={handleCompanyChange("location")}>
                                            <option className='text-center' value="" disabled selected>Location</option>
                                            {locfilter && locfilter.length > 0 && locfilter.map((location, index) => (
                                                <option key={index} value={location}>{location}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="p-6">
                                        <input id="word" type="text" className="form-control border-2 border-green-500 w-full text-center h-9" placeholder="Keyword" value={selectedWord} onChange={handleCompanyChange}/>
                                    </div>

                                    <div className="p-6">
                                        <h1 className="text-green-300 underline text-xl font-bold ml-12 cursor-pointer" style={{ "width": "55%", "height": "100%"}} onClick={searchJob}>Search</h1>
                                    </div>

                                </div>

                            </div>

                            {/* <div className="p-0 active mb-6 grid grid-cols-4 gap-4 bg-red-200">
                                <div className="p-6">
                                    <input type="text" className="form-control border w-full text-center h-9" placeholder="Keyword" />
                                </div>
                                
                                <div className="p-6">
                                    <select className="border-0 w-full text-left h-9">
                                        <option className='text-center' value="" disabled selected>Company</option>
                                        {compfilter && compfilter.length > 0 && compfilter.map((company, index) => (
                                            <option key={index} value={company}>{company}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className="p-6">
                                    <select className="border-0 w-full text-left h-9">
                                        <option className='text-center' value="" disabled selected>Location</option>
                                        {locfilter && locfilter.length > 0 && locfilter.map((location, index) => (
                                            <option key={index} value={location}>{location}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className="p-6">
                                    <button className="border-0 bg-green-500 text-white text-xl font-bold" style={{ "width": "55%", "height": "100%", "marginLeft": "-44%" }}>Search</button>
                                </div>
                            </div> */}

                        </div>
                    </div>


                    <div className="items-center justify-center hidden w-full md:flex md:w-auto md:order-1 mb-6" id="navbar-sticky">
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <a href="#tab-1" className="block py-2 px-3 text-xl border-b-2 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Feature Job</a>
                            </li>
                            <li>
                                <a href="#tab-2" className="block py-2 px-3 text-xl border-b-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Remote Job</a>
                            </li>
                            <li>
                                <a href="#tab-3" className="block py-2 px-3 text-xl border-b-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Current Openings</a>
                            </li>

                        </ul>
                    </div>

                    {/* <BounceLoader color="#36d7b7" /> */}
                    <div id="spinner" className={`p-0 active mb-6 grid grid-cols-4 gap-4 ${borderClass}`}>
                        <div className="p-6">
                            <BounceLoader
                                color="rgba(76, 54, 214, 1)"
                                cssOverride={{}}
                                loading
                                size={120}
                                speedMultiplier={1}
                            />
                        </div>
                        <div className="p-6">
                            <BounceLoader
                                color="rgba(76, 54, 214, 1)"
                                cssOverride={{}}
                                loading
                                size={120}
                                speedMultiplier={1}
                            />
                        </div>
                        <div className="p-6">
                            <BounceLoader
                                color="rgba(76, 54, 214, 1)"
                                cssOverride={{}}
                                loading
                                size={120}
                                speedMultiplier={1}
                            />
                        </div>
                        <div className="p-6">
                            <BounceLoader
                                color="rgba(76, 54, 214, 1)"
                                cssOverride={{}}
                                loading
                                size={120}
                                speedMultiplier={1}
                            />
                        </div>
                    </div>



                    <div className="tab-content" id='allJobs'>
                        <div id="tab-1" className="tab-pane fade show p-0 active mb-2 grid grid-cols-4 gap-4">
                            {/* <div className="max-w-sm rounded overflow-hidden shadow-lg">
                                <img className="w-full" src="data:image/jpeg;base64,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" alt="Sunset in the mountains" />
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">Software Engineer</div>
                                    <p className="text-gray-700 text-base">
                                        Google
                                    </p>
                                </div>
                                <div className="px-6 pt-4 pb-2">
                                    <span className="inline-block justify-center bg-green-600 rounded-full px-3 py-1 text-bold font-semibold text-white mr-2 mb-2">Apply Now</span>

                                </div>
                            </div>
                            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                                <img className="w-full" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCA8PDxEPDxEPDw8PDw8PEA8QDxEPEhEQGBQZGRgUGBgcIS4lHB4rHxgYJjgmKy8xNTo1GiQ7QDs0Py40NTEBDAwMEA8QHxISHzQsJSs0NDU0NDQ0NDQxMTQ0NDQ0NDQ0MTQ0NDQ0NDQ0NDQ0MTE0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAACAwABBAUGB//EAEMQAAIBAgMEBgUIBwkBAAAAAAECAAMRBBIhBTFBUQYTImFxkTJCUoGhBxRTYnKSsdIVFiMkgqLCM0NUY3OTssHRNP/EABoBAQADAQEBAAAAAAAAAAAAAAADBAUCAQb/xAAxEQEAAgECBAIIBgMBAAAAAAAAAQIDBBESITFRQWETcYGRocHR8AUUMkJSsSIj8RX/2gAMAwEAAhEDEQA/APVySQgIEAhASwIarAoLDCy1WMVYAqsMLCVYwLAWFhhIwLCCwFhIQSMCy8sBQSTJHZZMsBOSTJHZZMsBJSCUmjLBKwM5SCVmgpBKQMxWCVmgpAKwMxWAVmlli2WAgiARHMsAiAqSERBgSSSSAQENRKURiiBFEYqyKsYqwIqxirLVYxVgRVhqssLDAgCFhAQgJYEAQsvLDCy7QAyyZYzLLywFZZMsbllZYCssorG5ZRWAsrBKxpWCRASVgMs0EQCsDMyxTLNTLFssDMyxTCaWWLZYGdhAIjmEBhAXaSFaSAxRGKJSiNQQLVY1VlKsaiwLVYwCRRGAQKAhASwIYEAQIYEsCEBAECWBCAhWgBaXaY6+18NTuGqqSPVS7n+UGZX6R4cbkrN4UwPxIkc5aR1lPTTZrxvWs+51rSrTjfrJS+ir+VP80cnSLCnQmqn2qZA81uI9Nj/lDqdHqI/ZP36nTIgkQcPjKNb+zqU37lYX8t8aRJImJ6K8xNZ2mCyIJEaRBIh4SRKIjSIBEBREUyzQRAIgZmWJZZqZYplgZmWKYTSwimEBVpIVpIDUEaogoI5BANFjVEFBGKIFgQwJSiMAgQCGBIBCAgQCWbAXOgAuSdABF4rEpRQvUbKi+8k8ABxM8xjMY+JBeqeowynReLnv9pu7cJHfJFPWsYNPbLz6R3+UR4y6WL28L9Xhk6592fXID3cW/DvnBx+MZ7/OKxc/RIQVHcQOyPiZjxe0iQadIdWm42Pbf7Tf9TmmUMmabffJ9BptDTHG+23xn3+HsaqmNtoigDv7RiGxdQ+sfwiTKMh3aMY6x4D+cvzPnLGNqDjfxiTAM8d8FezYMaptmUXG5hoR4TsYHb1enbLU61B/d1e15HePjPMmUCRqJ1FprzhDl0+PJG1o3fS9nbfoVyFe9GqdArnssfqvuPgbGdUifKaOLuLOMynS/Gep6PbSxArU8OD19Nkz6m7UqXBs3K+mU+6XMOpm08No+/Nhaz8MjHE3xztHaflPyerIgERpEEiXGMSRBIjSIBEBLCKdZoYRTCBmcRTCaXEQ4gKtJDtJAYoj0EWgjkEA1EYogrDUQCURiiUohKIBAQiQBc7hrIBM9d87ZBuXVvGQ58voqb+PSI7z99XVK8UvN4yq1d2rYgNTo0iVSmd9+Xex4ngN04eOxbVWueyq6Io9FV5Ces2zgxiEABysl8p4eBnjK1NkYqwKlTYgzN9Lx8ve+l0PBaPOPDtHl6/GepTQIZmbF4lKKl6jBVHOcxG7T32MMEzzh2zicVU6nA0ajud2VGdyOdhuHeZ18N8nm3MTZqrJQB1tVr9ofwoG/GWK6a9uvJSy/iWDHO2+7SW7x5yjDf5KNpKCUxdBm4A1Kq39+WcrG9GNvYAZmpPWprqWpkYhbeA7XwnU6SfCXFPxbDadvv5OgZRnEwfSBWNqq9W24nhfv5Tv7Nw74uotLDgO7ag+oqcWY8APjIZwZOLh2XvzGLgm/FygWBwdSvVWhQQPVfXX0ES9jUc8FHLidJ9N2FsWngaWRSXqOQ9asw7dV7WzHkOAHAQ9hbEpYKlkTtO9mq1SO1Ue2/uA4DhOkRNDDhjHHm+W12utqbbRyrHT6yURAIjSIBEmUCyIsiNYQGEBLCAwjWEBhAzsIlxNLiJcQEWkh2lwGII5RFrGrAYsNRBWGsA1hqJSwlgSq+RGbkNPHhMaDKlzvbjDx7ego9Ylj7tB+MGrvty0mPq8nFmmPCsbe2ec/BaxV2r6/kUZy9rbOWutxZaijstzHsnunTMBjM+bTWd4W6WmkxavV852niFwqu1W65NCDvzcpzejHRfE7drGvWLUcEjEFhvYj1EvvPNtw7zoOxtXZv6b2mmHpkpToE9ZUUXGRSM5Pf6o7zyn1nA4OlhqSUKKCnSpqFRF3Kom1o6xanHMc0mv11rRFI5d2bY2xsLgKQo4WktJNLkC7OebNvY95nSkkl5jJJJJA850h6HYDaILVqeSsRpiKVkqjxO5vBgZo6N9HcNsyh1NBTc9qpVaxeo3NiPwGk7ckOuK3Dw78gEQCIwwTDksiARGmLMBbCAwjGgNAU0W0a0W0BTRLiPaJYQFSQrSQDSOWKpxqwGLGLFrGrANYawFjFgYapviLeyF/An/ALgudYIP7xU7h/QJbT5+9t7Xt3tb4cl+I22jygLTBtfE9ThqtQb0puw8bafG03GcXpVf5jWtyUe7OsrdZiE1I5wZ8mWzwmEfEtq+IqMMx35EJW33s5989tOH0NTLs3CD/KBPiWJPxM7k+lxRtSIZ+a2+S0+aSSSSRE8/t/aFSi6qjMg6vOcoU3Ja3EGcU7exH0r/AHaf5Zv6Wf2g/wBEf855kzX0uHHbFEzCrktMW5S6/wCn8R9K/lT/ACyv1hxH0j/dp/lnHMAy1+WxfxhH6S3d2/1jxH0jfdp/lk/WSv7b/dp/lnDMox+Vw/xg47d3c/WSt7TeSf8AktukNfI7BjdQDqE4m3KcGMB/Z1Psj/kJ7OmxR+2Djt3e92TiGrYajVe2d6Ss1hYZuM0tOf0c/wDhw/8Ap/1Gb2mDliIyWiO8/wBrlZ3rAGimjWimkboDRLRzRLQAtJJJAOnGrEpHLAYsasUsYsBixixawxA5raYpx7Vj/KP/ACW0ybdxyYbEUWcG1QFQVGnZIvc+DDymLaW0Ki1GRbIFNrjUkc9ZhZMNuO8bfun4802TWYscRvO87Ryh06jhRdiFHMkTh7ex1NsNXRQzt1VRgALAlBmtc/ZmGo7ObsSx5kwQ2Ug77Hdz7p5XBWJ3soX/ABW+/wDriI+M/R6X5O9oLidmUmAsUerTK3vazkr/AClTPVT5T8n+MGzto19mObUcSRUwpO4nLdR4lOz407T6tNum3DGyeuT0kcUpJJJO3TyXS91FRcxAvRFrm3rzy5rp7S+Yn0LamxcLjMvzmkKpTMFJLKQDa+qkchMP6mbL/wAKv+5V/NNLTavFjxxW0Tv7Pqr3xWtO8PEmuntL5iD1ye0vmJ7c9Ctl/wCGH+7W/NAboRsv6Ajwr1x/XLP/AKGn7W90fVz6CzxYcHcQfAyzOJgClTaWLXDgjB0RU6sFmbcwRO0Tc5iGbwnamhMRE+yJ98bobRtOyQyf2dTwUfzCBAxdTLSb6zAeWs823mIeeD33RwfuOG76KnzuZvMzbIpGnhcOh3pQpKfHILzQ0+ZyzvktPnP9r9P0wBosxjRTSN0Bolo5oloASSXkgEscszoY5YDlhrFrDWA5YaxSw1gcbplgzVwbOou2HYVh3oNHH3ST7pwut66hSrb2Cmk/2l3H3rae5sCLEAgggg7iOU+eij8wxdXBvpQq2akx3AalG9xup8DKuopz4vvyUdXTaeLvyn5fRZgGMdCpIOhBIIizKTPlzNt7ObEU0eiSuKwxz0GU5WYXzFAedxmXv04z3HQnpSm0qAVyFxdIWrU9xaxtnA5HiOB05TzE5m0NnVOuGNwT9RjVOY2IVa3ffcHtvvo3GWMGXh5Ss6fPwcpfZZJ8/wBhfKNSYihtFGwuIXss2RshPMr6S/Ed89thMdQrqGo1adVT61N1cfAy9ExPRp1vFujVJJMuNx9DDrmr1adJRxqOq/jPXTVPEfKJ0kGFoNhaLfvWIXKcuppUm0LabmO4efCYOkPyjKL4fZiNXrt2VqFGIB3dlN7HvNh4zy2ztnPTqNisW/XYyo2bKzB+rb2nO5nHADRfK3uLUYcWSL5Y3rHh5+Hr59VfLnrWvX78mvY+z/muHCEWq1CKtUeybWVP4R8SZsMFawO/Q/jDIn0WHU01ETelt+//ADwVYtFucKiKNA4nF0MMvotUXP3KDmf+UEe+FiKoRSx4DTxnb+T7Z5brMc41bNRpX9m4LsPEgD+EzvNk9Fitk9keufp1d0rxWiHtTAaExgMZ8yvgaLaG0BoC2iWMaxiXMAbyQbyQLQxyGZ0McpgaFhqYpTDUwHKYSmLUwwYDQZxelexTjKF6dvnNG7UjuzD1kJ77D3gTsAwwZ5aItG0ubVi0cMvmWAx/Wrle61U7BDaE20sQdzDd7pqM63S3oy1UnF4MWxA7VSkNOut6w+vbznl8BtMP2Hurg2IYFTfiCDqDM7Ljmk82PmxWxztPvdAwTDlGQoCMTQp1lC1qaVQPRzjtL9lhqPcZy36O0A2ejVxGHbuK1B56N8Z2DBM6i0w9i9o6OWdmYu2X9JVsvL9t+eIHR2iWz1q+Irt3FaYPie03xnZMoz2clpdTmuTQo06KlaFNKIYWYoDnf7TntHzkIjCIBE4neeqO1pmd5ARItQrrfQcOEJrAXOgE5FevUxNVcNhVLu7ZQF48yTwUbyeE6xWvS0WxzMT5OqRabf4tmDovtLFJh6V1Qdqo+8JSB7T+OtgOZE+s4bDpRp06VNQqU0VUUcFAsJy+jOwaez6GRbPWezV6tvTe24clG4Dx4kzrkzdy6rLmpWuTbl279/W28WPgjn1Uxi2MImLJkCULGAxlsYDGADmJcxjmIcwKvLgXkgRDHIZnQxqGBpQxqmZ0MapgNUxgMUphAwHAwgYoGGDAaDPPdJOilHG3qoRQxI/vFHZfuccftbx37p3gYQM8mImNpeWrFo2l8jr1MVs9+qxaMvsv6SOOatub8e4Tfh8bTqDssL8jpPpOKw1Kuhp1kSrTb0kdQ6n3GeM2p8niMS+BrNQY69VVJdP4WHaX35pUvpvGrOy6LxowEQSJzMRsjbOEvmoVKqj1qH7wvuC9r4TA23a6aVKNRDyem1M+TASvOO0eCpbBkjwegIlETzp6Stwp6+MtNpY+sbUMLXe+gKYeq48wLTz0duzz0GSfB3z3zDi9pUaQ1YE8hqZWH6K7bxVs6rhkO81qgSw+yuY+42npdk/JvhaZD4uo+Kf2B+zpX7x6Tedu6S109p6p6aG8/q5PG4Kjjdq1OrwtMimCA9RrrTpj6zc/qjWfT+jXRuhs6nZe3XcDra7CzN9VfZXu851sPQp0kWnSRKdNBZURQiqOQA0hEy3jw1o0cWCuOOSyYJMhMAmSplMYBMsmATApjFsYTGJYwBcxLmG5iXMCXkgXkgUpjkMzKY1TA0q0ajTKrRytA0qYYMzq0aDAaDDBigYQMBwMsGKBhAwGgy7xYMu8Bl5Cb79fHWLvJeAYC8APIS80XeS8A7yiYN5RMCyZRMEmCTAsmCTKJgkwITAJkJi2aBGaKcy2aJZoFMYpjCYxTGBLyQbyQKUw1MSDDVhuvrA0K0YrTMpjVaBpVoxWmVWjVaBpDQwZnVoYaA4GEGig0IGA28u8VmlhoDc0l4rNLvAZeS8XeVmgMzSrwLyXgWTBJlFoJMAiYJMEtFs0AmaLZpTNFM0C2aLZpGaKYwIxi2MtjFkwLvJBvJAFjYEjkZ6RcNTyBQiMhFradrvzc/rcZ5yF1j5cmZ8lrZM7Zbcrcu6Bkx5S5ArvTsrWdSwuucWe27cpH8RgNmzH95cFg5Vcji4zHUa7gXAHdYTYUU6lVJtbVQdOUIInsprv7I1gYgQ3o4qpa9iQG0bODoeF9B7zzjaBBcD5xUaxUFf2gF84sb30vqvLXumsInspx9VeO+EqICDlW43HKLjwgbFaMVpmDQg0DSGhhpmDQw8DQGl5ogPLDwH5pM0TmkzQHZpM0TmkzQGlpRaKLyi8BhaCWiy8AtAYzwGaAWgFoBM0BmgloBaBbNAYyiYBMCyYEkkCSSSQJJJJAsQhJJAMQhJJANYQkkgGIQlyQLhSSQLkkkgSSSSBUGSSAJgmSSAJgGSSABgmSSABgmSSBUkkkCSSSQP/2Q==" alt="Sunset in the mountains" />
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                                    <p className="text-gray-700 text-base">
                                        Lorem ipsum
                                    </p>
                                </div>
                                <div className="px-6 pt-4 pb-2">
                                    <span className="inline-block justify-center bg-green-600 rounded-full px-3 py-1 text-bold font-semibold text-white mr-2 mb-2">Apply Now</span>
                                </div>
                            </div>
                            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                                <img className="w-full" src="data:image/jpeg;base64,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" alt="Sunset in the mountains" />
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                                    <p className="text-gray-700 text-base">
                                        Lorem ipsum
                                    </p>
                                </div>
                                <div className="px-6 pt-4 pb-2">
                                    <span className="inline-block justify-center bg-green-600 rounded-full px-3 py-1 text-bold font-semibold text-white mr-2 mb-2">Apply Now</span>
                                </div>
                            </div>
                            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                                <img className="w-full" src="data:image/jpeg;base64,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" alt="Sunset in the mountains" />
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                                    <p className="text-gray-700 text-base">
                                        Lorem ipsum
                                    </p>
                                </div>
                                <div className="px-6 pt-4 pb-2">
                                    <span className="inline-block justify-center bg-green-600 rounded-full px-3 py-1 text-bold font-semibold text-white mr-2 mb-2">Apply Now</span>
                                </div>
                            </div> */}


                            {fetchJobs && fetchJobs.map((job, index) => (
                                <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg">
                                    <img className="w-full" src={job.img} alt={job.title} />
                                    <div className="px-6 py-4">
                                        <div className="font-bold text-xl mb-2">{job.Title}</div>
                                        <p className="text-gray-700 text-base">{job.Company}</p>
                                    </div>
                                    {/* <div className="px-6 pt-4 pb-2">
                                        <button className="inline-block justify-center bg-green-600 rounded-full px-3 py-1 text-bold font-semibold text-white mr-2 mb-2" href={job.Link}>Apply Now</button>
                                    </div> */}
                                    <a href={job.Link} target='blank'>
                                        <button className="inline-block justify-center bg-green-600 rounded-full px-3 py-1 text-bold font-semibold text-white mr-2 mb-2">
                                            Apply Now
                                        </button>
                                    </a>
                                </div>
                            ))}



                            <a className="btn btn-primary py-3 px-5" href="">Browse More Jobs</a>
                        </div>

                        <div id="tab-2" className="tab-pane fade show p-0">

                            <div className="job-item p-4 mb-4">
                                <div className="row g-4">
                                    <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                        {/* <img className="flex-shrink-0 img-fluid border rounded" src="{% static 'img/com-logo-1.jpg' %}" alt="" style="width: 80px; height: 80px;"> */}
                                        <div className="text-start ps-4">
                                            <h5 className="mb-3">Soft</h5>
                                            <span className="text-truncate me-3"><i className="fa fa-map-marker-alt text-primary me-2"></i><b>XYZ</b></span>
                                            <span className="text-truncate me-3"><i className="far fa-clock text-primary me-2"></i>Fuul Time</span>
                                            <span className="text-truncate me-0"><i className="far fa-money-bill-alt text-primary me-2"></i>India</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                        <div className="d-flex mb-3">

                                            <a className="btn btn-primary applyLink-btn" href="#" target="_blank">Apply Now</a>
                                        </div>
                                        <small className="text-truncate"><i className="far fa-calendar-alt text-primary me-2"></i>1 week ago</small>
                                    </div>
                                </div>
                            </div>
                            <a className="btn btn-primary py-3 px-5" href="">Browse More Jobs</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainDesign