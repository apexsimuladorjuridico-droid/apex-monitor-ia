import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#030617] px-6 py-12 text-white">
      <div className="w-full max-w-md rounded-3xl border border-slate-800 bg-slate-950/80 p-8 shadow-2xl">
        <div className="mb-8 text-center">
          <Image
            src="/logo-apex.jpg"
            alt="Logo APEX Monitor IA"
            width={100}
            height={100}
            className="mx-auto mb-5 h-24 w-24 rounded-2xl object-cover"
            priority
          />

          <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">
            Acesso ao sistema
          </p>

          <h1 className="text-3xl font-extrabold">
            Entrar no APEX Monitor IA
          </h1>

          <p className="mt-3 text-sm leading-6 text-slate-400">
            Acesse sua conta para visualizar monitoramentos, alertas e análises.
          </p>
        </div>

        <form className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-slate-300"
            >
              E-mail
            </label>

            <input
              id="email"
              name="email"
              type="email"
              placeholder="seuemail@escritorio.com.br"
              className="w-full rounded-xl border border-slate-700 bg-[#05091c] px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-500"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-slate-300"
            >
              Senha
            </label>

            <input
              id="password"
              name="password"
              type="password"
              placeholder="Digite sua senha"
              className="w-full rounded-xl border border-slate-700 bg-[#05091c] px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-500"
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-slate-400">
              <input type="checkbox" className="h-4 w-4" />
              Lembrar acesso
            </label>

            <button
              type="button"
              className="font-medium text-cyan-400 hover:text-cyan-300"
            >
              Esqueci minha senha
            </button>
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-cyan-500 px-6 py-3 font-bold text-slate-950 transition hover:bg-cyan-400"
          >
            Entrar
          </button>
        </form>

        <div className="mt-7 border-t border-slate-800 pt-6 text-center text-sm text-slate-400">
          Ainda não possui acesso?{" "}
          <button className="font-semibold text-cyan-400 hover:text-cyan-300">
            Solicitar demonstração
          </button>
        </div>

        <div className="mt-5 text-center">
          <Link
            href="/"
            className="text-sm font-medium text-slate-400 transition hover:text-white"
          >
            ← Voltar para a página inicial
          </Link>
        </div>
      </div>
    </main>
  );
}