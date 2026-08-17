import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";

export const Route = createFileRoute("/erev")({ component: Erev });

type RoomState = "open" | "set" | "silent";

const ROOMS = [
  { id: "lights", name: "Lights", note: "Shabbat scene · warm, no motion sensors" },
  { id: "plata", name: "Plata & urn", note: "On before candles · stays on" },
  { id: "climate", name: "Climate", note: "Hold overnight · no new commands" },
  { id: "alarm", name: "Alarm & cameras", note: "Armed, recording only" },
  { id: "network", name: "Screens", note: "Displays off · speakers mute" },
  { id: "gate", name: "Gate & charger", note: "Guest mode · EV finished" },
];

const HOUSEHOLD = [
  { who: "The house", note: "Hancock Park · eruv up · walking guests expected" },
  { who: "Parents", note: "Both home by 5 · early Shabbat this week" },
  { who: "Two children", note: "One still napping · night light already set" },
  { who: "A guest", note: "Walking from Pico · no kitniyot · yahrzeit Sunday" },
];

const LETTERS = [
  { tag: "Lifecycle", title: "A name, next month", body: "Household asked for a conversation before the bris. Not a form. A time." },
  { tag: "Arrival", title: "Landed Tuesday", body: "Family of four from Ra’anana. First Shabbat still open. Hebrew first." },
  { tag: "Memory", title: "Yahrzeit in eight days", body: "The house already knows. The Rabbi is told. Nobody is emailed a blast." },
];

