'use client';

import { adminMenuItems, clientMenuItems } from '~/menu';
import { SidebarNav } from './nav';

interface SidebarDesktopProps {
  menuType: 'client' | 'admin';
}

export function SidebarDesktop({ menuType }: SidebarDesktopProps) {
  const menuItems = menuType === 'client' ? clientMenuItems : adminMenuItems;

  return (
    <div className='hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col'>
      <SidebarNav menuItems={menuItems} />
    </div>
  );
}
