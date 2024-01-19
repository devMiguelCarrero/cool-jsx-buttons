import type { Metadata } from 'next';
import Head from 'next/head';

import '@/shared/styles/style.scss';

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
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      <body>{children}</body>
    </html>
  );
}
