import TooltipApp from "@/components/tooltip";
import { cn } from "@/lib/utils";
import { IcVolume, IcVolume2 } from "@/utils/modules/icons";
import { useState } from "react";

export default function SpeakAboutMe() {

    const [isPlay, setIsPlay] = useState<boolean>(false);

    const style = isPlay
        ? 'bg-blue-500/40 hover:bg-blue-500/50 border border-blue-500 text-blue-500'
        : 'bg-zinc-300/40 hover:bg-zinc-300/80 border border-zinc-500 text-zinc-500';

    function handlePlay() {
        setIsPlay(!isPlay);
    }

    return (
        <>
            <TooltipApp side='right' msg='Me ouvir'>
                <button onClick={handlePlay} className={cn('cursor-pointer rounded-full flex items-center justify-center p-2 right-0 mt-2 transition-all ease-in duration-150', style)}>
                    {
                        isPlay
                            ?
                            <IcVolume2 size={18} />
                            :
                            <IcVolume size={18} />
                    }
                </button>
            </TooltipApp>
        </>
    )
}
