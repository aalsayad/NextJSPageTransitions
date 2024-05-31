import Image from 'next/image';
import blue from '@/public/Images/blue.webp';

export default function Home() {
  return (
    <div className='w-full h-full'>
      <Image src={blue} alt='Image' className='w-full h-[110%] object-cover' />
    </div>
  );
}
