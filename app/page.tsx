import Image from 'next/image';
import blue from '@/public/Images/blue.webp';

export default function Home() {
  return (
    <div className='w-screen h-screen flex items-center justify-center'>
      <Image src={blue} alt='Image' className='w-full h-[110%] object-cover' />
    </div>
  );
}
