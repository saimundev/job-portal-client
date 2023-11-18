import React from 'react'
import LocationIcon from '../icon/LocationIcon'
import Education from '../icon/Education'
import Experience from '../icon/Experience'
import DateIcon from '../icon/DateIcon'

const JobShowCart = () => {
    return (
        <div>
            <div className="p-4 bg-white flex justify-between border border-gray-300 rounded-lg shadow">
                <div className="">
                    <h3 className="text-xl font-semibold text-green-500">Front-End developer</h3>
                    <h5 className="mt-1 text-sm font-semibold">Nusratech it company</h5>
                    {/* location */}
                    <div className="mt-4 space-y-1 text-gray-600">
                        <div className="flex items-center gap-2">
                            <LocationIcon />
                            <h6>Dhaka</h6>
                        </div>

                        <div className="flex items-center gap-2">
                            <Education />
                            <h1>Bachelor of Architecture (B.Arch.)/ Bachelor of Interior Architecture</h1>
                        </div>

                        <div className="flex items-center justify-between gap-2">
                            <div className="flex gap-2">
                                <Experience />
                                <h5>1 to 3 years</h5>
                            </div>

                        </div>
                    </div>
                </div>

                <div className=" grid content-between">
                    <img className="w-32 h-auto object-cover" src="https://corporate.bdjobs.com/logos/63111_0.png" alt="" />
                    <div className="flex self-end items-center gap-2">
                        <DateIcon />
                        <h5>19 january 2023</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobShowCart