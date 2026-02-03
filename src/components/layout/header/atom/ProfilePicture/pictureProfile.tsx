import image from '@/assets/images/profile_picture.png';


export default function ProfilePicture() {
  return (
    <>
      <div className='w-20 h-20 flex justify-center items-center bg-white dark:bg-black border border-zinc-300 rounded-2xl overflow-hidden'>
        <img src={image} className='w-auto h-full' />
      </div>
    </>
  );
}
