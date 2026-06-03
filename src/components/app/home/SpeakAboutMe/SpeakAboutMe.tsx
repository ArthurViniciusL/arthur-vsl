import TooltipApp from "@/components/tooltip";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/utils/hooks/useTranslation";
import { IcVolume, IcVolume2 } from "@/utils/modules/icons";
import { useEffect, useRef, useState } from "react";

export default function SpeakAboutMe() {

    const { t } = useTranslation();

    const [isPlay, setIsPlay] = useState<boolean>(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const onEndedRef = useRef<() => void>(() => setIsPlay(false));

    const style = isPlay
        ? 'bg-blue-500/40 hover:bg-blue-500/50 border border-blue-500 text-blue-500'
        : 'bg-zinc-300/40 hover:bg-zinc-300/80 border border-zinc-500 text-zinc-500';

    function handlePlay() {
        if (!audioRef.current) {
            const audio = new Audio(encodeURI('/audio/arthur_vsl_about_himself.mp3'));
            audio.volume = 0.12;
            audio.addEventListener('ended', onEndedRef.current);
            audioRef.current = audio;
            audio.play().catch(() => {
                audioRef.current = null;
                setIsPlay(false);
            });
            setIsPlay(true);
        } else if (isPlay) {
            audioRef.current.pause();
            setIsPlay(false);
        } else {
            audioRef.current.play().catch(() => {
                setIsPlay(false);
            });
            setIsPlay(true);
        }
    }

    useEffect(() => {
        return () => {
            audioRef.current?.pause();
            audioRef.current?.removeEventListener('ended', onEndedRef.current);
        };
    }, []);

    return (
        <TooltipApp side='right' msg={t('app.tooltip.msg.speak_about_me')}>
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
    )
}
