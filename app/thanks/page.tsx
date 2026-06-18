export default function Thanks() {
  return (
    <main className="min-h-screen bg-white text-gray-900 flex flex-col items-center justify-center px-6">
      <div className="max-w-md w-full text-center">
        <h1 className="text-2xl font-bold mb-4">お問い合わせありがとうございます</h1>
        <p className="text-gray-500 mb-12">2〜3営業日以内にご返信いたします。</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/#works"
            className="bg-gray-900 text-white px-8 py-3 rounded-full hover:bg-gray-700 transition text-center"
          >
            実績を見る
          </a>
          <a
            href="https://www.lancers.jp/menu/detail/1329959"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 text-white px-8 py-3 rounded-full hover:bg-gray-700 transition text-center"
          >
            ランサーズでご依頼する
          </a>
          <a
            href="https://note.com/magic_pony7222"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-400 px-8 py-3 rounded-full text-gray-600 hover:bg-gray-100 transition text-center"
          >
            noteを読む
          </a>
        </div>
      </div>
    </main>
  );
}
