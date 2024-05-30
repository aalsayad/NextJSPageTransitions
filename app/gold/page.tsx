import Image from 'next/image';
import gold from '@/public/Images/gold.jpg';

function ContactPage() {
  return (
    <div className='w-screen h-screen flex items-center justify-center'>
      <Image src={gold} alt='Image' className='w-full h-[110%] object-cover' />
    </div>
  );
}

export default ContactPage;
