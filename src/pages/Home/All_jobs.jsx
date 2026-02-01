import React, { use } from 'react'
import JobCart from './JobCart';

export default function All_jobs({jobs}) {
  console.log(jobs)
   
  return (
    <>
      <div className='w-7xl mx-auto mt-10 mb-10'>
        <h2 className='text-xl font-semibold text-center'>Job of the day</h2>
        <p className='font-semibold text-center'>Search and connect with the right candidates faster</p>
        <div className='grid grid-cols-4 gap-5'>
             {jobs.map(job => <JobCart key={job._id} jobData={job}></JobCart>)}
        </div>
      </div>
    </>
  )
}
