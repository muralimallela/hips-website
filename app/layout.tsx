import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FontSizeProvider } from "@/utils/FontSizeContext";
import FloatingIcons from "@/components/SocialLinks";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HIPS : Hetero Institute of Pharmaceutical Sciences",
  description: "Hetero Institute of Pharmaceutical Sciences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <FontSizeProvider>
          <Header />
          <FloatingIcons />
          <div className="mt-[105px] lg:mt-[205px] ">
            {children}</div>
          <Footer />
        </FontSizeProvider>
      </body>
    </html>
  );
}
