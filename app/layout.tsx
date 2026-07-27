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
  description: "個人事業主・小規模教室向けWeb制作。WordPress・Next.jsでの集客サイト構築、予約・スケジュール管理の実装まで対応。法人営業7年の経験を活かし、伝わる提案から丁寧に伴走します。",
  openGraph: {
    title: "とっちゃん | Web制作ポートフォリオ",
    description: "個人事業主・小規模教室向けWeb制作。WordPress・Next.jsでの集客サイト構築、予約・スケジュール管理の実装まで対応。法人営業7年の経験を活かし、伝わる提案から丁寧に伴走します。",
    url: "https://tocchan-web.com",
    siteName: "とっちゃん | Web制作ポートフォリオ",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "とっちゃん | Web制作ポートフォリオ",
    description: "個人事業主・小規模教室向けWeb制作。WordPress・Next.jsでの集客サイト構築、予約・スケジュール管理の実装まで対応。法人営業7年の経験を活かし、伝わる提案から丁寧に伴走します。",
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