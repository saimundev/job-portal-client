import React from 'react'
import LocationIcon from '../icon/LocationIcon'
import Education from '../icon/Education'
import Experience from '../icon/Experience'
import DateIcon from '../icon/DateIcon'
import JobShowCart from '../shared/JobShowCart'

const RecentJob = () => {
    return (
        <div className="mt-20">
            <h2 className="sub-title">Recent Jobs</h2>
            <JobShowCart />
            <JobShowCart />
            <JobShowCart />
            <JobShowCart />
        </div>
    )
}

export default RecentJob