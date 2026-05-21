export default function Home() {
  return (
    <main className="flex flex-1 items-center justify-center px-6 py-16 sm:px-10 lg:px-16">
      <section
        id="fundacao"
        className="animate-fade-in-up w-full max-w-5xl rounded-lg border border-line bg-surface p-8 shadow-card sm:p-12 lg:p-16"
      >
        <div className="max-w-3xl space-y-6">
          <span className="inline-flex rounded-full border border-brand/20 bg-brand-soft px-4 py-2 text-sm font-semibold tracking-[0.12em] text-brand-strong uppercase">
            Design system em fundacao
          </span>
          <h1 className="max-w-2xl text-4xl leading-tight font-bold text-ink sm:text-5xl">
            A base institucional da APAC agora comeca por um tema unico e
            consistente.
          </h1>
          <p className="max-w-2xl text-lg text-ink/80 sm:text-xl">
            Esta pagina temporaria remove os residuos do template padrao e
            prepara o terreno para as proximas etapas do design system,
            priorizando mobile-first, acessibilidade e uma presenca visual mais
            confiavel.
          </p>
          <p
            id="proximos-passos"
            className="max-w-2xl text-sm font-medium tracking-[0.08em] text-ink/60 uppercase"
          >
            Proximas entregas: primitives, componentes base, vitrine interna e
            reescrita institucional da home.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-brand px-6 py-3 text-base font-semibold text-white transition hover:bg-brand-strong"
              href="#fundacao"
            >
              Ver base atual
            </a>
            <a
              className="inline-flex min-h-12 items-center justify-center rounded-md border border-line bg-white px-6 py-3 text-base font-semibold text-ink transition hover:border-brand/40 hover:bg-brand-soft/40"
              href="#proximos-passos"
            >
              Ver proximas entregas
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
