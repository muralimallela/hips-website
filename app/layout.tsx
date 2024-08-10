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
  description: "A new star has born in the galaxy of pharmacy colleges in Telangana in the academic year 2007-2008 to guide the students in the areas of wisdom and excellence in pharmacy education. Vipasana Educational Society has established, Hetero Institute of Pharmaceutical Sciences by Sri. B. Parthasaradhi Reddy.",
  openGraph: {
    type: "website",
    url: "https://hips.muralikrishna.online/",
    title: "HIPS : Hetero Institute of Pharmaceutical Sciences",
    description: "A new star has born in the galaxy of pharmacy colleges in Telangana in the academic year 2007-2008 to guide the students in the areas of wisdom and excellence in pharmacy education. Vipasana Educational Society has established, Hetero Institute of Pharmaceutical Sciences by Sri. B. Parthasaradhi Reddy.",
    images: [{ url:"https://hips.muralikrishna.online/icon.jpeg", width: 800,
      height: 800,}]
  },
  twitter: {
    card: "summary_large_image",
    title: "HIPS : Hetero Institute of Pharmaceutical Sciences",
    description: "A new star has born in the galaxy of pharmacy colleges in Telangana in the academic year 2007-2008 to guide the students in the areas of wisdom and excellence in pharmacy education. Vipasana Educational Society has established, Hetero Institute of Pharmaceutical Sciences by Sri. B. Parthasaradhi Reddy.",
    images: ["https://hips.muralikrishna.online/icon.jpeg"]
  }
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
