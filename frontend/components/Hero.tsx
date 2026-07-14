import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-[#030617] px-6 pb-20 pt-36 text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
        <div className="flex justify-center">
          <div className="flex w-full max-w-lg items-center justify-center overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/20 p-6 shadow-2xl">
            <Image
              src="/logo-apex.jpg"
              alt="Logo Apex Monitor IA"
              width={800}
              height={600}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        </div>

        <div>
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">
            Inteligência jurídica em tempo real
          </p>

          <h1 className="mb-6 max-w-2xl text-4xl font-extrabold leading-tight text-white md:text-5xl">
            Informações jurídicas organizadas para decisões mais rápidas.
          </h1>

          <p className="mb-9 max-w-xl text-lg leading-8 text-slate-300">
            Centralize monitoramentos, receba alertas e utilize inteligência
            artificial para resumir, organizar e priorizar informações
            relevantes para o escritório.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <button className="rounded-xl bg-cyan-500 px-8 py-4 font-bold text-slate-950 transition hover:bg-cyan-400">
              Solicitar demonstração
            </button>

            <a
              href="#recursos"
              className="rounded-xl border border-slate-700 px-8 py-4 text-center font-bold text-white transition hover:border-cyan-500 hover:text-cyan-400"
            >
              Saiba mais
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}