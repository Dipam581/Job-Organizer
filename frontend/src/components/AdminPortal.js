import React from 'react';
import axios from "axios";
import Axios from './Axios';

function AdminPortal() {
  var jobProfile = [];
  const handleSubmit = async (e) => {
    e.preventDefault();

    let obj = {
      "company": e.target[0].value,
      "designation": e.target[1].value,
      "description": e.target[2].value,
      "skill": e.target[3].value,
      "yoe": e.target[4].value,
      "salary": e.target[5].value,
      "mail": e.target[6].value,
    }
    jobProfile.push(obj)
    addData()





    // const response = await axios.post("http://127.0.0.1:8000/jobdata/", jobProfile);
    // const response = await axios.post("http://127.0.0.1:8000/jobdata/", obj, {
    //   withCredentials: true, // Include credentials
    // });

    // if (response.status === 200) {
    //   console.log("success");
    // } else {
    //   console.log("Failed");
    // }

  }

  const addData = async () => {
    let formField = new FormData()

    formField.append("company", jobProfile[0].company)
    formField.append("designation", jobProfile[0].designation)
    formField.append("description", jobProfile[0].description)
    formField.append("skill", jobProfile[0].skill)
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
            <label for="yoe" className="block mb-2 text-lg font-medium font-serif text-gray-900 dark:text-white">YOE</label>
          </div>
          <div>
            <input type="number" id="yoe" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="3 - 5" required />
          </div>

          <div>
            <label for="salary" className="block mb-2 text-lg font-medium font-serif text-gray-900 dark:text-white">Salary Range</label>
          </div>
          <div className="relative mb-6">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z" /></svg>
            </div>
            <input type="number" id="salary" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="5 CTC" />
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

          <div className="absolute right-36 bottom-44 md:flex md:items-center">
            <div className="md:w-1/3"></div>
            <div className="md:w-2/3">
              <button className="shadow bg-purple-500 hover:bg-green-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
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
