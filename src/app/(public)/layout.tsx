import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CellphoneS - Điện thoại, laptop, tablet, phụ kiện chính hãng',
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