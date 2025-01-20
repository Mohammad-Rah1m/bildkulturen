import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HeaderHome from "@/components/HeaderHome";
import Footer from "@/components/Footer";
import StoreProvider from "./StoreProvider";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Bildkulturen",
  description: "Bildkulturen website developed using Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StoreProvider>
        <HeaderHome/>
        {children}
        <Footer/>
        </StoreProvider>
      </body>
    </html>
  );
}
