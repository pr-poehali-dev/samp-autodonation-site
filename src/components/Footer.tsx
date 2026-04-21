import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="border-t border-purple-900/30 bg-black/60 mt-20">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded bg-gradient-to-br from-purple-600 to-purple-900 flex items-center justify-center">
                <Icon name="Gamepad2" size={16} className="text-white" />
              </div>
              <span className="font-bold text-white text-lg tracking-wider" style={{ fontFamily: "Oswald, sans-serif" }}>
                DARK<span className="text-purple-400">RP</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Лучший сервер SA:MP с уникальным геймплеем и активным сообществом.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold uppercase tracking-wider text-sm mb-4">Навигация</h4>
            <div className="flex flex-col gap-2">
              {[
                { to: "/", label: "Главная" },
                { to: "/donate", label: "Донат" },
                { to: "/rules", label: "Правила" },
                { to: "/support", label: "Поддержка" },
              ].map((link) => (
                <Link key={link.to} to={link.to} className="text-gray-500 hover:text-purple-400 text-sm transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold uppercase tracking-wider text-sm mb-4">Сервер</h4>
            <div className="flex flex-col gap-2 text-sm text-gray-500">
              <span>IP: <span className="text-purple-400 font-mono">play.darkrp.ru:7777</span></span>
              <span>Версия: <span className="text-white">SA:MP 0.3.7</span></span>
              <span>Режим: <span className="text-white">RolePlay</span></span>
            </div>
            <div className="flex gap-3 mt-4">
              <a href="#" className="text-gray-500 hover:text-purple-400 transition-colors">
                <Icon name="MessageCircle" size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-purple-400 transition-colors">
                <Icon name="Users" size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-purple-400 transition-colors">
                <Icon name="Youtube" size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="section-divider my-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-600">
          <span>© 2024 DarkRP. Все права защищены.</span>
          <span>SA:MP сервер — неофициальный проект, не связанный с Rockstar Games</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
