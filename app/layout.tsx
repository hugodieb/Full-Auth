import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/styles/globals.css";
import Provider from "@/redux/provider"
import { Navbar, Footer } from "./components/common";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Full Auth",
  description: "Full Auth Aplication that Provides JWT Authentication",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider>
          <Navbar />
          <div>
            {children}
          </div>
          <Footer />
        </Provider>        
      </body>
    </html>
  );
}
