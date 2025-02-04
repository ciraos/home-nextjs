import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "葱苓sama",
  description: "...",
  icons: "/avatar.avif"
};

import Footer from "@/components/footer";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="zh-CN">
      <body className="">
        <div id="CIRAOS" className="w-full h-screen flex flex-col justify-center">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
