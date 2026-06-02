import Link from "next/link";

export default function Mets() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-24">
      <Link href="/#works" className="text-sm text-gray-400 hover:text-gray-600 mb-8 inline-block">← 実績一覧に戻る</Link>
      <h1 className="text-3xl font-bold mb-2">地域の少年野球チーム</h1>
      <p className="text-gray-500 mb-12">少年野球チームの選手募集サイト</p>

      <div className="space-y-8">
        <div>
          <h2 className="text-sm tracking-widest text-gray-400 mb-2">PURPOSE</h2>
          <p className="text-gray-700">チラシQRコードからの体験申込みをゼロから構築。紙チラシからサイトへの導線を整備し、入団希望者が迷わず申し込める仕組みを作ることを目的とした。</p>
        </div>
        <div>
          <h2 className="text-sm tracking-widest text-gray-400 mb-2">TARGET</h2>
          <p className="text-gray-700">野球に興味を持つ小学生とその保護者。地域のスポーツコミュニティに参加したいと考えているファミリー層。</p>
        </div>
        <div>
          <h2 className="text-sm tracking-widest text-gray-400 mb-2">PERIOD</h2>
          <p className="text-gray-700">約5日間（設計1日・実装3日・修正1日）</p>
        </div>
        <div>
          <h2 className="text-sm tracking-widest text-gray-400 mb-2">TECH</h2>
          <p className="text-gray-700">Next.js / Tailwind CSS / Vercel / Cursor / Supabase</p>
        </div>
        <div>
          <h2 className="text-sm tracking-widest text-gray-400 mb-2">POINT</h2>
          <p className="text-gray-700">コーチ自身が現役で関わるチームのサイトだからこそ、保護者目線で「安心感」を最優先に設計。体験申込みフォームをトップに配置し、スマホでも迷わず操作できる導線にこだわった。</p>
        </div>
        <a href="https://mets-baseball.vercel.app" target="_blank" rel="noopener noreferrer"
          className="inline-block border border-gray-900 px-8 py-3 rounded-full hover:bg-gray-900 hover:text-white transition mt-4">
          サイトを見る →
        </a>
      </div>
    </main>
  );
}