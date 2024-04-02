import { React, useState } from 'react'

function PostedJobs(props) {
    const [data, setData] = useState([]);
    console.log("posted jobs", props.postedJob)

    const fetchData = async () => {
        console.log("data fetch started...")
        // const response = await fetch('http://localhost:8080/fetchData', {
        //     method: "GET",
        // })
        // const data = await response.json();
        // console.log("called db data", data)
        // var postedJob = [];

        // for(let key in data){
        //     let obj = {
        //         "company" : data[key].company,
        //         "designation" : data[key].designation,
        //         "description" : data[key].description,
        //         "skill" : data[key].skill,
        //         "link" : data[key].link,
        //         "yoe" : data[key].yoe,
        //         "salary" : data[key].salary,
        //         "mail" : data[key].mail,
        //     }
        //     postedJob.push(obj)
        // }

    };
    return (
        <>
            <div id="" className="p-0 mb-2">
                {props.postedJob && props.postedJob.map((job, index) => (
                    <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg">
                        <img className="w-full" src="https://img.freepik.com/free-psd/silver-letters-glass-building-facade_145275-162.jpg" alt={job.designation} />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{job.company}</div>
                            <p className="text-gray-700 text-base">{job.skill}</p>
                        </div>
                        <a href={job.link} target='blank'>
                            <button className="inline-block justify-center bg-green-600 rounded-full px-3 py-1 text-bold font-semibold text-white mr-2 mb-2">
                                Apply Now
                            </button>
                        </a>
                    </div>


                ))}

                <a className="btn btn-primary py-3 px-5" href="">Browse More Jobs</a>
            </div>

            <div className="grid grid-cols-4 gap-4 mb-8">
                <div className="col-span-1 border-0">
                    {/* Fiter button start */}

                    <div class="bg-white">
                        <div>

                            <div class="relative z-40 lg:hidden" role="dialog" aria-modal="true">

                                <div class="fixed inset-0 bg-black bg-opacity-25"></div>

                                <div class="fixed inset-0 z-40 flex">

                                    <div class="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                                        <div class="flex items-center justify-between px-4">
                                            <h2 class="text-lg font-medium text-gray-900">Filters</h2>
                                            <button type="button" class="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400">
                                                <span class="sr-only">Close menu</span>
                                                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                        </div>


                                        <form class="mt-4 border-t border-gray-200">
                                            <h3 class="sr-only">Categories</h3>
                                            <ul role="list" class="px-2 py-3 font-medium text-gray-900">
                                                <li>
                                                    <a href="#" class="block px-2 py-3">Totes</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="block px-2 py-3">Backpacks</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="block px-2 py-3">Travel Bags</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="block px-2 py-3">Hip Bags</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="block px-2 py-3">Laptop Sleeves</a>
                                                </li>
                                            </ul>

                                            <div class="border-t border-gray-200 px-4 py-6">
                                                <h3 class="-mx-2 -my-3 flow-root">

                                                    <button type="button" class="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500" aria-controls="filter-section-mobile-0" aria-expanded="false">
                                                        <span class="font-medium text-gray-900">Color</span>
                                                        <span class="ml-6 flex items-center">

                                                            <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                                <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                                                            </svg>

                                                            <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                                <path fill-rule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clip-rule="evenodd" />
                                                            </svg>
                                                        </span>
                                                    </button>
                                                </h3>

                                                <div class="pt-6" id="filter-section-mobile-0">
                                                    <div class="space-y-6">
                                                        <div class="flex items-center">
                                                            <input id="filter-mobile-color-0" name="color[]" value="white" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                            <label for="filter-mobile-color-0" class="ml-3 min-w-0 flex-1 text-gray-500">White</label>
                                                        </div>
                                                        <div class="flex items-center">
                                                            <input id="filter-mobile-color-1" name="color[]" value="beige" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                            <label for="filter-mobile-color-1" class="ml-3 min-w-0 flex-1 text-gray-500">Beige</label>
                                                        </div>
                                                        <div class="flex items-center">
                                                            <input id="filter-mobile-color-2" name="color[]" value="blue" type="checkbox" checked class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                            <label for="filter-mobile-color-2" class="ml-3 min-w-0 flex-1 text-gray-500">Blue</label>
                                                        </div>
                                                        <div class="flex items-center">
                                                            <input id="filter-mobile-color-3" name="color[]" value="brown" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                            <label for="filter-mobile-color-3" class="ml-3 min-w-0 flex-1 text-gray-500">Brown</label>
                                                        </div>
                                                        <div class="flex items-center">
                                                            <input id="filter-mobile-color-4" name="color[]" value="green" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                            <label for="filter-mobile-color-4" class="ml-3 min-w-0 flex-1 text-gray-500">Green</label>
                                                        </div>
                                                        <div class="flex items-center">
                                                            <input id="filter-mobile-color-5" name="color[]" value="purple" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                            <label for="filter-mobile-color-5" class="ml-3 min-w-0 flex-1 text-gray-500">Purple</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="border-t border-gray-200 px-4 py-6">
                                                <h3 class="-mx-2 -my-3 flow-root">

                                                    <button type="button" class="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500" aria-controls="filter-section-mobile-1" aria-expanded="false">
                                                        <span class="font-medium text-gray-900">Category</span>
                                                        <span class="ml-6 flex items-center">

                                                            <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                                <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                                                            </svg>

                                                            <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                                <path fill-rule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clip-rule="evenodd" />
                                                            </svg>
                                                        </span>
                                                    </button>
                                                </h3>

                                                <div class="pt-6" id="filter-section-mobile-1">
                                                    <div class="space-y-6">
                                                        <div class="flex items-center">
                                                            <input id="filter-mobile-category-0" name="category[]" value="new-arrivals" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                            <label for="filter-mobile-category-0" class="ml-3 min-w-0 flex-1 text-gray-500">New Arrivals</label>
                                                        </div>
                                                        <div class="flex items-center">
                                                            <input id="filter-mobile-category-1" name="category[]" value="sale" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                            <label for="filter-mobile-category-1" class="ml-3 min-w-0 flex-1 text-gray-500">Sale</label>
                                                        </div>
                                                        <div class="flex items-center">
                                                            <input id="filter-mobile-category-2" name="category[]" value="travel" type="checkbox" checked class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                            <label for="filter-mobile-category-2" class="ml-3 min-w-0 flex-1 text-gray-500">Travel</label>
                                                        </div>
                                                        <div class="flex items-center">
                                                            <input id="filter-mobile-category-3" name="category[]" value="organization" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                            <label for="filter-mobile-category-3" class="ml-3 min-w-0 flex-1 text-gray-500">Organization</label>
                                                        </div>
                                                        <div class="flex items-center">
                                                            <input id="filter-mobile-category-4" name="category[]" value="accessories" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                            <label for="filter-mobile-category-4" class="ml-3 min-w-0 flex-1 text-gray-500">Accessories</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="border-t border-gray-200 px-4 py-6">
                                                <h3 class="-mx-2 -my-3 flow-root">

                                                    <button type="button" class="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500" aria-controls="filter-section-mobile-2" aria-expanded="false">
                                                        <span class="font-medium text-gray-900">Size</span>
                                                        <span class="ml-6 flex items-center">

                                                            <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                                <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                                                            </svg>

                                                            <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                                <path fill-rule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clip-rule="evenodd" />
                                                            </svg>
                                                        </span>
                                                    </button>
                                                </h3>

                                                <div class="pt-6" id="filter-section-mobile-2">
                                                    <div class="space-y-6">
                                                        <div class="flex items-center">
                                                            <input id="filter-mobile-size-0" name="size[]" value="2l" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                            <label for="filter-mobile-size-0" class="ml-3 min-w-0 flex-1 text-gray-500">2L</label>
                                                        </div>
                                                        <div class="flex items-center">
                                                            <input id="filter-mobile-size-1" name="size[]" value="6l" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                            <label for="filter-mobile-size-1" class="ml-3 min-w-0 flex-1 text-gray-500">6L</label>
                                                        </div>
                                                        <div class="flex items-center">
                                                            <input id="filter-mobile-size-2" name="size[]" value="12l" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                            <label for="filter-mobile-size-2" class="ml-3 min-w-0 flex-1 text-gray-500">12L</label>
                                                        </div>
                                                        <div class="flex items-center">
                                                            <input id="filter-mobile-size-3" name="size[]" value="18l" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                            <label for="filter-mobile-size-3" class="ml-3 min-w-0 flex-1 text-gray-500">18L</label>
                                                        </div>
                                                        <div class="flex items-center">
                                                            <input id="filter-mobile-size-4" name="size[]" value="20l" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                            <label for="filter-mobile-size-4" class="ml-3 min-w-0 flex-1 text-gray-500">20L</label>
                                                        </div>
                                                        <div class="flex items-center">
                                                            <input id="filter-mobile-size-5" name="size[]" value="40l" type="checkbox" checked class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                                                                <label for="filter-mobile-size-5" class="ml-3 min-w-0 flex-1 text-gray-500">40L</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            <main class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                                <div class="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
                                    <h1 class="text-4xl font-bold tracking-tight text-gray-900">New Arrivals</h1>

                                    <div class="flex items-center">
                                        <div class="relative inline-block text-left">
                                            <div>
                                                <button type="button" class="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900" id="menu-button" aria-expanded="false" aria-haspopup="true">
                                                    Sort
                                                    <svg class="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                                                    </svg>
                                                </button>
                                            </div>


                                            <div class="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                                                <div class="py-1" role="none">

                                                    <a href="#" class="font-medium text-gray-900 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Most Popular</a>
                                                    <a href="#" class="text-gray-500 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Best Rating</a>
                                                    <a href="#" class="text-gray-500 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Newest</a>
                                                    <a href="#" class="text-gray-500 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-3">Price: Low to High</a>
                                                    <a href="#" class="text-gray-500 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-4">Price: High to Low</a>
                                                </div>
                                            </div>
                                        </div>

                                        <button type="button" class="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
                                            <span class="sr-only">View grid</span>
                                            <svg class="h-5 w-5" aria-hidden="true" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M4.25 2A2.25 2.25 0 002 4.25v2.5A2.25 2.25 0 004.25 9h2.5A2.25 2.25 0 009 6.75v-2.5A2.25 2.25 0 006.75 2h-2.5zm0 9A2.25 2.25 0 002 13.25v2.5A2.25 2.25 0 004.25 18h2.5A2.25 2.25 0 009 15.75v-2.5A2.25 2.25 0 006.75 11h-2.5zm9-9A2.25 2.25 0 0011 4.25v2.5A2.25 2.25 0 0013.25 9h2.5A2.25 2.25 0 0018 6.75v-2.5A2.25 2.25 0 0015.75 2h-2.5zm0 9A2.25 2.25 0 0011 13.25v2.5A2.25 2.25 0 0013.25 18h2.5A2.25 2.25 0 0018 15.75v-2.5A2.25 2.25 0 0015.75 11h-2.5z" clip-rule="evenodd" />
                                            </svg>
                                        </button>
                                        <button type="button" class="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden">
                                            <span class="sr-only">Filters</span>
                                            <svg class="h-5 w-5" aria-hidden="true" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M2.628 1.601C5.028 1.206 7.49 1 10 1s4.973.206 7.372.601a.75.75 0 01.628.74v2.288a2.25 2.25 0 01-.659 1.59l-4.682 4.683a2.25 2.25 0 00-.659 1.59v3.037c0 .684-.31 1.33-.844 1.757l-1.937 1.55A.75.75 0 018 18.25v-5.757a2.25 2.25 0 00-.659-1.591L2.659 6.22A2.25 2.25 0 012 4.629V2.34a.75.75 0 01.628-.74z" clip-rule="evenodd" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>

                                <section aria-labelledby="products-heading" class="pb-24 pt-6">
                                    <h2 id="products-heading" class="sr-only">Products</h2>

                                    <div class="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">

                                        <form class="hidden lg:block">
                                            <h3 class="sr-only">Categories</h3>
                                            <ul role="list" class="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900">
                                                <li>
                                                    <a href="#">Totes</a>
                                                </li>
                                                <li>
                                                    <a href="#">Backpacks</a>
                                                </li>
                                                <li>
                                                    <a href="#">Travel Bags</a>
                                                </li>
                                                <li>
                                                    <a href="#">Hip Bags</a>
                                                </li>
                                                <li>
                                                    <a href="#">Laptop Sleeves</a>
                                                </li>
                                            </ul>

                                            <div class="border-b border-gray-200 py-6">
                                                <h3 class="-my-3 flow-root">

                                                    <button type="button" class="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-0" aria-expanded="false">
                                                        <span class="font-medium text-gray-900">Color</span>
                                                        <span class="ml-6 flex items-center">

                                                            <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                                <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                                                            </svg>

                                                            <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                                <path fill-rule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clip-rule="evenodd" />
                                                            </svg>
                                                        </span>
                                                    </button>
                                                </h3>

                                                <div class="pt-6" id="filter-section-0">
                                                    <div class="space-y-4">
                                                        <div class="flex items-center">
                                                            <input id="filter-color-0" name="color[]" value="white" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                            <label for="filter-color-0" class="ml-3 text-sm text-gray-600">White</label>
                                                        </div>
                                                        <div class="flex items-center">
                                                            <input id="filter-color-1" name="color[]" value="beige" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                            <label for="filter-color-1" class="ml-3 text-sm text-gray-600">Beige</label>
                                                        </div>
                                                        <div class="flex items-center">
                                                            <input id="filter-color-2" name="color[]" value="blue" type="checkbox" checked class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                            <label for="filter-color-2" class="ml-3 text-sm text-gray-600">Blue</label>
                                                        </div>
                                                        <div class="flex items-center">
                                                            <input id="filter-color-3" name="color[]" value="brown" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                            <label for="filter-color-3" class="ml-3 text-sm text-gray-600">Brown</label>
                                                        </div>
                                                        <div class="flex items-center">
                                                            <input id="filter-color-4" name="color[]" value="green" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                            <label for="filter-color-4" class="ml-3 text-sm text-gray-600">Green</label>
                                                        </div>
                                                        <div class="flex items-center">
                                                            <input id="filter-color-5" name="color[]" value="purple" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                            <label for="filter-color-5" class="ml-3 text-sm text-gray-600">Purple</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="border-b border-gray-200 py-6">
                                                <h3 class="-my-3 flow-root">

                                                    <button type="button" class="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-1" aria-expanded="false">
                                                        <span class="font-medium text-gray-900">Category</span>
                                                        <span class="ml-6 flex items-center">

                                                            <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                                <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                                                            </svg>

                                                            <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                                <path fill-rule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clip-rule="evenodd" />
                                                            </svg>
                                                        </span>
                                                    </button>
                                                </h3>

                                                <div class="pt-6" id="filter-section-1">
                                                    <div class="space-y-4">
                                                        <div class="flex items-center">
                                                            <input id="filter-category-0" name="category[]" value="new-arrivals" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                            <label for="filter-category-0" class="ml-3 text-sm text-gray-600">New Arrivals</label>
                                                        </div>
                                                        <div class="flex items-center">
                                                            <input id="filter-category-1" name="category[]" value="sale" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                            <label for="filter-category-1" class="ml-3 text-sm text-gray-600">Sale</label>
                                                        </div>
                                                        <div class="flex items-center">
                                                            <input id="filter-category-2" name="category[]" value="travel" type="checkbox" checked class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                            <label for="filter-category-2" class="ml-3 text-sm text-gray-600">Travel</label>
                                                        </div>
                                                        <div class="flex items-center">
                                                            <input id="filter-category-3" name="category[]" value="organization" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                            <label for="filter-category-3" class="ml-3 text-sm text-gray-600">Organization</label>
                                                        </div>
                                                        <div class="flex items-center">
                                                            <input id="filter-category-4" name="category[]" value="accessories" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                            <label for="filter-category-4" class="ml-3 text-sm text-gray-600">Accessories</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="border-b border-gray-200 py-6">
                                                <h3 class="-my-3 flow-root">

                                                    <button type="button" class="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-2" aria-expanded="false">
                                                        <span class="font-medium text-gray-900">Size</span>
                                                        <span class="ml-6 flex items-center">

                                                            <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                                <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                                                            </svg>

                                                            <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                                <path fill-rule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clip-rule="evenodd" />
                                                            </svg>
                                                        </span>
                                                    </button>
                                                </h3>
                                                
                                                <div class="pt-6" id="filter-section-2">
                                                    <div class="space-y-4">
                                                        <div class="flex items-center">
                                                            <input id="filter-size-0" name="size[]" value="2l" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                            <label for="filter-size-0" class="ml-3 text-sm text-gray-600">2L</label>
                                                        </div>
                                                        <div class="flex items-center">
                                                            <input id="filter-size-1" name="size[]" value="6l" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                            <label for="filter-size-1" class="ml-3 text-sm text-gray-600">6L</label>
                                                        </div>
                                                        <div class="flex items-center">
                                                            <input id="filter-size-2" name="size[]" value="12l" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                            <label for="filter-size-2" class="ml-3 text-sm text-gray-600">12L</label>
                                                        </div>
                                                        <div class="flex items-center">
                                                            <input id="filter-size-3" name="size[]" value="18l" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                            <label for="filter-size-3" class="ml-3 text-sm text-gray-600">18L</label>
                                                        </div>
                                                        <div class="flex items-center">
                                                            <input id="filter-size-4" name="size[]" value="20l" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                            <label for="filter-size-4" class="ml-3 text-sm text-gray-600">20L</label>
                                                        </div>
                                                        <div class="flex items-center">
                                                            <input id="filter-size-5" name="size[]" value="40l" type="checkbox" checked class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                            <label for="filter-size-5" class="ml-3 text-sm text-gray-600">40L</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>

                                        <div class="lg:col-span-3">

                                        </div>
                                    </div>
                                </section>
                            </main>
                        </div>
                    </div>



                    {/* Filter button end */}
                </div>
                <div className="col-span-3 border-0">
                    <div className="grid grid-cols-4 gap-4 mb-8 border-2">
                        <div className="border-0" style={{ "width": "15rem", "height": "10rem", "border-radius": "50%", "overflow": "hidden" }}>
                            <img className="" style={{ "width": "100%", "height": "auto" }} src="https://img.freepik.com/free-psd/silver-letters-glass-building-facade_145275-162.jpg" alt="sdsdf" />
                        </div>
                        <div className="col-span-2 border-0">
                            <div className='text-2xl font-medium mr-16 mt-6 font-serif'>Software Engineer </div>
                            <div className='text-xl font-medium mr-16 mt-2 font-serif text-gray-500'>Company - USA </div>

                            <div className='mr-16 mt-4'>
                                <span className='text-sm font-medium font-serif text-violet-500 border border-violet-200 rounded-xl p-1'>Full Time</span>
                                <span> | </span>
                                <span className='text-sm font-medium font-serif text-green-500 border border-green-200 rounded-xl p-1'>Python</span>
                                <span>   </span>
                                <span className='text-sm font-medium font-serif text-blue-500 border border-blue-200 rounded-xl p-1'>AWS</span>
                                <span>   </span>
                                <span className='text-sm font-medium font-serif text-yellow-500 border rounded-xl p-1 border-yellow-600'>Docker</span>
                                <span>   </span>
                            </div>
                        </div>

                        <div className="col-span-1 border-0 flex flex-col items-center">
                            <button type="submit" className='cursor-pointer border-2 p-2 mt-11 w-40 rounded-xl bg-cyan-500 text-white font-semibold text-lg hover:bg-green-500 hover:text-black'>Apply</button>
                            <div className="bg-gray-200 rounded-full dark:bg-gray-700 mt-2" style={{ width: '100%', maxWidth: '180px' }}>
                                <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center leading-none rounded-full" style={{ width: '69%' }}>69%</div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>



        </>
    )
}

export default PostedJobs