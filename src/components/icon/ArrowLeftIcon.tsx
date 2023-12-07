import { IconProps } from '@/types/types'
import React from 'react'

const ArrowLeftIcon = ({ className, ...props }: IconProps) => {
    return (
        <div>
            <svg className={className} {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m11 17-5-5 5-5" /><path d="m18 17-5-5 5-5" /></svg>
        </div>
    )
}

export default ArrowLeftIcon