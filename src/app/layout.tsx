import type { Metadata } from "next";
import "./globals.css";
import { redirect } from "next/navigation";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Elangovan Portfolio",
  description: "Have a look at Elangovan's portfolio",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  if (typeof window !== 'undefined' && window.location.pathname === '/') {
    redirect('/home');
  }
  return (
    <html lang="en">
      <body
      // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
