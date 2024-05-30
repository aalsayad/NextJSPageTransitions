import Image from 'next/image';
import gold from '@/public/Images/gold.webp';

function ContactPage() {
  return (
    <div className='w-screen h-screen flex items-center justify-center overflow-hidden'>
      <Image src={gold} alt='Image' className='w-full h-[110%] object-cover' />
    </div>
  );
}

export default ContactPage;
