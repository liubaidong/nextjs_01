import type { Metadata } from "next";
import "./globals.css";


//页面文件sheet页显示
export const metadata: Metadata = {
  title: 'Performance Page',
  description: 'Performance页面',
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
