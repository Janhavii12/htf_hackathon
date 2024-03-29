import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import "./globals.css";
import SideNav from "@/components/component/sidenav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div
          className="flex h-screen w-screen"
        // style={{
        //   backgroundImage: `url('htf_hackathon/assets/homepage.jpg')`,
        //   backgroundSize: "cover",
        //   backgroundPosition: "center",
        // }}
        >
          <SideNav />
          {children}
        </div>
      </body>
    </html>
  );
}
