import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, message: "Method not allowed" });
  }

  try {
    const { name, phone, interest, comment } = req.body || {};

    if (!name && !phone && !interest) {
      return res.status(400).json({ ok: false, message: "Missing fields" });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const target = process.env.TARGET_EMAIL;
    if (!target) {
      return res.status(500).json({ ok: false, message: "TARGET_EMAIL not set" });
    }

    const html = `
      <h2>Новая заявка с лендинга</h2>
      <p><strong>Имя:</strong> ${name || "—"}</p>
      <p><strong>Телефон:</strong> ${phone || "—"}</p>
      <p><strong>Что интересует:</strong> ${interest || "—"}</p>
      <p><strong>Комментарий:</strong> ${comment || "—"}</p>
      <p style="color:#64748b;font-size:12px;">Отправлено автоматически с лендинга.</p>
    `;

    await transporter.sendMail({
      from: process.env.FROM_EMAIL || process.env.SMTP_USER,
      to: target,
      subject: "Заявка на подбор интернета и связи",
      html,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ ok: false, message: "Server error" });
  }
}
