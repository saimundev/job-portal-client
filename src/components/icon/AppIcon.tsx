import { IconProps } from '@/types/types'
import React from 'react'

const AppIcon = ({ className, ...props }: IconProps) => {
    return (
        <svg className={className} {...props} xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><rect width="14" height="20" x="5" y="2" rx="2" ry="2" /><path d="M12 18h.01" /></svg>
    )
}

export default AppIcon