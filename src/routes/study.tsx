import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { LangProvider, useLang } from "@/lib/lang";
import { Placeholder, SectionLabel, StudyNav } from "@/components/site/chrome";

export const Route = createFileRoute("/study")({
  component: () => (
    <LangProvider>
      <StudySite />
    </LangProvider>
  ),
});

function StudySite() {
  const { lang, t } = useLang();
  return (
    <div id="top" dir={lang === "he" ? "rtl" : "ltr"} className="min-h-dvh bg-limestone text-ink">
      <StudyNav />
      <Hero />
      <Position />
      <Practice />
      <WillNot />
      <Table />
      <Arrival />
      <Process />
      <Letter />
      <Inquire />
      <footer className="border-t border-line bg-night text-cream">
        <div className="wrap grid gap-12 py-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-display text-[1.35rem] font-medium tracking-[-0.03em]">
              {t("The Study", "בית המדרש")}
            </p>
            <p className="mt-2 max-w-sm text-[0.95rem] leading-relaxed text-cream/65">
              {t(
                "A private rabbinic practice. Los Angeles. Finite on purpose.",
                "עבודה רבנית פרטית. לוס אנג'לס. מצומצמת בכוונה.",
              )}
            </p>
          </div>
          <div className="space-y-3 text-[0.78rem] uppercase tracking-[0.14em] text-cream/55 lg:col-span-4">
            <p>
              <Placeholder>{t("Name of the Rabbi", "שם הרב")}</Placeholder>
            </p>
            <p>
              <Placeholder>{t("Address · parking · eruv", "כתובת · חניה · עירוב")}</Placeholder>
            </p>
            <p>{t("By conversation", "בשיחה")}</p>
          </div>
          <div className="text-[0.78rem] leading-relaxed text-cream/45 lg:col-span-3 lg:text-end">
            <p>
              {t(
                "Name, portrait, address, and times remain marked until the interview. The room is finished. The voice is not yet his.",
                "השם, הדיוקן, הכתובת והזמנים מסומנים עד הראיון. החדר מוכן. הקול עדיין לא שלו.",
              )}
            </p>
          </div>
        </div>
        <div className="wrap flex flex-col gap-3 border-t border-cream/10 py-6 text-[0.62rem] uppercase tracking-[0.18em] text-cream/35 sm:flex-row sm:items-center sm:justify-between">
          <span>The Study · Los Angeles</span>
          <span>{t("No campus. No tickets. The absence is the signal.", "אין קמפוס. אין כרטיסים. ההעדר הוא הסימן.")}</span>
        </div>
      </footer>
    </div>
  );
}

function Hero() {
  const { t } = useLang();
  return (
    <section className="relative min-h-[100dvh] bg-night text-cream">
      <img
        src="/images/courtyard.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-night/80 via-night/25 to-night/30" />
      <div className="absolute inset-0 bg-gradient-to-b from-night/45 via-transparent to-transparent" />
      <div className="wrap relative flex min-h-[100dvh] flex-col justify-end pb-10 pt-28 sm:pb-16">
        <p className="kicker text-cream/70">
          {t("Los Angeles · A private practice", "לוס אנג'לס · עבודה פרטית")}
        </p>
        <h1 className="hero-display mt-5 max-w-[16ch] text-cream">
          {t("The room, not the campus.", "החדר, לא הקמפוס.")}
        </h1>
        <p className="mt-6 max-w-xl text-[1.05rem] leading-relaxed text-cream/80 sm:text-lg">
          {t(
            "Torah, a table, and someone who answers. For families who already have everything except a rav.",
            "תורה, שולחן, ומישהו שעונה. למשפחות שיש להן כבר הכל — חוץ מרב.",
          )}
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a href="#inquire" className="cta cta-fill">
            {t("Write to the Rabbi", "כתבו לרב")}
          </a>
          <a href="#practice" className="cta cta-ghost">
            {t("The practice", "העבודה")}
          </a>
        </div>
        <p className="mt-10 text-[0.68rem] uppercase tracking-[0.2em] text-cream/55">
          {t("This week", "השבוע")} · <Placeholder>Friday · candle lighting</Placeholder>
        </p>
      </div>
    </section>
  );
}

