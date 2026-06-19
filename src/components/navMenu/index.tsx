import { PanelRightClose, PanelRightOpen, X } from "lucide-react";
import { useEffect, useState, type ComponentProps, type ReactNode } from "react";

import { cn } from "@/lib/utils";
import { useIsMobile } from "@/utils/hooks/useIsMobile";

import { Button } from "../ui/button";

interface NavMenuProps extends ComponentProps<'aside'> {
    buttons: {
        href: string;
        label: string;
        icon: ReactNode;
    }[];
}

export default function NavMenu({ className, buttons, children }: NavMenuProps) {
    const { isMobile } = useIsMobile();
    const [panel, setPanel] = useState({
        isOpen: false,
        hover: false
    });

    function handleMenu() {
        setPanel((prev) => ({ ...prev, isOpen: !prev.isOpen }));
    }

    function handleHover() {
        setPanel((prev) => ({ ...prev, hover: !prev.hover }));
    }

    useEffect(() => {

        document.body.style.overflow = panel.isOpen ? 'hidden' : 'auto';

    }, [panel.isOpen]);

    return (
        <>
            {
                panel.isOpen && isMobile
                    ? <>
                        <div className={cn('w-screen h-screen fixed top-0 left-0 z-50 flex flex-col justify-between bg-zinc-200/70 dark:bg-zinc-900/70 backdrop-blur-sm p-8', className)}>
                            <div className='flex w-full justify-end'>
                                <Button
                                    onClick={handleMenu}
                                    variant={'destructive'}
                                >
                                    <X />
                                </Button>
                            </div>
                            <ul className={cn('h-full flex flex-col gap-10 justify-center items-center')}>
                                {buttons.map((button, index) => (
                                    <li key={index}>
                                        <Button variant={'app'}>
                                            {button.icon}
                                            {button.label}
                                        </Button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </>
                    :
                    <div className='w-fit h-fit flex flex-row gap-4 items-center'>
                        {children}
                        {isMobile &&
                            <Button
                                onMouseEnter={handleHover}
                                onMouseLeave={handleHover}
                                onClick={handleMenu}
                                variant={'app'}
                                size={'icon-lg'}
                                className='rounded-full border border-border hover:text-yellow-300 hover:bg-amber-300/20 hover:border-yellow-300 transition-all ease-in duration-300'
                            >
                                {
                                    panel.hover
                                        ? <PanelRightOpen size={20} />
                                        : <PanelRightClose size={20} />
                                }
                            </Button>
                        }
                    </div>
            }
        </>
    );
}