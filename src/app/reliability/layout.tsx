import type { Metadata } from "next";
import "./globals.css";


//页面文件sheet页显示
export const metadata: Metadata = {
  title: 'Reliability Page',
  description: 'Reliability页面',
}
 


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <body className={`antialiased`}>
        {children}
      </body>
  );
}
