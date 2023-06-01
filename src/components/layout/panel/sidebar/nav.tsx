import { ArrowLeftOnRectangleIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';
import { apiInternalClient } from '~/lib/api';
import { Navigation } from '~/menu';
import { SidebarLogo } from './logo';
import { SidebarNavMenu } from './nav-menu';

interface SidebarNavProps {
  menuItems: Navigation[];
}

interface LogoutResponse {
  redirectURL: string;
}

export function SidebarNav({ menuItems }: SidebarNavProps) {
  // ** Hooks
  const router = useRouter();

  const handleLogout = () => {
    apiInternalClient.get<LogoutResponse>('/api/auth/logout/').then(({ data }) => {
      router.push(data.redirectURL);
    });
  };

  return (
    <>
      {/* Sidebar component, swap this element with another sidebar if you like */}
      <div className='flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4'>
        <SidebarLogo />
        <nav className='flex flex-1 flex-col'>
          <ul role='list' className='flex flex-1 flex-col gap-y-7'>
            <li>
              <SidebarNavMenu menuItems={menuItems} />
            </li>
            <li className='mt-auto'>
              <a
                href='#!'
                onClick={handleLogout}
                className='group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600'
              >
                <ArrowLeftOnRectangleIcon className='h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600' aria-hidden='true' />
                Desconectar
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
