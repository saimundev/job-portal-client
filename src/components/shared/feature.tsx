"use client";
import React from 'react'
import { Button } from '../ui/button'
import JobFinder from '../svg/JobFinder';
import Employers from '../svg/Employers';


const Feature = () => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <h2 className=" text-4xl font-medium">Why DashJob?</h2>
        <p className="mt-4 text-xl text-gray-500">Motivated by our vision to Employ the World, we believe through exceptional service and innovation we can create greater accessibility for both job seekers and employers. Our technology provides the opportunity to experience modern recruitment methods on one comprehensive, cost-effective and convenient platform.</p>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-10">
        <div className="p-4 bg-white rounded-lg shadow">
          <Employers className="w-80 h-80 mx-auto" />
          <div className="">
            <h3 className='text-xl font-bold'>Are you looking for an entry-level job?</h3>
            <p className='mt-4 text-lg text-gray-500'>Register on JOBJACK to create your profile and apply for jobs in your surrounding areas! We also have job resources available to help you on your application journey and make sure you are interview ready.</p>
            <div className="text-center">
              <Button className='px-12 mx-auto mt-8 text-base rounded-full' size="lg">Find a job</Button>
            </div>
          </div>
        </div>

        <div className="p-4 bg-white rounded-lg shadow">
          <JobFinder className="w-80 h-80 mx-auto" />
          <div className="">
            <h3 className='text-xl font-bold'>Are you looking for an entry-level job?</h3>
            <p className='mt-4 text-lg text-gray-500'>Register on JOBJACK to create your profile and apply for jobs in your surrounding areas! We also have job resources available to help you on your application journey and make sure you are interview ready.</p>
            <div className="text-center">
              <Button className='px-12 mx-auto mt-8 text-base rounded-full' variant="secondary" size="lg">Book a demo</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feature