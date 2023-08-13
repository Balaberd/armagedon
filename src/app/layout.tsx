import { Footer, Header } from "@/components/widget";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ARMAGEDON 2023",
  description: "ООО 'Команда им. Б. Уиллиса'.Взрываем астероиды с 1998 года.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
