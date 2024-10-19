import type { Metadata } from "next";
import  {Poppins} from "next/font/google";
import "./globals.css";
import {ClerkProvider} from '@clerk/nextjs'
import React from "react";

const poppins = Poppins({
  subsets:['latin'],
  weight: ['400', '500', '600', '700' ],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: "Events by BTC",
  description: "Events by BTC is platform for events managements",
  icons:{
    icon:'/assets/images/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

      <ClerkProvider>
        <html lang="en">
        <body className={poppins.variable}>
        {children}
        </body>
        </html>
      </ClerkProvider>

  );
}
