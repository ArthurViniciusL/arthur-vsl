import { cn } from "@/lib/utils";

interface IDivProps extends React.ComponentProps<'div'> {
    direction: 'row' | 'col'
}

export default function Div({ className, direction, children }: IDivProps) {
    return (
        <>
            <div className={
                cn('w-full h-fit text-justify flex gap-4',
                    direction === 'row' ? 'flex-row' : 'flex-col',
                    className
                )
            }>
                {children}
            </div>
        </>
    );
}