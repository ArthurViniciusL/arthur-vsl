import { Button } from '@/components/ui/button';
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/utils/hooks/useIsMobile';
import { PanelRightOpen, X } from 'lucide-react';
import { useState } from 'react';

interface MobileMenuProps {
    children?: React.ReactNode;
    content: any;
}

export function MobileMenu({ content }: MobileMenuProps) {

    const { isMobile } = useIsMobile();

    // const [panel, setPanel] = useState({
    //     isOpen: false,
    //     hover: false
    // });

    // function handleHover() {
    //     setPanel((prev) => ({ ...prev, hover: !prev.hover }));
    // }

    return (
        <>
            {isMobile &&
                <Sheet>
                    <SheetTrigger asChild>
                        <button
                            className='cursor-pointer rounded-full text-yellow-400 transition-all ease-in duration-300'
                        >
                            <PanelRightOpen size={26} />
                        </button>
                    </SheetTrigger>
                    <SheetContent showCloseButton={false}>
                        <SheetHeader className='flex flex-row justify-between'>
                            <SheetTitle>Menus</SheetTitle>
                            <SheetTrigger>
                                <Button variant="destructive" size={'icon'}>
                                    <X />
                                </Button>
                            </SheetTrigger>
                        </SheetHeader>
                        <ul className={cn('h-full flex flex-col gap-10 justify-center items-center')}>
                            {content}
                        </ul>
                    </SheetContent>
                </Sheet>
            }
        </>
    )
}