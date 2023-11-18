import Pagination from '@/components/job/Pagination'
import Sidebar from '@/components/job/Sidebar'
import Container from '@/components/shared/Container'
import JobShowCart from '@/components/shared/JobShowCart'
import React from 'react'

const page = () => {
    return (
        <Container className="grid grid-cols-[1fr_3fr] gap-6 mt-10">
            <div className="">
                <Sidebar />
            </div>
            <div className="">
                <JobShowCart />
                <JobShowCart />
                <JobShowCart />
                <JobShowCart />
                <JobShowCart />
                <JobShowCart />
                <JobShowCart />
                <JobShowCart />
                <JobShowCart />
                <JobShowCart />
                <JobShowCart />
                <JobShowCart />
                <JobShowCart />
                <JobShowCart />
                <JobShowCart />
                <JobShowCart />
                <JobShowCart />
                <JobShowCart />
                <JobShowCart />
                <JobShowCart />
                <JobShowCart />
                <JobShowCart />
                <JobShowCart />
                <JobShowCart />
                <JobShowCart />
                <JobShowCart />
                <JobShowCart />
                <JobShowCart />
                <JobShowCart />
                <JobShowCart />

                {/* pagination start from here */}
                <Pagination />
            </div>
        </Container>
    )
}

export default page