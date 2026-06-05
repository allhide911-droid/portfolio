export default function BloomBeauty() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <div className="max-w-2xl mx-auto px-6 py-24">
        <a href="/#works" className="text-sm text-gray-400 hover:text-gray-600 transition">← 実績一覧に戻る</a>
        <h1 className="text-3xl font-bold mt-8 mb-2">Bloom Beauty</h1>
        <p className="text-gray-500 mb-2">女性専用美容サロンのコーポレートサイト</p>
        <p className="text-xs text-gray-400 mb-12">※課題設定・設計・実装すべて自主制作のポートフォリオ作品です</p>

        <div className="space-y-10">
          <div>
            <h2 className="text-xs tracking-widest text-gray-400 mb-2">PURPOSE</h2>
            <p className="text-gray-700 leading-relaxed">新規顧客獲得のためのWeb集客強化。SNSからの流入を受け止め、サービス内容・料金・アクセスをワンストップで伝えることで、予約につながる導線を構築した。</p>
          </div>
          <div>
            <h2 className="text-xs tracking-widest text-gray-400 mb-2">TARGET</h2>
            <p className="text-gray-700 leading-relaxed">大阪・梅田周辺に住む20〜40代の女性。美容に関心が高く、InstagramなどSNSで情報収集する層。</p>
          </div>
          <div>
            <h2 className="text-xs tracking-widest text-gray-400 mb-2">PERIOD</h2>
            <p className="text-gray-700">約5日間（設計1日・実装3日・修正1日）</p>
          </div>
          <div>
            <h2 className="text-xs tracking-widest text-gray-400 mb-2">TECH</h2>
            <p className="text-gray-700">Next.js / Tailwind CSS / Vercel / Cursor / Google Maps Embed</p>
          </div>
          <div>
            <h2 className="text-xs tracking-widest text-gray-400 mb-2">POINT</h2>
            <p className="text-gray-700 leading-relaxed">ターゲットである女性層に刺さるよう、ピンク系グラデーションを全体のトーンに統一。「かわいい」だけでなく「信頼できる」印象を与えるため、料金表を明瞭に掲載しアクセスにGoogleマップを埋め込むことで来店ハードルを下げた。</p>
          </div>
        </div>

        <div className="mt-12">
          <a href="https://bloom-beauty-red.vercel.app" target="_blank" rel="noopener noreferrer"
            className="inline-block bg-gray-900 text-white px-8 py-3 rounded-full hover:bg-gray-700 transition">
            サイトを見る →
          </a>
        </div>
      </div>
    </main>
  );
}