import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { StoreProvider } from "@/globalRedux/StoreProvider";
import Header from "@/components/HeaderComps/Header";
import StickyFooter from "@/components/FooterComps/StickyFooter";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Leroy X oxygene Shop",
  description: "Oxygene Technical interview",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={inter.className}>
          <Header />
          {children}
          <StickyFooter />
        </body>
      </html>
    </StoreProvider>
  );
}
