// ** Global Styles
import './globals.scss';

// ** NextJs Imports

// ** Google Fonts
import { Inter } from 'next/font/google';

// ** Imports
import { TailwindToaster } from '~/components';
import { AuthProvider, ThemeProvider } from '~/contexts';
import { cn } from '~/lib/utils';

export const metadata = {
  title: {
    default: 'NextJs - A Simple App',
    template: '%s | NextJs - A Simple App',
  },
  description: 'A simple app built with NextJs',
};

// ** Define the font subsets to be used
const inter = Inter({ subsets: ['latin'] });

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <ThemeProvider>
      <AuthProvider>
        <html className='h-full bg-white' lang='en'>
          <body className={cn(inter.className, 'h-full')}>
            {children}

            <TailwindToaster />
          </body>
        </html>
      </AuthProvider>
    </ThemeProvider>
  );
}
