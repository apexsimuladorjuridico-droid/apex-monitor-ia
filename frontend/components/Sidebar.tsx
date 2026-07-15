import Image from "next/image";
import Link from "next/link";
import {
  Bell,
  Bot,
  ChartNoAxesCombined,
  FileText,
  Gauge,
  Settings,
  Users,
} from "lucide-react";

const menuItems = [
  {
    label: "Visão geral",
    href: "/dashboard",
    icon: Gauge,
    active: true,
  },
  {
    label: "Processos",
    href: "/dashboard/processos",
    icon: FileText,
    active: false,
  },
  {
    label: "Alertas",
    href: "/dashboard/alertas",
    icon: Bell,
    active: false,
  },
  {
    label: "IA Jurídica",
    href: "/dashboard/ia",
    icon: Bot,
    active: false,
  },
  {
    label: "Clientes",
    href: "/dashboard/clientes",
    icon: Users,
    active: false,
  },
  {
    label: "Relatórios",
    href: "/dashboard/relatorios",
    icon: ChartNoAxesCombined,
    active: false,
  },
  {
    label: "Configurações",
    href: "/dashboard/configuracoes",
    icon: Settings,
    active: false,
  },
];

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 hidden h-screen w-72 border-r border-slate-800 bg-[#05091c] lg:flex lg:flex-col">
      <div className="flex h-24 items-center border-b border-slate-800 px-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl border border-cyan-500/30 bg-slate-950">
            <Image
              src="/logo-apex.jpg"
              alt="Logo APEX Monitor IA"
              width={48}
              height={48}
              className="h-full w-full object-cover"
              priority
            />
          </div>

          <div>
            <p className="text-xl font-extrabold tracking-tight text-white">
              APEX <span className="text-cyan-400">Monitor IA</span>
            </p>

            <p className="mt-1 text-xs text-slate-500">
              Inteligência jurídica
            </p>
          </div>
        </Link>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-6">
        <p className="mb-3 px-4 text-xs font-bold uppercase tracking-[0.25em] text-slate-600">
          Navegação
        </p>

        <nav className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`group flex items-center gap-4 rounded-xl px-4 py-3 transition ${
                  item.active
                    ? "bg-cyan-500/10 text-cyan-400"
                    : "text-slate-400 hover:bg-slate-900 hover:text-white"
                }`}
              >
                <span
                  className={`flex h-9 w-9 items-center justify-center rounded-lg transition ${
                    item.active
                      ? "bg-cyan-500 text-slate-950"
                      : "bg-slate-900 text-slate-400 group-hover:bg-cyan-500/10 group-hover:text-cyan-400"
                  }`}
                >
                  <Icon size={18} strokeWidth={2} />
                </span>

                <span className="font-medium">{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="px-4 pb-5">
        <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-5 shadow-xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-white">
                Plano Profissional
              </p>

              <p className="mt-1 text-xs text-slate-500">Renovação mensal</p>
            </div>

            <span className="rounded-lg bg-cyan-500/10 px-3 py-1 text-xs font-bold text-cyan-400">
              Ativo
            </span>
          </div>

          <div className="mt-5">
            <div className="mb-2 flex items-center justify-between text-xs">
              <span className="text-slate-500">Limite utilizado</span>

              <span className="font-semibold text-cyan-400">78%</span>
            </div>

            <div className="h-2 overflow-hidden rounded-full bg-slate-800">
              <div className="h-full w-[78%] rounded-full bg-cyan-500" />
            </div>
          </div>

          <button
            type="button"
            className="mt-5 w-full rounded-xl border border-slate-700 px-4 py-3 text-sm font-semibold text-slate-300 transition hover:border-cyan-500 hover:text-cyan-400"
          >
            Gerenciar plano
          </button>
        </div>
      </div>
    </aside>
  );
}