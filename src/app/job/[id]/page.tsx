import Details from '@/components/job/Details'
import JobSummary from '@/components/job/JobSummary'
import Container from '@/components/shared/Container'
import { Button } from '@/components/ui/button'
import React from 'react'

const page = () => {
    return (
        <Container>
            <div className="grid grid-cols-[2fr_1fr] gap-6">
                <Details />
                <div>
                    <JobSummary />
                </div>
            </div>

            <div className="flex justify-center mt-20">
                <div className="">
                    <p><span className='text-red-500 font-medium text-lg'>*Photograph</span> must be enclosed with the resume.</p>
                    <div className="mt-10 text-center">
                        <h4 className='text-lg font-semibold'>Apply Procedure</h4>
                        <Button size="default" className='mt-6 px-10 text-base'>Apply Now</Button>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default page