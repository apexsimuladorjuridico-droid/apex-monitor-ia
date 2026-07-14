 const steps = [
  {
    number: "01",
    title: "Configure os monitoramentos",
    description:
      "O escritório define tribunais, comarcas, tipos de processo, palavras-chave e outros critérios permitidos.",
  },
  {
    number: "02",
    title: "A plataforma analisa as informações",
    description:
      "O Apex Monitor IA organiza os resultados, elimina duplicidades e destaca o que merece atenção.",
  },
  {
    number: "03",
    title: "Receba alertas e prioridades",
    description:
      "O advogado acompanha tudo pelo painel e recebe notificações pelos canais configurados.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="border-t border-slate-800 bg-[#030617] px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">
            Como funciona
          </p>

          <h2 className="mb-5 text-3xl font-extrabold leading-tight md:text-4xl">
            Do monitoramento ao alerta em poucos passos.
          </h2>

          <p className="text-lg leading-8 text-slate-300">
            Um fluxo simples para reduzir tarefas manuais e ajudar o escritório
            a agir com mais rapidez.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {steps.map((step) => (
            <article
              key={step.number}
              className="relative rounded-2xl border border-slate-800 bg-slate-950/70 p-8"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500 font-bold text-slate-950">
                {step.number}
              </div>

              <h3 className="mb-4 text-xl font-bold">
                {step.title}
              </h3>

              <p className="leading-7 text-slate-400">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}