import { React } from 'react';
import { useState } from 'react';
import axios from "axios";
import ClockLoader from "react-spinners/ClockLoader";

function InputForm({handleInputChange, handleImgUrlChange }) {
    const [img_Url, setImgUrl] = useState('');
    const [loadingFlag, setLoadingFlag] = useState(false);


    //Create image url
    const handleUpload = async (e) => {
        e.preventDefault();
        setLoadingFlag(true);
        try {
            console.log("image upload");
            var imgUrl = await uploadFile(e.target.files[0]);
            setImgUrl(imgUrl);

            if (imgUrl) {
                setLoadingFlag(false);
                handleImgUrlChange(imgUrl); // Call handleImgUrlChange with imgUrl value
            }
        } catch (error) {
            console.log("Error in uploading image to cloudinary", error);
        }
    };

    //upload image
    const uploadFile = async (img) => {
        const formdata = new FormData();
        formdata.append("file", img);
        formdata.append("upload_preset", "rio2jkki");

        let cloudeName = 'dvkwhr1bx' //process.env.REACT_APP_CLOUDINARY_CLOUD_NAME;
        let type = 'auto';
        let api = `https://api.cloudinary.com/v1_1/${cloudeName}/${type}/upload`;

        const res = await axios.post(api, formdata);
        const { secure_url } = res.data;
        console.log(secure_url);
        return secure_url;
    }



    return (
        <>
            <div style={{ "display": "flex", "justify-content": "center" }}>
                <input type="text" id="fname" className="mt-3 mb-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 py-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" style={{ "width": "20rem" }} onChange={handleInputChange} placeholder="First Name" required />
            </div>
            <div style={{ "display": "flex", "justify-content": "center" }}>
                <input type="text" id="lname" className="mb-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 py-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" style={{ "width": "20rem" }} onChange={handleInputChange} placeholder="Last Name" required />
            </div>
            <div style={{ "display": "flex", "justify-content": "center" }}>
                <input type="text" id="company" className="mb-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 py-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" style={{ "width": "20rem" }} onChange={handleInputChange} placeholder="XYZ Comapny" required />
            </div>
            <div style={{ "display": "flex", "justify-content": "center" }}>
                <input class="mb-6 p-2 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" name="image" accept="image/*" style={{ "width": "20rem" }} onChange={handleUpload} required />
            </div>
            {/* <div style={{ "display": "flex", "justify-content": "center" }}>
                <input type="text" id="designation" className="mb-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 py-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" style={{ "width": "20rem" }} onChange={handleInputChange} placeholder="AI Engineer" required />
            </div> */}
            <div style={{ "display": "flex", "justify-content": "center" }}>
                <input type="text" id="link" className="mb-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 py-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" style={{ "width": "20rem" }} onChange={handleInputChange} placeholder="www.google.com" required />
            </div>
            <div style={{ "display": "flex", "justify-content": "center" }}>
                <input type="number" id="yoe" className="mb-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 py-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" style={{ "width": "20rem" }} onChange={handleInputChange} placeholder="5 years" required />
            </div>
            <div style={{ "display": "flex", "justify-content": "center" }}>
                <input type="text" id="salary" className="mb-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 py-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" style={{ "width": "20rem" }} onChange={handleInputChange} placeholder="9 Lac" required />
            </div>
            <div className='mt-80' style={{ "position": "absolute", "margin-left": "56rem" }}>
                <ClockLoader color="#36d7b7" loading={loadingFlag} size={91} />
            </div>
            <div className="relative mb-6 ml-24">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 16">
                        <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                        <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                    </svg>
                </div>
                <input type="text" name='mail' id="mail" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ps-10 p-2.5 py-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" style={{ "width": "20rem" }} onChange={handleInputChange} placeholder="name@xyz.com" required/>
            </div>
        </>
    )
}

export default InputForm