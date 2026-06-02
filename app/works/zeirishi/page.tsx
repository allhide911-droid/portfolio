import Link from "next/link";

export default function Zeirishi() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-24">
      <Link href="/#works" className="text-sm text-gray-400 hover:text-gray-600 mb-8 inline-block">← 実績一覧に戻る</Link>
      <h1 className="text-3xl font-bold mb-2">田中税理士事務所</h1>
      <p className="text-gray-500 mb-12">税理士事務所コーポレートサイト</p>

      <div className="space-y-8">
        <div>
          <h2 className="text-sm tracking-widest text-gray-400 mb-2">PURPOSE</h2>
          <p className="text-gray-700">新規顧客獲得のためのWeb集客強化。既存の紙媒体中心の営業から脱却し、オンラインからの問い合わせ増加を目指した。</p>
        </div>
        <div>
          <h2 className="text-sm tracking-widest text-gray-400 mb-2">TARGET</h2>
          <p className="text-gray-700">開業・法人設立を検討している30〜50代の経営者・個人事業主。税務や確定申告に不安を感じている層。</p>
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
          <p className="text-gray-700">「信頼感」と「親しみやすさ」を両立するデザインにこだわった。専門用語を避けたわかりやすいコピーと、清潔感のある配色で士業特有の堅さを和らげた。</p>
        </div>
        <a href="https://zeirishi-two.vercel.app" target="_blank" rel="noopener noreferrer"
          className="inline-block border border-gray-900 px-8 py-3 rounded-full hover:bg-gray-900 hover:text-white transition mt-4">
          サイトを見る →
        </a>
      </div>
    </main>
  );
}