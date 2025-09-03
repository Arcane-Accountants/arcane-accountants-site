export default function ArcaneMap() {
  // Arcane Accountants — Level 25, 100 Mount Street, North Sydney NSW 2060
  // Clean, rounded, dark overlay container with a subtle glow.
  const address = "Level 25, 100 Mount Street, North Sydney NSW 2060";
  const gmapsPlaceUrl =
    "https://www.google.com/maps/place/Level+25,+100+Mount+St,+North+Sydney+NSW+2060";

  // Prebuilt Google Maps Embed (no API key needed)
  // Tip: Replace the pb parameter with your own from Google Maps > Share > Embed a map
  const iframeSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13249.124758780356!2d151.1989609!3d-33.8399418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae34027f4c6f%3A0x4f1fbeecf8b2a4b8!2s100%20Mount%20St%2C%20North%20Sydney%20NSW%202060!5e0!3m2!1sen!2sau!4v1723430400";

  return (
    <section className="relative w-full px-4 sm:px-6 lg:px-8 my-16" aria-label="Arcane Accountants location map">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Find us</h2>
            <p className="text-sm/6 text-white/60">{address}</p>
          </div>
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={gmapsPlaceUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="rounded-xl px-4 py-2 text-sm border border-white/15 hover:border-white/30 transition shadow-sm hover:shadow-md"
            >
              Open in Google Maps
            </a>
            <a
              href={`${gmapsPlaceUrl}/@-33.8399418,151.2066,16z/data=`}
              target="_blank"
              rel="noreferrer noopener"
              className="rounded-xl px-4 py-2 text-sm bg-white/10 hover:bg-white/15 border border-white/10 transition"
            >
              Get Directions
            </a>
          </div>
        </div>

        {/* Map Card */}
        <div className="relative h-[380px] sm:h-[420px] rounded-2xl overflow-hidden border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.45)]">
          {/* Subtle grid / vignette overlay for the Arcane vibe */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06),transparent_60%)]" />
          <div className="pointer-events-none absolute inset-0 mix-blend-overlay opacity-50" style={{ backgroundImage: `linear-gradient(transparent 0%, rgba(255,255,255,0.05) 200%)` }} />

          {/* Map */}
          <iframe
            title="Arcane Accountants — Map"
            src={iframeSrc}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 h-full w-full"
          />

          {/* Glass info chip (mobile)
              Shows on small screens to give quick context & CTA */}
          <div className="sm:hidden absolute left-3 right-3 bottom-3 flex items-center justify-between gap-2 rounded-xl backdrop-blur-md bg-black/40 border border-white/10 px-3 py-2">
            <div className="text-xs text-white/80">
              <div className="font-medium text-white">Arcane Accountants</div>
              <div className="truncate text-white/60">{address}</div>
            </div>
            <a
              href={gmapsPlaceUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="shrink-0 rounded-lg px-3 py-1 text-xs bg-white/10 hover:bg-white/15 border border-white/10"
            >
              Maps
            </a>
          </div>
        </div>

        {/* Under-card actions (mobile hidden above) */}
        <div className="sm:hidden mt-4 flex items-center gap-3">
          <a
            href={gmapsPlaceUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="rounded-xl px-4 py-2 text-sm border border-white/15 hover:border-white/30 transition"
          >
            Open in Google Maps
          </a>
          <a
            href={`${gmapsPlaceUrl}/@-33.8399418,151.2066,16z/data=`}
            target="_blank"
            rel="noreferrer noopener"
            className="rounded-xl px-4 py-2 text-sm bg-white/10 hover:bg-white/15 border border-white/10 transition"
          >
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
}
