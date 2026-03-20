import React from "react";
import {
  Send,
  Phone,
  MessageSquare,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
  Wifi,
  ArrowRight,
  MessageCircle,
  Smartphone,
  QrCode,
} from "lucide-react";

const CONSULTANT_NAME = "Связь.Подбор";
const TELEGRAM_URL = "https://t.me/oh_my_vigor";
const WHATSAPP_URL = "https://wa.me/79877310529";
const PHONE = "+7 987 731 05 29";

const steps = [
  {
    title: "Уточняю вашу ситуацию",
    text: "Один человек или семья, нужен только интернет или ещё мобильная связь, важен ли перенос номера.",
    icon: MessageSquare,
  },
  {
    title: "Сравниваю сценарии",
    text: "Смотрю, что реально выгоднее именно в вашей ситуации, а не в рекламе.",
    icon: Sparkles,
  },
  {
    title: "Объясняю простыми словами",
    text: "Коротко показываю плюсы, минусы и итоговую логику выбора.",
    icon: CheckCircle2,
  },
  {
    title: "Помогаю с подключением",
    text: "Если вариант вам подходит — довожу до оформления.",
    icon: Phone,
  },
];

const cases = [
  "Если хотите снизить ежемесячные расходы",
  "Если дома несколько человек пользуются связью",
  "Если нужен домашний интернет + мобильная связь",
  "Если хотите сохранить номер при переходе",
  "Если не понимаете, какой тариф реально выгоднее",
  "Если устали от рекламы и хотите нормальное человеческое объяснение",
];

const operators = ["МТС", "Ростелеком", "Дом.ру"];

