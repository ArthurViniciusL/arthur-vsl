import { useEffect, useMemo, useState, } from 'react';

import img_angry from "@/assets/images/profile_picture_angry.png";
import img from '@/assets/images/profile_picture.png';
import TooltipApp from '@/components/tooltip';

import './styles/shake.css';
import { useTranslation } from '@/utils/hooks/useTranslation';

export default function ProfilePicture() {

  const { t } = useTranslation();

  const [tooltipMsg, setTooltipMsg] = useState({
    img: img,
    msg: t('app.tooltip.msg.hello'),
    trigger: false,
  });

  const image = useMemo(() => {
    return <img src={tooltipMsg.img} className='w-auto h-full' />;
  }, [tooltipMsg.img]);

  function handleTrigger() {
    setTooltipMsg((prev) => ({ ...prev, trigger: !prev.trigger }));
  }

  useEffect(() => {

    const body = document.body;

    function setMsg(msg: string) {
      setTooltipMsg((prev) => ({
        ...prev,
        msg: msg,
      }));
    }

    if (tooltipMsg.trigger) {
      const timeout = setTimeout(() => {
        body.classList.add('shake-active');
        setTooltipMsg((prev) => ({ ...prev, img: img_angry }));
        setMsg(t('app.tooltip.msg.remove_the_finger'));
      }, 60000);
      return () => clearTimeout(timeout);
    }

    // eslint-disable-next-line react-hooks/set-state-in-effect -- reset state when trigger deactivates
    setTooltipMsg((prev) => ({ ...prev, img: img }));
    setMsg(t('app.tooltip.msg.hello'));
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
