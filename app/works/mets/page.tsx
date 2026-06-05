export default function Mets() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <div className="max-w-2xl mx-auto px-6 py-24">
        <a href="/#works" className="text-sm text-gray-400 hover:text-gray-600 transition">← 実績一覧に戻る</a>
        <h1 className="text-3xl font-bold mt-8 mb-2">地域の少年野球チーム</h1>
        <p className="text-gray-500 mb-2">少年野球チームの選手募集サイト</p>
        <p className="text-xs text-gray-400 mb-12">※コーチとして実際に関わるチームのサイトを自主制作したポートフォリオ作品です</p>

        <div className="space-y-10">
          <div>
            <h2 className="text-xs tracking-widest text-gray-400 mb-2">PURPOSE</h2>
            <p className="text-gray-700 leading-relaxed">チラシQRコードからの体験申込みをゼロから構築。紙チラシからサイトへの導線を整備し、入団希望者が迷わず申し込める仕組みを作ることを目的とした。</p>
          </div>
          <div>
            <h2 className="text-xs tracking-widest text-gray-400 mb-2">TARGET</h2>
            <p className="text-gray-700 leading-relaxed">野球に興味を持つ小学生とその保護者。地域のスポーツコミュニティに参加したいと考えているファミリー層。</p>
          </div>
          <div>
            <h2 className="text-xs tracking-widest text-gray-400 mb-2">PERIOD</h2>
            <p className="text-gray-700">約5日間（設計1日・実装3日・修正1日）</p>
          </div>
          <div>
            <h2 className="text-xs tracking-widest text-gray-400 mb-2">TECH</h2>
            <p className="text-gray-700">Next.js / Tailwind CSS / Vercel / Cursor / Supabase</p>
          </div>
          <div>
            <h2 className="text-xs tracking-widest text-gray-400 mb-2">POINT</h2>
            <p className="text-gray-700 leading-relaxed">コーチ自身が現役で関わるチームのサイトだからこそ、保護者目線で「安心感」を最優先に設計。体験申込みフォームをトップに配置し、スマホでも迷わず操作できる導線にこだわった。申込みデータはSupabaseで管理し、コーチ陣がリアルタイムで確認できる運用フローも構築した。</p>
          </div>
        </div>

        <div className="mt-12">
          <a href="https://mets-baseball.vercel.app" target="_blank" rel="noopener noreferrer"
            className="inline-block bg-gray-900 text-white px-8 py-3 rounded-full hover:bg-gray-700 transition">
            サイトを見る →
          </a>
        </div>
      </div>
    </main>
  );
}