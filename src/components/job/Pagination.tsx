import React from 'react'
import { Button } from '../ui/button'
import ArrowRight from '../icon/ArrowRight'
import ArrowLeftIcon from '../icon/ArrowLeftIcon'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const Pagination = () => {
    return (
        <div className="flex items-center justify-end gap-6 mt-10">
            <div className="flex items-center space-x-2">
                <p className="text-text-primary text-sm font-medium">Rows per page</p>
                <Select>
                    <SelectTrigger className="h-9 w-[80px] border border-green-500">
                        <SelectValue placeholder="10" />
                    </SelectTrigger>
                    <SelectContent side="top">
                        {[10, 20, 40, 60, 80, 100].map((pageSize) => (
                            <SelectItem
                                className="text-text-primary"
                                key={pageSize}
                                value={`${pageSize}`}
                            >
                                {pageSize}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
            <div className="text-text-primary text-sm font-medium">
                Page 2 of 10
            </div>
            <div className="flex justify-end gap-4">
                <Button variant="outline" size="sm">
                    <ArrowLeftIcon />

                </Button>
                <Button variant="outline" size="sm">
                    <ArrowRight />
                </Button>
            </div>
        </div>
    )
}

export default Pagination