import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/Components/Navbar/Navbar';
import Transition from '@/Components/Loading/Transition';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next Page Transitions',
  description: 'Framer Motion + NextJS14 Page Transitions',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Transition>
          <Navbar />
          {children}
        </Transition>
      </body>
    </html>
  );
}
