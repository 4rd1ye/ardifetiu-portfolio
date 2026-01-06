import "./globals.css";
import type { ReactNode } from "react";
import { Space_Grotesk, Source_Sans_3 } from "next/font/google";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const headingFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const bodyFont = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata = {
  title: "Ardifetiu Portfolio",
  description: "Portfolio with live Spring Boot + Next.js demos",
};

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => (
  <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
    <body>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </body>
  </html>
);

export default RootLayout;
