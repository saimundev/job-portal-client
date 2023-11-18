"use client";

import React from 'react'
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { division } from '@/data/data'
import LessthenIcon from '../icon/LessthenIcon';
import { ScrollArea } from "@/components/ui/scroll-area"

const Sidebar = () => {
    return (
        <div className="sticky top-0">
            <ScrollArea className="h-screen">
                <div className=" p-4 bg-white rounded-lg">
                    <h3 className="text-lg font-semibold">Filter</h3>

                    {/* location state from here */}
                    <div className="mt-2">
                        <h4 className="text-base font-semibold">Location</h4>
                        <RadioGroup defaultValue="comfortable" className='mt-2'>
                            {division?.map((item) => (
                                <div className="flex items-center space-x-2 text-gray-500">
                                    <RadioGroupItem value={item.city} id="r1" />
                                    <Label htmlFor="r1">{item.city}</Label>
                                </div>
                            ))}


                        </RadioGroup>
                    </div>

                    {/* salary state from here */}
                    <div className="mt-4">
                        <h4 className="text-base font-semibold">Salary</h4>
                        <RadioGroup defaultValue="comfortable" className='mt-2'>
                            <div className="flex items-center space-x-2 text-gray-500">
                                <RadioGroupItem value="All time" id="r1" />
                                <Label htmlFor="r1">Any</Label>
                            </div>

                            <div className="flex items-center space-x-1 text-gray-500">
                                <RadioGroupItem value="All time" id="r1" />
                                <Label htmlFor="r1" className="flex"><LessthenIcon /> 30K</Label>
                            </div>
                            <div className="flex items-center space-x-1 text-gray-500">
                                <RadioGroupItem value="Last 7 days" id="r1" />
                                <Label htmlFor="r1" className='flex'><LessthenIcon />50K</Label>
                            </div>
                            <div className="flex items-center space-x-1 text-gray-500">
                                <RadioGroupItem value="Last 7 days" id="r1" />
                                <Label htmlFor="r1" className='flex'><LessthenIcon />80K</Label>
                            </div>
                            <div className="flex items-center space-x-1 text-gray-500">
                                <RadioGroupItem value="Last 7 days" id="r1" />
                                <Label htmlFor="r1" className='flex'><LessthenIcon />100K</Label>
                            </div>
                        </RadioGroup>
                    </div>

                    {/* date of post state from here */}
                    <div className="mt-4">
                        <h4 className="text-base font-semibold">Date Of Post</h4>
                        <RadioGroup defaultValue="comfortable" className='mt-2'>
                            <div className="flex items-center space-x-2 text-gray-500">
                                <RadioGroupItem value="All time" id="r1" />
                                <Label htmlFor="r1">All time</Label>
                            </div>

                            <div className="flex items-center space-x-2 text-gray-500">
                                <RadioGroupItem value="All time" id="r1" />
                                <Label htmlFor="r1">Last 24 hour</Label>
                            </div>
                            <div className="flex items-center space-x-2 text-gray-500">
                                <RadioGroupItem value="Last 7 days" id="r1" />
                                <Label htmlFor="r1">Last 7 days</Label>
                            </div>
                            <div className="flex items-center space-x-2 text-gray-500">
                                <RadioGroupItem value="Last 7 days" id="r1" />
                                <Label htmlFor="r1">Last month</Label>
                            </div>
                        </RadioGroup>
                    </div>

                    {/* experience state from here */}
                    <div className="mt-4">
                        <h4 className="text-base font-semibold">Work experience</h4>
                        <RadioGroup defaultValue="comfortable" className='mt-2'>
                            <div className="flex items-center space-x-2 text-gray-500">
                                <RadioGroupItem value="All time" id="r1" />
                                <Label htmlFor="r1">Any experience</Label>
                            </div>

                            <div className="flex items-center space-x-2 text-gray-500">
                                <RadioGroupItem value="All time" id="r1" />
                                <Label htmlFor="r1">Internship</Label>
                            </div>
                            <div className="flex items-center space-x-2 text-gray-500">
                                <RadioGroupItem value="Last 7 days" id="r1" />
                                <Label htmlFor="r1">Work remotely</Label>
                            </div>

                        </RadioGroup>
                    </div>

                    {/* type of employment state from here */}
                    <div className="mt-4">
                        <h4 className="text-base font-semibold">Type of employment</h4>
                        <RadioGroup defaultValue="comfortable" className='mt-2'>
                            <div className="flex items-center space-x-2 text-gray-500">
                                <RadioGroupItem value="All time" id="r1" />
                                <Label htmlFor="r1">Any</Label>
                            </div>

                            <div className="flex items-center space-x-2 text-gray-500">
                                <RadioGroupItem value="All time" id="r1" />
                                <Label htmlFor="r1">Full time</Label>
                            </div>
                            <div className="flex items-center space-x-2 text-gray-500">
                                <RadioGroupItem value="Last 7 days" id="r1" />
                                <Label htmlFor="r1">Temporary</Label>
                            </div>
                            <div className="flex items-center space-x-2 text-gray-500">
                                <RadioGroupItem value="Last 7 days" id="r1" />
                                <Label htmlFor="r1">Part time</Label>
                            </div>

                        </RadioGroup>
                    </div>
                </div>
            </ScrollArea>
        </div>
    )
}

export default Sidebar