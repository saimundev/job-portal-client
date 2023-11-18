"use client";

import React from 'react'
import Container from './Container'
import Link from 'next/link'
import { Button } from '../ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import LaptopIcon from '../icon/LaptopIcon'
import UserIcon from '../icon/UserIcon'
import { useRouter } from "next/navigation"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"


const Header = () => {
    const router = useRouter();
    const handleUserAccountLink = () => {
        router.push("/user-account")
    }

    const handleEmployersLink = () => {
        router.push("/employers-account")
    }

    const handlePostJob = () => {
        router.push("/post-job")
    }

    const isLogin = true;
    return (
        <Container className="flex items-center justify-between py-2 border-b border-gray-200">
            <div className=" text-2xl font-semibold">DashJ<span className='font-bold text-green-500'>O</span>b</div>
            <div className="flex gap-4">
                <Link href="/" className="p-2 text-sm font-medium">Home</Link>
                <Link href="/category" className="p-2 text-sm font-medium">Category</Link>
                <Link href="/job" className="p-2 text-sm font-medium">Jobs</Link>
            </div>


            {isLogin && (
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Avatar className="border border-green-500">
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <Button variant="outline" size="sm" className="w-full">Profile</Button>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Button variant="outline" size="sm" className="w-full" onClick={handlePostJob}>Post A Job</Button>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Button variant="destructive" size="sm" className="hover:text-white w-full text-red-500 bg-transparent border border-red-500">LogOut</Button>
                        </DropdownMenuItem>

                    </DropdownMenuContent>
                </DropdownMenu>
            )}

            {!isLogin && (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="sm">Sign in or Create account</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-[350px] px-4">



                        <div className="flex gap-4">
                            <div className="">
                                <div className="w-14 h-14 flex items-center justify-center mt-4 bg-blue-500 rounded-full">
                                    <LaptopIcon className='w-10 h-10 text-white' />
                                </div>
                            </div>

                            <div className="">
                                <DropdownMenuLabel className="text-base text-center text-gray-600">User Account</DropdownMenuLabel>
                                <p className="text-sm text-gray-500">Sign in or create your My Bdjobs account to manage your profile</p>
                                <div className="flex justify-between mt-2">
                                    <DropdownMenuItem>
                                        <Button variant="link" className="hover:bg-green-500 hover:text-white" onClick={handleUserAccountLink}>
                                            Log In
                                        </Button>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <Button variant="link" onClick={handleUserAccountLink}>Create Account</Button>
                                    </DropdownMenuItem>
                                </div>
                            </div>

                        </div>

                        <div className="flex gap-4 mt-2">
                            <div className="">
                                <div className="w-14 h-14 flex items-center justify-center mt-4 bg-blue-900 rounded-full">
                                    <UserIcon className='w-10 h-10 text-white' />
                                </div>
                            </div>

                            <div className="">
                                <DropdownMenuLabel className="text-base text-center text-gray-600">Employers</DropdownMenuLabel>
                                <p className="text-sm text-gray-500">Sign in or create account to find the best candidates in the fastest way</p>
                                <div className="flex justify-between mt-2">
                                    <DropdownMenuItem>
                                        <Button variant="link" className="hover:bg-green-500 hover:text-white" onClick={handleEmployersLink}>Log In</Button>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <Button variant="link" onClick={handleEmployersLink}>Create Account</Button>
                                    </DropdownMenuItem>
                                </div>
                            </div>

                        </div>



                    </DropdownMenuContent>
                </DropdownMenu>
            )}

        </Container>
    )
}

export default Header