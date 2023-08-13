import "./globals.css";
import type { Metadata } from "next";

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
        {children}
      </body>
    </html>
  );
}
