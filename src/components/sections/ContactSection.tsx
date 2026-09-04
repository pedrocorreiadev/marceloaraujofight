import { Reveal } from "@/components/effects/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { mapSearchUrl, site, whatsappLink } from "@/content/site";

const contactItems = [
  {
    label: "Endereço",
    value: site.address,
    action: "Como chegar",
    href: mapSearchUrl,
  },
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
];

export function ContactSection() {
  return (
    <section id="contato" className="border-t border-white/10 bg-graphite">
      <div className="section-wrap">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <Reveal>
            <SectionHeading label="Contato" title="Agende sua aula experimental">
              <p>
                Fale com a equipe da Marcelo Araújo Fight para tirar dúvidas sobre modalidades,
                turmas e horários disponíveis.
              </p>
            </SectionHeading>
            <a href={whatsappLink()} className="focus-ring btn-primary mt-7 justify-center">
              Agendar aula experimental
            </a>
          </Reveal>

          <Reveal delay="short">
            <div className="grid gap-3 sm:grid-cols-2">
              {contactItems.map((item) => (
                <article key={item.label} className="rounded-lg border border-white/10 bg-ink p-5">
                  <p className="text-sm font-semibold uppercase text-tiger">{item.label}</p>
                  <p className="mt-2 min-h-12 text-base font-semibold leading-6 text-paper">{item.value}</p>
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    className="focus-ring mt-5 inline-flex min-h-11 rounded-md border border-white/15 px-4 py-3 text-sm font-black uppercase text-paper transition hover:border-tiger hover:text-tiger active:scale-95"
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

