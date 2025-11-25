import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import LoadingScreen from '@/components/LoadingScreen';
import { PwaInstaller } from '@/components/PwaInstaller';
import { AuthProvider } from '@/contexts/AuthContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SportsTake - Sports Business Development & Analytics',
  description:
    'Leading sports business development, brand strategy, athlete management, and data analytics consulting firm in Zimbabwe and Africa.',
  applicationName: 'SportsTake',
  manifest: '/manifest.json',
  themeColor: '#0070f3',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'SportsTake',
  },
  icons: {
    icon: [
      { url: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512x512.png', sizes: '512x512', type: 'image/png' },
      {
        url: '/icon-maskable-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        rel: 'mask-icon',
      },
    ],
    apple: [
      { url: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <AuthProvider>
          <PwaInstaller />
          <LoadingScreen />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}