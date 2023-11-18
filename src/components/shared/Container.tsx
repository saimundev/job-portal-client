import { cn } from '@/lib/utils'

type ContainerProps = {
    children: React.ReactNode,
    className?: string
}

const Container = ({ children, className }: ContainerProps) => {
    return (
        <div className={cn("container mx-auto px-24", className)}>{children}</div>
    )
}

export default Container