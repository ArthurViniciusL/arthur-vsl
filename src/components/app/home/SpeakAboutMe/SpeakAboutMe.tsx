import TooltipApp from "@/components/tooltip";
import { IcVolume2 } from "@/utils/modules/icons";

export default function SpeakAboutMe() {
    return (
        <>
            <TooltipApp side='right' msg='Me ouvir'>
                <button className="cursor-pointer bg-blue-500/40 z-10 hover:bg-blue-500/50 backdrop-blur-md border border-blue-500 absolute right-0 mt-2 text-blue-500 rounded-full flex items-center justify-center p-2">
                    <IcVolume2 size={18}/>
                </button>
            </TooltipApp>
        </>
    )
}