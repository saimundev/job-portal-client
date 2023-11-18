"use client";
import { useState } from "react"
import Link from "next/link";
import HomeIcon from "../icon/HomeIcon";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button"

import { AnimatePresence, motion } from "framer-motion"
import ArrowRightIcon from "../icon/ArrowRightIcon";
import DropdownMenu from "./DropdownMenu";

const SideBar = ({ setOpen, open }: any) => {
    const path = usePathname();

    //nav item
    const navIte = [
        {
            id: 1,
            title: "Home",
            link: "/dashboard/home/inventory-dashboard",
            icon: <HomeIcon />
        },
        {
            id: 2,
            title: "Inventory",
            link: "/dashboard/inventory/first",
            icon: <HomeIcon />,
            subMenuItem: [
                {
                    id: 1,
                    title: "First sub Item",
                    link: "/dashboard/inventory/first",
                    subIcon: <ArrowRightIcon />
                },
                {
                    id: 2,
                    title: "Second sub Item",
                    link: "/dashboard/inventory/second",
                    subIcon: <ArrowRightIcon />
                },
                {
                    id: 3,
                    title: "Third sub Item",
                    link: "/dashboard/inventory/third",
                    subIcon: <ArrowRightIcon />
                },
                {
                    id: 4,
                    title: "Fourth sub Item",
                    link: "/dashboard/inventory/forth",
                    subIcon: <ArrowRightIcon />
                },
            ]
        },
        {
            id: 3,
            title: "Sales",
            link: "/dashboard/sales",
            icon: <HomeIcon />
        },
        {
            id: 4,
            title: "Reports",
            link: "/dashboard/reports",
            icon: <HomeIcon />
        },
        {
            id: 5,
            title: "Documents",
            link: "/dashboard/documents",
            icon: <HomeIcon />
        },
        {
            id: 6,
            title: "bieo",
            link: "/dashboard/inventory/first",
            icon: <HomeIcon />,
            subIcon: <ArrowRightIcon />,
            bero: true,
            subMenuItem: [
                {
                    id: 1,
                    title: "First sub Item",
                    link: "/dashboard/inventory/first"
                },
                {
                    id: 2,
                    title: "Second sub Item",
                    link: "/dashboard/inventory/second"
                },
                {
                    id: 3,
                    title: "Third sub Item",
                    link: "/dashboard/inventory/third"
                },
                {
                    id: 4,
                    title: "Fourth sub Item",
                    link: "/dashboard/inventory/forth"
                },
            ]
        },
    ]

    return (
        <div className="w-full px-2 space-y-1">
            {navIte?.map((item) => {

                //submenu item
                if (item.subMenuItem) return <DropdownMenu key={item.id} menuItem={item} path={path} openItem={open} />

                return (

                    <Link href={item.link} className="relative block w-full p-3 text-sm font-normal text-white">
                        <div className="flex">
                            <div className="relative flex gap-3">
                                <span>{item.icon}</span>
                                <div className={`${!open && "hidden"} duration-300`}>{item.title}</div>
                            </div>
                        </div>
                        {path === item.link && <motion.div layoutId="active-pill" className={cn("absolute inset-0 bg-blue-500 -z-50")} />}
                    </Link>



                )
            })}

            <button onClick={() => setOpen((prev: any) => !prev)}>Click</button>
        </div>
    )
}

export default SideBar