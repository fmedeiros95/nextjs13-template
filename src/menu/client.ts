import { HomeIcon, QueueListIcon, UsersIcon } from '@heroicons/react/24/outline';
import { Navigation } from './types';

export const clientMenuItems: Navigation[] = [
  { name: 'Dashboard', href: '/commercial/dashboard', icon: HomeIcon },
  { name: 'Movimentações', href: '/commercial/extract', icon: QueueListIcon },
  { name: 'Clientes', href: '/commercial/customers', icon: UsersIcon },
];
