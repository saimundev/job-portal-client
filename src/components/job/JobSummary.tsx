import React from 'react'

const JobSummary = () => {
    return (
        <div className="bg-white sticky top-0 rounded-lg">
            <h3 className="bg-slate-700 text-white rounded-t-lg px-4 py-2 font-semibold text-lg">Job Summary</h3>
            <div className="space-y-2 mt-4 px-4">
                <div className="">
                    <h4 className="job-summary-sub-title">Published on: <span className="job-summary-des">16 Nov 2023</span> </h4>
                </div>

                <div className="">
                    <h4 className="job-summary-sub-title">Vacancy: <span className="job-summary-des">2</span> </h4>
                </div>

                <div className="">
                    <h4 className="job-summary-sub-title">Employment Status: <span className="job-summary-des">Full time</span> </h4>
                </div>

                <div className="">
                    <h4 className="job-summary-sub-title">Age: <span className="job-summary-des">20 to 30</span> </h4>
                </div>

                <div className="">
                    <h4 className="job-summary-sub-title">Job Location: <span className="job-summary-des">Dhaka</span> </h4>
                </div>

                <div className="">
                    <h4 className="job-summary-sub-title">Application Deadline: <span className="job-summary-des">16 Dec 2023</span> </h4>
                </div>
            </div>
        </div>
    )
}

export default JobSummary