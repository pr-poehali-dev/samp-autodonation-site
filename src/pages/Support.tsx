import { useState } from "react";
import Layout from "@/components/Layout";
import Icon from "@/components/ui/icon";

const categories = [
  { value: "bug", label: "Баг / Ошибка", icon: "Bug" },
  { value: "donate", label: "Проблема с донатом", icon: "CreditCard" },
  { value: "ban", label: "Апелляция бана", icon: "ShieldOff" },
  { value: "player", label: "Жалоба на игрока", icon: "UserX" },
  { value: "other", label: "Другое", icon: "HelpCircle" },
];

const faqs = [
  {
    q: "Как подключиться к серверу?",
    a: "Запустите SA:MP, нажмите Add Server и введите: play.darkrp.ru:7777",
  },
  {
    q: "Мой донат не пришёл после оплаты",
    a: "Подождите до 10 минут. Если не пришёл — создайте тикет с чеком оплаты.",
  },
  {
    q: "Как восстановить аккаунт?",
    a: "Создайте тикет с категорией «Другое» и укажите ник и email регистрации.",
  },
  {
    q: "Как вступить во фракцию?",
    a: "Фракции набирают игроков через RP-объявления и внутренние испытания.",
  },
];

const Support = () => {
  const [form, setForm] = useState({ nick: "", category: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <Layout>
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="tag-badge mb-4 inline-block">Помощь</span>
            <h1
              className="text-5xl font-black text-white mb-4"
              style={{ fontFamily: "Oswald, sans-serif" }}
            >
              ТЕХНИЧЕСКАЯ <span className="text-purple-400">ПОДДЕРЖКА</span>
            </h1>
            <p className="text-gray-400 max-w-xl mx-auto">
              Опишите проблему — администрация ответит в течение 24 часов.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Form */}
            <div className="lg:col-span-3">
              {!sent ? (
                <form onSubmit={handleSubmit} className="card-purple rounded-2xl p-8 space-y-5">
                  <h2 className="text-white font-bold text-xl mb-2">Создать обращение</h2>

                  <div>
                    <label className="block text-gray-400 text-sm mb-2">Ваш ник на сервере *</label>
                    <input
                      required
                      type="text"
                      value={form.nick}
                      onChange={(e) => setForm({ ...form, nick: e.target.value })}
                      placeholder="Pavel_Ivanov"
                      className="w-full bg-black/40 border border-purple-900/50 rounded px-4 py-3 text-white placeholder-gray-600 focus:border-purple-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-400 text-sm mb-2">Категория *</label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {categories.map((cat) => (
                        <button
                          type="button"
                          key={cat.value}
                          onClick={() => setForm({ ...form, category: cat.value })}
                          className={`flex items-center gap-2 px-3 py-2 rounded border text-sm transition-all ${
                            form.category === cat.value
                              ? "border-purple-400 bg-purple-900/30 text-white"
                              : "border-purple-900/40 text-gray-500 hover:border-purple-700"
                          }`}
                        >
                          <Icon name={cat.icon} size={14} />
                          {cat.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-400 text-sm mb-2">Тема обращения *</label>
                    <input
                      required
                      type="text"
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      placeholder="Кратко опишите проблему"
                      className="w-full bg-black/40 border border-purple-900/50 rounded px-4 py-3 text-white placeholder-gray-600 focus:border-purple-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-400 text-sm mb-2">Описание проблемы *</label>
                    <textarea
                      required
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Опишите ситуацию подробно: что произошло, когда, при каких обстоятельствах..."
                      rows={5}
                      className="w-full bg-black/40 border border-purple-900/50 rounded px-4 py-3 text-white placeholder-gray-600 focus:border-purple-500 focus:outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={!form.category}
                    className="btn-purple w-full py-3 rounded font-bold uppercase tracking-wider text-white flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    <Icon name="Send" size={18} />
                    Отправить обращение
                  </button>
                </form>
              ) : (
                <div className="card-purple rounded-2xl p-10 text-center animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-green-900/30 flex items-center justify-center mx-auto mb-6">
                    <Icon name="CheckCircle" size={32} className="text-green-400" />
                  </div>
                  <h2 className="text-white text-2xl font-black mb-3" style={{ fontFamily: "Oswald, sans-serif" }}>
                    ОБРАЩЕНИЕ ПРИНЯТО
                  </h2>
                  <p className="text-gray-400 text-sm mb-6">
                    Ваш тикет зарегистрирован. Ответ придёт в течение 24 часов.
                    Номер обращения: <span className="text-purple-400 font-mono">#TK-{Math.floor(Math.random() * 9000) + 1000}</span>
                  </p>
                  <button
                    onClick={() => { setSent(false); setForm({ nick: "", category: "", subject: "", message: "" }); }}
                    className="btn-purple px-8 py-3 rounded font-bold text-white"
                  >
                    Новое обращение
                  </button>
                </div>
              )}
            </div>

            {/* FAQ */}
            <div className="lg:col-span-2 space-y-4">
              <h2 className="text-white font-bold text-xl mb-4">Частые вопросы</h2>
              {faqs.map((faq, i) => (
                <div key={i} className="card-purple rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between px-5 py-4 text-left"
                  >
                    <span className="text-white text-sm font-medium pr-4">{faq.q}</span>
                    <Icon
                      name={openFaq === i ? "ChevronUp" : "ChevronDown"}
                      size={16}
                      className="text-purple-400 shrink-0"
                    />
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-4 text-gray-400 text-sm leading-relaxed border-t border-purple-900/30 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}

              <div className="card-purple rounded-xl p-5 mt-6">
                <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                  <Icon name="MessageCircle" size={16} className="text-purple-400" />
                  Быстрая связь
                </h3>
                <p className="text-gray-500 text-sm mb-4">
                  Для срочных вопросов — наш Telegram-чат поддержки.
                </p>
                <a
                  href="#"
                  className="flex items-center justify-center gap-2 btn-purple px-4 py-2 rounded font-semibold text-white text-sm"
                >
                  <Icon name="Send" size={14} />
                  Telegram Support
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Support;
