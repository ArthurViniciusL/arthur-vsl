import { cn } from "@/lib/utils";
import { useIsMobile } from "@/utils/hooks/useIsMobile";

export default function Menu({ content }: any) {
    const { isMobile } = useIsMobile();
    return (
        <>
            {
                !isMobile &&
                <ul className={cn('flex flex-row gap-2 justify-center items-center')}>
                    {content}
                </ul>
            }
        </>
    )
}