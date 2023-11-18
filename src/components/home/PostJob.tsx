"use client";

import React, { useState } from 'react'
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from '@/components/ui/button'
import { Textarea } from "@/components/ui/textarea"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


const FormSchema = z.object({
    companyName: z.string().min(3, {
        message: "Name must be at least 3 characters.",
    }),
    jobTitle: z.string().min(5, {
        message: "Job title must be at least 5 characters.",
    }),
    vacancy: z.string(),
    status: z.string(),
    workplace: z.string(),
    location: z.string().min(5, {
        message: "Location must be at least 5 characters.",
    }),
    salary: z.string(),
    education: z.string(),
    applyEmail: z.string().min(5, {
        message: "Email must be at least 5 characters.",
    }).url(),
    job: z.string()
})

const PostJob = () => {
    const [jobContext, setJobContext] = useState('');
    const [jobRes, setJobRes] = useState('');
    const [jobBenefit, setJobBenefit] = useState('');
    const [emptyError, setEmptyError] = useState(false);

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),

    })


    const onSubmit = (data: z.infer<typeof FormSchema>) => {
        console.log(jobContext)
        if (!jobContext || !jobRes || !jobBenefit) {
            setEmptyError(true);
            return;
        }
    }
    return (
        <Card className='mt-10'>
            <CardHeader className='text-center'>
                <CardTitle>Post A Job</CardTitle>
                <CardDescription>
                    Post your job  and find your employers by Dashjob
                </CardDescription>
            </CardHeader>

            <Form {...form}>

                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <CardContent className="space-y-8">
                        <div className="">
                            <div className="grid grid-cols-2 gap-4 mt-4">
                                {/* name field */}
                                <FormField
                                    control={form.control}
                                    name="companyName"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Company Name</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter your name" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                {/* job title field */}
                                <FormField
                                    control={form.control}
                                    name="jobTitle"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Job Title</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter your job title" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                {/* number of vacancy field */}
                                <FormField
                                    control={form.control}
                                    name="vacancy"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Number Of Vacancy</FormLabel>
                                            <FormControl>
                                                <Input type="number" placeholder="Enter your vacancy" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                {/* employment status field */}
                                <FormField
                                    control={form.control}
                                    name="status"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Employment Status</FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select employment status" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    <SelectItem value="office">Work at office</SelectItem>
                                                    <SelectItem value="remote">Remote</SelectItem>
                                                </SelectContent>
                                            </Select>

                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                {/* Work place  field */}
                                <FormField
                                    control={form.control}
                                    name="workplace"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Workplace</FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select Workplace" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    <SelectItem value="office">Work at office</SelectItem>
                                                    <SelectItem value="remote">Remote</SelectItem>s
                                                </SelectContent>
                                            </Select>

                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                {/*job location field */}
                                <FormField
                                    control={form.control}
                                    name="location"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Job Location</FormLabel>
                                            <FormControl>
                                                <Input type="number" placeholder="Enter your job location" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                {/*job location field */}
                                <FormField
                                    control={form.control}
                                    name="salary"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Salary</FormLabel>
                                            <FormControl>
                                                <Input type="number" placeholder="Enter your salary" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                {/*education field */}
                                <FormField
                                    control={form.control}
                                    name="education"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Education</FormLabel>
                                            <FormControl>
                                                <Input type="number" placeholder="Enter your Education" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                {/* job context field */}
                                <div className="">
                                    <FormLabel>Job Context</FormLabel>
                                    <ReactQuill className="mt-2" theme="snow" value={jobContext} onChange={setJobContext} />
                                    <p>{emptyError ? "Required" : null} hi</p>
                                </div>

                                {/* job responsibilities field */}
                                <div className="">
                                    <FormLabel>Job Responsibilities</FormLabel>
                                    <ReactQuill className="mt-2" theme="snow" value={jobRes} onChange={setJobRes} />
                                    <p>{emptyError ? "Required" : null} hi</p>
                                </div>

                                {/* other benefits field */}
                                <div className="">
                                    <FormLabel >Compensation & Other Benefits</FormLabel>
                                    <ReactQuill className="mt-2" theme="snow" value={jobBenefit} onChange={setJobBenefit} />
                                    <p>{emptyError ? "Required" : null} hi</p>
                                </div>

                                {/* apply with email field */}
                                <FormField
                                    control={form.control}
                                    name="applyEmail"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Apply with Email</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter your job email" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />


                            </div>
                        </div>
                        <Button type="submit" size="lg">Submit</Button>
                    </CardContent>
                </form>

            </Form>

        </Card>
    )
}

export default PostJob