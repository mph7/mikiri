import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_APP_NAME,
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-dvh m-0 dark z-0">
      <body className={`antialiased h-dvh m-0`}>
        <div className="">{children}</div>
      </body>
    </html>
  );
}
