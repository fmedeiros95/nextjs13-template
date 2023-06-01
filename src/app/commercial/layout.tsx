import { Header } from '~/components/layout/panel/header';
import { SidebarDesktop, SidebarMobile } from '~/components/layout/panel/sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      {/* Sidebar for mobile */}
      <SidebarMobile menuType='client' />

      {/* Sidebar for desktop */}
      <SidebarDesktop menuType='client' />

      {/* Main content */}
      <div className='lg:pl-72'>
        <Header />

        <main className='py-10'>
          <div className='mx-auto max-w-8xl px-4 sm:px-6 lg:px-8'>{children}</div>
        </main>
      </div>
    </>
  );
}
