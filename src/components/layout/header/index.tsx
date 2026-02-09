import ProfilePicture from '@/components/layout/header/atom/ProfilePicture/pictureProfile';
import { cn } from '@/lib/utils';
import { Me } from './atom/Me';
import { useIsScrolling } from '@/utils/hooks/useIsScrolling';
import { useTheme } from '@/utils/hooks/useTheme';
import { Button } from '@/components/ui/button';
import { MobileMenu } from './atom/MobileMenu/indext';
import ToggleTheme from '@/components/toggleTheme';
import Menu from './atom/Menu';
import { PAGE_MENUS } from '@/utils/consts/pageMenus';
import { useIsMobile } from '@/utils/hooks/useIsMobile';


interface IHeaderProps extends React.ComponentProps<'header'> { }

export default function Header({ className, ...props }: IHeaderProps) {

    const { isMobile } = useIsMobile();
    const { theme } = useTheme();
    const { isScrolling } = useIsScrolling();

    const blurPatterner = cn(
        'py-2 px-4 rounded-4xl transition-all duration-500 ease-in-out border border-transparent',
        isScrolling && 'border-border bg-white/10 backdrop-blur-md'
    )


    const content = PAGE_MENUS.map(
        (button, index) => (
            <li key={index}>
                <Button variant={'app'}>
                    {button.icon}
                    {button.label}
                </Button>
            </li>
        )
    );

    return (
        <>
            <header data-theme={theme} className={
                cn(
                    'fixed top-0 w-full md:max-w-7xl p-2 flex flex-row justify-between items-center transition-all duration-300 ease-in-out border-b border-transparent',
                    !isScrolling && 'border-border',
                    className
                )
            } {...props}>
                <div className={cn('flex flex-row gap-2 items-center', blurPatterner)}>
                    {
                        !isMobile
                        && <ProfilePicture />
                    }
                    <Me />
                </div>
                <div className={cn('flex flex-row gap-4', blurPatterner)}>
                    <Menu content={content} />
                    <ToggleTheme />
                    <MobileMenu content={content} />
                </div>
            </header >
        </>
    );
}