import { useState } from "react";
import Layout from "@/components/Layout";
import Icon from "@/components/ui/icon";

const packages = [
  {
    id: "starter",
    name: "Starter",
    price: 99,
    color: "from-gray-700 to-gray-800",
    badge: null,
    icon: "Package",
    perks: [
      "VIP-статус на 30 дней",
      "2 000 игровой валюты",
      "Кастомный тег в чате",
      "Личный автомобиль (1 шт.)",
      "Приоритет при входе",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    price: 299,
    color: "from-purple-900 to-purple-700",
    badge: "Популярный",
    icon: "Star",
    perks: [
      "VIP-статус на 90 дней",
      "8 000 игровой валюты",
      "Кастомный тег + цвет ника",
      "Личных автомобилей (3 шт.)",
      "Уникальный скин",
      "Приоритет при входе",
      "Доступ к VIP-зонам",
    ],
  },
  {
    id: "elite",
    name: "Elite",
    price: 599,
    color: "from-violet-900 to-purple-600",
    badge: "Лучшая ценность",
    icon: "Crown",
    perks: [
      "VIP-статус НАВСЕГДА",
      "25 000 игровой валюты",
      "Уникальный ник на сервере",
      "Личных автомобилей (10 шт.)",
      "Эксклюзивный скин",
      "Все VIP-привилегии",
      "Личный дом",
      "Поддержка 24/7",
    ],
  },
];

const Donate = () => {
  const [nick, setNick] = useState("");
  const [selected, setSelected] = useState<string | null>(null);
  const [step, setStep] = useState<"select" | "pay" | "done">("select");

  const selectedPkg = packages.find((p) => p.id === selected);

  const handleBuy = () => {
    if (!nick.trim()) return;
    setStep("pay");
  };

  return (
    <Layout>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="tag-badge mb-4 inline-block">Магазин</span>
            <h1
              className="text-5xl font-black text-white mb-4"
              style={{ fontFamily: "Oswald, sans-serif" }}
            >
              ДОНАТ <span className="text-purple-400">ПАКЕТЫ</span>
            </h1>
            <p className="text-gray-400 max-w-xl mx-auto">
              Выбери пакет и получи привилегии мгновенно. Все платежи безопасны и обрабатываются автоматически.
            </p>
          </div>

          {step === "select" && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {packages.map((pkg) => (
                  <div
                    key={pkg.id}
                    onClick={() => setSelected(pkg.id)}
                    className={`relative rounded-xl border-2 cursor-pointer transition-all duration-300 overflow-hidden ${
                      selected === pkg.id
                        ? "border-purple-400 scale-[1.02] shadow-lg shadow-purple-900/40"
                        : "border-purple-900/30 hover:border-purple-600/50"
                    }`}
                  >
                    {pkg.badge && (
                      <div className="absolute top-4 right-4 tag-badge">{pkg.badge}</div>
                    )}
                    <div className={`bg-gradient-to-br ${pkg.color} p-6`}>
                      <Icon name={pkg.icon} size={32} className="text-white mb-3" />
                      <h3
                        className="text-2xl font-black text-white"
                        style={{ fontFamily: "Oswald, sans-serif" }}
                      >
                        {pkg.name}
                      </h3>
                      <div className="text-4xl font-black text-white mt-2">
                        {pkg.price}₽
                      </div>
                    </div>
                    <div className="bg-[#0f0f1a] p-6">
                      <ul className="space-y-2">
                        {pkg.perks.map((perk, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                            <Icon name="Check" size={14} className="text-purple-400 mt-0.5 shrink-0" />
                            {perk}
                          </li>
                        ))}
                      </ul>
                      <button
                        className={`mt-6 w-full py-3 rounded font-bold uppercase tracking-wider transition-all ${
                          selected === pkg.id
                            ? "btn-purple text-white"
                            : "border border-purple-700/50 text-purple-400 hover:bg-purple-900/20"
                        }`}
                      >
                        {selected === pkg.id ? "Выбрано" : "Выбрать"}
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {selected && (
                <div className="max-w-md mx-auto card-purple rounded-xl p-6 animate-fade-in">
                  <h3 className="text-white font-bold text-lg mb-4">Введите ваш ник на сервере</h3>
                  <input
                    type="text"
                    value={nick}
                    onChange={(e) => setNick(e.target.value)}
                    placeholder="Например: Pavel_Ivanov"
                    className="w-full bg-black/40 border border-purple-900/50 rounded px-4 py-3 text-white placeholder-gray-600 focus:border-purple-500 focus:outline-none mb-4"
                  />
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <span>Пакет: <span className="text-white">{selectedPkg?.name}</span></span>
                    <span>Сумма: <span className="text-purple-400 font-bold">{selectedPkg?.price}₽</span></span>
                  </div>
                  <button
                    onClick={handleBuy}
                    disabled={!nick.trim()}
                    className="btn-purple w-full py-3 rounded font-bold uppercase tracking-wider text-white disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    <Icon name="CreditCard" size={18} />
                    Перейти к оплате
                  </button>
                </div>
              )}
            </>
          )}

          {step === "pay" && selectedPkg && (
            <div className="max-w-md mx-auto card-purple rounded-xl p-8 animate-fade-in text-center">
              <div className="w-16 h-16 rounded-full bg-purple-900/40 flex items-center justify-center mx-auto mb-6">
                <Icon name="CreditCard" size={28} className="text-purple-400" />
              </div>
              <h2 className="text-white text-2xl font-black mb-2" style={{ fontFamily: "Oswald, sans-serif" }}>
                ОПЛАТА
              </h2>
              <p className="text-gray-400 text-sm mb-6">
                Ник: <span className="text-white font-mono">{nick}</span><br />
                Пакет: <span className="text-purple-400">{selectedPkg.name}</span> — <span className="text-white">{selectedPkg.price}₽</span>
              </p>
              <div className="bg-black/30 rounded-lg p-4 mb-6 text-sm text-gray-400">
                <Icon name="Info" size={14} className="text-purple-400 inline mr-1" />
                Здесь будет форма оплаты (ЮKassa / QIWI / Карта).
                Привилегии начисляются автоматически после оплаты.
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setStep("select")}
                  className="flex-1 border border-purple-900/50 text-gray-400 py-3 rounded font-semibold hover:border-purple-600 transition-all"
                >
                  Назад
                </button>
                <button
                  onClick={() => setStep("done")}
                  className="flex-1 btn-purple py-3 rounded font-bold text-white"
                >
                  Оплатить
                </button>
              </div>
            </div>
          )}

          {step === "done" && (
            <div className="max-w-md mx-auto card-purple rounded-xl p-8 animate-fade-in text-center">
              <div className="w-16 h-16 rounded-full bg-green-900/40 flex items-center justify-center mx-auto mb-6">
                <Icon name="CheckCircle" size={32} className="text-green-400" />
              </div>
              <h2 className="text-white text-2xl font-black mb-2" style={{ fontFamily: "Oswald, sans-serif" }}>
                УСПЕШНО!
              </h2>
              <p className="text-gray-400 mb-6">
                Пакет <span className="text-purple-400">{selectedPkg?.name}</span> будет начислен игроку{" "}
                <span className="text-white font-mono">{nick}</span> в течение нескольких минут.
              </p>
              <button
                onClick={() => { setStep("select"); setSelected(null); setNick(""); }}
                className="btn-purple px-8 py-3 rounded font-bold text-white"
              >
                Купить ещё
              </button>
            </div>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 border-t border-purple-900/30">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-black text-white mb-8 text-center" style={{ fontFamily: "Oswald, sans-serif" }}>
            ЧАСТЫЕ ВОПРОСЫ
          </h2>
          <div className="space-y-4">
            {[
              { q: "Как быстро начисляется донат?", a: "Автоматически в течение 1–5 минут после подтверждения оплаты." },
              { q: "Что если привилегии не пришли?", a: "Обратитесь в техническую поддержку с чеком оплаты." },
              { q: "Можно ли передать донат другому игроку?", a: "Да, просто укажите ник другого игрока в форме." },
            ].map((item, i) => (
              <div key={i} className="card-purple rounded-lg p-5">
                <div className="text-white font-semibold mb-2 flex items-start gap-2">
                  <Icon name="HelpCircle" size={16} className="text-purple-400 mt-0.5 shrink-0" />
                  {item.q}
                </div>
                <p className="text-gray-400 text-sm pl-6">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Donate;
