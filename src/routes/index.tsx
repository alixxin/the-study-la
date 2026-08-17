import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: Studio });

const V1_URL = "https://rabbi-la-website-preview-qbrf.vercel.app";

function Studio() {
  return (
    <div className="min-h-dvh bg-limestone text-ink">
      <header className="wrap flex h-[4.25rem] items-end justify-between pb-4 pt-8">
        <div className="flex flex-col leading-none">
          <span className="font-display text-[1.05rem] font-medium tracking-[-0.03em]">Quiet work</span>
          <span className="mt-1 text-[0.62rem] font-medium uppercase tracking-[0.18em] text-mute">
            Los Angeles · For a rav
          </span>
        </div>
        <p className="hidden max-w-[240px] text-end text-[0.78rem] leading-relaxed text-mute md:block">
          First draft kept live. Second is the site. Third is the company that does not exist yet.
        </p>
      </header>

      <section className="wrap pb-10 pt-16 sm:pt-24">
        <p className="kicker">A private commission</p>
        <h1 className="hero-display mt-5 max-w-[14ch]">
          Three studies
          <span className="block italic text-ink-soft">for a rabbi.</span>
        </h1>
        <p className="mt-8 max-w-[38rem] text-[1.15rem] leading-relaxed text-ink-soft sm:text-[1.25rem]">
          Wealthy Los Angeles does not want a synagogue brochure. It wants discretion, access, and a
          room that already understands the week. These three versions are built to that standard —
          in the same voice as the studios this house already makes.
        </p>
      </section>

      <StudyRow
        n="01"
        kicker="Kept live · unchanged"
        title="The first draft"
        body="The original preview. Functional, bilingual, marked for interview. Kept exactly as it was — for comparison, not for the rabbi’s table."
        meta="Vercel · first preview"
        href={V1_URL}
        img="/images/sefer.jpg"
        cta="Open the first draft"
        external
      />
      <StudyRow
        n="02"
        kicker="The site · recommended"
        title="The Study"
        body="A private practice, not a campus. Written in the house voice: numbered, quiet, specific. Hebrew as a living language. Placeholders only where the rabbi must speak. This is what you put in front of him."
        meta="This preview"
        to="/study"
        img="/images/courtyard.jpg"
        cta="Open the site"
        featured
      />
      <StudyRow
        n="03"
        kicker="The product · future"
        title="Erev"
        body="Torah-tech that is actually kosher to want. The house prepares itself before candle lighting — then goes silent. Family memory, arrival, pastoral care, and a website that itself keeps Shabbat."
        meta="Concept · instrument"
        to="/erev"
        img="/images/dusk.jpg"
        cta="Open the product"
      />

      <section className="border-y border-line py-20 sm:py-28">
        <div className="wrap grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="kicker">04 — What this community actually buys</p>
            <h2 className="display mt-4 text-4xl sm:text-5xl">
              Not membership.
              <span className="italic text-ink-soft"> Access, timing, and a name that answers.</span>
            </h2>
          </div>
          <ul className="space-y-6 text-[1.05rem] leading-relaxed text-ink-soft lg:col-span-6 lg:col-start-7">
            <li>Pico–Robertson, Beverly Hills, Holmby, Hancock Park — people who already have a shul. They want a rav they can write to on a Thursday.</li>
            <li>Israelis landing with children and no map. The first thirty days matter more than a High Holiday ticket.</li>
            <li>Lifecycle is private. Weddings, names, shiva, conversions — handled like a studio commission, not a form.</li>
            <li>Hebrew is not a garnish. Half the table thinks in it. The site must flip, not translate as an afterthought.</li>
            <li>Gold badges and stock sanctuaries read as a template. This room reads as a house.</li>
          </ul>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="wrap grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="kicker">05 — Why these three</p>
            <h2 className="display mt-4 text-4xl sm:text-5xl">
              One room to show him.
              <span className="italic text-ink-soft"> Two more so you can decide the future.</span>
            </h2>
          </div>
          <div className="body-copy space-y-5 lg:col-span-6 lg:col-start-7">
            <p>
              The first draft proved the brief. It is not the standard of this studio. It stays live
              so the difference is visible.
            </p>
            <p>
              The Study is the gift: a private-practice site that can be finished in one interview —
              name, portrait, address, times. Nothing else is decoration.
            </p>
            <p>
              Erev is the company, if he wants it. Pre-candle orchestration, household memory, a
              pastoral inbox, an arrival month for Israelis, and a website that goes still when the
              week ends. Built only with a posek in the room.
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-line">
        <div className="wrap flex flex-col gap-3 py-8 text-[0.62rem] uppercase tracking-[0.18em] text-mute sm:flex-row sm:items-center sm:justify-between">
          <span>Internal studio · not a public domain</span>
          <span>Interview still required for name, times, portrait</span>
        </div>
      </footer>
    </div>
  );
}

function StudyRow({
  n,
  kicker,
  title,
  body,
  meta,
  href,
  to,
  external,
  img,
  cta,
  featured,
}: {
  n: string;
  kicker: string;
  title: string;
  body: string;
  meta: string;
  href?: string;
  to?: string;
  external?: boolean;
  img: string;
  cta: string;
  featured?: boolean;
}) {
  const inner = (
    <article className={`grid items-stretch border-t border-line lg:grid-cols-12 ${featured ? "bg-paper" : ""}`}>
      <div className="relative min-h-[280px] lg:col-span-7 lg:min-h-[520px]">
        <img src={img} alt="" className="absolute inset-0 h-full w-full object-cover" />
      </div>
      <div className="flex flex-col justify-end px-5 py-10 sm:px-10 lg:col-span-5">
        <p className="kicker">
          {n} — {kicker}
        </p>
        <h2 className="display mt-4 text-4xl sm:text-5xl">{title}</h2>
        <p className="mt-5 max-w-md text-[1.05rem] leading-relaxed text-ink-soft">{body}</p>
        <p className="mt-8 text-[0.68rem] uppercase tracking-[0.16em] text-mute">{meta}</p>
        <span className="mt-4 text-[0.72rem] font-medium uppercase tracking-[0.16em]">{cta} →</span>
      </div>
    </article>
  );

  if (to) {
    return (
      <Link to={to} className="block no-underline">
        {inner}
      </Link>
    );
  }
  return (
    <a href={href} target={external ? "_blank" : undefined} rel="noreferrer" className="block no-underline">
      {inner}
    </a>
  );
}
