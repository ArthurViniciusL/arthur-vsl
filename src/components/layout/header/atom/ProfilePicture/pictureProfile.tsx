import img from '@/assets/images/profile_picture.png';
import { useIsMobile } from '@/utils/hooks/useIsMobile';
import { useMemo } from 'react';

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Button } from '@/components/ui/button';


export default function ProfilePicture() {
  const { isMobile } = useIsMobile();

  const image = useMemo(() => {
    return <img src={img} className='w-auto h-full' />
  }, []);

  return (
    <>
      {!isMobile &&
        <div className='w-20 h-20 flex justify-center items-center bg-zinc-100 dark:bg-zinc-900 border border-border rounded-2xl overflow-hidden hover:w-28 hover:relative transition-all ease-in duration-100'>
          <Tooltip>
            <TooltipTrigger asChild>
              {image}
            </TooltipTrigger>
            <TooltipContent>
              <p>Olá!</p>
            </TooltipContent>
          </Tooltip>
        </div>
      }
    </>
  );
}
