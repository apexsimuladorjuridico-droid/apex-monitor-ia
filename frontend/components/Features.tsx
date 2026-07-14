const features = [
  {
    number: "01",
    title: "Monitoramento automatizado",
    description:
      "Acompanhe fontes públicas e integrações autorizadas sem precisar realizar consultas manuais repetitivas.",
  },
  {
    number: "02",
    title: "Alertas inteligentes",
    description:
      "Receba avisos sempre que uma informação relevante for encontrada nos monitoramentos configurados.",
  },
  {
    number: "03",
    title: "Análise com inteligência artificial",
    description:
      "Utilize IA para resumir, classificar e organizar as informações que exigem atenção do escritório.",
  },
  {
    number: "04",
    title: "Painel centralizado",
    description:
      "Visualize monitoramentos, alertas e prioridades em um único ambiente seguro e organizado.",
  },
];

export default function Features() {
  return (
    <section
      id="recursos"
      className="border-t border-slate-800 bg-[#05091c] px-6 py-20 text-white"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">
            Recursos da plataforma
          </p>

          <h2 className="mb-5 text-3xl font-extrabold leading-tight md:text-4xl">
            Mais agilidade para acompanhar informações jurídicas.
          </h2>

          <p className="text-lg leading-8 text-slate-300">
            O Apex Monitor IA reúne monitoramento, organização, inteligência
            artificial e alertas em uma única plataforma.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {features.map((feature) => (
            <article
              key={feature.number}
              className="rounded-2xl border border-slate-800 bg-slate-950/70 p-7 transition hover:-translate-y-1 hover:border-cyan-500/60"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/10 font-bold text-cyan-400">
                {feature.number}
              </div>

              <h3 className="mb-3 text-xl font-bold">
                {feature.title}
              </h3>

              <p className="leading-7 text-slate-400">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}