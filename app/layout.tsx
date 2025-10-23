import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import LoadingScreen from '@/components/LoadingScreen';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SportsTake - Sports Business Development & Analytics',
  description: 'Leading sports business development, brand strategy, athlete management, and data analytics consulting firm in Zimbabwe and Africa.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <LoadingScreen />
        {children}
      </body>
    </html>
  );
}