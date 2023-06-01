'use client';

import { Bars3Icon, BellIcon } from '@heroicons/react/24/outline';
import { useTheme } from '~/hooks';
import { HeaderSearch } from './search';
import { HeaderUser } from './user';

export const Header = () => {
  const { menuOpened, toggleMenuOpened } = useTheme();

  return (
    <div className='sticky top-0 z-40 lg:mx-auto lg:max-w-8xl lg:px-8'>
      <div className='flex h-16 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-0 lg:shadow-none'>
        <button type='button' className='-m-2.5 p-2.5 text-gray-700 lg:hidden' onClick={() => toggleMenuOpened(!menuOpened)}>
          <span className='sr-only'>Abrir menu</span>
          <Bars3Icon className='h-6 w-6' aria-hidden='true' />
        </button>

        {/* Separator */}
        <div className='h-6 w-px bg-gray-200 lg:hidden' aria-hidden='true' />

        <div className='flex flex-1 gap-x-4 self-stretch lg:gap-x-6'>
          <HeaderSearch />

          <div className='flex items-center gap-x-4 lg:gap-x-6'>
            <button type='button' className='-m-2.5 p-2.5 text-gray-400 hover:text-gray-500'>
              <span className='sr-only'>Ver notificações</span>
              <BellIcon className='h-6 w-6' aria-hidden='true' />
            </button>

            {/* Separator */}
            <div className='hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200' aria-hidden='true' />

            {/* Profile dropdown */}
            <HeaderUser />
          </div>
        </div>
      </div>
    </div>
  );
};
