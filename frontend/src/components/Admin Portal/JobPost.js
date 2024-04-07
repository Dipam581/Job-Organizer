import React from 'react';
import { TEInput, TERipple } from "tw-elements-react";
import InputForm from './InputForm';
import Description from './Description';

function JobPost() {
    return (
        <>
            <header className='p-4'>
                <div className="ml-80">
                    <a className="logo" href="">
                        <img className='ml-84' alt="Workable recruiting software" src="https://dcvxs6ggqztsa.cloudfront.net/assets/public/quick_start/header/workable-logo-2da7c08eab8a67fe047b5ae0cec7e5f513b581edd2189b9f0c6aa1671b7f0d25.svg" />
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
                <form
                    data-ui="company_new_account_form"
                    className="simple_form simple-form new_quick_start"
                    id="new_quick_start"
                    noValidate="novalidate"
                    action="/post-jobs-for-free/customize"
                    acceptCharset="UTF-8"
                    method="post"
                >
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
                                            <Description />
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
                                                <InputForm />
                                            </div>
                                        </section>
                                        <section className="">
                                            <div className="">
                                                <label for="gdpr_consent">Yes, I’d like to receive new resources like tutorials, templates and the latest hiring advice, and hear about Workable events. (You can opt out at any time.)</label>
                                                <p class="n">
                                                    View our
                                                    <a class="color-grey" href="/privacy" target="_blank">privacy policy</a>.
                                                </p>
                                            </div>
                                        </section>
                                    </div>
                                    <div>
                                        <div className="absolute right-72 bottom-24 md:flex md:items-center">
                                            <div className="md:w-1/3"></div>
                                            <div className="md:w-2/3">
                                                <button className={`shadow bg-purple-500 hover:bg-green-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded`} type="submit">
                                                    Post
                                                </button>
                                            </div>
                                        </div>
                                    </div>
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