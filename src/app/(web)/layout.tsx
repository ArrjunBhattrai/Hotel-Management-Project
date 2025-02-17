import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css"; 
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer"
import ThemeProvider from "@/components/ThemeProvider/ThemeProvider";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400","500","700","900"],
style: ["italic","normal"]
});

export const metadata: Metadata = {
  title: "Hotel Management App",
  description: "Discover best hotel rooms at a cheaper rate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
      >
      <ThemeProvider>
        <main className="font-normal">
          <Header/>
        {children}
        <Footer/>
        </main>
      </ThemeProvider>
      </body>
    </html>
  );
}
