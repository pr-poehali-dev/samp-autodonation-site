import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Icon from "@/components/ui/icon";

const stats = [
  { label: "Онлайн", value: "248", icon: "Users" },
  { label: "Зарегистрировано", value: "12 490", icon: "UserCheck" },
  { label: "Дней работы", value: "847", icon: "Calendar" },
  { label: "Фракций", value: "24", icon: "Shield" },
];

const features = [
  {
    icon: "Briefcase",
    title: "Экономика",
    desc: "Реалистичная экономика с бизнесом, работами и банками.",
  },
  {
    icon: "Shield",
    title: "Фракции",
    desc: "24 уникальных фракции: мафия, полиция, медики и многое другое.",
  },
  {
    icon: "Car",
    title: "Транспорт",
    desc: "Более 200 автомобилей с тюнингом и личными гаражами.",
  },
  {
    icon: "Home",
    title: "Недвижимость",
    desc: "Покупай дома, квартиры и бизнес прямо в игре.",
  },
  {
    icon: "Zap",
    title: "Ивенты",
    desc: "Регулярные игровые события с призами и донат-валютой.",
  },
  {
    icon: "Headphones",
    title: "Поддержка 24/7",
    desc: "Команда администраторов онлайн в любое время суток.",
  },
];

const Home = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="hero-bg relative overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-purple-900/20 blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-purple-800/15 blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 py-24 relative z-10">
          <div className="max-w-3xl">
            <span className="tag-badge mb-6 inline-block">SA:MP RolePlay</span>
            <h1
              className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight animate-fade-in"
              style={{ fontFamily: "Oswald, sans-serif" }}
            >
              DARK
              <span className="text-glow text-purple-400">RP</span>
              <br />
              <span className="text-3xl md:text-4xl text-gray-300 font-bold">Живи. Играй. Правь.</span>
            </h1>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed animate-fade-in delay-200">
              Лучший RolePlay сервер SA:MP с уникальной экономикой, 24 фракциями и активным сообществом.
              Начни свой путь от новичка до босса преступного мира.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in delay-300">
              <a
                href="samp://play.darkrp.ru:7777"
                className="btn-purple px-8 py-3 rounded font-bold text-white uppercase tracking-wider flex items-center gap-2"
              >
                <Icon name="Play" size={18} />
                Подключиться
              </a>
              <Link
                to="/donate"
                className="border border-purple-600/50 hover:border-purple-400 px-8 py-3 rounded font-bold text-white uppercase tracking-wider transition-all hover:bg-purple-900/20 flex items-center gap-2"
              >
                <Icon name="Star" size={18} />
                Донат
              </Link>
            </div>

            <div className="mt-6 flex items-center gap-2 text-sm text-gray-500">
              <Icon name="Server" size={14} className="text-purple-400" />
              <span className="font-mono text-purple-400">play.darkrp.ru:7777</span>
              <span>•</span>
              <span>SA:MP 0.3.7</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-y border-purple-900/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="card-purple rounded-lg p-6 text-center transition-all">
                <Icon name={stat.icon} size={28} className="text-purple-400 mx-auto mb-3" />
                <div className="text-3xl font-black text-white mb-1" style={{ fontFamily: "Oswald, sans-serif" }}>
                  {stat.value}
                </div>
                <div className="text-gray-500 text-sm uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="tag-badge mb-4 inline-block">Возможности</span>
            <h2
              className="text-4xl font-black text-white"
              style={{ fontFamily: "Oswald, sans-serif" }}
            >
              ПОЧЕМУ <span className="text-purple-400">DARKRP</span>?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div key={i} className="card-purple rounded-lg p-6 transition-all hover:-translate-y-1">
                <div className="w-12 h-12 rounded-lg bg-purple-900/40 flex items-center justify-center mb-4">
                  <Icon name={f.icon} size={22} className="text-purple-400" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="card-purple rounded-2xl p-10 text-center animate-border-glow">
            <h2
              className="text-4xl font-black text-white mb-4"
              style={{ fontFamily: "Oswald, sans-serif" }}
            >
              ПОЛУЧИ ПРЕИМУЩЕСТВО
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Донат-пакеты дают уникальные возможности: спецтранспорт, VIP-статус, кастомные скины и многое другое.
            </p>
            <Link
              to="/donate"
              className="btn-purple inline-flex items-center gap-2 px-10 py-4 rounded font-bold uppercase tracking-wider text-white animate-glow-pulse"
            >
              <Icon name="Zap" size={20} />
              Смотреть пакеты
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;