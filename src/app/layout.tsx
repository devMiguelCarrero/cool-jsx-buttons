import type { Metadata } from 'next';

import '@/styles/style.scss';

export const metadata: Metadata = {
  title: 'Cool JSX Buttons',
  description:
    'Just a collection of cool buttons made with react that you can use in your project',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
