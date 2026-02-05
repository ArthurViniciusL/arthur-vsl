import img from '@/assets/images/profile_picture.png';
import TooltipApp from '@/components/tooltip';
import { useEffect, useMemo, useState } from 'react';

import './styles/shake.css';

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

    const body = document.body

    function setMsg(msg: string) {
      setTooltipMsg((prev) => ({
        ...prev,
        msg: msg,
      }));
    }

    if (tooltipMsg.trigger) {
      const timeout = setTimeout(() => {
        body.classList.add('shake-active');
        setMsg('Oxê! Tira o dedo da minha cara 😠');
      }, 60000);
      return () => clearTimeout(timeout);
    }

    setMsg('Olá!');
    body.classList.remove('shake-active');

  }, [tooltipMsg.trigger]);

  return (
    <>
      <TooltipApp msg={tooltipMsg.msg}>
        <div
          id='profile-picture'
          onMouseEnter={handleTrigger}
          onMouseLeave={handleTrigger}
          className='w-18 h-18 flex justify-center items-center bg-zinc-100 dark:bg-zinc-900 border border-border rounded-2xl overflow-hidden hover:w-24 transition-all ease-in duration-100'
        >
          {image}
        </div >
      </TooltipApp>

    </>
  );
}
