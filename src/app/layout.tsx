import type { Metadata } from "next";
import { Inter, Noto_Kufi_Arabic } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const notoKufiArabic = Noto_Kufi_Arabic({
  variable: "--font-noto-kufi-arabic",
  subsets: ["arabic"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Captain International Alliance",
  description: "Logistics, Construction & Recruitment in Saudi Arabia",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${inter.variable} ${notoKufiArabic.variable} h-full antialiased`}
    >
      <body className={`${inter.className} min-h-full flex flex-col bg-[#0B0410] text-white font-sans`}>
        {children}
      </body>
    </html>
  );
}