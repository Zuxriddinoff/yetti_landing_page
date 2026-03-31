import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "YE77I TECH | Software Development Company",
  description: "We build world-class digital products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#F4F8FC] text-slate-950 antialiased">
        {children}
      </body>
    </html>
  );
}