function Position() {
  const { t } = useLang();
  return (
    <section id="position" className="border-b border-line py-20 sm:py-28">
      <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <SectionLabel n="01">{t("Position", "עמדה")}</SectionLabel>
          <h2 className="display mt-4 text-4xl text-ink sm:text-5xl">
            {t("Most rabbis start with a shul.", "רוב הרבנים מתחילים בבית כנסת.")}{" "}
            <span className="italic text-ink-soft">{t("We start with a person.", "אנחנו מתחילים באדם.")}</span>
          </h2>
        </div>
        <div className="body-copy space-y-6 lg:col-span-7 lg:col-start-6">
          <p>
            {t(
              "Los Angeles already has campuses, schools, and sanctuaries that seat a thousand. This practice is the opposite: a named rav, a finite number of families, and work that does not scale on purpose.",
              "בלוס אנג'לס כבר יש קמפוסים, בתי ספר ובתי כנסת לאלף איש. העבודה הזו הפוכה: רב עם שם, מספר מצומצם של משפחות, ועבודה שלא נועדה לגדול.",
            )}
          </p>
          <p>
            {t("The Rabbi is new to the city", "הרב חדש בעיר")} — <Placeholder>{t("from Israel", "מישראל")}</Placeholder>
            {t(
              " — and knows what it is to land without a map. The first conversation is not a membership packet.",
              " — ויודע מה זה לנחות בלי מפה. השיחה הראשונה אינה חבילת חברות.",
            )}
          </p>
          <p className="font-display text-2xl tracking-[-0.03em] text-ink">
            {t(
              "Pico already has a shul for every minhag. Hancock Park already has a rav for every family that inherited one. The gap is a person you can write to on a Thursday.",
              "בפִּיקוֹ כבר יש בית כנסת לכל מנהג. בהנקוק פארק כבר יש רב לכל משפחה שירשה אחד. החסר הוא אדם שאפשר לכתוב אליו ביום חמישי.",
            )}
          </p>
        </div>
      </div>
    </section>
  );
}

