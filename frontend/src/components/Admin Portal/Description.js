import React from 'react';
import { Select, Option } from "@material-tailwind/react";

function Description({handleInputChangeFormDescription}) {
    return (
        <>
            <div className='grid grid-cols-2 gap-2 mb-6'>
                <div>
                    <input type="text" id="designation" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={handleInputChangeFormDescription} placeholder="Title" required />                </div>
                <div>
                    <input type="text" id="location" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={handleInputChangeFormDescription} placeholder="Location" required />                </div>
            </div>
            <div>
                <label for="skill" className="block mb-2 text-lg font-medium font-serif text-gray-900 dark:text-white">Job Description</label>
            </div>
            <div className='mb-6'>
                <textarea type="text" id="description" className="resize-y bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={handleInputChangeFormDescription} placeholder="Python, Java, ML, AWS" style={{
                    resize: 'vertical', // Allow vertical resizing
                    minHeight: '196px', // Set a minimum height
                    maxHeight: '300px', // Set a maximum height if needed
                }} required></textarea>
            </div>

            <div>
                <label for="skill" className="block mb-2 text-lg font-medium font-serif text-gray-900 dark:text-white">Required Skills</label>
            </div>
            <div>
                <textarea type="text" id="skill" className="resize-y bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={handleInputChangeFormDescription} placeholder="Python, Java, ML, AWS" style={{
                    resize: 'vertical', // Allow vertical resizing
                    minHeight: '96px', // Set a minimum height
                    maxHeight: '300px', // Set a maximum height if needed
                }} required></textarea>
            </div>
            <div>
                <label for="type" className="mt-4 block mb-2 text-lg font-medium font-serif text-gray-900 dark:text-white">Job Type</label>
            </div>
            <div className="">
                <Select className=' h-8 rounded-lg' value="select" id="type" onChange={handleInputChangeFormDescription} required>
                    <Option disabled >Select type</Option>
                    <Option>Full Time - WFH</Option>
                    <Option>Full Time - WFO</Option>
                    <Option>Full Time - Hybrid</Option>

                </Select>
            </div>

        </>
    )
}

export default Description