export default function Yakiniku() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <div className="max-w-2xl mx-auto px-6 py-24">
        <a href="/#works" className="text-sm text-gray-400 hover:text-gray-600 transition">← 実績一覧に戻る</a>
        <h1 className="text-3xl font-bold mt-8 mb-2">炎牛</h1>
        <p className="text-gray-500 mb-2">焼肉店のコーポレートサイト</p>
        <p className="text-xs text-gray-400 mb-12">※課題設定・設計・実装すべて自主制作のポートフォリオ作品です</p>

        <div className="space-y-10">
          <div>
            <h2 className="text-xs tracking-widest text-gray-400 mb-2">PURPOSE</h2>
            <p className="text-gray-700 leading-relaxed">大阪・鶴橋の焼肉店として、食べログ・Googleマップからの流入を受け止めるコーポレートサイトの構築。メニューとこだわりを伝えることで予約・来店につなげる。</p>
          </div>
          <div>
            <h2 className="text-xs tracking-widest text-gray-400 mb-2">TARGET</h2>
            <p className="text-gray-700 leading-relaxed">鶴橋・大阪周辺で焼肉を探している20〜40代。記念日や接待など特別な食事を検討しているユーザー。</p>
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
            <p className="text-gray-700 leading-relaxed">「炎」と「肉」の世界観を表現するため、背景を黒・文字とアクセントをゴールドで統一。高級感と迫力を両立させ、「ハレの日に行きたい店」という印象を狙った。メニュー・こだわり・アクセスの3点を明確に構成し、来店判断に必要な情報をすべてワンページに収めた。</p>
          </div>
        </div>

        <div className="mt-12">
          <a href="https://yakiniku-five.vercel.app" target="_blank" rel="noopener noreferrer"
            className="inline-block bg-gray-900 text-white px-8 py-3 rounded-full hover:bg-gray-700 transition">
            サイトを見る →
          </a>
        </div>
      </div>
    </main>
  );
}