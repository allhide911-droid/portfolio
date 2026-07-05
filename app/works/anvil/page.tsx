export default function Anvil() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <div className="max-w-2xl mx-auto px-6 py-24">
        <a href="/#works" className="text-sm text-gray-400 hover:text-gray-600 transition">← 実績一覧に戻る</a>
        <h1 className="text-3xl font-bold mt-8 mb-2">ANVIL BASEBALL ACADEMY</h1>
        <p className="text-gray-500 mb-2">少年野球教室の入会促進サイト（ヘッドレスWordPress連携）</p>
        <p className="text-xs text-gray-400 mb-12">※課題設定・設計・実装すべて自主制作のポートフォリオ作品です</p>

        <div className="space-y-10">
          <div>
            <h2 className="text-xs tracking-widest text-gray-400 mb-2">PURPOSE</h2>
            <p className="text-gray-700 leading-relaxed">少年野球教室の入会促進を目的とした、保護者・子ども双方に響くブランドサイトの制作。あわせて、実案件（将棋教室）のリハーサルとして、WordPress×Next.jsのヘッドレスCMS構成を検証。</p>
          </div>
          <div>
            <h2 className="text-xs tracking-widest text-gray-400 mb-2">TARGET</h2>
            <p className="text-gray-700 leading-relaxed">少年野球チームへの入会を検討する保護者・子ども</p>
          </div>
          <div>
            <h2 className="text-xs tracking-widest text-gray-400 mb-2">PERIOD</h2>
            <p className="text-gray-700">7日間</p>
          </div>
          <div>
            <h2 className="text-xs tracking-widest text-gray-400 mb-2">TECH</h2>
            <p className="text-gray-700">Next.js / Tailwind CSS / WordPress (Headless CMS) / ACF / Vercel / Cursor</p>
          </div>
          <div>
            <h2 className="text-xs tracking-widest text-gray-400 mb-2">POINT</h2>
            <p className="text-gray-700 leading-relaxed">コーチ紹介・ギャラリーをWordPress管理画面から更新できるヘッドレスCMS構成を採用。保護者の悩みに寄り添うセクション構成、実写真中心の信頼感あるデザインにこだわった。</p>
          </div>
        </div>

        <div className="mt-12">
          <a href="https://anvil-baseball.vercel.app" target="_blank" rel="noopener noreferrer"
            className="inline-block bg-gray-900 text-white px-8 py-3 rounded-full hover:bg-gray-700 transition">
            サイトを見る →
          </a>
        </div>
      </div>
    </main>
  );
}
