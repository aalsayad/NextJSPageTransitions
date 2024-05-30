import Image from 'next/image';
import circles from '@/public/Images/circles.webp';

function AboutPage() {
  return (
    <div className='w-screen h-screen flex items-center justify-center'>
      <Image src={circles} alt='Image' className='w-full h-[110%] object-cover' />
    </div>
  );
}

export default AboutPage;