export default function App() {
  const phoneLink = PHONE.replace(/\D/g, "");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    console.log(Object.fromEntries(data.entries()));
    alert("Заявка отправлена (демо). Сейчас она сохраняется локально в консоль.");
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 scroll-smooth">
      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-white/50 bg-slate-50/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-slate-900 text-white shadow-lg shadow-indigo-500/30">
              <Wifi size={18} />
            </div>
            <div className="leading-tight">
              <p className="text-sm font-semibold">{CONSULTANT_NAME}</p>
              <p className="text-xs text-slate-500">личный консультант</p>
            </div>
          </div>
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-[#0d5df5] px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:-translate-y-0.5 hover:shadow-xl"
          >
            Написать <Send size={16} />
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-5 pb-32">
        {/* Hero */}
        <section className="pt-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-100 to-blue-50 px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm">
            Личный сервис · без навязывания
          </div>
          <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
            Помогу подобрать выгодный интернет и связь под вашу ситуацию
          </h1>
          <p className="mt-4 text-base text-slate-600 sm:text-lg">
            Сравниваю популярные предложения и помогаю понять, есть ли смысл менять текущий тариф или
            оператора. Если ваш текущий вариант уже хороший — так и скажу.
          </p>
          <p className="mt-3 text-sm text-slate-500">
            Сравнение сценариев по домашнему интернету и связи: МТС, Ростелеком, Дом.ру
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener"
              className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#0d5df5] to-[#0b3c8a] px-4 py-3 text-base font-semibold text-white shadow-xl shadow-indigo-500/30 transition hover:-translate-y-0.5"
            >
              Написать в Telegram <Send className="transition group-hover:translate-x-0.5" size={18} />
            </a>
            <a
              href={`tel:${phoneLink}`}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-4 py-3 text-base font-semibold text-slate-900 shadow-lg shadow-slate-200 transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              Позвонить <Phone size={18} />
            </a>
            <a
              href="#form"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base font-semibold text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              Оставить заявку <ArrowRight size={18} />
            </a>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {["Без навязывания", "Подбор под ваш сценарий", "Удобно для семьи, дома и связи"].map(
              (item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-lg shadow-slate-200 transition hover:-translate-y-0.5 hover:shadow-xl"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-[#0d5df5]">
                    <ShieldCheck size={18} />
                  </div>
                  <p className="font-semibold text-slate-900">{item}</p>
                </div>
              )
            )}
          </div>
        </section>

        {/* Steps */}
        <section className="mt-14 space-y-4">
          <h2 className="text-2xl font-bold">Как проходит подбор</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {steps.map(({ title, text, icon: Icon }) => (
              <article
                key={title}
                className="relative overflow-hidden rounded-2xl bg-white p-4 shadow-lg shadow-slate-200 transition hover:-translate-y-0.5 hover:shadow-xl"
              >
                <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-[#0d5df5]">
                  <Icon size={18} />
                  <span>{title}</span>
                </div>
                <p className="text-slate-600">{text}</p>
                <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-indigo-100/60" />
              </article>
            ))}
          </div>
        </section>

        {/* Cases */}
        <section className="mt-14 space-y-4">
          <h2 className="text-2xl font-bold">В каких случаях это полезно</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {cases.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-md shadow-slate-200 transition hover:-translate-y-0.5 hover:shadow-xl"
              >
                <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-xl bg-indigo-50 text-[#0d5df5]">
                  <CheckCircle2 size={18} />
                </div>
                <p className="text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Operators */}
        <section className="mt-14 space-y-3">
          <h2 className="text-2xl font-bold">Основные операторы, которые я смотрю</h2>
          <div className="grid gap-3 sm:grid-cols-3">
            {operators.map((op) => (
              <div
                key={op}
                className="rounded-2xl bg-white p-4 text-center text-lg font-semibold text-slate-900 shadow-md shadow-slate-200 transition hover:-translate-y-0.5 hover:shadow-xl"
              >
                {op}
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-500">
            Рекомендация зависит от вашей ситуации: где-то важнее минимальный платёж на старте,
            где-то — семейная связка, где-то — удобство и общая выгода на длительный период.
          </p>
        </section>

        {/* Approach */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold mb-4">Без давления и лишних обещаний</h2>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0f1b2d] to-[#122c55] p-6 text-white shadow-2xl shadow-indigo-900/30">
            <div className="absolute right-6 top-6 h-32 w-32 rounded-full bg-white/10 blur-3xl" />
            <p className="text-lg leading-relaxed">
              Я не продвигаю вариант вслепую. Сначала смотрю, есть ли для вас реальная выгода. Если
              менять ничего не нужно — честно скажу. Если есть более сильный сценарий — объясню его
              простыми словами.
            </p>
            <div className="mt-4 flex items-center gap-3 text-sm text-indigo-100">
              <ShieldCheck size={18} />
              Личная ответственность за рекомендации
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="mt-14 space-y-4" id="contact">
          <h2 className="text-2xl font-bold">Можно просто написать или позвонить</h2>
          <div className="grid gap-3 sm:grid-cols-4">
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener"
              className="flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#0d5df5] to-[#0b3c8a] px-4 py-4 text-base font-semibold text-white shadow-xl shadow-indigo-500/30 transition hover:-translate-y-0.5"
            >
              <Send size={18} /> Telegram
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener"
              className="flex items-center justify-center gap-2 rounded-2xl bg-white px-4 py-4 text-base font-semibold text-slate-900 shadow-lg shadow-slate-200 transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              <MessageCircle size={18} /> WhatsApp
            </a>
            <a
              href={`tel:${phoneLink}`}
              className="flex items-center justify-center gap-2 rounded-2xl bg-white px-4 py-4 text-base font-semibold text-slate-900 shadow-lg shadow-slate-200 transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              <Phone size={18} /> Позвонить
            </a>
            <div className="flex flex-col items-center justify-center rounded-2xl bg-white p-4 text-center shadow-lg shadow-slate-200">
              <div className="flex h-28 w-28 items-center justify-center rounded-2xl bg-slate-100 text-slate-500">
                <QrCode size={36} />
              </div>
              <p className="mt-2 text-sm text-slate-600">Удобно сохранить контакт и вернуться позже</p>
            </div>
          </div>
        </section>

        {/* Form */}
        <section className="mt-14" id="form">
          <h2 className="text-2xl font-bold mb-4">Оставить заявку</h2>
          <form
            onSubmit={handleSubmit}
            className="space-y-4 rounded-3xl bg-white p-5 shadow-2xl shadow-slate-200/70"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-2 text-sm font-semibold text-slate-900">
                Имя
                <input
                  name="name"
                  type="text"
                  placeholder="Как к вам обращаться"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-900 outline-none transition focus:border-[#0d5df5] focus:bg-white focus:ring-4 focus:ring-indigo-200"
                />
              </label>
              <label className="space-y-2 text-sm font-semibold text-slate-900">
                Телефон
                <input
                  name="phone"
                  type="tel"
                  placeholder="+7 (___) ___-__-__"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-900 outline-none transition focus:border-[#0d5df5] focus:bg-white focus:ring-4 focus:ring-indigo-200"
                />
              </label>
            </div>
            <label className="space-y-2 text-sm font-semibold text-slate-900">
              Что интересует
              <select
                name="interest"
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-900 outline-none transition focus:border-[#0d5df5] focus:bg-white focus:ring-4 focus:ring-indigo-200"
              >
                <option>Только домашний интернет</option>
                <option>Интернет + мобильная связь</option>
                <option>Семейный вариант</option>
                <option>Нужна консультация</option>
              </select>
            </label>
            <label className="space-y-2 text-sm font-semibold text-slate-900">
              Можно кратко описать текущую ситуацию
              <textarea
                name="comment"
                placeholder="Например: сейчас МТС, 2 номера, хотим понять стоит ли менять."
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-900 outline-none transition focus:border-[#0d5df5] focus:bg-white focus:ring-4 focus:ring-indigo-200"
                rows={4}
              />
            </label>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#0d5df5] to-[#0b3c8a] px-4 py-3 text-base font-semibold text-white shadow-xl shadow-indigo-500/30 transition hover:-translate-y-0.5"
            >
              Получить консультацию
              <ArrowRight size={18} />
            </button>
            <p className="text-sm text-slate-500">
              Я свяжусь с вами и коротко помогу понять, есть ли смысл что-то менять.
            </p>
          </form>
        </section>

        {/* Footer */}
        <footer className="mt-14 rounded-2xl border border-slate-200 bg-white px-5 py-6 text-sm text-slate-600 shadow-inner">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-semibold text-slate-900">{CONSULTANT_NAME}</p>
              <p className="text-slate-500">
                Частный консультант по подбору выгодных сценариев домашнего интернета и связи
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-slate-900">
              <a href={TELEGRAM_URL} target="_blank" rel="noopener" className="hover:text-[#0d5df5]">
                Telegram
              </a>
              <span className="text-slate-300">•</span>
              <a href={`tel:${phoneLink}`} className="hover:text-[#0d5df5]">
                {PHONE}
              </a>
            </div>
          </div>
        </footer>
      </main>

      {/* Sticky mobile CTA */}
      <div className="fixed bottom-3 left-0 right-0 z-40 px-4 md:hidden">
        <div className="mx-auto flex max-w-2xl gap-3 rounded-2xl bg-white/95 p-3 shadow-2xl shadow-slate-400/30 backdrop-blur">
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener"
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0d5df5] to-[#0b3c8a] px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30"
          >
            <Send size={16} /> Telegram
          </a>
          <a
            href={`tel:${phoneLink}`}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 shadow-sm"
          >
            <Smartphone size={16} /> Позвонить
          </a>
        </div>
      </div>
    </div>
  );
}
