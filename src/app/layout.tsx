import type { Metadata } from "next";
// Temporarily commenting out Google font to avoid network issues
// import { Inter } from "next/font/google";
import { CartProvider } from "@/lib/cart-context";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

// Temporarily using a fallback font
// const inter = Inter({ subsets: ["latin"] });
const interClassName = "font-sans";

export const metadata: Metadata = {
  title: "Myntra Clone | Online Shopping for Fashion & Lifestyle",
  description: "Myntra clone - A demo project showcasing advanced frontend development skills with Next.js, React, Tailwind CSS, and TypeScript.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={interClassName}>
        <CartProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
