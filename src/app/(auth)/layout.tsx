import { AuthCover } from '~/components/layout/auth';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className='flex min-h-full flex-1'>
        <div className='relative hidden w-0 flex-1 lg:block'>
          <AuthCover />
        </div>
        <div className='flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24'>
          <div className='mx-auto w-full max-w-sm lg:w-96'>{children}</div>
        </div>
      </div>
    </>
  );
}
