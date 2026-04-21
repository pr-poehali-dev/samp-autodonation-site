import { useState } from "react";
import Layout from "@/components/Layout";
import Icon from "@/components/ui/icon";

const mockProfile = {
  nick: "Pavel_Ivanov",
  level: 42,
  rank: "VIP Elite",
  cash: "128 400",
  bank: "2 340 000",
  fraction: "Полиция",
  fractionRank: "Лейтенант",
  hours: 847,
  kills: 234,
  deaths: 89,
  warns: 0,
  joinDate: "14.03.2022",
  lastSeen: "21.04.2024",
  donateActive: true,
  donateExpire: "Навсегда",
};

const Profile = () => {
  const [nick, setNick] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSearch = () => {
    if (!nick.trim()) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setLoaded(true);
    }, 800);
  };

  return (
    <Layout>
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="tag-badge mb-4 inline-block">Игрок</span>
            <h1
              className="text-5xl font-black text-white mb-4"
              style={{ fontFamily: "Oswald, sans-serif" }}
            >
              ПРОФИЛЬ <span className="text-purple-400">ИГРОКА</span>
            </h1>
            <p className="text-gray-400">Введите ник игрока чтобы посмотреть статистику</p>
          </div>

          <div className="flex gap-3 max-w-lg mx-auto mb-12">
            <input
              type="text"
              value={nick}
              onChange={(e) => setNick(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              placeholder="Введите ник (например: Pavel_Ivanov)"
              className="flex-1 bg-black/40 border border-purple-900/50 rounded px-4 py-3 text-white placeholder-gray-600 focus:border-purple-500 focus:outline-none"
            />
            <button
              onClick={handleSearch}
              disabled={loading}
              className="btn-purple px-6 py-3 rounded font-bold text-white flex items-center gap-2 disabled:opacity-50"
            >
              {loading ? (
                <Icon name="Loader" size={18} className="animate-spin" />
              ) : (
                <Icon name="Search" size={18} />
              )}
              Найти
            </button>
          </div>

          {loaded && (
            <div className="animate-fade-in">
              {/* Header */}
              <div className="card-purple rounded-2xl p-6 mb-6">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-700 to-purple-900 flex items-center justify-center text-3xl font-black text-white shrink-0" style={{ fontFamily: "Oswald, sans-serif" }}>
                    {mockProfile.nick[0]}
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <div className="flex flex-wrap items-center gap-3 justify-center md:justify-start mb-2">
                      <h2 className="text-2xl font-black text-white" style={{ fontFamily: "Oswald, sans-serif" }}>
                        {mockProfile.nick}
                      </h2>
                      {mockProfile.donateActive && (
                        <span className="tag-badge flex items-center gap-1">
                          <Icon name="Crown" size={10} />
                          {mockProfile.rank}
                        </span>
                      )}
                    </div>
                    <div className="text-gray-400 text-sm mb-4">
                      {mockProfile.fraction} · {mockProfile.fractionRank}
                    </div>
                    <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                      <div className="text-center">
                        <div className="text-2xl font-black text-purple-400" style={{ fontFamily: "Oswald, sans-serif" }}>
                          {mockProfile.level}
                        </div>
                        <div className="text-gray-500 text-xs">Уровень</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-black text-white" style={{ fontFamily: "Oswald, sans-serif" }}>
                          {mockProfile.hours}
                        </div>
                        <div className="text-gray-500 text-xs">Часов</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-black text-green-400" style={{ fontFamily: "Oswald, sans-serif" }}>
                          {mockProfile.kills}
                        </div>
                        <div className="text-gray-500 text-xs">Убийств</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-black text-red-400" style={{ fontFamily: "Oswald, sans-serif" }}>
                          {mockProfile.deaths}
                        </div>
                        <div className="text-gray-500 text-xs">Смертей</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="card-purple rounded-xl p-6">
                  <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                    <Icon name="Wallet" size={16} className="text-purple-400" />
                    Финансы
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Наличные</span>
                      <span className="text-white font-mono">${mockProfile.cash}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Банк</span>
                      <span className="text-white font-mono">${mockProfile.bank}</span>
                    </div>
                  </div>
                </div>

                <div className="card-purple rounded-xl p-6">
                  <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                    <Icon name="Crown" size={16} className="text-purple-400" />
                    Привилегии
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Статус</span>
                      <span className="text-purple-400">{mockProfile.rank}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Истекает</span>
                      <span className="text-white">{mockProfile.donateExpire}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Предупреждения</span>
                      <span className={mockProfile.warns > 0 ? "text-red-400" : "text-green-400"}>
                        {mockProfile.warns} / 3
                      </span>
                    </div>
                  </div>
                </div>

                <div className="card-purple rounded-xl p-6">
                  <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                    <Icon name="Calendar" size={16} className="text-purple-400" />
                    Активность
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">На сервере с</span>
                      <span className="text-white">{mockProfile.joinDate}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Последний вход</span>
                      <span className="text-white">{mockProfile.lastSeen}</span>
                    </div>
                  </div>
                </div>

                <div className="card-purple rounded-xl p-6">
                  <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                    <Icon name="TrendingUp" size={16} className="text-purple-400" />
                    K/D Ratio
                  </h3>
                  <div className="text-center">
                    <div className="text-4xl font-black text-white" style={{ fontFamily: "Oswald, sans-serif" }}>
                      {(mockProfile.kills / mockProfile.deaths).toFixed(2)}
                    </div>
                    <div className="text-gray-500 text-sm mt-1">
                      {mockProfile.kills} убийств / {mockProfile.deaths} смертей
                    </div>
                    <div className="mt-3 h-2 bg-black/40 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-purple-700 to-purple-400 rounded-full"
                        style={{ width: `${Math.min(100, (mockProfile.kills / (mockProfile.kills + mockProfile.deaths)) * 100)}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Profile;
