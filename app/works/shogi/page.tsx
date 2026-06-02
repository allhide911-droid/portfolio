import Link from "next/link";

export default function Shogi() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-24">
      <Link href="/#works" className="text-sm text-gray-400 hover:text-gray-600 mb-8 inline-block">← 実績一覧に戻る</Link>
      <h1 className="text-3xl font-bold mb-2">王手将棋教室</h1>
      <p className="text-gray-500 mb-12">将棋教室の集客サイト</p>

      <div className="space-y-8">
        <div>
          <h2 className="text-sm tracking-widest text-gray-400 mb-2">PURPOSE</h2>
          <p className="text-gray-700">体験申込みのオンライン化と新規生徒獲得。チラシ配布のみだった集客をWebに拡大し、問い合わせのハードルを下げることを目的とした。</p>
        </div>
        <div>
          <h2 className="text-sm tracking-widest text-gray-400 mb-2">TARGET</h2>
          <p className="text-gray-700">将棋に興味を持つ小中学生とその保護者。集中力や論理的思考力を伸ばしたいと考えている親御さん。</p>
        </div>
        <div>
          <h2 className="text-sm tracking-widest text-gray-400 mb-2">PERIOD</h2>
          <p className="text-gray-700">約5日間（設計1日・実装3日・修正1日）</p>
        </div>
        <div>
          <h2 className="text-sm tracking-widest text-gray-400 mb-2">TECH</h2>
          <p className="text-gray-700">Next.js / Tailwind CSS / Vercel / Cursor</p>
        </div>
        <div>
          <h2 className="text-sm tracking-widest text-gray-400 mb-2">POINT</h2>
          <p className="text-gray-700">伝統文化の重厚感を出しつつ、子どもでも親しみやすいデザインに。体験申込みボタンを目立たせ、迷わず行動できる導線を意識した。</p>
        </div>
        <a href="https://shogi-tawny.vercel.app" target="_blank" rel="noopener noreferrer"
          className="inline-block border border-gray-900 px-8 py-3 rounded-full hover:bg-gray-900 hover:text-white transition mt-4">
          サイトを見る →
        </a>
      </div>
    </main>
  );
}