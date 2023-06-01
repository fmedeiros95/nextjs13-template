import { Logo } from '~/components/logo';

export function SidebarLogo() {
  return (
    <div className='flex h-16 shrink-0 items-center justify-center border-b'>
      <Logo width={150} height={60} />
    </div>
  );
}
