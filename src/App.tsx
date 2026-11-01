import { FormEvent, ReactNode, useState } from "react"

type IconName = "arrow" | "check" | "clock" | "heart" | "lock" | "menu" | "plus" | "shield" | "spark" | "truck" | "user" | "x"

function Icon({
  name,
  className = "size-5",
}: {
  name: IconName
  className?: string
}) {
  const paths: Record<IconName, ReactNode> = {
    arrow: <path d="M5 12h14m-5-5 5 5-5 5" />,
    check: <path d="m5 12 4 4L19 6" />,
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    heart: (
      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.7-7.5a5.5 5.5 0 0 0 1.1-8.9Z" />
    ),
    lock: (
      <>
        <rect x="4" y="10" width="16" height="11" rx="2" />
        <path d="M8 10V7a4 4 0 0 1 8 0v3" />
      </>
    ),
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    plus: <path d="M12 5v14M5 12h14" />,
    shield: (
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Zm-3-10 2 2 4-4" />
    ),
    spark: (
      <path d="m12 3 1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3Zm7 12 .8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z" />
    ),
    truck: (
      <>
        <path d="M10 17h4V5H2v12h3m12 0h2l3-3v-4h-8v7" />
        <circle cx="7.5" cy="17.5" r="2.5" />
        <circle cx="16.5" cy="17.5" r="2.5" />
      </>
    ),
    user: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21a8 8 0 0 1 16 0" />
      </>
    ),
    x: <path d="m6 6 12 12M18 6 6 18" />,
  }

  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  )
}

function Button({
  children,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
}: {
  children: ReactNode
  variant?: "primary" | "secondary" | "light"
  className?: string
  onClick?: () => void
  type?: "button" | "submit"
}) {
  const variants = {
    primary:
      "bg-[#f0d44b] text-[#101813] hover:bg-[#ffe45d] shadow-[0_10px_30px_rgba(240,212,75,.18)]",
    secondary: "border border-white/20 bg-white/5 text-white hover:bg-white/10",
    light:
      "border border-[#dce5df] bg-white text-[#183426] hover:border-[#1f8a5b] hover:text-[#126741]",
  }
  return (
    <button
      type={type}
      onClick={onClick}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-bold transition-all duration-200 ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  )
}

function ProductBox() {
  return (
    <img
      src={`${import.meta.env.BASE_URL}paket.png?v=6`}
      alt="Pakovanje Degra"
      className="w-[min(86vw,400px)] drop-shadow-[0_30px_40px_rgba(0,0,0,.38)]"
    />
  )
}

const benefits = [
  {
    icon: "clock" as const,
    title: "Deluje kada ste spremni",
    text: "Prozor dejstva je obično 4–6 sati, uz seksualnu stimulaciju.",
  },
  {
    icon: "spark" as const,
    title: "Poznata aktivna supstanca",
    text: "Sildenafil je dobro proučen PDE5 inhibitor sa utvrđenim načinom delovanja.",
  },
  {
    icon: "heart" as const,
    title: "Više spontanosti",
    text: "Jedna tableta se najčešće uzima 30–60 minuta pre planiranog odnosa.",
  },
]

