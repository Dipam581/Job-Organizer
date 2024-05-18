import React from 'react';
import { useState } from 'react';
// import { TEInput, TERipple } from "tw-elements-react";
import InputForm from './InputForm';
import Description from './Description';
import LocationFilter from '../LocationFilter';

function JobPost() {
    var jobProfile = [];
    const [imgUrl, setImgUrl] = useState('');
    const [formData, setFormData] = useState({
        company: '',
        designation: '',
        description: '',
        skill: '',
        link: '',
        mail: '',
        yoe: '',
        salary: '',
        type: '',
        image: ''
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleInputChangeFormDescription = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("submit button clicked");

        let obj = {
            "fname": formData.fname,
            "lname": formData.lname,
            "company": formData.company,
            "designation": formData.designation,
            "description": formData.description,
            "skill": formData.skill,
            "link": formData.link,
            "mail": formData.mail,
            "yoe": formData.yoe,
            "salary": formData.salary,
            "type": formData.type,
            "location": formData.location,
            // "image": e.target.image.files[0],
            "image": imgUrl,
        }
        jobProfile.push(obj)
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

    const handleImgUrlChange = (newImgUrl) => {
        setImgUrl(newImgUrl);
    };


    return (
        <>
            <header className='p-4'>
                <div className="ml-80">
                    <a className="logo" href="">
                        <img className='ml-84' alt="Workable recruiting software" src="https://dcvxs6ggqztsa.cloudfront.net/assets/public/quick_start/header/workable-logo-2da7c08eab8a67fe047b5ae0cec7e5f513b581edd2189b9f0c6aa1671b7f0d25.svg" />
                    </a>

                    <a href="http://localhost:3000/" class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2" style={{ "margin-left": "62rem" }}>
                        <svg class="svg-icon" viewBox="0 0 20 20">
                            <path d="M6.634,13.591H2.146c-0.247,0-0.449,0.201-0.449,0.448v2.692c0,0.247,0.202,0.449,0.449,0.449h4.488c0.247,0,0.449-0.202,0.449-0.449v-2.692C7.083,13.792,6.881,13.591,6.634,13.591 M6.185,16.283h-3.59v-1.795h3.59V16.283zM6.634,8.205H2.146c-0.247,0-0.449,0.202-0.449,0.449v2.692c0,0.247,0.202,0.449,0.449,0.449h4.488c0.247,0,0.449-0.202,0.449-0.449V8.653C7.083,8.407,6.881,8.205,6.634,8.205 M6.185,10.897h-3.59V9.103h3.59V10.897z M6.634,2.819H2.146c-0.247,0-0.449,0.202-0.449,0.449V5.96c0,0.247,0.202,0.449,0.449,0.449h4.488c0.247,0,0.449-0.202,0.449-0.449V3.268C7.083,3.021,6.881,2.819,6.634,2.819 M6.185,5.512h-3.59V3.717h3.59V5.512z M15.933,5.683c-0.175-0.168-0.361-0.33-0.555-0.479l1.677-1.613c0.297-0.281,0.088-0.772-0.31-0.772H9.336c-0.249,0-0.448,0.202-0.448,0.449v7.107c0,0.395,0.471,0.598,0.758,0.326l1.797-1.728c0.054,0.045,0.107,0.094,0.161,0.146c0.802,0.767,1.243,1.786,1.243,2.867c0,1.071-0.435,2.078-1.227,2.837c-0.7,0.671-1.354,1.086-2.345,1.169c-0.482,0.041-0.577,0.733-0.092,0.875c0.687,0.209,1.12,0.314,1.839,0.314c0.932,0,1.838-0.173,2.673-0.505c0.835-0.33,1.603-0.819,2.262-1.449c1.322-1.266,2.346-2.953,2.346-4.751C18.303,8.665,17.272,6.964,15.933,5.683 M15.336,14.578c-1.124,1.077-2.619,1.681-4.217,1.705c0.408-0.221,0.788-0.491,1.122-0.812c0.97-0.929,1.504-2.168,1.504-3.485c0-1.328-0.539-2.578-1.521-3.516c-0.178-0.17-0.357-0.321-0.548-0.456c-0.125-0.089-0.379-0.146-0.569,0.041L9.769,9.327v-5.61h5.861l-1.264,1.216c-0.099,0.094-0.148,0.229-0.137,0.366c0.014,0.134,0.088,0.258,0.202,0.332c0.313,0.204,0.61,0.44,0.882,0.7c1.158,1.111,2.092,2.581,2.092,4.145C17.405,12.026,16.48,13.482,15.336,14.578"></path>
                        </svg>
                        Main Page
                    </a>
                </div>
                <div className="ml-16">
                    <div className="container">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="col-span-1 mt-8 ml-56" style={{ "maxWidth": "34rem" }}>
                                <h1 className="font-serif p-8 text-4xl font-black" style={{ "color": "#00756a" }}>
                                    You’re just two quick steps from posting your job to the top job boards
                                </h1>
                            </div>
                            <div className="col-span-1 ml-48">
                                <div className="ml-40">
                                    <img alt="Workable graphic" srcset="https://dcvxs6ggqztsa.cloudfront.net/assets/public/quick_start/customize/bubbles-top_2x-b246509f89f412620ed5b42dfdbd22009aa41f5408dcee2344cef9d030154e68.png 2x" src="https://dcvxs6ggqztsa.cloudfront.net/assets/public/quick_start/customize/bubbles-top-6dd5387bc16199a86a4ff07540a187b6e2c6d5842658e1f9de0a74dedd17bb0d.png" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>


            <section className="job-description-form">
                {/* noValidate="novalidate"  acceptCharset="UTF-8" */}
                <form className="" id="new_quick_start" onSubmit={handleSubmit} method="post">
                    <input name="utf8" type="hidden" value="✓" autoComplete="off" />
                    <input type="hidden" name="authenticity_token" value="DhpahkBJ2t_Ek8YgbeAKniT_RVrIF5dkabjwC_HVsIm8V-6eZxYm_gT9cjHAktRVYFmPmTrVyS1p9f2RrtXg-Q" autoComplete="off" />
                    <input autoComplete="off" type="hidden" value="786" name="quick_start[job_description_id]" id="quick_start_job_description_id" />
                    <input autoComplete="off" type="hidden" value="Delhi" name="quick_start[locality]" id="quick_start_locality" />
                    <input autoComplete="off" type="hidden" value="DL" name="quick_start[workable_state_region]" id="quick_start_workable_state_region" />
                    <input autoComplete="off" type="hidden" value="" name="quick_start[postal_code]" id="quick_start_postal_code" />
                    <input autoComplete="off" type="hidden" value="IN" name="quick_start[country]" id="quick_start_country" />
                    <div className="error-notification">
                        <div className="container"></div>
                    </div>
                    <section>
                        <div className="container ml-48">
                            <div className="grid grid-cols-2 gap-2">
                                <div className="col-span-1 mr-8">
                                    <section className="border-2 shadow-xl p-2.5">

                                        <div className="row">
                                            <Description handleInputChangeFormDescription={handleInputChangeFormDescription} />
                                            <LocationFilter />
                                        </div>

                                        {/* <div className="">
                                            <div>
                                                div 2
                                            </div>
                                        </div> */}
                                    </section>
                                </div>
                                <div className="col-span-1">
                                    <div className="border-2 shadow-lg  p-2.5 ml-28 mr-28">
                                        <section className="">
                                            <div>
                                                <InputForm handleInputChange={handleInputChange} handleImgUrlChange={handleImgUrlChange} />
                                            </div>
                                        </section>
                                        <section className="">
                                            {/* <div className="">
                                                <label for="gdpr_consent">Yes, I’d like to receive new resources like tutorials, templates and the latest hiring advice, and hear about Workable events. (You can opt out at any time.)</label>
                                                <p class="n">
                                                    View our
                                                    <a class="color-grey" href="/privacy" target="_blank">privacy policy</a>.
                                                </p>
                                            </div> */}
                                            <button className={`shadow bg-purple-500 hover:bg-green-600 focus:shadow-outline focus:outline-none text-white text-lg font-bold py-2 px-4 rounded`} style={{ "background-color": "#00756a", "width": "9rem", "height": "4rem", "margin-left": "23rem" }} type="submit">
                                                Post this Job
                                            </button>
                                        </section>
                                    </div>
                                    {/* <div>
                                        <button className={`shadow bg-purple-500 hover:bg-green-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded`} type="submit">
                                            Post
                                        </button>
                                    </div> */}
                                    <div className="bubbles-bottom">
                                        <img alt="Workable graphic" srcSet="https://dcvxs6ggqztsa.cloudfront.net/assets/public/quick_start/customize/bubbles-bottom_2x-edc7eaf9f8909edb5badf2bd861ff06e576720dcd9cbb6614a31c8666d893cfb.png 2x" src="https://dcvxs6ggqztsa.cloudfront.net/assets/public/quick_start/customize/bubbles-bottom-9836a3b9942289653d9abca17de61edf21b3480186962485f483ef2b64d25598.png" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </form>
            </section>

        </>
    )
}

export default JobPost