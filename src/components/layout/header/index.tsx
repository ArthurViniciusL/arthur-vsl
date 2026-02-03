import ProfilePicture from '@/components/layout/header/atom/ProfilePicture/pictureProfile';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Me } from './atom/Me';
import { useIsScrolling } from '@/utils/hooks/useIsScrolling';
import { IcAboutMe } from '@/utils/modules/icons';

interface IHeaderProps extends React.ComponentProps<'header'> { }

export default function Header({ className, ...props }: IHeaderProps) {

    const { isScrolling } = useIsScrolling();

    const blurPatterner = cn(
        'bg-white/10 backdrop-blur-xs py-2 px-4 rounded-4xl transition-all duration-500 ease-in-out border border-transparent',
        isScrolling && 'border-zinc-300'
    )

    const buttons = [
        {
            href: '',
            label: 'Sobre',
            icon: <IcAboutMe/>
        },
        {
            href: '',
            label: 'Projetos',
            icon: '',
        },
        {
            href: '',
            label: 'Dev Setup',
            icon: ''
        }
    ]

    return (
        <>
            <header className={
                cn(
                    'sticky top-0 w-full md:w-7xl p-2 flex flex-row justify-between items-center transition-all duration-200 ease-in-out',
                    !isScrolling && 'border-b border-zinc-300',
                    className
                )
            } {...props}>
                <div className={cn('flex flex-row gap-2 items-center', blurPatterner)}>
                    <ProfilePicture />
                    <Me />
                </div>
                <ul className={cn('flex flex-row gap-2', blurPatterner)}>
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