const faqs = [
  {
    q: "Kako se Degra razlikuje od Vijagre i Kamagre?",
    a: "Vijagra i Kamagra nose sildenafil, ali u manjoj količini. Degra u svaku tabletu stavlja čistiji sildenafil, i to više. Uz stimulaciju krvni sudovi se lakše opuste, pa erekcija dolazi stabilnije.",
  },
  {
    q: "Koliko brzo počinje da deluje?",
    a: "Najčešće za 30–60 minuta. Obilan ili mastan obrok može odložiti početak dejstva, a veća količina alkohola može otežati postizanje erekcije.",
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState(0)
  const [strength, setStrength] = useState("50 mg")
  const [boxes, setBoxes] = useState(1)
  const [sent, setSent] = useState(false)

  const scrollToOrder = () =>
    document
      .querySelector("#narucivanje")
      ?.scrollIntoView({ behavior: "smooth" })

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSent(true)
  }

  return (
    <div className="min-h-screen overflow-hidden bg-[#f7f8f3] text-[#10251a]">
      <div className="bg-[#f0d44b] px-4 py-2.5 text-center text-xs font-bold text-[#183426]">
        Jedina originalna Degra na tržištu • Najkvalitetniji proizvod za potenciju
      </div>

      <header className="absolute left-0 right-0 z-30 border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8">
          <a href="#" className="flex items-center" aria-label="Degra Srbija">
            <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Degra Srbija" className="h-11 w-auto" />
          </a>
          <nav className="hidden items-center gap-8 text-sm font-semibold text-white/70 md:flex">
            <a className="transition hover:text-white" href="#prednosti">
              Prednosti
            </a>
            <a className="transition hover:text-white" href="#kako-deluje">
              Kako deluje
            </a>
            <a className="transition hover:text-white" href="#pitanja">
              Pitanja
            </a>
          </nav>
          <div className="hidden md:block">
            <Button onClick={scrollToOrder}>
              Poruči odmah <Icon name="arrow" />
            </Button>
          </div>
          <button
            className="grid size-11 place-items-center rounded-full border border-white/20 text-white md:hidden"
            aria-label={menuOpen ? "Zatvori meni" : "Otvori meni"}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? "x" : "menu"} />
          </button>
        </div>
        {menuOpen && (
          <nav className="border-t border-white/10 bg-[#123c29]/95 px-5 py-5 backdrop-blur md:hidden">
            <div className="flex flex-col gap-4 text-sm font-semibold text-white">
              {["Prednosti", "Kako deluje", "Pitanja"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item}
                  </a>
                ),
              )}
            </div>
          </nav>
        )}
      </header>

      <main>
        <section className="relative min-h-[820px] overflow-hidden bg-[#123c29] pt-36 text-white lg:min-h-[780px]">
          <div className="hero-glow absolute inset-0" />
          <div className="pointer-events-none absolute -right-56 -top-56 size-[680px]">
            <div className="absolute inset-0 rounded-full border border-white/10" />
            <div className="absolute left-1/2 top-1/2 size-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
          </div>
          <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 pb-28 pt-10 lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:pb-20">
            <div className="max-w-2xl">
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-bold text-white/80 backdrop-blur">
                <Icon name="shield" className="size-4 text-[#f0d44b]" />
                Diskretno. Stručno. Brzo.
              </div>
              <h1 className="text-balance text-5xl font-black leading-[.94] tracking-[-.065em] sm:text-6xl lg:text-7xl">
                Samopouzdanje počinje dobrim izborom.
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/65">
                Na tržištu se sildenafil često nudi u količini od koje se malo
                šta oseti. Degra u svaku tabletu stavlja više te supstance —
                i baš zato danas daje rezultat koji ostali proizvodi ne stižu
                da prate.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button onClick={scrollToOrder} className="sm:min-w-56">
                  Poruči odmah <Icon name="arrow" />
                </Button>
                <Button
                  variant="secondary"
                  onClick={() =>
                    document
                      .querySelector("#kako-deluje")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Saznaj kako deluje
                </Button>
              </div>
              <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-xs font-semibold text-white/55">
                <span className="flex items-center gap-2">
                  <svg
                    aria-hidden="true"
                    className="h-4 w-auto shrink-0 text-[#f0d44b]"
                    viewBox="0 0 78.28 122.88"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.9,35.42c0.67-0.58,1.29-0.98,2.07-1.03c0.4-0.03,0.81,0.02,1.24,0.14c1.12,0.31,1.55,0.82,2.4,1.56c4.19,3.69,8.31,7.78,12.32,12.48c2.07,1.9,2.54,3.88,0.92,5.78l-2.96,3.31c-1.5,1.5-3.41,1.42-5.49-0.08C5.04,49.71-6.03,45.65,3.9,35.42L3.9,35.42z M3.92,53.35c0.23,6.91,1.5,11.13,3.93,15.73c3.58,4.63,6.5,9.07,8.09,13.13c1.11,2.84,2.02,5.52,3.24,8.39l10.48,32.27h48.19L55.76,83.94c-1.69-2.72-2.05-2.06,0.17-4.13c4.51-4.23,8.38-8.83,11.81-13.62c9.43-13.18,14.46-18.08,6.83-31.68l-5.74-10.48c-7.02-12.68-21.5-0.99-32.35,5.23c-3.17,3.94,3.99,12.37,10.3,10l8.15-3.06l2.41,5.71C37.4,39.29,33.34,52.16,31.95,68.97c-1.99-10.31-0.31-18.56,3.82-22.75c-3.55,2.61-7.29,6.03-10.72,10.29c-0.83,1.03-1.64,2.11-2.43,3.24c-4.18,5.58-8.4,1.72-12.4-1.42C8.08,56.65,5.9,54.85,3.92,53.35L3.92,53.35z M47.47,0.01c0.42,0.03,0.84,0.15,1.26,0.33c2.12,0.94,4.57,5.22,5.63,7.19c0.68,1.25,2.6,4.65,4.16,7.52l-13.39,5.4c-2.15-3.47-4.08-7.03-6.03-9.87c-1.18-1.53-1.37-3.07-0.72-4.56c0.76-1.73,2.67-3.03,4.24-4C43.72,1.35,46.25-0.1,47.47,0.01L47.47,0.01z M31.59,8.91c0.42,0.01,0.84,0.09,1.28,0.25c1.14,0.42,1.54,0.99,2.35,1.84c1.34,1.41,2.56,3.12,3.72,4.98c0.65,1.04,2.09,3.26,3.59,5.63c-4.62,2.08-10.85,3.2-11.06,9.13c-2.73-3.72-5.17-7.7-7.56-10.76c-1.27-1.46-1.56-2.98-1-4.51C23.87,12.86,29,8.86,31.59,8.91L31.59,8.91z M17.3,20.88c0.4-0.03,0.81,0.02,1.24,0.14c1.12,0.31,1.55,0.82,2.4,1.56c1.39,1.23,2.69,2.77,3.95,4.45c1.67,2.22,8.06,10.36,8.97,12.23c0.62,1.28,0.69,2.61-0.47,3.97l-3.8,3.69c-1.5,1.5-3.41,1.42-5.49-0.08c-4.86-4.69-9.31-10.57-13.21-14.76c-1.33-1.28-1.73-2.71-1.32-4.22C10.21,25.46,14.88,21.04,17.3,20.88L17.3,20.88z"
                    />
                  </svg>
                  Jača erekcija
                </span>
                <span className="flex items-center gap-2">
                  <svg
                    aria-hidden="true"
                    className="h-4 w-auto shrink-0 text-[#f0d44b]"
                    viewBox="0 0 122.88 95.57"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M30.45,57.96h-0.93c0-7.62-2.85-14.28-8.54-19.97c-5.69-5.69-12.35-8.54-19.97-8.54v-0.93c7.62,0,14.28-2.85,19.97-8.55C26.67,14.25,29.52,7.59,29.52,0h0.93c0,7.62,2.85,14.28,8.54,19.97c5.69,5.69,12.35,8.54,19.97,8.54v0.93c-7.62,0-14.28,2.85-19.97,8.54C33.3,43.68,30.45,50.34,30.45,57.96L30.45,57.96z M13.51,92.85h-0.43c0-3.49-1.31-6.55-3.92-9.16C6.55,81.08,3.49,79.77,0,79.77v-0.43c3.49,0,6.55-1.31,9.16-3.92c2.61-2.62,3.92-5.67,3.92-9.15h0.43c0,3.49,1.31,6.55,3.92,9.16c2.61,2.61,5.66,3.92,9.16,3.92v0.43c-3.49,0-6.55,1.31-9.16,3.92C14.81,86.3,13.51,89.36,13.51,92.85L13.51,92.85z M68.37,95.57h-0.43c0-3.49-1.31-6.55-3.92-9.16c-2.61-2.61-5.66-3.92-9.16-3.92v-0.43c3.49,0,6.55-1.31,9.16-3.92c2.61-2.62,3.92-5.67,3.92-9.15h0.43c0,3.49,1.31,6.55,3.92,9.16c2.61,2.61,5.66,3.92,9.16,3.92v0.43c-3.49,0-6.55,1.31-9.16,3.92C69.67,89.02,68.37,92.07,68.37,95.57L68.37,95.57z M98.95,64.57h-0.78c0-6.39-2.39-11.98-7.17-16.76c-4.78-4.78-10.36-7.17-16.76-7.17v-0.78c6.39,0,11.98-2.39,16.76-7.18c4.78-4.79,7.17-10.38,7.17-16.75h0.78c0,6.39,2.39,11.98,7.17,16.76c4.78,4.78,10.36,7.17,16.76,7.17v0.78c-6.39,0-11.98,2.39-16.76,7.17C101.34,52.59,98.95,58.18,98.95,64.57L98.95,64.57z"
                    />
                  </svg>
                  Farmaceutska čistoča
                </span>
                <span className="flex items-center gap-2">
                  <svg
                    aria-hidden="true"
                    className="h-4 w-auto shrink-0 text-[#f0d44b]"
                    viewBox="0 0 122.88 100.58"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M29.83,87.77V50.85h16.61c7.04,1.26,14.08,5.08,21.12,9.51h12.9c5.84,0.35,8.9,6.27,3.22,10.16c-4.52,3.32-10.49,3.13-16.61,2.58c-4.22-0.21-4.4,5.46,0,5.48c1.53,0.12,3.19-0.24,4.64-0.24c7.63-0.01,13.92-1.47,17.77-7.5l1.93-4.51l19.19-9.51c9.6-3.16,16.43,6.88,9.35,13.87c-13.9,10.11-28.15,18.43-42.73,25.15c-10.59,6.44-21.18,6.22-31.76,0L29.83,87.77L29.83,87.77z M42.41,0l71.41,19.13l-9.95,37.13L32.46,37.13L42.41,0L42.41,0z M76.08,17.22c6.04,1.62,9.62,7.81,8,13.85c-1.62,6.04-7.81,9.62-13.85,8c-6.04-1.62-9.62-7.81-8-13.85C63.84,19.18,70.03,15.6,76.08,17.22L76.08,17.22z M52.83,8.85l47.48,12.72c-0.81,3.02,0.99,6.15,4.02,6.95l-3.93,14.68c-3.02-0.81-6.15,0.99-6.95,4.02L45.96,34.5c0.81-3.02-0.99-6.14-4.02-6.95l3.93-14.68C48.89,13.68,52.02,11.88,52.83,8.85L52.83,8.85z M0,47.3h24.83v44.18H0V47.3L0,47.3z"
                    />
                  </svg>
                  Povoljna cena
                </span>
              </div>
            </div>
            <div className="relative mx-auto flex min-h-[440px] w-full max-w-xl items-end justify-center pb-2 lg:min-h-[520px]">
              <div className="absolute right-0 top-0 h-[82%] w-[70%] overflow-hidden rounded-[2.5rem]">
                <img
                  className="h-full w-full object-cover object-[center_22%] opacity-80 mix-blend-luminosity"
                  src={`${import.meta.env.BASE_URL}man.jpg`}
                  alt=""
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#123c29] via-transparent to-[#123c29]/20" />
              </div>
              <div className="relative z-10 mb-8 -translate-x-2 sm:-translate-x-6">
                <ProductBox />
              </div>
              <div className="absolute bottom-0 right-0 z-20 max-w-52 rounded-2xl border border-white/15 bg-[#173f2c]/85 p-4 backdrop-blur-xl">
                <p className="text-2xl font-black tracking-[-.04em]">4–6h</p>
                <p className="mt-1 text-xs leading-relaxed text-white/55">
                  Period u kom je lakše postići erekciju. Ne dozvoli da se iko razočara. 
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="relative z-10 mx-auto -mt-10 max-w-6xl px-5">
          <ol className="grid overflow-hidden rounded-[1.75rem] border border-[#dfe8e1] bg-white shadow-[0_24px_70px_rgba(18,60,41,.1)] sm:grid-cols-3">
            {[
              ["01", "Porudžbina", "Podatke unosite online."],
              ["02", "Obrada", "Porudžbinu pripremamo za slanje."],
              ["03", "Dostava", "Na kućnu adresu. Plaćate pouzećem."],
            ].map(([num, title, text], index) => (
              <li
                key={num}
                className={`relative flex items-center gap-4 px-6 py-6 sm:px-7 ${
                  index < 2
                    ? "border-b border-[#e4ebe6] sm:border-b-0 sm:border-r"
                    : ""
                }`}
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-[#123c29] text-sm font-black tracking-[-.04em] text-[#f0d44b]">
                  {num}
                </span>
                <div>
                  <p className="font-extrabold tracking-[-.03em]">{title}</p>
                  <p className="mt-1 text-sm leading-snug text-[#6b7d72]">
                    {text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section
          id="prednosti"
          className="mx-auto max-w-7xl px-5 py-28 lg:px-8"
        >
          <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <p className="eyebrow">Zašto Degra</p>
              <h2 className="section-title mt-4">
                Pouzdano i provereno rešenje.
              </h2>
              <p className="mt-6 max-w-md leading-relaxed text-[#627267]">
                Dodaci ishrani često zvuče ubedljivo, a sastav ostave nejasan.
                Degra u svaku tabletu stavlja sildenafil — supstancu čije je
                dejstvo poznato — i to više nego kod proizvoda koji su već na
                tržištu. Zato ne birate nadu. Birate ono što tableta stvarno
                nosi.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {benefits.map((benefit, index) => (
                <article
                  key={benefit.title}
                  className={`flex flex-col rounded-[1.6rem] p-6 ${
                    index === 1
                      ? "bg-[#123c29] text-white shadow-[0_18px_50px_rgba(18,60,41,.18)]"
                      : "bg-white shadow-[0_12px_40px_rgba(18,60,41,.06)]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div
                      className={`grid size-11 place-items-center rounded-2xl ${
                        index === 1
                          ? "bg-[#f0d44b] text-[#123c29]"
                          : "bg-[#123c29] text-white"
                      }`}
                    >
                      <Icon name={benefit.icon} />
                    </div>
                  </div>
                  <h3 className="mt-8 text-xl font-extrabold tracking-[-.035em]">
                    {benefit.title}
                  </h3>
                  <p
                    className={`mt-3 text-sm leading-relaxed ${
                      index === 1 ? "text-white/65" : "text-[#6b7d72]"
                    }`}
                  >
                    {benefit.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="kako-deluje" className="bg-[#eaf1ec] py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="max-w-2xl">
              <p className="eyebrow">Jednostavno korišćenje</p>
              <h2 className="section-title mt-4">Kako Degra radi?</h2>
              <p className="mt-5 max-w-xl text-[#627267]">
                Uz stimulaciju, sildenafil u Degri opušta krvne sudove. Krv
                lakše stiže u penis i erekcija dolazi stabilnije, baš kada
                vam taj trenutak treba.
              </p>
            </div>
            <div className="relative mt-16">
              <div className="absolute top-7 right-[16%] left-[16%] hidden h-px bg-[#123c29]/15 md:block" />
              <ol className="grid gap-5 md:grid-cols-3">
                {[
                  [
                    "01",
                    "Seksualna stimulacija",
                    "Telo oslobađa prirodne signale koji pokreću proces erekcije.",
                  ],
                  [
                    "02",
                    "Opuštanje krvnih sudova",
                    "Sildenafil smanjuje aktivnost PDE5 i podržava opuštanje glatkih mišića.",
                  ],
                  [
                    "03",
                    "Bolji dotok krvi",
                    "Uz stimulaciju, krv lakše dolazi u penis i pomaže stabilnijoj erekciji.",
                  ],
                ].map(([num, title, text], index) => (
                  <li
                    key={num}
                    className="relative overflow-hidden rounded-[1.75rem] bg-white p-7 shadow-[0_14px_40px_rgba(18,60,41,.07)]"
                  >
                    <div className="flex items-start justify-between">
                      <span className="relative z-10 grid size-10 place-items-center rounded-full bg-[#123c29] text-sm font-black text-white">
                        {index + 1}
                      </span>
                    </div>
                    <h3 className="mt-8 text-xl font-extrabold tracking-[-.03em]">
                      {title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#6b7d72]">
                      {text}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="bg-[#123c29] py-28 text-white">
          <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 lg:grid-cols-2 lg:px-8">
            <div className="relative mx-auto flex w-full max-w-lg justify-center rounded-[2.5rem] border border-white/10 bg-[#0d2c1e] py-14 shadow-[0_24px_60px_rgba(0,0,0,.22)]">
              <div className="absolute left-7 top-7 flex flex-wrap gap-2">
                {["Degra 50 mg", "Degra 100 mg"].map((label) => (
                  <span
                    key={label}
                    className="rounded-full bg-white/10 px-4 py-2 text-xs font-bold text-white/80"
                  >
                    {label}
                  </span>
                ))}
              </div>
              <ProductBox />
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-[.18em] text-[#f0d44b]">
                Pravilna primena
              </p>
              <h2 className="section-title mt-4">
                Planirajte malo.
                <br />
                Uživajte prirodno.
              </h2>
              <div className="mt-8 space-y-6">
                {[
                  [
                    "30–60 min ranije",
                    "Tabletu progutajte sa vodom pre planirane seksualne aktivnosti.",
                  ],
                  [
                    "Najviše 1× dnevno",
                    "Nikada ne uzimajte više od preporučene doze.",
                  ],
                  [
                    "Lakši obrok je bolji",
                    "Mastan obrok može usporiti početak dejstva, dok veća količina alkohola može smanjiti efekat.",
                  ],
                ].map(([title, text]) => (
                  <div key={title} className="flex gap-4">
                    <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-[#f0d44b] text-[#123c29]">
                      <Icon name="check" className="size-4" />
                    </span>
                    <div>
                      <h3 className="font-extrabold">{title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-white/65">
                        {text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="pitanja" className="mx-auto max-w-5xl px-5 py-28">
          <div className="text-center">
            <p className="eyebrow">Otvoreno i jasno</p>
            <h2 className="section-title mt-4">Česta pitanja</h2>
          </div>
          <div className="mt-12 divide-y divide-[#dce5df] border-y border-[#dce5df]">
            {faqs.map((faq, index) => (
              <article key={faq.q}>
                <button
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                  aria-expanded={openFaq === index}
                >
                  <span className="text-lg font-extrabold tracking-[-.02em]">
                    {faq.q}
                  </span>
                  <span
                    className={`grid size-9 shrink-0 place-items-center rounded-full border border-[#cfdad3] transition duration-300 ${
                      openFaq === index
                        ? "rotate-45 bg-[#123c29] text-white"
                        : ""
                    }`}
                  >
                    <Icon name="plus" className="size-4" />
                  </span>
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    openFaq === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-3xl pb-7 text-sm leading-7 text-[#66786c]">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="narucivanje" className="bg-[#eaf1ec] py-28">
          <div className="mx-auto grid max-w-6xl overflow-hidden rounded-[2.5rem] bg-white shadow-[0_30px_100px_rgba(18,60,41,.1)] lg:grid-cols-[.9fr_1.1fr]">
            <div className="flex flex-col justify-between bg-[#123c29] p-8 text-white sm:p-12">
              <div>
                <p className="text-xs font-black uppercase tracking-[.2em] text-[#f0d44b]">
                  Porudžbina
                </p>
                <h2 className="mt-5 text-4xl font-black leading-tight tracking-[-.055em]">
                  Poručite za par minuta.
                </h2>
                <p className="mt-5 leading-relaxed text-white/55">
                  Unesite podatke i adresu. Paket šaljemo na kućnu adresu, a
                  plaćate pouzećem kad stigne.
                </p>
              </div>
              <div className="mt-12 space-y-3 text-xs font-semibold text-white/60">
                <p className="flex items-center gap-3">
                  <Icon name="lock" className="size-4 text-[#f0d44b]" /> Podaci
                  se tretiraju poverljivo
                </p>
                <p className="flex items-center gap-3">
                  <Icon name="truck" className="size-4 text-[#f0d44b]" />{" "}
                  Dostava na adresu, plaćanje pouzećem
                </p>
              </div>
            </div>
            <div className="p-8 sm:p-12">
              {sent ? (
                <div className="flex min-h-[430px] flex-col items-center justify-center text-center">
                  <span className="grid size-16 place-items-center rounded-full bg-[#def0e5] text-[#16754a]">
                    <Icon name="check" className="size-8" />
                  </span>
                  <h3 className="mt-6 text-2xl font-black tracking-[-.04em]">
                    Porudžbina je primljena
                  </h3>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-[#6b7d72]">
                    Javljamo se da potvrdimo adresu, pa šaljemo paket. Plaćanje
                    je pouzećem, kuriru.
                  </p>
                  <Button
                    variant="light"
                    className="mt-7"
                    onClick={() => setSent(false)}
                  >
                    Nova porudžbina
                  </Button>
                </div>
              ) : (
                <form onSubmit={submit}>
                  <p className="text-sm font-extrabold">Jačina</p>
                  <div className="mt-3 grid gap-3 sm:grid-cols-2">
                    {["50 mg", "100 mg"].map((option) => (
                      <button
                        type="button"
                        key={option}
                        onClick={() => setStrength(option)}
                        className={`rounded-2xl border p-4 text-left transition ${
                          strength === option
                            ? "border-[#1f8a5b] bg-[#edf7f1] ring-1 ring-[#1f8a5b]"
                            : "border-[#dce5df] hover:border-[#9db5a6]"
                        }`}
                      >
                        <span className="block text-sm font-extrabold">
                          Degra {option}
                        </span>
                      </button>
                    ))}
                  </div>
                  <p className="mt-7 text-sm font-extrabold">Količina</p>
                  <div className="mt-3 flex items-center justify-between rounded-2xl border border-[#dce5df] px-4 py-3">
                    <div>
                      <span className="block text-sm font-extrabold">
                        {boxes}{" "}
                        {boxes === 1 ? "kutija" : boxes < 5 ? "kutije" : "kutija"}
                      </span>
                      <span className="mt-1 block text-xs text-[#6b7d72]">
                        {boxes * 4} tableta
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        aria-label="Manje kutija"
                        onClick={() => setBoxes((count) => Math.max(1, count - 1))}
                        className="grid size-9 place-items-center rounded-full border border-[#dce5df] text-lg leading-none"
                      >
                        −
                      </button>
                      <span className="w-6 text-center text-sm font-extrabold">
                        {boxes}
                      </span>
                      <button
                        type="button"
                        aria-label="Više kutija"
                        onClick={() => setBoxes((count) => Math.min(6, count + 1))}
                        className="grid size-9 place-items-center rounded-full bg-[#123c29] text-lg leading-none text-white"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="mt-7 grid gap-4 sm:grid-cols-2">
                    <label className="form-label">
                      Ime i prezime
                      <input
                        className="form-input"
                        required
                        placeholder="Vaše ime"
                      />
                    </label>
                    <label className="form-label">
                      Telefon
                      <input
                        className="form-input"
                        required
                        type="tel"
                        placeholder="06x xxx xxxx"
                      />
                    </label>
                    <label className="form-label sm:col-span-2">
                      Ulica i broj
                      <input
                        className="form-input"
                        required
                        placeholder="Ulica i broj"
                      />
                    </label>
                    <label className="form-label">
                      Grad
                      <input className="form-input" required placeholder="Grad" />
                    </label>
                    <label className="form-label">
                      Poštanski broj
                      <input
                        className="form-input"
                        required
                        inputMode="numeric"
                        placeholder="11000"
                      />
                    </label>
                    <label className="form-label sm:col-span-2">
                      E-mail
                      <input
                        className="form-input"
                        type="email"
                        placeholder="ime@email.com"
                      />
                    </label>
                  </div>
                  <label className="mt-5 flex cursor-pointer items-start gap-3 text-xs leading-relaxed text-[#6b7d72]">
                    <input
                      required
                      type="checkbox"
                      className="mt-0.5 size-4 accent-[#1f8a5b]"
                    />
                    Imam 18+ godina i potvrđujem porudžbinu. Plaćanje je
                    pouzećem pri dostavi.
                  </label>
                  <Button type="submit" className="mt-7 w-full">
                    Poruči <Icon name="arrow" />
                  </Button>
                  <p className="mt-4 text-center text-[11px] leading-relaxed text-[#849187]">
                    Paket stiže na kućnu adresu. Plaćate pouzećem, kuriru.
                  </p>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#0d2c1e] px-5 py-12 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <a href="#" className="inline-flex items-center" aria-label="Degra Srbija">
              <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Degra Srbija" className="h-11 w-auto" />
            </a>
          </div>
          <div className="flex flex-wrap gap-5 text-xs font-semibold text-white/50">
            <a href="#pitanja" className="hover:text-white">
              Česta pitanja
            </a>
            <a href="#narucivanje" className="hover:text-white">
              Kontakt
            </a>
          </div>
        </div>
        <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-2 border-t border-white/10 pt-6 text-[11px] text-white/30 sm:flex-row sm:justify-between">
          <p>© 2026 Degra Srbija</p>
        </div>
      </footer>

      <button
        onClick={scrollToOrder}
        className="fixed bottom-4 left-4 right-4 z-40 flex min-h-13 items-center justify-center gap-2 rounded-full bg-[#f0d44b] px-5 text-sm font-black text-[#123c29] shadow-2xl md:hidden"
      >
        Poruči odmah <Icon name="arrow" />
      </button>
    </div>
  )
}

export default App
