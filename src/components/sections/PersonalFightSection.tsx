import { Reveal } from "@/components/effects/Reveal";
import { whatsappLink } from "@/content/site";

export function PersonalFightSection() {
  return (
    <section className="personal-band">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-10 sm:px-6 md:grid-cols-[1fr_auto] md:items-center lg:px-8">
        <Reveal className="min-w-0">
          <p className="font-display text-sm font-black uppercase text-ink/70">Personal Fight</p>
          <h2 className="mt-2 max-w-full break-words font-display text-3xl font-black uppercase leading-none text-ink sm:text-5xl">
            Treinos individualizados e em grupos
          </h2>
        </Reveal>
        <Reveal className="min-w-0" delay="short">
          <a
            href={whatsappLink(
              "Olá! Conheci a Marcelo Araújo Fight pelo site e gostaria de consultar Personal Fight.",
            )}
            className="focus-ring inline-flex min-h-11 max-w-full rounded-md bg-ink px-5 py-3 text-center text-sm font-black uppercase text-paper transition hover:bg-graphite active:scale-95"
          >
            Consultar Personal Fight
          </a>
        </Reveal>
      </div>
    </section>
  );
}
