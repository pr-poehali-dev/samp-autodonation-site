import { useState } from "react";
import Layout from "@/components/Layout";
import Icon from "@/components/ui/icon";

const CREATE_PAYMENT_URL = "https://functions.poehali.dev/9fbc03a1-71b4-4629-b947-df44a73112ed";

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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const selectedPkg = packages.find((p) => p.id === selected);

  const handlePay = async () => {
    if (!nick.trim() || !selectedPkg) return;
    setError("");
    setLoading(true);
    try {
      const res = await fetch(CREATE_PAYMENT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nick: nick.trim(),
          package_id: selectedPkg.id,
          package_name: selectedPkg.name,
          amount: selectedPkg.price,
        }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        setError(data.error || "Ошибка создания платежа, попробуйте позже");
      }
    } catch {
      setError("Ошибка соединения с сервером");
    } finally {
      setLoading(false);
    }
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
              Выбери пакет, введи ник и оплати картой или СБП. Привилегии начисляются автоматически.
            </p>
          </div>

          {/* Пакеты */}
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
                  <div className="text-4xl font-black text-white mt-2">{pkg.price}₽</div>
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
                    {selected === pkg.id ? "✓ Выбрано" : "Выбрать"}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Форма оплаты */}
          {selected && (
            <div className="max-w-md mx-auto card-purple rounded-xl p-6 animate-fade-in">
              <h3 className="text-white font-bold text-lg mb-1">Оформление заказа</h3>
              <p className="text-gray-500 text-sm mb-5">
                Пакет: <span className="text-purple-400">{selectedPkg?.name}</span> —{" "}
                <span className="text-white font-bold">{selectedPkg?.price}₽</span>
              </p>

              <label className="block text-gray-400 text-sm mb-2">Ваш ник на сервере *</label>
              <input
                type="text"
                value={nick}
                onChange={(e) => setNick(e.target.value)}
                placeholder="Например: Pavel_Ivanov"
                className="w-full bg-black/40 border border-purple-900/50 rounded px-4 py-3 text-white placeholder-gray-600 focus:border-purple-500 focus:outline-none mb-4"
              />

              {error && (
                <div className="flex items-center gap-2 bg-red-900/20 border border-red-500/30 rounded px-4 py-3 mb-4 text-red-400 text-sm">
                  <Icon name="AlertCircle" size={14} />
                  {error}
                </div>
              )}

              <button
                onClick={handlePay}
                disabled={!nick.trim() || loading}
                className="btn-purple w-full py-3 rounded font-bold uppercase tracking-wider text-white disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <Icon name="Loader" size={18} className="animate-spin" />
                    Создаём платёж...
                  </>
                ) : (
                  <>
                    <Icon name="CreditCard" size={18} />
                    Оплатить {selectedPkg?.price}₽ через Enot.io
                  </>
                )}
              </button>

              <div className="flex items-center gap-2 mt-4 text-xs text-gray-600">
                <Icon name="Lock" size={12} />
                Безопасная оплата · Карты, СБП, электронные кошельки
              </div>
            </div>
          )}

          {!selected && (
            <div className="text-center text-gray-600 text-sm mt-4">
              👆 Выберите пакет выше чтобы перейти к оплате
            </div>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 border-t border-purple-900/30">
        <div className="max-w-4xl mx-auto px-4">
          <h2
            className="text-2xl font-black text-white mb-8 text-center"
            style={{ fontFamily: "Oswald, sans-serif" }}
          >
            ЧАСТЫЕ ВОПРОСЫ
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "Как быстро начисляется донат?",
                a: "Автоматически в течение 1–5 минут после подтверждения оплаты.",
              },
              {
                q: "Какие способы оплаты принимаются?",
                a: "Банковские карты (Visa, MasterCard, МИР), СБП, ЮMoney, QIWI и другие через Enot.io.",
              },
              {
                q: "Что если привилегии не пришли?",
                a: "Обратитесь в техническую поддержку с чеком оплаты и ником.",
              },
              {
                q: "Можно ли купить донат другому игроку?",
                a: "Да, просто укажите ник другого игрока в форме.",
              },
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
