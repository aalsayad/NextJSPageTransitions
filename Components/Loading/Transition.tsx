'use client';

import { cubicBezier, easeInOut, useAnimate } from 'framer-motion';
import { useEffect } from 'react';
import useLoadingStore from '@/Utils/Store';

const Transition = ({ children }: any) => {
  const [scope, animate] = useAnimate();
  const isLoading = useLoadingStore((state) => state.isLoading);

  useEffect(() => {
    if (isLoading) {
      animate([
        ['#children', { y: [0, 20] }, { duration: 1, ease: cubicBezier(0.65, 0, 0.15, 1) }],
        ['#blur-overlay', { top: ['-100%', '0%'] }, { duration: 1, ease: cubicBezier(0.65, 0, 0.15, 1), at: '<' }],
        [
          '#black-overlay',
          { top: ['-100%', '0%'], opacity: [0.7, 1] },
          { duration: 1, ease: cubicBezier(0.65, 0, 0.15, 1), at: '<' },
        ],
      ]);
    } else {
      animate([
        ['#children', { y: [-20, 0] }, { duration: 1, ease: cubicBezier(0.65, 0, 0.15, 1) }],
        ['#blur-overlay', { top: ['0%', '100%'] }, { duration: 1, ease: cubicBezier(0.65, 0, 0.15, 1), at: '<' }],
        [
          '#black-overlay',
          { top: ['0%', '100%'], opacity: [1, 0.9] },
          { duration: 1, ease: cubicBezier(0.65, 0, 0.15, 1), at: '<' },
        ],
      ]);
    }
  }, [isLoading]);

  return (
    <div ref={scope}>
      <div className='w-full h-screen fixed flex items-center justify-center z-[1] overflow-hidden pointer-events-none'>
        <div id='black-overlay' className='w-full h-full absolute top-0 bg-black'></div>
        <div id='blur-overlay' className='w-full h-full absolute top-0 bg-black/30 backdrop-blur-lg'></div>
      </div>
      <div className='w-screen h-screen overflow-hidden'>
        <div id='children'>{children}</div>
      </div>
    </div>
  );
};

export default Transition;
