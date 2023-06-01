'use client';

import { usePathname } from 'next/navigation';

export const AuthCover = () => {
  const pathname = usePathname().replace(/\//g, '');

  // ** add transition to this
  return (
    <>
      <div
        className='absolute inset-0 h-full w-full object-cover'
        style={{
          background: 'rgba(0,0,0,0.5)',
          backgroundImage: `url(/images/backgrounds/auth/${pathname}.jpg)`,
          backgroundSize: 'cover',
          transition: 'background 0.75s ease-in-out',
        }}
      />
    </>
  );
};
