import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-slate-800/70 bg-[#030617]/95 backdrop-blur-md">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-8">
        <Link href="/" className="flex items-center gap-4">
          <Image
            src="/logo-apex.jpg"
            alt="APEX Monitor IA"
            width={70}
            height={70}
            className="h-16 w-16 rounded-xl object-cover"
            priority
          />

          <div>
            <p className="text-3xl font-bold tracking-tight text-white">
              APEX <span className="text-cyan-400">Monitor IA</span>
            </p>

            <p className="text-sm text-slate-400">
              Inteligência jurídica em tempo real
            </p>
          </div>
        </Link>

        <nav className="flex items-center gap-8">
          <a
            href="#recursos"
            className="font-medium text-slate-300 transition hover:text-cyan-400"
          >
            Recursos
          </a>

          <a
            href="#como-funciona"
            className="font-medium text-slate-300 transition hover:text-cyan-400"
          >
            Como funciona
          </a>

          <a
            href="#planos"
            className="font-medium text-slate-300 transition hover:text-cyan-400"
          >
            Planos
          </a>

          <Link
            href="/login"
            className="rounded-xl border border-cyan-500 px-7 py-3 font-semibold text-cyan-400 transition hover:bg-cyan-500 hover:text-slate-950"
          >
            Entrar
          </Link>
        </nav>
      </div>
    </header>
  );
}