function Practice() {
  const { t } = useLang();
  const items = [
    {
      n: "01",
      meta: t("Weekly · Hebrew & English", "שבועי · עברית ואנגלית"),
      title: t("The weekly letter", "המכתב השבועי"),
      body: t(
        "Not a bulletin. A short piece on the parasha, written as if to one household.",
        "לא עלון. דבר תורה קצר, כתוב כאילו למשפחה אחת.",
      ),
      href: "#letter",
    },
    {
      n: "02",
      meta: t("Friday · arranged, not advertised", "שישי · מסודר, לא מפורסם"),
      title: t("The table", "השולחן"),
      body: t(
        "Shabbat is not a program. It is a house that has room.",
        "שבת אינה תוכנית. זה בית שיש בו מקום.",
      ),
      href: "#table",
    },
    {
      n: "03",
      meta: t("Once the room exists", "ברגע שיש חדר"),
      title: t("The hours", "השעות"),
      body: t(
        "Minyanim and shiurim, marked only when they are real.",
        "מניינים ושיעורים, מסומנים רק כשהם אמיתיים.",
      ),
      href: "#table",
    },
    {
      n: "04",
      meta: t("Private · like a commission", "פרטי · כמו הזמנה לסטודיו"),
      title: t("The private work", "העבודה הפרטית"),
      body: t(
        "Weddings, names, bar and bat mitzvah, conversion, shiva, counsel.",
        "חתונות, שמות, בר ובת מצווה, גיור, שבעה, שיחה.",
      ),
      href: "#inquire",
    },
  ];
  return (
    <section id="practice" className="py-20 sm:py-28">
      <div className="wrap">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <SectionLabel n="02">{t("Practice", "עבודה")}</SectionLabel>
            <h2 className="display mt-3 text-4xl sm:text-5xl">
              {t("Four ways to keep a week.", "ארבעה אופנים לשמור שבוע.")}
            </h2>
          </div>
          <p className="max-w-sm text-[0.98rem] leading-relaxed text-ink-soft">
            {t(
              "Nothing here is a product. Each is a room you can enter.",
              "אין כאן מוצר. כל אחד הוא חדר שאפשר להיכנס אליו.",
            )}
          </p>
        </div>
        <div className="mt-14 grid gap-px bg-line md:grid-cols-2">
          {items.map((item) => (
            <a key={item.n} href={item.href} className="group bg-limestone p-7 no-underline sm:p-9">
              <p className="text-[0.68rem] font-medium uppercase tracking-[0.2em] text-mute">
                {item.n} · {item.meta}
              </p>
              <h3 className="display mt-5 text-3xl sm:text-4xl">{item.title}</h3>
              <p className="mt-3 max-w-md text-[1.05rem] leading-relaxed text-ink-soft">{item.body}</p>
              <p className="mt-8 text-[0.72rem] font-medium uppercase tracking-[0.16em] text-ink/60 transition-colors group-hover:text-ink">
                {t("Study the room", "ללמוד את החדר")} →
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function WillNot() {
  const { t } = useLang();
  const refusals = [
    t("We do not sell High Holiday tickets as the front door.", "אין כרטיסים לחגים כדלת כניסה."),
    t("We do not publish a directory of other people’s grief.", "אין מדריך פומבי לצער של אחרים."),
    t("We do not photograph an empty sanctuary and call it community.", "אין צילום של היכל ריק בשם קהילה."),
    t("We do not pretend a new arrival already knows Pico.", "אין הנחה שעולה חדש כבר מכיר את פִּיקוֹ."),
  ];
  const pillars = [
    {
      t: t("The person, not the campus", "האדם, לא הקמפוס"),
      d: t(
        "We do not open with a calendar. We open with who is sitting at the table, what language the house thinks in, and what the week actually needs.",
        "אין פתיחה בלוח שנה. פותחים במי שיושב ליד השולחן, באיזו שפה הבית חושב, ומה השבוע באמת צריך.",
      ),
    },
    {
      t: t("One rav, start to finish", "רב אחד, מההתחלה עד הסוף"),
      d: t(
        "You do not inherit a membership office, then a different voice, then a voicemail. The person who answers is the person who sits with you.",
        "אין משרד חברות, אחר כך קול אחר, אחר כך תא קולי. מי שעונה הוא מי שיושב איתכם.",
      ),
    },
    {
      t: t("Built for this city", "נבנה לעיר הזו"),
      d: t(
        "Pico–Robertson, Hancock Park, Beverly Hills, the Israeli landing. This is not a generic diaspora template.",
        "פִּיקוֹ–רוברטסון, הנקוק פארק, בוורלי הילס, הנחיתה הישראלית. זה לא תבנית גלות כללית.",
      ),
    },
    {
      t: t("Nothing unsigned", "כלום לא בעל פה בלבד"),
      d: t(
        "Times, address, and hospitality are named when they are real. Until the interview, they stay marked.",
        "זמנים, כתובת והכנסת אורחים נכתבים כשהם אמיתיים. עד הראיון הם מסומנים.",
      ),
    },
  ];
  return (
    <section className="bg-night text-cream">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[420px]">
          <img src="/images/sefer.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />
        </div>
        <div className="px-5 py-16 sm:px-10 sm:py-24">
          <SectionLabel n="03">{t("Studio", "סטודיו")}</SectionLabel>
          <h2 className="display mt-4 text-4xl text-cream sm:text-5xl">
            {t("What we will not do.", "מה לא נעשה.")}
          </h2>
          <p className="mt-6 max-w-md text-[1.05rem] leading-relaxed text-cream/70">
            {t(
              "The city is full of institutions. An institution has a calendar to fill. We have a household to get right. The difference shows up before the first Shabbat.",
              "העיר מלאה מוסדות. למוסד יש לוח למלא. לנו יש בית להבין. ההבדל נראה לפני השבת הראשונה.",
            )}
          </p>
          <ul className="mt-10 space-y-4 text-[1.05rem] leading-relaxed text-cream/80">
            {refusals.map((line) => (
              <li key={line} className="border-t border-cream/15 pt-4">
                {line}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="grid gap-px border-t border-cream/10 bg-cream/10 md:grid-cols-2 xl:grid-cols-4">
        {pillars.map((p) => (
          <div key={p.t} className="bg-night p-7 sm:p-8">
            <h3 className="font-display text-2xl tracking-[-0.03em] text-cream">{p.t}</h3>
            <p className="mt-3 text-[0.98rem] leading-relaxed text-cream/60">{p.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Table() {
  const { t } = useLang();
  return (
    <section id="table" className="border-b border-line py-20 sm:py-28">
      <div className="wrap grid items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <img src="/images/table.jpg" alt="" className="w-full object-cover" />
        </div>
        <div className="lg:col-span-5 lg:col-start-8">
          <SectionLabel n="04">{t("Table", "שולחן")}</SectionLabel>
          <h2 className="display mt-4 text-4xl sm:text-5xl">
            {t("Los Angeles does not have weather.", "בלוס אנג'לס אין מזג אוויר.")}{" "}
            <span className="italic text-ink-soft">{t("It has Friday afternoon.", "יש שישי אחר הצהריים.")}</span>
          </h2>
          <p className="body-copy mt-6">
            {t(
              "Candle lighting is treated like a precise instrument, not a flyer. Once the address is known, zmanim bind to the house. Until then they stay marked.",
              "הדלקת נרות היא מכשיר מדויק, לא פלייר. ברגע שיש כתובת, הזמנים נקשרים לבית. עד אז הם מסומנים.",
            )}
          </p>
          <dl className="mt-8 divide-y divide-line border-y border-line">
            {[
              [t("Shabbat", "שבת"), <Placeholder key="s">times · location · hospitality</Placeholder>],
              [t("Weekdays", "ימי חול"), <Placeholder key="w">minyan · shiur</Placeholder>],
              [t("The house", "הבית"), <Placeholder key="h">address · parking · eruv note</Placeholder>],
            ].map(([k, v]) => (
              <div key={String(k)} className="flex items-baseline justify-between gap-6 py-3.5">
                <dt className="text-[0.68rem] font-medium uppercase tracking-[0.16em] text-mute">{k}</dt>
                <dd className="text-end text-[0.98rem]">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

function Arrival() {
  const { t } = useLang();
  return (
    <section id="arrival" className="bg-paper">
      <div className="grid lg:grid-cols-2">
        <div className="px-5 py-20 sm:px-10 sm:py-28 lg:px-16">
          <SectionLabel n="05">{t("Arrival", "הגעה")}</SectionLabel>
          <h2 className="display mt-4 text-4xl sm:text-5xl">
            {t("I arrived recently too.", "גם אני הגעתי לא מזמן.")}
          </h2>
          <p className="body-copy mt-6">
            <Placeholder>
              {t(
                "Personal note from the Rabbi — Israel, the landing, the first minyan in this city.",
                "הערה אישית מהרב — ישראל, הנחיתה, המניין הראשון בעיר הזו.",
              )}
            </Placeholder>
          </p>
          <ul className="mt-10 space-y-4 text-[1.05rem] text-ink-soft">
            <li className="border-t border-line pt-4">
              {t("Eruv, mikvah, and the kosher corridor — named, not googled.", "עירוב, מקווה ומסדרון הכשרות — בשם, לא בגוגל.")}
            </li>
            <li className="border-t border-line pt-4">
              {t("Schools and the first Shabbat, without performing piety.", "בתי ספר והשבת הראשונה, בלי הצגה.")}
            </li>
            <li className="border-t border-line pt-4">
              {t("Hebrew first, if that is the language of the house.", "עברית קודם, אם זו שפת הבית.")}
            </li>
          </ul>
        </div>
        <div className="relative min-h-[360px]">
          <img src="/images/pico.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />
        </div>
      </div>
    </section>
  );
}

function Process() {
  const { t } = useLang();
  const steps = [
    {
      n: "01",
      title: t("Write", "כתיבה"),
      time: t("A letter · a day", "מכתב · יום"),
      body: t(
        "Name, language, and what you actually need. Not a membership form.",
        "שם, שפה, ומה באמת צריך. לא טופס חברות.",
      ),
    },
    {
      n: "02",
      title: t("Sit", "ישיבה"),
      time: t("One visit · an hour", "פגישה · שעה"),
      body: t(
        "A conversation in the room. No tour. No ask, unless you bring one.",
        "שיחה בחדר. בלי סיור. בלי בקשה, אלא אם הבאתם אחת.",
      ),
    },
    {
      n: "03",
      title: t("Return", "שיבה"),
      time: t("The week · the table", "השבוע · השולחן"),
      body: t(
        "A letter, a seat, a time. The practice begins when it is useful — not when a packet is signed.",
        "מכתב, מקום, זמן. העבודה מתחילה כשהיא מועילה — לא כשחותמים על מעטפה.",
      ),
    },
  ];
  return (
    <section className="border-y border-line py-20 sm:py-28">
      <div className="wrap">
        <SectionLabel n="06">{t("Process", "תהליך")}</SectionLabel>
        <h2 className="display mt-3 max-w-[16ch] text-4xl sm:text-5xl">
          {t("Three stages. Nothing unsigned.", "שלושה שלבים. כלום לא בעל פה בלבד.")}
        </h2>
        <div className="mt-12 grid gap-px bg-line md:grid-cols-3">
          {steps.map((s) => (
            <article key={s.n} className="bg-limestone p-7 sm:p-8">
              <p className="text-[0.68rem] font-medium uppercase tracking-[0.2em] text-mute">{s.n}</p>
              <h3 className="display mt-5 text-3xl">{s.title}</h3>
              <p className="mt-1 text-[0.78rem] uppercase tracking-[0.12em] text-mute">{s.time}</p>
              <p className="mt-4 text-[1.05rem] leading-relaxed text-ink-soft">{s.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Letter() {
  const { t, lang } = useLang();
  return (
    <section id="letter" className="bg-paper py-20 sm:py-28">
      <div className="wrap grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionLabel n="07">{t("The letter", "המכתב")}</SectionLabel>
          <h2 className="display mt-4 text-4xl sm:text-5xl">
            {t("Written as if to one household.", "נכתב כאילו למשפחה אחת.")}
          </h2>
          <p className="body-copy mt-6">
            {t(
              "High-end Los Angeles does not need another Dvar Torah in the inbox. It needs a short letter that assumes intelligence — in the language of the house.",
              "לוס אנג'לס הגבוהה אינה צריכה עוד דבר תורה בתיבה. היא צריכה מכתב קצר שמניח אינטליגנציה — בשפת הבית.",
            )}
          </p>
        </div>
        <article className="border border-line bg-cream p-7 shadow-[0_20px_60px_-40px_rgba(27,24,20,0.5)] sm:p-10 lg:col-span-6 lg:col-start-7">
          <div className="flex items-center justify-between text-[0.62rem] uppercase tracking-[0.18em] text-mute">
            <span>{t("This week", "השבוע")}</span>
            <span>
              <Placeholder>Parasha</Placeholder>
            </span>
          </div>
          <h3 className="display mt-8 text-3xl">
            {t("A first letter. Still unsigned.", "מכתב ראשון. עדיין בלי חתימה.")}
          </h3>
          <div className={`mt-6 space-y-4 text-[1.02rem] leading-[1.7] text-ink-soft ${lang === "he" ? "font-he" : ""}`}>
            <p>
              {t(
                "Most weeks the city asks you to perform. Friday afternoon asks you to stop. The work of a rav, if it is any good, is to make that stop feel like a room and not a rule.",
                "רוב השבוע העיר מבקשת הצגה. שישי אחר הצהריים מבקש עצירה. עבודת רב, אם היא שווה משהו, היא להפוך את העצירה לחדר — לא לכלל.",
              )}
            </p>
            <p>
              {t(
                "This letter will be his. Until then the type is set and the seat is empty.",
                "המכתב הזה יהיה שלו. עד אז האותיות מוכנות והכיסא ריק.",
              )}
            </p>
          </div>
          <p className="mt-10 font-display text-xl italic text-ink">
            — <Placeholder>{t("The Rabbi", "הרב")}</Placeholder>
          </p>
        </article>
      </div>
    </section>
  );
}

function Inquire() {
  const { t } = useLang();
  const [sent, setSent] = useState(false);
  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setSent(true);
  }
  return (
    <section id="inquire" className="border-t border-line py-20 sm:py-28">
      <div className="wrap grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionLabel n="08">{t("Inquire", "פנייה")}</SectionLabel>
          <h2 className="display mt-4 text-4xl sm:text-5xl">
            {t("Begin with a conversation.", "מתחילים בשיחה.")}
          </h2>
          <p className="body-copy mt-5">
            {t(
              "Tell us the house, the language, and what the week should hold. Every serious letter is answered.",
              "ספרו על הבית, על השפה, ומה השבוע צריך להחזיק. כל מכתב רציני מקבל תשובה.",
            )}
          </p>
          <img src="/images/chairs.jpg" alt="" className="mt-10 w-full object-cover" />
        </div>
        <div className="border border-line bg-cream p-6 sm:p-8 lg:col-span-6 lg:col-start-7">
          {sent ? (
            <p className="display text-3xl leading-snug">
              {t(
                "Received. This preview does not send — the interview will bind a real address.",
                "התקבל. התצוגה הזו אינה שולחת — הראיון יחבר כתובת אמיתית.",
              )}
            </p>
          ) : (
            <form onSubmit={onSubmit} className="space-y-5">
              <Field label={t("Name", "שם")} name="name" required />
              <Field label={t("Email", "דוא״ל")} name="email" type="email" required />
              <div>
                <label className="mb-1.5 block text-[0.68rem] font-medium uppercase tracking-[0.16em] text-mute">
                  {t("Language of the house", "שפת הבית")}
                </label>
                <select
                  name="lang"
                  className="h-12 w-full border border-line bg-limestone px-3 font-sans text-[1rem] text-ink outline-none focus:border-ink"
                >
                  <option>English</option>
                  <option>עברית</option>
                  <option>Both</option>
                </select>
              </div>
              <div>
                <label className="mb-1.5 block text-[0.68rem] font-medium uppercase tracking-[0.16em] text-mute">
                  {t("What you need", "מה צריך")}
                </label>
                <textarea
                  name="note"
                  required
                  rows={5}
                  className="w-full border border-line bg-limestone px-3 py-3 font-sans text-[1rem] text-ink outline-none focus:border-ink"
                />
              </div>
              <button type="submit" className="cta cta-ink w-full">
                {t("Send the letter", "שלחו את המכתב")}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-[0.68rem] font-medium uppercase tracking-[0.16em] text-mute">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="h-12 w-full border border-line bg-limestone px-3 font-sans text-[1rem] text-ink outline-none focus:border-ink"
      />
    </div>
  );
}
