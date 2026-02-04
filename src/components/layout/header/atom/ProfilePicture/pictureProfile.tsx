import img from '@/assets/images/profile_picture.png';
import { useIsMobile } from '@/utils/hooks/useIsMobile';
import { useMemo } from 'react';


export default function ProfilePicture() {
  const { isMobile } = useIsMobile();

  const image = useMemo(() => {
    return <img src={img} className='w-auto h-full' />
  }, []);

  return (
    <>
      {!isMobile &&
        <div className='w-20 h-20 flex justify-center items-center bg-zinc-100 dark:bg-zinc-900 border border-border rounded-2xl overflow-hidden'>
          {image}
        </div>
      }
    </>
  );
}
