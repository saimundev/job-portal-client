import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import Link from "next/link";
import { Input } from '../ui/input';
import { division } from '@/data/data';
import { Button } from '../ui/button';

const Banner = () => {

    return (
        <div className="text-center">
            <h1 className="text-5xl font-semibold">Find Your Dream<span className="text-green-500"> IT</span> Job BY DashJ<span className="font-bold text-green-500">O</span>b</h1>
            <p className="mt-4 text-sm font-medium text-gray-600">Let us connect you with your next employer or employee.</p>

            {/* job search bar  */}
            <form className=" w-3/4 p-4 mx-auto mt-8 bg-green-500 border border-gray-200 rounded-lg shadow-sm">
                <div className="grid md:grid-cols-[1fr_200px_auto] gap-4">
                    {/* search input field */}
                    <Input placeholder="Search by keyword" className="text-semibold" />
                    {/* job type select box */}
                    <Select>
                        <SelectTrigger className="">
                            <SelectValue placeholder="Organization Type" className="text-xs" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="government">Government</SelectItem>
                            <SelectItem value="semi government">Semi Government</SelectItem>
                            <SelectItem value="private-company">Private company</SelectItem>
                            <SelectItem value="freelance">Freelance</SelectItem>
                        </SelectContent>
                    </Select>

                    <Button size="lg" className="bg-green-800">Search</Button>

                </div>
            </form>


            {/* render division list */}
            <div className="flex justify-center gap-4 mt-4">
                {division?.map((item) => (
                    <Link key={item.id} href="#" className=" px-4 py-1 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-full">
                        <h4>{item.city}</h4>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Banner