function Erev() {
  const [quiet, setQuiet] = useState(false);

  if (quiet) {
    return (
      <div className="flex min-h-dvh flex-col bg-night text-cream">
        <div className="wrap flex flex-1 flex-col items-start justify-end pb-16 pt-28">
          <p className="kicker text-cream/50">The Quiet Hours</p>
          <h1 className="hero-display mt-5 max-w-[14ch]">
            The week is over.
            <span className="mt-2 block italic text-cream/55">The site is still.</span>
          </h1>
          <p className="mt-6 max-w-md text-[1.05rem] leading-relaxed text-cream/55">
            No forms. No motion. No new writes. Motzei is a gentle resume, not a Monday inbox.
          </p>
          <button type="button" onClick={() => setQuiet(false)} className="cta cta-ghost mt-10">
            Resume the week
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-dvh bg-night text-cream">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-cream/10 bg-night/80 backdrop-blur-md">
        <div className="wrap flex h-[4.25rem] items-center justify-between gap-4">
          <a href="#top" className="flex flex-col leading-none no-underline">
            <span className="font-display text-[1.05rem] font-medium tracking-[-0.03em]">Erev</span>
            <span className="mt-1 text-[0.62rem] font-medium uppercase tracking-[0.18em] text-cream/50">
              Torah tech
            </span>
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            {[
              ["#why", "Why"],
              ["#instrument", "Instrument"],
              ["#quiet", "Quiet Hours"],
              ["#suite", "Suite"],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="text-[0.78rem] font-medium uppercase tracking-[0.16em] text-cream/70 no-underline hover:text-cream"
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-5">
            <button
              type="button"
              onClick={() => setQuiet(true)}
              className="hidden text-[0.72rem] font-medium uppercase tracking-[0.16em] text-cream/55 hover:text-cream sm:inline"
            >
              It is Shabbat
            </button>
            <Link to="/" className="text-[0.72rem] font-medium uppercase tracking-[0.16em] text-cream/55 hover:text-cream">
              Studio
            </Link>
          </div>
        </div>
      </header>

      <Hero />
      <Why />
      <Instrument />
      <QuietHours onLock={() => setQuiet(true)} />
      <Household />
      <Shaliach />
      <Suite />
      <Close />
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-[100dvh] bg-night text-cream">
      <img src="/images/dusk.jpg" alt="" className="absolute inset-0 h-full w-full object-cover opacity-70" />
      <div className="absolute inset-0 bg-gradient-to-t from-night via-night/40 to-night/25" />
      <div className="wrap relative flex min-h-[100dvh] flex-col justify-end pb-10 pt-28 sm:pb-16">
        <p className="kicker text-cream/60">01 — A product, not a page</p>
        <h1 className="hero-display mt-5 max-w-[14ch]">
          The house keeps Shabbat.
          <span className="block italic text-cream/65">Then it is quiet.</span>
        </h1>
        <p className="mt-6 max-w-xl text-[1.05rem] leading-relaxed text-cream/75 sm:text-lg">
          Observant homes already use timers. Erev is the missing layer: it knows the family, the
          zmanim, the guests, and the eruv — and it finishes its work before candle lighting. Nothing
          new is asked of a machine on Shabbat.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a href="#instrument" className="cta cta-fill">
            Run the sequence
          </a>
          <a href="#why" className="cta cta-ghost">
            Why this is kosher to want
          </a>
        </div>
      </div>
    </section>
  );
}

function Why() {
  return (
    <section id="why" className="border-b border-cream/10 py-20 sm:py-28">
      <div className="wrap grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="kicker text-cream/50">02 — The mistake</p>
          <h2 className="display mt-4 text-4xl text-cream sm:text-5xl">
            Talking to the house <span className="italic text-cream/50">on</span> Shabbat is not the future.
          </h2>
        </div>
        <div className="space-y-5 text-[1.05rem] leading-relaxed text-cream/65 lg:col-span-6 lg:col-start-7">
          <p>
            Most “Jewish tech” either ignores halacha or treats it as a filter on a consumer app.
            High-end Orthodox families in Los Angeles already have Savant, Lutron, and a plata. What
            they do not have is a system that understands erev as a deadline.
          </p>
          <p>
            Erev inverts the brief. The useful hour is the ninety minutes before candles. After that,
            the instrument is silent by design — not because it is dumb, but because the week is over.
          </p>
          <p className="font-display text-2xl tracking-[-0.03em] text-cream">
            A posek is in the room. Every automation has a ruling attached. We do not ship a gadget
            blog.
          </p>
        </div>
      </div>
      <div className="wrap mt-16 grid gap-px bg-cream/10 md:grid-cols-3">
        {[
          ["Knows the family", "Who is home, who is walking, who is elderly, who is a guest. Sensors only if you asked — never as a surprise."],
          ["Knows the clock", "Zmanim to the address. Early Shabbat, Yom Tov, fasts. Candle lighting is the last write."],
          ["Knows when to stop", "At candles, Erev locks. No new scenes, no voice, no pings. Motzei is a resume, not an inbox."],
        ].map(([h, b]) => (
          <div key={h} className="bg-night p-7">
            <h3 className="font-display text-2xl tracking-[-0.03em]">{h}</h3>
            <p className="mt-3 text-[0.98rem] leading-relaxed text-cream/55">{b}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Instrument() {
  const [running, setRunning] = useState(false);
  const [rooms, setRooms] = useState<Record<string, RoomState>>(() =>
    Object.fromEntries(ROOMS.map((r) => [r.id, "open"])),
  );
  const [step, setStep] = useState(0);

  const remaining = useMemo(() => {
    if (!running) return 47 * 60;
    return Math.max(0, 12 - step) * 4 * 60;
  }, [running, step]);

  useEffect(() => {
    if (!running) return;
    if (step >= ROOMS.length) return;
    const t = window.setTimeout(() => {
      const id = ROOMS[step].id;
      setRooms((prev) => ({ ...prev, [id]: "set" }));
      setStep((s) => s + 1);
    }, 700);
    return () => window.clearTimeout(t);
  }, [running, step]);

  const locked = step >= ROOMS.length && running;
  const mm = String(Math.floor(remaining / 60)).padStart(2, "0");
  const ss = String(remaining % 60).padStart(2, "0");

  return (
    <section id="instrument" className="border-b border-cream/10 bg-night-soft py-20 sm:py-24">
      <div className="wrap">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="kicker text-cream/50">03 — The instrument</p>
            <h2 className="display mt-3 text-4xl sm:text-5xl">Friday, this house.</h2>
          </div>
          <div className="text-end">
            <p className="text-[0.68rem] font-medium uppercase tracking-[0.18em] text-cream/40">
              Candle lighting
            </p>
            <p className="font-display text-5xl tabular-nums leading-none tracking-[-0.03em]">
              {locked ? "LOCKED" : `${mm}:${ss}`}
            </p>
            <p className="mt-1 text-[0.78rem] text-cream/45">
              {locked ? "Shabbat has begun · no further writes" : "Demo clock · Los Angeles"}
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-3 md:grid-cols-2">
          {ROOMS.map((room) => {
            const st = locked ? "silent" : rooms[room.id];
            return (
              <div key={room.id} className="flex items-center justify-between border border-cream/10 px-5 py-4">
                <div>
                  <p className="font-display text-[1.35rem] tracking-[-0.02em]">{room.name}</p>
                  <p className="text-[0.9rem] text-cream/45">{room.note}</p>
                </div>
                <Status state={st} />
              </div>
            );
          })}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <button
            type="button"
            onClick={() => {
              setRunning(true);
              setStep(0);
              setRooms(Object.fromEntries(ROOMS.map((r) => [r.id, "open"])));
            }}
            className="cta cta-fill"
          >
            Run erev sequence
          </button>
          <button
            type="button"
            onClick={() => {
              setRunning(false);
              setStep(0);
              setRooms(Object.fromEntries(ROOMS.map((r) => [r.id, "open"])));
            }}
            className="cta cta-ghost"
          >
            Reset week
          </button>
          <p className="max-w-md text-[0.9rem] text-cream/40">
            A demonstration. Real homes bind to Lutron, Savant, or Home Assistant — with a rav’s
            guidance, not a gadget blog.
          </p>
        </div>
      </div>
    </section>
  );
}

function Status({ state }: { state: RoomState }) {
  const map = {
    open: { label: "Open", cls: "text-cream/40 border-cream/15" },
    set: { label: "Set", cls: "text-cream border-cream/40" },
    silent: { label: "Silent", cls: "text-cream/80 border-cream/30" },
  }[state];
  return (
    <span className={`border px-2.5 py-1 text-[0.62rem] font-medium uppercase tracking-[0.16em] ${map.cls}`}>
      {map.label}
    </span>
  );
}

function QuietHours({ onLock }: { onLock: () => void }) {
  return (
    <section id="quiet" className="border-b border-cream/10 py-20 sm:py-28">
      <div className="wrap grid items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <img src="/images/chairs.jpg" alt="" className="w-full object-cover opacity-90" />
        </div>
        <div className="lg:col-span-5 lg:col-start-8">
          <p className="kicker text-cream/50">04 — The Quiet Hours</p>
          <h2 className="display mt-4 text-4xl sm:text-5xl">
            The website itself keeps Shabbat.
          </h2>
          <p className="mt-6 text-[1.05rem] leading-relaxed text-cream/65">
            Synagogue sites stay loud on Friday night — forms, donate buttons, a calendar that does
            not know the week has ended. Erev can still the site at candles: no motion, no inquiry,
            a single sentence. Motzei brings the week back.
          </p>
          <button type="button" onClick={onLock} className="cta cta-fill mt-8">
            It is Shabbat
          </button>
        </div>
      </div>
    </section>
  );
}

function Household() {
  return (
    <section className="border-b border-cream/10 bg-night-soft py-20 sm:py-24">
      <div className="wrap">
        <p className="kicker text-cream/50">05 — Household</p>
        <h2 className="display mt-3 max-w-[18ch] text-4xl sm:text-5xl">
          Family knowledge without a CRM.
        </h2>
        <p className="mt-5 max-w-2xl text-[1.05rem] leading-relaxed text-cream/60">
          The useful fact is not a sensor. It is who is walking, who does not eat kitniyot, whose
          mother has a yahrzeit, who just landed from Ben Gurion. Held privately. Never published.
        </p>
        <div className="mt-10 divide-y divide-cream/10 border-y border-cream/10">
          {HOUSEHOLD.map((row, i) => (
            <div key={row.who} className="grid gap-2 py-5 md:grid-cols-[80px_220px_1fr]">
              <span className="text-[0.68rem] uppercase tracking-[0.16em] text-cream/40">
                0{i + 1}
              </span>
              <p className="font-display text-[1.35rem] tracking-[-0.02em]">{row.who}</p>
              <p className="text-[1.02rem] text-cream/55">{row.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Shaliach() {
  return (
    <section className="border-b border-cream/10 py-20 sm:py-28">
      <div className="wrap">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="kicker text-cream/50">06 — Shaliach</p>
            <h2 className="display mt-3 text-4xl sm:text-5xl">A confidential pastoral inbox.</h2>
          </div>
          <p className="max-w-sm text-[0.98rem] leading-relaxed text-cream/50">
            Lifecycle is a commission, not a ticket queue. Nothing is published. Nothing is sold as a
            package.
          </p>
        </div>
        <div className="mt-12 grid gap-3 md:grid-cols-3">
          {LETTERS.map((item) => (
            <article key={item.title} className="border border-cream/10 p-6">
              <p className="text-[0.62rem] font-medium uppercase tracking-[0.18em] text-cream/40">
                {item.tag}
              </p>
              <h3 className="display mt-4 text-2xl">{item.title}</h3>
              <p className="mt-3 text-[0.98rem] leading-relaxed text-cream/55">{item.body}</p>
              <p className="mt-6 text-[0.62rem] uppercase tracking-[0.16em] text-cream/30">Redacted · Rabbi only</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Suite() {
  const items = [
    {
      n: "07",
      title: "Thirty days",
      body: "An arrival OS for Israelis and anyone new to the Westside. Eruv, school, first Shabbat, a name to call. The first month is a product. After that, you have a city.",
    },
    {
      n: "08",
      title: "The letter",
      body: "A weekly parasha composed to the household — reading level, minhag, language. Not a blog. A letter that knows who sits at the table.",
    },
    {
      n: "09",
      title: "Yahrzeit",
      body: "The house remembers. The Rabbi is told in time to write. The family is not added to a list. Memory is infrastructure.",
    },
    {
      n: "10",
      title: "Posek in the loop",
      body: "Every scene, every lock, every resume has a ruling attached. We do not invent heterim in a sprint. The product ships only if a rav would use it in his own house.",
    },
  ];
  return (
    <section id="suite" className="py-20 sm:py-28">
      <div className="wrap">
        <p className="kicker text-cream/50">11 — The rest of the suite</p>
        <h2 className="display mt-3 max-w-[18ch] text-4xl sm:text-5xl">
          Shabbat is the lock.
          <span className="italic text-cream/50"> The week is the work.</span>
        </h2>
        <div className="mt-12 divide-y divide-cream/10 border-y border-cream/10">
          {items.map((it) => (
            <article key={it.n} className="grid gap-4 py-8 md:grid-cols-[80px_240px_1fr]">
              <span className="text-[0.68rem] uppercase tracking-[0.16em] text-cream/40">{it.n}</span>
              <h3 className="font-display text-[1.6rem] tracking-[-0.03em]">{it.title}</h3>
              <p className="text-[1.05rem] leading-relaxed text-cream/60">{it.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Close() {
  return (
    <section className="border-t border-cream/10">
      <div className="wrap py-20 sm:py-24">
        <h2 className="display max-w-[18ch] text-4xl sm:text-5xl">
          This is not a synagogue website feature.
          <span className="italic text-cream/50"> It is a company.</span>
        </h2>
        <p className="mt-6 max-w-[560px] text-[1.05rem] leading-relaxed text-cream/55">
          Built only if the Rabbi wants it — and only with a posek in the room. The Study can exist
          without Erev. Erev cannot exist as a toy.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link to="/study" className="cta cta-fill">
            Back to the site
          </Link>
          <Link to="/" className="cta cta-ghost">
            All three studies
          </Link>
        </div>
      </div>
    </section>
  );
}
