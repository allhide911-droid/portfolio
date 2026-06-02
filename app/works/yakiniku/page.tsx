import Link from "next/link";

export default function Yakiniku() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-24">
      <Link href="/#works" className="text-sm text-gray-400 hover:text-gray-600 mb-8 inline-block">← 実績一覧に戻る</Link>
      <h1 className="text-3xl font-bold mb-2">炎牛</h1>
      <p className="text-gray-500 mb-12">焼肉店のコーポレートサイト</p>

      <div className="space-y-8">
        <div>
          <h2 className="text-sm tracking-widest text-gray-400 mb-2">PURPOSE</h2>
          <p className="text-gray-700">食べログ・ぐるなびに頼らない自社集客の確立。SNSからの流入を受け止めるランディングページとして機能させることを目的とした。</p>
        </div>
        <div>
          <h2 className="text-sm tracking-widest text-gray-400 mb-2">TARGET</h2>
          <p className="text-gray-700">20〜40代のグルメ志向な男女。記念日や接待利用を検討しているファミリー・カップル層。</p>
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
          <p className="text-gray-700">炭火の熱さや煙、肉の質感を視覚的に伝えるため、ダークトーンの背景と炎をイメージした配色を採用。食欲をそそる写真の見せ方にこだわった。</p>
        </div>
        <a href="https://yakiniku-five.vercel.app" target="_blank" rel="noopener noreferrer"
          className="inline-block border border-gray-900 px-8 py-3 rounded-full hover:bg-gray-900 hover:text-white transition mt-4">
          サイトを見る →
        </a>
      </div>
    </main>
  );
}