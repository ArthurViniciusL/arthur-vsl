import ProfilePicture from '@/components/layout/header/atom/ProfilePicture/pictureProfile';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Me } from './atom/Me';
import { useIsScrolling } from '@/utils/hooks/useIsScrolling';
import { IcAboutMe } from '@/utils/modules/icons';
import { useTheme } from '@/utils/hooks/useTheme';
import { useMemo } from 'react';
import { useIsMobile } from '@/utils/hooks/useIsMobile';
import ToggleTheme from '@/components/toggleTheme';

interface IHeaderProps extends React.ComponentProps<'header'> { }

export default function Header({ className, ...props }: IHeaderProps) {

    const { theme } = useTheme();
    const { isMobile } = useIsMobile();
    const { isScrolling } = useIsScrolling();

    const blurPatterner = cn(
        'py-2 px-4 rounded-4xl transition-all duration-500 ease-in-out border border-transparent',
        isScrolling && 'border-border bg-white/10 backdrop-blur-xs'
    )

    const buttons = useMemo(() => {
        return [
            {
                href: '',
                label: 'Sobre',
                icon: <IcAboutMe />
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
    }, []);

    return (
        <>
            <header data-theme={theme} className={
                cn(
                    'sticky top-0 w-full md:w-7xl p-2 flex flex-row justify-between items-center transition-all duration-300 ease-in-out border-b border-transparent',
                    !isScrolling && 'border-border',
                    className
                )
            } {...props}>
                <div className={cn('flex flex-row gap-2 items-center', blurPatterner)}>
                    <ProfilePicture />
                    <Me />
                </div>
                <div className={cn('flex flex-row gap-2', blurPatterner)}>
                    {isMobile ?
                        <></>
                        :
                        <ul className={cn('flex flex-row gap-2')}>
                            {buttons.map((button, index) => (
                                <li key={index}>
                                    <Button variant={'to-art'} className='text-lg'>
                                        {button.icon}
                                        {button.label}
                                    </Button>
                                </li>
                            ))}
                        </ul>
                    }
                    <ToggleTheme />
                </div>
            </header >
        </>
    );
}