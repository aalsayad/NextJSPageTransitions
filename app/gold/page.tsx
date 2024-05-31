import Image from 'next/image';
import gold from '@/public/Images/gold.webp';

function ContactPage() {
  return (
    <div className='w-full h-full'>
      <Image src={gold} alt='Image' className='w-full h-[110%] object-cover' />
    </div>
  );
}

export default ContactPage;
