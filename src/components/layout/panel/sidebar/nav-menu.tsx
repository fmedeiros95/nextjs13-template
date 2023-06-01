'use client';

import { usePathname } from 'next/navigation';
import { Navigation } from '~/menu';
import { SidebarNavLink } from './nav-link';

interface SidebarNavMenuProps {
  menuItems: Navigation[];
}

export function SidebarNavMenu({ menuItems }: SidebarNavMenuProps) {
  const pathname = usePathname();

  return (
    <ul role='list' className='-mx-2 space-y-1'>
      {menuItems.map(item => (
        <li key={item.name}>
          <SidebarNavLink item={item} isActive={pathname.startsWith(item.href)} />
        </li>
      ))}
    </ul>
  );
}
