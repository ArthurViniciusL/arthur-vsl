import img from '@/assets/images/profile_picture.png';
import { useEffect, useMemo, useState } from 'react';

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";


export default function ProfilePicture() {

  const [tooltipMsg, setTooltipMsg] = useState({
    msg: 'Olá!',
    trigger: false,
  });

  const image = useMemo(() => {
    return <img src={img} className='w-auto h-full' />
  }, []);

  function handleTrigger() {
    setTooltipMsg((prev) => ({ ...prev, trigger: !prev.trigger }));
  }

  useEffect(() => {
    function setMsg(msg: string) {
      setTooltipMsg((prev) => ({
        ...prev,
        msg: msg,
      }));
    }

    if (tooltipMsg.trigger) {
      const timeout = setTimeout(() => {
        setMsg('Oxe! Tira o dedo da minha cara 😠');
      }, 60000);
      return () => clearTimeout(timeout);
    }

    setMsg('Olá!');

  }, [tooltipMsg.trigger]);

  return (
    <>
      <div onMouseEnter={handleTrigger} onMouseLeave={handleTrigger} className='w-20 h-20 flex justify-center items-center bg-zinc-100 dark:bg-zinc-900 border border-border rounded-2xl overflow-hidden hover:w-28 hover:relative transition-all ease-in duration-100'>
        <Tooltip>
          <TooltipTrigger asChild>
            {image}
          </TooltipTrigger>
          <TooltipContent>
            <p>{tooltipMsg.msg}</p>
          </TooltipContent>
        </Tooltip>
      </div>

    </>
  );
}
