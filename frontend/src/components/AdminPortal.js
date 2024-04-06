import { React, useState } from 'react';
import axios from "axios";
import ClockLoader from "react-spinners/ClockLoader";
// import Axios from './Axios';
// import { data } from '../reactDataConfig';
// import { db } from '../reactDataConfig';
// import FetcheFirebase from './FetcheFirebase';

// import { ref, uploadBytes } from 'firebase/storage';
// import { collection, getDocs } from 'firebase/firestore';

function AdminPortal() {
  var jobProfile = [];
  const [img_Url, setImgUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    let obj = {
      "company": e.target[0].value,
      "designation": e.target[1].value,
      "description": e.target[2].value,
      "skill": e.target[3].value,
      "link": e.target[4].value,
      "mail": e.target[5].value,
      "yoe": e.target[6].value,
      "salary": e.target[7].value,
      "type": e.target[8].value,
      // "image": e.target.image.files[0],
      "image": img_Url,
    }
    jobProfile.push(obj)

    // const formData = new FormData();

    // // Append form data to the FormData object
    // formData.append("company", e.target[0].value);
    // formData.append("designation", e.target[1].value);
    // formData.append("description", e.target[2].value);
    // formData.append("skill", e.target[3].value);
    // formData.append("link", e.target[4].value);
    // formData.append("mail", e.target[5].value);
    // formData.append("yoe", e.target[6].value);
    // formData.append("salary", e.target[7].value);
    // formData.append("type", e.target[8].value);

    // // Append the image file to the FormData object
    // formData.append("image", e.target.image.files[0]);


    const response = await fetch('http://localhost:8080/fetchData', {
      method: "POST",
      body: JSON.stringify(obj),
      //body: formData,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json();

    console.log(data)
  }

  const [loadingFlag, setLoadingFlag] = useState(false);
  //Create image url
  const handleUpload = async (e) => {
    e.preventDefault();
    setLoadingFlag(true);
    try {
      console.log("image upload");
      var imgUrl = await uploadFile(e.target.files[0]);
      setImgUrl(imgUrl);

      if (imgUrl) setLoadingFlag(false);
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

  const [info, setInfo] = useState([]);

  const addData = async () => {
    let formField = new FormData()

    formField.append("company", jobProfile[0].company)
    formField.append("designation", jobProfile[0].designation)
    formField.append("description", jobProfile[0].description)
    formField.append("skill", jobProfile[0].skill)
    formField.append("link", jobProfile[0].link)
    formField.append("yoe", jobProfile[0].yoe)
    formField.append("salary", jobProfile[0].salary)
    formField.append("mail", jobProfile[0].mail)

    await axios({
      method: 'post',
      url: 'http://127.0.0.1:8000/jobdata/',
      data: formField
    }).then((response) => {
      console.log(response.data)
    })
  }
  return (
    <>
      <div className='mt-80' style={{ "position": "absolute", "margin-left": "56rem" }}>
        <ClockLoader color="#36d7b7" loading={loadingFlag} size={91} />
      </div>

      <form method='POST' onSubmit={handleSubmit} className="p-4 border-2 rounded-lg shadow-xl container m-auto mt-6 bg-gray-100">

        <p className='font-medium text-4xl'>Welcome to JobFinder!</p>
        <p className='mt-4 justify-center'>Empower recruiters with a seamless admin portal, offering intuitive tools to effortlessly post job opportunities.
          Streamline the process, from drafting job descriptions to reaching qualified candidates, and elevate recruitment efficiency.
          Unlock the potential to connect talent with the perfect roles, shaping the future of organizations with every posting.
        </p>

        <div className="p-10 grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label for="company" className="block mb-2 text-lg font-medium font-serif text-gray-900 dark:text-white">Comapny Name</label>

          </div>
          <div>
            <input type="text" id="company" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="XYZ Comapny" required />
          </div>

          <div>
            <label for="designation" className="block mb-2 text-lg font-medium font-serif text-gray-900 dark:text-white">Designation Name</label>

          </div>
          <div>
            <input type="text" id="designation" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="AI Engineer" required />
          </div>

          <div>
            <label for="description" className="block mb-2 text-lg font-medium font-serif text-gray-900 dark:text-white">Job Description</label>

          </div>
          <div>
            <textarea type="text" id="description" className="resize-y bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Job details" required></textarea>
          </div>

          <div>
            <label for="skill" className="block mb-2 text-lg font-medium font-serif text-gray-900 dark:text-white">Required Skills</label>
          </div>
          <div>
            <textarea type="text" id="skill" className="resize-y bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Python, Java, ML, AWS" required></textarea>
          </div>

          <div>
            <label for="link" className="block mb-2 text-lg font-medium font-serif text-gray-900 dark:text-white">Apply Link</label>
          </div>
          <div>
            <input type="text" id="link" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="www.google.com" required />
          </div>
          <div>
            <label for="email" className="block mb-2 text-lg font-medium font-serif text-gray-900 dark:text-white">Hr Email</label>
          </div>
          <div className="relative mb-6">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 16">
                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
              </svg>
            </div>
            <input type="text" id="mail" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@xyz.com" />
          </div>

          <div>
            <span for="yoe" className="mb-2 text-lg font-medium font-serif text-gray-900 dark:text-white">YOE</span>
            <span className=''><input type="number" id="yoe" className="ml-44 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-64 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="3 - 5" required /></span>
          </div>
          <div>
            <span for="salary" className="mb-2 text-lg font-medium font-serif text-gray-900 dark:text-white">Salary Range</span>
            <span><input type="number" id="salary" className="ml-44 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-64 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="3 - 5" required /></span>
          </div>

          <div>
            <span for="job-type" className="mb-2 text-lg font-medium font-serif text-gray-900 dark:text-white">Type</span>
            <span className=''><input type="text" id="job-type" className="ml-44 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-64 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="3 - 5" required /></span>
          </div>
          <div>
            <label for="CompanyLogo" className=" mb-2 text-lg font-medium font-serif text-gray-900 dark:text-white">Company Logo</label>
            <input class="w-64 p-2 text-sm ml-40  text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" name="image" accept="image/*" onChange={handleUpload} required/>
          </div>

          <div className="absolute right-72 bottom-24 md:flex md:items-center">
            <div className="md:w-1/3"></div>
            <div className="md:w-2/3">
              <button className={`shadow bg-purple-500 hover:bg-green-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded ${loadingFlag ? 'cursor-not-allowed' : ''}`} type="submit">
                Post
              </button>
            </div>
          </div>


        </div>


        {/* <div className="p-6 mb-2 grid grid-cols-2 gap-1">
          <div>
            <label className='text-lg font-medium font-serif'>Comapny Name</label>
          </div>
        </div> */}
      </form>
    </>
  );
}

export default AdminPortal; // Make sure to export the component