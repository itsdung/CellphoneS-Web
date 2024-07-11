import Header from '@/layouts/public/header/Header';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'cellphones.com.vn',
  description: 'cellphones',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <div>{children}</div>
    </main>
  );
}