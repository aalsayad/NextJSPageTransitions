import Image from 'next/image';
import blue from '@/public/Images/blue.jpg';

export default function Home() {
  return (
    <div className='w-screen h-screen'>
      <Image src={blue} alt='Image' className='w-full h-full object-cover' />
    </div>
  );
}
