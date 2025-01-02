import "@/styles/globals.css";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "@Arthur.vsl",
  description: "Hello, I'm Arthur, come and check out my website!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="art:bg:white-01 art:font-color:black-01">
      <body>
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
