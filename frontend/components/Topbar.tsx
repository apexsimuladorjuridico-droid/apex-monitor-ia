"use client";

import {
  Bell,
  ChevronDown,
  Search,
  Settings,
} from "lucide-react";

export default function Topbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-800 bg-[#030617]/95 backdrop-blur-xl">
      <div className="flex min-h-24 items-center justify-between gap-5 px-6 py-4 lg:px-10">
        {/* Título da página */}
        <div className="min-w-0">
          <p className="text-xs font-medium text-slate-500">
            Área do escritório
          </p>

          <h1 className="mt-1 text-xl font-bold text-white sm:text-2xl">
            Visão geral
          </h1>
        </div>

        {/* Área direita */}
        <div className="flex items-center gap-3">
          {/* Pesquisa */}
          <div className="relative hidden w-72 xl:block">
            <Search
              size={18}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
            />

            <input
              type="search"
              placeholder="Pesquisar processo ou cliente..."
              aria-label="Pesquisar processo ou cliente"
              className="h-12 w-full rounded-xl border border-slate-800 bg-slate-950/80 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/10"
            />
          </div>

          {/* Pesquisa compacta */}
          <button
            type="button"
            aria-label="Abrir pesquisa"
            className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-800 bg-slate-950/80 text-slate-400 transition hover:border-cyan-500 hover:text-cyan-400 xl:hidden"
          >
            <Search size={19} />
          </button>

          {/* Notificações */}
          <button
            type="button"
            aria-label="Abrir notificações"
            className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-slate-800 bg-slate-950/80 text-slate-400 transition hover:border-cyan-500 hover:text-cyan-400"
          >
            <Bell size={19} />

            <span className="absolute right-3 top-3 h-2 w-2 rounded-full bg-cyan-400 ring-2 ring-[#030617]" />
          </button>

          {/* Configurações */}
          <button
            type="button"
            aria-label="Abrir configurações"
            className="hidden h-12 w-12 items-center justify-center rounded-xl border border-slate-800 bg-slate-950/80 text-slate-400 transition hover:border-cyan-500 hover:text-cyan-400 sm:flex"
          >
            <Settings size={19} />
          </button>

          {/* Perfil */}
          <button
            type="button"
            className="flex h-12 items-center gap-3 rounded-xl border border-slate-800 bg-slate-950/80 px-2 pr-3 text-left transition hover:border-cyan-500/70"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-cyan-500 text-sm font-extrabold text-slate-950">
              DM
            </span>

            <span className="hidden min-w-0 sm:block">
              <span className="block truncate text-sm font-semibold text-white">
                Daniel Marques
              </span>

              <span className="block text-xs text-slate-500">
                Administrador
              </span>
            </span>

            <ChevronDown
              size={16}
              className="hidden text-slate-500 sm:block"
            />
          </button>
        </div>
      </div>
    </header>
  );
}