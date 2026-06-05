export default function Zeirishi() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <div className="max-w-2xl mx-auto px-6 py-24">
        <a href="/#works" className="text-sm text-gray-400 hover:text-gray-600 transition">← 実績一覧に戻る</a>
        <h1 className="text-3xl font-bold mt-8 mb-2">田中税理士事務所</h1>
        <p className="text-gray-500 mb-2">税理士事務所コーポレートサイト</p>
        <p className="text-xs text-gray-400 mb-12">※課題設定・設計・実装すべて自主制作のポートフォリオ作品です</p>

        <div className="space-y-10">
          <div>
            <h2 className="text-xs tracking-widest text-gray-400 mb-2">PURPOSE</h2>
            <p className="text-gray-700 leading-relaxed">新規顧客獲得のためのWeb集客強化。既存の紙媒体中心の営業から脱却し、オンラインからの問い合わせ増加を目指した。</p>
          </div>
          <div>
            <h2 className="text-xs tracking-widest text-gray-400 mb-2">TARGET</h2>
            <p className="text-gray-700 leading-relaxed">開業・法人設立を検討している30〜50代の経営者・個人事業主。税務や確定申告に不安を感じている層。</p>
          </div>
          <div>
            <h2 className="text-xs tracking-widest text-gray-400 mb-2">PERIOD</h2>
            <p className="text-gray-700">約5日間（設計1日・実装3日・修正1日）</p>
          </div>
          <div>
            <h2 className="text-xs tracking-widest text-gray-400 mb-2">TECH</h2>
            <p className="text-gray-700">Next.js / Tailwind CSS / Vercel / Cursor</p>
          </div>
          <div>
            <h2 className="text-xs tracking-widest text-gray-400 mb-2">POINT</h2>
            <p className="text-gray-700 leading-relaxed">士業サイトでよく使われる紺・グレーをあえて避け、温かみのあるオフホワイト×ネイビーを選択。初回相談のハードルを下げることを意識し、専門用語を避けたわかりやすいコピーと清潔感のある配色で士業特有の堅さを和らげた。</p>
          </div>
        </div>

        <div className="mt-12">
          <a href="https://zeirishi-two.vercel.app" target="_blank" rel="noopener noreferrer"
            className="inline-block bg-gray-900 text-white px-8 py-3 rounded-full hover:bg-gray-700 transition">
            サイトを見る →
          </a>
        </div>
      </div>
    </main>
  );
}