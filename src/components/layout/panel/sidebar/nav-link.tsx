import clsx from 'clsx';
import Link from 'next/link';
import { Navigation } from '~/menu';

interface SidebarNavLinkProps {
  item: Navigation;
  isActive?: boolean;
}

export function SidebarNavLink({ item, isActive }: SidebarNavLinkProps) {
  return (
    <Link
      href={item.href}
      className={clsx(
        {
          'bg-gray-50 text-indigo-600': isActive,
          'text-gray-700 hover:text-indigo-600 hover:bg-gray-50': !isActive,
        },
        'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
      )}
    >
      <item.icon
        className={clsx(
          {
            'text-indigo-600': isActive,
            'text-gray-400 group-hover:text-indigo-600': !isActive,
          },
          'h-6 w-6 shrink-0'
        )}
        aria-hidden='true'
      />
      {item.name}
    </Link>
  );
}
