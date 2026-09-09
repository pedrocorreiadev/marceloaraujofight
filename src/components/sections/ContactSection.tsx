import { Reveal } from "@/components/effects/Reveal";
import { mapSearchUrl, site, whatsappLink } from "@/content/site";

const contactItems = [
  {
    label: "WhatsApp",
    value: site.phones.whatsappDisplay,
    action: "Enviar mensagem",
    href: whatsappLink(),
  },
  {
    label: "Telefone",
    value: site.phones.additionalDisplay,
    action: "Ligar",
    href: `tel:+${site.phones.additionalE164}`,
  },
  {
    label: "Instagram",
    value: "@marceloaraujofight",
    action: "Abrir perfil",
    href: site.instagram,
  },
  {
    label: "Endereço",
    value: site.address,
    action: "Como chegar",
    href: mapSearchUrl,
  },
];

export function ContactSection() {
  return (
    <section id="contato" className="border-t border-white/10 bg-ink">
      <div className="section-wrap">
        <div className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
          <Reveal>
            <p className="section-label">Contato</p>
            <h2 className="mt-2 max-w-2xl font-display text-4xl font-black uppercase leading-tight text-paper sm:text-6xl">
              Pronto para começar?
            </h2>
            <p className="mt-5 max-w-xl text-xl font-semibold leading-8 text-smoke">
              A primeira aula pode ser o começo da sua evolução.
            </p>
            <a href={whatsappLink()} className="focus-ring btn-primary mt-7">
              Agendar aula experimental
            </a>
          </Reveal>

          <Reveal delay="short">
            <div className="grid gap-3 sm:grid-cols-2">
              {contactItems.map((item) => (
                <article key={item.label} className="rounded-lg border border-white/10 bg-coal p-5">
                  <p className="text-sm font-semibold uppercase text-tiger">{item.label}</p>
                  <p className="mt-2 min-h-12 break-words text-base font-semibold leading-6 text-paper">
                    {item.value}
                  </p>
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    className="focus-ring mt-5 inline-flex min-h-11 rounded-md border border-white/15 px-4 py-3 text-sm font-black uppercase text-paper transition duration-300 hover:border-tiger hover:text-tiger active:scale-95"
                  >
                    {item.action}
                  </a>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
