import Layout from "@/components/Layout";
import Icon from "@/components/ui/icon";

const sections = [
  {
    title: "Общие правила",
    icon: "BookOpen",
    rules: [
      "Уважайте всех участников сервера.",
      "Запрещён мат и оскорбления в любом чате.",
      "Читерство, баги и эксплойты — немедленный бан.",
      "Реклама других серверов запрещена.",
      "Одному игроку разрешено не более 2 аккаунтов.",
    ],
  },
  {
    title: "RolePlay правила",
    icon: "Theater",
    rules: [
      "Всегда оставайтесь в образе (IC — In Character).",
      "Запрещён DM (убийство без ролевой причины).",
      "Запрещён RK (убийство после смерти без RP-причины).",
      "Запрещён MK (использование OOC-информации в IC).",
      "CarJacking только с RP-обоснованием.",
      "CK (смерть персонажа) только с согласия игрока или по решению администрации.",
    ],
  },
  {
    title: "Чат и коммуникация",
    icon: "MessageSquare",
    rules: [
      "OOC-чат ((скобки)) — только для внеигрового общения.",
      "Запрещён CAPS LOCK в глобальном чате.",
      "Флуд и спам в чате — предупреждение и мут.",
      "Доносы принимаются только с скриншотами / видео.",
    ],
  },
  {
    title: "Транспорт",
    icon: "Car",
    rules: [
      "Запрещено использование авто как оружие (VDM).",
      "Угон транспорта только через RP-действия.",
      "Парковка в запрещённых зонах ведёт к эвакуации.",
      "Скоростной режим в городе — до 80 км/ч.",
    ],
  },
  {
    title: "Фракции и организации",
    icon: "Shield",
    rules: [
      "Членство в нескольких фракциях запрещено.",
      "Предательство фракции оформляется через RP.",
      "Войны фракций проводятся в отведённых зонах.",
      "Лидер фракции отвечает за действия своих участников.",
    ],
  },
  {
    title: "Администрация",
    icon: "ShieldCheck",
    rules: [
      "Решение администрации обязательно к исполнению.",
      "Споры с администрацией разрешаются через тикет-систему.",
      "Обман администратора — бан без предупреждения.",
      "Администраторы не подбирают вещи и не дают игровые преимущества.",
    ],
  },
];

const Rules = () => {
  return (
    <Layout>
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="tag-badge mb-4 inline-block">Документ</span>
            <h1
              className="text-5xl font-black text-white mb-4"
              style={{ fontFamily: "Oswald, sans-serif" }}
            >
              ПРАВИЛА <span className="text-purple-400">СЕРВЕРА</span>
            </h1>
            <p className="text-gray-400 max-w-xl mx-auto">
              Незнание правил не освобождает от ответственности. Прочитайте внимательно перед игрой.
            </p>
          </div>

          <div className="card-purple rounded-xl p-5 mb-10 flex items-start gap-3">
            <Icon name="AlertTriangle" size={20} className="text-yellow-400 shrink-0 mt-0.5" />
            <p className="text-gray-300 text-sm leading-relaxed">
              Нарушение правил влечёт к предупреждениям, мутам, кикам или перманентному бану.
              При 3 предупреждениях выдаётся временный бан на 7 дней. Апелляции подаются в{" "}
              <span className="text-purple-400">тикет-систему</span>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sections.map((section, i) => (
              <div key={i} className="card-purple rounded-xl p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-lg bg-purple-900/50 flex items-center justify-center">
                    <Icon name={section.icon} size={18} className="text-purple-400" />
                  </div>
                  <h2 className="text-white font-bold text-lg">{section.title}</h2>
                </div>
                <ul className="space-y-3">
                  {section.rules.map((rule, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-400">
                      <span className="text-purple-500 font-bold shrink-0">{j + 1}.</span>
                      {rule}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-gray-600 text-sm">
              Последнее обновление: 01.04.2024 · Версия 3.2
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Rules;
