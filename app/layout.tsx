import type { Metadata } from "next";
import ReduxProvider from './ReduxProvider';
import { Inter } from 'next/font/google';

import "@/styles/globals.css"
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Shopping Cart',
  description: 'Modern shopping cart with Redux Toolkit',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          {children}
        </ReduxProvider>
    </body>
    </html>
  )
}