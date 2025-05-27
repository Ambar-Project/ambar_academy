import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/DefaultComponents/Footer";
import { Header } from "@/components/DefaultComponents/Header";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata = {
  icons: {
    icon: "/icon/logoAmbar.svg", // Ícone padrão
    apple: "/apple-icon.png", // Ícone para dispositivos Apple
    shortcut: "/shortcut-icon.png", // Ícone de atalho
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 return (
    <html lang="pt-br">
      <body
        className={`antialiased`}
      >
        <Header/>

        {children}

        <Footer/>
      </body>
    </html>
  );
}
