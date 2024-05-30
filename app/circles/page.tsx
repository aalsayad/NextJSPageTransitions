import Image from 'next/image';
import circles from '@/public/Images/circles.jpg';

function AboutPage() {
  return (
    <div className='w-screen h-screen'>
      <Image src={circles} alt='Image' className='w-full h-full object-cover' />
    </div>
  );
}

export default AboutPage;
