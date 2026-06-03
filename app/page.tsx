import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* Hero */}
      <section className="flex flex-col items-center justify-center min-h-screen text-center px-6">
        <p className="text-sm tracking-widest text-gray-400 mb-4">WEB CREATOR</p>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">AIで作る、本物のWeb</h1>
        <p className="text-lg text-gray-500 mb-8">とっちゃん｜AI×Web制作フリーランス</p>
        <a href="#works" className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition">実績を見る</a>
      </section>

      {/* About */}
      <section className="max-w-2xl mx-auto px-6 py-24">
        <h2 className="text-2xl font-bold mb-6">About</h2>
        <p className="text-gray-600 leading-relaxed">
          ボート全国3位・新聞奨学生・土木工学科出身の少年野球コーチ。<br />
          異色すぎる経歴を持つWeb制作者が、Claude Code・Cursor・Vercelで爆速サイトを仕上げます。
        </p>
      </section>

      {/* Works */}
      <section id="works" className="max-w-4xl mx-auto px-6 py-24">
        <h2 className="text-2xl font-bold mb-10">Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: "田中税理士事務所", desc: "税理士事務所コーポレートサイト", url: "/works/zeirishi", img: "/images/works/zeirishi.png" },
            { title: "炎牛", desc: "焼肉店のコーポレートサイト", url: "/works/yakiniku", img: "/images/works/yakiniku.png" },
            { title: "王手将棋教室", desc: "将棋教室の集客サイト", url: "/works/shogi", img: "/images/works/shogi.png" },
            { title: "地域の少年野球チーム", desc: "少年野球チームの選手募集サイト", url: "/works/mets", img: "/images/works/mets.png" },
          ].map((work) => (
            <a key={work.title} href={work.url}
              className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-md transition">
              <div className="w-full h-48 relative bg-gray-100">
                <Image
                  src={work.img}
                  alt={work.title}
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2">{work.title}</h3>
                <p className="text-gray-500 text-sm">{work.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="max-w-2xl mx-auto px-6 py-24">
        <h2 className="text-2xl font-bold mb-6">Skills</h2>
        <div className="flex flex-wrap gap-3">
          {["Next.js", "Tailwind CSS", "Cursor", "Vercel", "GitHub", "Supabase", "Anthropic", "Claude Code"].map((skill) => (
            <span key={skill} className="border border-gray-300 rounded-full px-4 py-1 text-sm text-gray-600">{skill}</span>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="max-w-2xl mx-auto px-6 py-24">
        <h2 className="text-2xl font-bold mb-6 text-center">Contact</h2>
        <p className="text-gray-500 mb-8 text-center">お仕事のご依頼・ご相談はお気軽にどうぞ。</p>
        <form action="https://formspree.io/f/mbderjqb" method="POST" className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm text-gray-600 mb-1">お名前</label>
            <input type="text" id="name" name="name" required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-gray-900" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm text-gray-600 mb-1">メールアドレス</label>
            <input type="email" id="email" name="email" required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-gray-900" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm text-gray-600 mb-1">ご相談内容</label>
            <textarea id="message" name="message" rows={5} required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-gray-900" />
          </div>
          <button type="submit"
            className="w-full bg-gray-900 text-white py-3 rounded-full hover:bg-gray-700 transition">
            送信する
          </button>
        </form>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <a href="https://www.lancers.jp" target="_blank" rel="noopener noreferrer"
            className="border border-gray-900 px-8 py-3 rounded-full hover:bg-gray-900 hover:text-white transition text-center">
            ランサーズで依頼する
          </a>
          <a href="https://lin.ee/noUNHMWS" target="_blank" rel="noopener noreferrer"
            className="bg-[#06C755] text-white px-8 py-3 rounded-full hover:bg-[#05a847] transition text-center">
            LINEで相談する
          </a>
        </div>
        <div className="border-t border-gray-100 pt-12 mt-12 text-center">
          <p className="text-sm text-gray-400 mb-2">BLOG</p>
          <h3 className="text-lg font-bold mb-3">息子と野球、そしてWeb制作</h3>
          <p className="text-gray-500 text-sm mb-6">少年野球コーチとしての日々や、AI×Web制作への挑戦をnoteで綴っています。</p>
          <a href="https://note.com/magic_pony7222" target="_blank" rel="noopener noreferrer"
            className="border border-gray-400 px-8 py-3 rounded-full text-gray-600 hover:bg-gray-100 transition">
            noteを読む
          </a>
        </div>
      </section>

    </main>
  );
}