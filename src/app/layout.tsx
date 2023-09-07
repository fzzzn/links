import './globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';

const cabinetGrotesk = localFont({
  src: '../../public/fonts/CabinetGrotesk-Variable.woff2',
});

export const metadata: Metadata = {
  title: 'Links - fzzzn.',
  description: 'Links - fzzzn.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={cabinetGrotesk.className}>{children}</body>
    </html>
  );
}
