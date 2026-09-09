import { whatsappLink } from "@/content/site";

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink()}
      className="focus-ring whatsapp-pulse group fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-tiger text-ink shadow-2xl shadow-black/40 transition duration-300 hover:bg-ember active:scale-95 sm:bottom-[25px] sm:right-[25px]"
      aria-label="Agendar aula pelo WhatsApp"
      target="_blank"
      rel="noreferrer"
    >
      <WhatsAppIcon />
      <span className="pointer-events-none absolute right-full mr-3 hidden rounded-md bg-paper px-3 py-2 text-xs font-black uppercase text-ink opacity-0 shadow-lg transition group-hover:opacity-100 sm:block">
        Agendar aula
      </span>
    </a>
  );
}

function WhatsAppIcon() {
  return (
    <svg className="h-7 w-7" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12.05 0C5.49 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.9 11.9 0 0 0 5.69 1.45h.01c6.55 0 11.89-5.34 11.89-11.9A11.82 11.82 0 0 0 12.05 0Zm0 21.79h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.27c0-5.45 4.44-9.88 9.89-9.88a9.8 9.8 0 0 1 6.99 2.9 9.82 9.82 0 0 1 2.89 6.99c0 5.45-4.44 9.89-9.88 9.89Zm5.42-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.39-1.47a8.96 8.96 0 0 1-1.65-2.06c-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.91-2.21-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.06 2.88 1.21 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.69.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35Z"
      />
    </svg>
  );
}
