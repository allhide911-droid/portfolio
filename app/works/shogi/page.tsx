export default function Shogi() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <div className="max-w-2xl mx-auto px-6 py-24">
        <a href="/#works" className="text-sm text-gray-400 hover:text-gray-600 transition">← 実績一覧に戻る</a>
        <h1 className="text-3xl font-bold mt-8 mb-2">王手将棋教室</h1>
        <p className="text-gray-500 mb-2">将棋教室の集客サイト</p>
        <p className="text-xs text-gray-400 mb-12">※課題設定・設計・実装すべて自主制作のポートフォリオ作品です</p>

        <div className="space-y-10">
          <div>
            <h2 className="text-xs tracking-widest text-gray-400 mb-2">PURPOSE</h2>
            <p className="text-gray-700 leading-relaxed">大阪市内の将棋教室として、体験レッスン申込みをWeb経由で獲得する仕組みを構築。教室の特徴・クラス・料金を明示し、初めての方が安心して申し込めるサイトを目指した。</p>
          </div>
          <div>
            <h2 className="text-xs tracking-widest text-gray-400 mb-2">TARGET</h2>
            <p className="text-gray-700 leading-relaxed">将棋に興味を持つ子どもから大人まで幅広い層。初心者から有段者まで対応できる教室として、習い事を探している保護者・社会人。</p>
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
            <p className="text-gray-700 leading-relaxed">将棋の「伝統・格式」と「親しみやすさ」を両立するデザインとして、深みのある紺×ゴールドを採用。「難しそう」というイメージを払拭するため、クラス分けを明確に示し「自分のレベルでも通える」と感じてもらえる構成にこだわった。</p>
          </div>
        </div>

        <div className="mt-12">
          <a href="https://shogi-theta.vercel.app" target="_blank" rel="noopener noreferrer"
            className="inline-block bg-gray-900 text-white px-8 py-3 rounded-full hover:bg-gray-700 transition">
            サイトを見る →
          </a>
        </div>
      </div>
    </main>
  );
}