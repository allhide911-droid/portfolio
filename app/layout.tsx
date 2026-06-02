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
  title: "とっちゃん | Web制作ポートフォリオ",
  description: "ボート全国3位・新聞奨学生・土木工学科出身の異色Web制作者。Claude Code・Cursor・Vercelで爆速サイトを仕上げます。",
  openGraph: {
    title: "とっちゃん | Web制作ポートフォリオ",
    description: "ボート全国3位・新聞奨学生・土木工学科出身の異色Web制作者。Claude Code・Cursor・Vercelで爆速サイトを仕上げます。",
    url: "https://tocchan-web.com",
    siteName: "とっちゃん | Web制作ポートフォリオ",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "とっちゃん | Web制作ポートフォリオ",
    description: "ボート全国3位・新聞奨学生・土木工学科出身の異色Web制作者。Claude Code・Cursor・Vercelで爆速サイトを仕上げます。",
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}