import "./globals.css";
import type { ReactNode } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export const metadata = {
  title: "Ardifetiu Portfolio",
  description: "Portfolio with live Spring Boot + Next.js demos",
};

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => (
  <html lang="en">
    <body>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </body>
  </html>
);

export default RootLayout;
