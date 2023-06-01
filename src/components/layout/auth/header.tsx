import { LogoWithIcon } from '~/components/logo-with-icon';

interface AuthHeaderProps {
  title: string;
  subtitle: React.ReactNode;
}

export function AuthHeader({ title, subtitle }: AuthHeaderProps) {
  return (
    <div>
      {/* Center logo and add some margin */}
      <div className='flex justify-center'>
        <LogoWithIcon width={150} height={150} />
      </div>

      <h2 className='mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900'>{title}</h2>
      <p className='mt-2 text-sm leading-6 text-gray-500'>{subtitle}</p>
    </div>
  );
}
