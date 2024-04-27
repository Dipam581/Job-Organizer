import React from 'react';
import { SiBmcsoftware, SiPython, SiReact, SiAltiumdesigner } from "react-icons/si";
import { DiJava } from "react-icons/di";
import { GiSewingMachine } from "react-icons/gi";

function StarterComponent() {
    return (
        <>
            {/* <div className="p-6 bg-white rounded-lg ease-in-out duration-300 hover:bg-orange-500 transform hover:scale-105" style={{ "width": "14rem", "height": "5rem" }}>
                <div className='border-2 p-3 bg-yellow-500 w-10'>
                    <SiBmcsoftware />
                </div>
                <div className='text-2xl mt-4 font-semibold'>
                    Job
                </div>
            </div> */}

            <div className="grid grid-cols-2 gap-2 p-6 bg-white rounded-lg ease-in-out duration-300 hover:bg-orange-500 transform hover:scale-105" style={{ "width": "14rem", "height": "5rem" }}>
                <div className="col-span-1 border-2 p-3 bg-yellow-500 w-10">
                <SiBmcsoftware />
                </div>

                <div className="col-span-1 text-2xl mt-4 font-semibold">
                    job
                </div>
            </div>
        </>
    )
}

export default StarterComponent