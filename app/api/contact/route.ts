import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    await resend.emails.send({
      from: "portfolio <onboarding@resend.dev>",
      to: "allhide911@gmail.com",
      subject: `【お問い合わせ】${name}様よりご連絡`,
      html: `
        <h2>お問い合わせが届きました</h2>
        <table style="border-collapse:collapse;width:100%;max-width:500px">
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;background:#f5f5f5">お名前</td><td style="padding:8px;border:1px solid #ddd">${name}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;background:#f5f5f5">メールアドレス</td><td style="padding:8px;border:1px solid #ddd">${email}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;background:#f5f5f5">ご相談内容</td><td style="padding:8px;border:1px solid #ddd">${message}</td></tr>
        </table>
      `,
    });

    await resend.emails.send({
      from: "tocchan web <onboarding@resend.dev>",
      to: email,
      subject: "お問い合わせを承りました",
      html: `
        <p>${name} 様</p>
        <p>お問い合わせいただきありがとうございます。</p>
        <p>内容を確認の上、2〜3営業日以内にご返信いたします。</p>
        <br>
        <p>─────────────────</p>
        <p>とっちゃん｜AI×Web制作</p>
        <p>https://tocchan-web.com</p>
        <p>─────────────────</p>
      `,
    });

    return Response.json({ ok: true });
  } catch (e) {
    console.error("contact error", e);
    return Response.json({ ok: false }, { status: 500 });
  }
}