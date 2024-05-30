'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import useLoadingStore from '@/Utils/Store';

const LinkStyle =
  'px-5 py-2 hover:bg-white/10 rounded-full opacity-60 hover:opacity-100 transition-all duration-200 group';
const spanStyle = 'text-xs mr-1 opacity-40 group-hover:opacity-60 transition-all duration-200 font-thin';

const Navbar = () => {
  const [isActive, setIsActive] = useState<string>('');
  const pathName = usePathname();

  const setIsLoading = useLoadingStore((state) => state.setIsLoading);

  useEffect(() => {
    setIsActive(pathName);
  }, [pathName]);

  const onLinkClick = (e: any) => {
    e.preventDefault();
    console.log(e.target.href);
    setIsLoading(true);

    setTimeout(() => {
      //   setIsLoading(false);
      window.location.href = e.target.href;
    }, 1000);
  };

  return (
    <nav className='w-screen fixed'>
      <div className='my-10 mx-auto w-fit p-2 rounded-full bg-black/80 backdrop-blur-md flex items-center justify-center text-white gap-2 font-light'>
        <Link href='/' onClick={(e) => onLinkClick(e)} className={`${LinkStyle} ${isActive === '/' && 'bg-white/5'}`}>
          <span className={spanStyle}>001/</span>Bluer
        </Link>
        <Link
          href='/circles'
          onClick={(e) => onLinkClick(e)}
          className={`${LinkStyle} ${isActive === '/circles' && 'bg-white/5'}`}
        >
          <span className={spanStyle}>002/</span>Circulation
        </Link>
        <Link
          href='/gold'
          onClick={(e) => onLinkClick(e)}
          className={`${LinkStyle} ${isActive === '/gold' && 'bg-white/5'}`}
        >
          <span className={spanStyle}>003/</span>Golden
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
