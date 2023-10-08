import Hero from '@/components/Layout/Hero';
import './globals.css';
import type { Metadata } from 'next';
import mainHero from '@/assets//images/logo-lg.webp';
import { kanit } from '@/assets/fonts/fonts';
import { formattedPhoneNumber } from '@/lib/variables';
import TextWithButtons from '@/components/TextWithButtons';
import CallButton from '@/components/UI/CallButton';
import ContactButton from '@/components/UI/ContactButton';
import Header from '@/components/Layout/Header';

export const metadata: Metadata = {
  title: {
    default:
      'Sean the Bondsman | Topeka Bail Bonds | Bail Bonds Topeka, KS | Kansas Bail Assistance',
    template: '%s | Sean The Bondsman'
  },
  description: 'Generated by create next app'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' data-theme='corporate'>
      <body className={kanit.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
