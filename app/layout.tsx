import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Footer from '@/components/sections/footer';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Mark Maksi - Software Developer | Content Creator',
  openGraph: {
    type: 'website',
    url: 'https://markmaksi.com',
    title: 'Mark Maksi - Software Developer | Content Creator',
    description:
      'Software developer specialized in web development from simple websites to large scale applications. Authored 22 technical articles with 30,000+ views, and educatonal content with over 500 subscribers on YouTube.',
    siteName: 'Mark Maksi',
    images: [
      {
        url: 'https://pbs.twimg.com/profile_images/1836116652137627648/GGYr1o8x_400x400.jpg',
      },
    ],
  },
  description:
    'Software developer specialized in web development from simple websites to large scale applications. Authored 22 technical articles with 30,000+ views, and educatonal content with over 500 subscribers on YouTube.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased  bg-background text-white`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
