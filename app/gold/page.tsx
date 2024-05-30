import Image from 'next/image';
import gold from '@/public/Images/gold.jpg';

function ContactPage() {
  return (
    <div className='w-screen h-screen'>
      <Image src={gold} alt='Image' className='w-full h-full object-cover' />
    </div>
  );
}

export default ContactPage;
