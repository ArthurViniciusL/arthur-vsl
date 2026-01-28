import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { LampDesk } from 'lucide-react';

interface IHeaderProps extends React.ComponentProps<'header'> { }

export default function Header({ className, ...props }: IHeaderProps) {

    const buttons = [
        {
            href: '',
            label: 'Sobre',
            icon: <LampDesk />
        },
        {
            href: '',
            label: 'btn 2',
        },
        {
            href: '',
            label: 'btn 3',
            icon: ''
        }
    ]

    return (
        <>
            <header className={cn('sticky top-0 w-full md:w-7xl p-4 flex flex-row justify-between bg-white/10 backdrop-blur-sm border-b border-zinc-300', className)} {...props}>
                <h1 className='text-2xl font-semibold'>
                    Arthur Lucena
                </h1>
                <ul className='flex flex-row gap-2'>
                    {buttons.map((button, index) => (
                        <li key={index}>
                            <Button variant={'to-art'} className='text-lg'>
                                {button.icon}
                                {button.label}
                            </Button>
                        </li>
                    ))}
                </ul>
            </header>
        </>
    );
}