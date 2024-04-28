import { React, useState, useEffect } from 'react';
import { BsPostcardFill } from "react-icons/bs";
import { MdCastForEducation } from "react-icons/md";
import { BsBriefcaseFill } from "react-icons/bs";

function StarterComponent() {
    console.log("-----------")
    const [jobPost, setJob] = useState(0);
    const [candidate, setCandidate] = useState(89);
    const [visitCount, setVisitCount] = useState(0);

    const fetchData = async () => {
        console.log("data fetch started...")
        const response = await fetch('http://localhost:8080/fetchData', {
            method: "GET",
        })
        const data = await response.json();
        setJob(Object.keys(data)?.length || 0);

    };
    useEffect(() => {
        fetchData();
    }, []);


    useEffect(() => {
        const storedVisitCount = localStorage.getItem('visitCount');

        if (storedVisitCount) {
            setVisitCount(parseInt(storedVisitCount));
        } else {
            localStorage.setItem('visitCount', 1);
            setVisitCount(1);
        }
        localStorage.setItem('visitCount', visitCount + 1);
        setVisitCount(visitCount + 1);
    }, []);

    return (
        <>
            <div className="grid grid-cols-3 gap-8 mt-6">
                <div className="col-span-1">
                    <div className="grid grid-cols-2 gap-2 p-2 bg-blue-100 bg-opacity-70 rounded-lg ease-in-out duration-300 hover:bg-orange-500 transform hover:scale-105" style={{ "width": "14rem", "height": "5rem" }}>
                        <div className="col-span-1 border-2 p-2.5 bg-yellow-500 w-10 h-11 mt-2.5">
                            <BsPostcardFill />
                        </div>
                        <div className="col-span-1 text-xl font-semibold" style={{ "margin-left": "-3rem" }}>
                            <label className='text-2xl font-serif'>{jobPost}</label>
                            <br></br>
                            <label className='text-blue-900 font-thin font-serif'>Live job Posted</label>
                        </div>
                    </div>
                </div>
                <div className="col-span-1">
                    <div className="grid grid-cols-2 gap-2 p-2 bg-blue-100 bg-opacity-70 rounded-lg ease-in-out duration-300 hover:bg-orange-500 transform hover:scale-105" style={{ "width": "14rem", "height": "5rem" }}>
                        <div className="col-span-1 border-2 p-2.5 bg-yellow-500 w-10 h-11 mt-2.5">
                            <MdCastForEducation />
                        </div>
                        <div className="col-span-1 text-xl font-semibold" style={{ "margin-left": "-3rem" }}>
                            <label className='text-2xl font-serif'>{candidate}</label>
                            <br></br>
                            <label className='text-blue-900 font-thin font-serif'>No Of Apply</label>
                        </div>
                    </div>
                </div>
                <div className="col-span-1">
                    <div className="grid grid-cols-2 gap-2 p-2 bg-blue-100 bg-opacity-70 rounded-lg ease-in-out duration-300 hover:bg-orange-500 transform hover:scale-105" style={{ "width": "14rem", "height": "5rem" }}>
                        <div className="col-span-1 border-2 p-2.5 bg-yellow-500 w-10 h-11 mt-2.5">
                            <BsBriefcaseFill />
                        </div>
                        <div className="col-span-1 text-xl font-semibold" style={{ "margin-left": "-3rem" }}>
                            <label className='text-2xl font-serif'>{visitCount}</label>
                            <br></br>
                            <label className='text-blue-900 font-thin font-serif'>Total Site Visit</label>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default StarterComponent