import { HomeIcon, UsersIcon } from '@heroicons/react/24/outline';
import { Navigation } from './types';

export const adminMenuItems: Navigation[] = [
  { name: 'Dashboard', href: '/admin/dashboard', icon: HomeIcon },
  { name: 'Usuários', href: '/admin/users', icon: UsersIcon },
];
