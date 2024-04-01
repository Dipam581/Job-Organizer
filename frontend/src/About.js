import React from 'react';
//import { SiBmcsoftware } from "react-icons/si";
import Section from './Section';

function About() {
  return (
    <>
      <div className='mt-32 mb-4'>
        <hl className="text-white text-lg p-2 border-2 rounded-sm bg-orange-500">Job Categories</hl>
        <br />
        <p className="mt-6 text-black text-3xl">Top Trending Category</p>
        <br />
        <p className=' font-sans mb-6'>Unlock your potential with our curated selection of trending category jobs.
          From cutting-edge tech positions to dynamic opportunities in emerging industries,
          we connect you with roles that define the future.
          Explore now and take the next step towards your career aspirations.
        </p>

        <div className="p-0 active mb-2 grid grid-cols-4 gap-4">
          <Section/>


        </div>

      </div>
    </>
  )
}

export default About