import type { Metadata } from "next";
import Footer from "@/components/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "葱苓sama",
  description: "...",
  icons: "/avatar.avif"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="zh-CN">
      <body>
        <div id="CIRAOS" className="w-full h-screen flex flex-col justify-center">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
