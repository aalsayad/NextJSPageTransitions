'use client';

import { easeInOut, useAnimate } from 'framer-motion';
import { useEffect } from 'react';
import useLoadingStore from '@/Utils/Store';

const Transition = ({ children }: any) => {
  const [scope, animate] = useAnimate();
  const isLoading = useLoadingStore((state) => state.isLoading);

  useEffect(() => {
    if (isLoading) {
      animate([
        ['#children', { y: [0, 30] }, { duration: 0.5, ease: easeInOut }],
        ['#black-overlay', { top: ['-100%', '0%'] }, { duration: 0.5, ease: easeInOut, at: '<' }],
      ]);
    } else {
      animate([
        ['#children', { y: [-30, 0] }, { duration: 0.5, ease: easeInOut }],
        ['#black-overlay', { top: ['0%', '100%'] }, { duration: 0.5, ease: easeInOut, at: '<' }],
      ]);
    }
  }, [isLoading]);

  return (
    <div ref={scope}>
      <div className='w-screen h-screen  fixed z-[1] overflow-hidden pointer-events-none'>
        <div id='black-overlay' className='w-full h-full absolute top-0 bg-black'></div>
      </div>
      <div className='w-screen h-screen overflow-hidden'>
        <div id='children'>{children}</div>
      </div>
    </div>
  );
};

export default Transition;
