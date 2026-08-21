import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "販売手数料計算ツール｜メルカリなどの手数料・手取りを無料計算",
description:
  "販売価格と手数料率から、販売手数料と手取り金額を無料で自動計算。5%・10%・15%のプリセットや自由入力に対応し、メルカリなどのフリマ販売の価格設定にも使えます。",
keywords: [
  "メルカリ手数料",
  "販売手数料計算",
  "ラクマ手数料",
  "利益計算",
  "物販",
  "副業",
],
  verification: {
    google: "miCxwdbgRhGe66W37cjiBB0MFNO1tB2WJxh9Dm_zTjc",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
     lang="ja" 
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
  <script
    async
    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7726060769550218"
    crossOrigin="anonymous"
  ></script>
</head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
