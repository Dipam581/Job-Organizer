import {React, useState} from 'react'

function ResumeUpload() {
    const [progress, setProgress] = useState(0);
    const [fileName, setFileName] = useState("--");

    console.log("resume upload process called.");
    const handleFileUpload = (event) => {
        console.log("resume upload process called.");
        const file = event.target.files[0];
        setFileName(file['name']);
        const reader = new FileReader();

        reader.onprogress = (e) => {
            const progressPercentage = Math.round((e.loaded / e.total) * 100);
            setProgress(progressPercentage);
        };
        reader.onload = (e) => {
            // Here you can do something with the loaded file if needed
        };
        reader.readAsDataURL(file);
    };

    return (
        <>

            {/* <div class="absolute flex items-center justify-center mt-32" style={{"z-index" : "3","width" : "50rem", "margin-left" : "22rem"}}>
                <label for="dropzone-file" class="flex flex-col items-center justify-center w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600" style={{"height" : "20rem"}}>
                    <div class="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                        </svg>
                        <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload your resume</span> or drag and drop</p>
                        <p class="text-xs text-gray-500 dark:text-gray-400">PDF (MAX. 800x400px)</p>
                    </div>
                    <input id="dropzone-file" type="file" class="hidden" />
                </label>
            </div> */}

            <div className="grid sm:grid-cols-2 gap-12 max-w-3xl mx-auto p-4">
                <div for="uploadFile1"
                    className="bg-gray-50 text-center px-4 rounded w-full h-80 flex flex-col items-center justify-center cursor-pointer border-2 border-gray-400 border-dashed font-[sans-serif]">
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
                    <hr className="w-full border-gray-400 my-2" />
                    <div className="py-6">
                        <input type="file" id='uploadFile1' className="hidden" onChange={handleFileUpload}/>
                        <label for="uploadFile1"
                            className="block px-6 py-2.5 rounded text-gray-600 text-sm tracking-wider font-semibold border-none outline-none bg-gray-200 hover:bg-gray-100">Browse Files</label>
                        <p className="text-xs text-gray-400 mt-4">PNG, JPG SVG, WEBP, and GIF are Allowed.</p>
                    </div>
                </div>
                <div className='mt-24'>
                    <h4 className="text-base text-gray-600 font-semibold">Uploading</h4>
                    <div className="space-y-8 mt-4">
                        <div className="flex flex-col">
                            <div className="flex mb-2">
                                <p className="text-sm text-gray-500 font-semibold flex-1">{fileName}</p>
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-3 cursor-pointer shrink-0 fill-black hover:fill-red-500" viewBox="0 0 320.591 320.591">
                                    <path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z" data-original="#000000"></path>
                                    <path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z" data-original="#000000"></path>
                                </svg>
                            </div>
                            <div className="bg-gray-300 rounded-full w-full h-2.5">
                                <div className="w-1/3 h-full rounded-full bg-blue-600 flex items-center relative" style={{ width: `${progress}%` }}>
                                    <span className="absolute text-xs right-0.5 bg-white w-2 h-2 rounded-full"></span>
                                </div>
                            </div>
                            <p className="text-sm text-gray-500 font-semibold flex-1 mt-2">{progress}% done</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ResumeUpload