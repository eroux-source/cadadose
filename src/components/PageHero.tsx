import Link from "next/link";

/** Shared page header: ink band, label, big light title, lede, photo on the right. */
export default function PageHero({ eyebrow, title, lede, image, crumbs, children }: {
  eyebrow?: string; title: string; lede?: string; image?: string; crumbs?: { label: string; href?: string }[]; children?: React.ReactNode;
}) {
  return (
    <section className="bg-ink text-[#f7f6f1]">
      <div className={`mx-auto grid max-w-7xl ${image ? "md:grid-cols-[3fr_2fr]" : ""}`}>
        <div className="flex flex-col justify-center px-6 py-12 md:px-12 md:py-20">
          {crumbs && (
            <nav className="text-xs text-white/60">
              {crumbs.map((c, i) => (
                <span key={i}>{i > 0 && " › "}{c.href ? <Link href={c.href} className="hover:text-white">{c.label}</Link> : c.label}</span>
              ))}
            </nav>
          )}
          {eyebrow && <span className="eyebrow mt-4 !text-white/60">{eyebrow}</span>}
          <h1 className="mt-3 max-w-3xl text-3xl leading-[1.08] md:text-5xl">{title}</h1>
          {lede && <p className="mt-5 max-w-2xl text-base text-white/75 md:text-lg">{lede}</p>}
          {children}
        </div>
        {image && (
          <div className="relative min-h-[240px] md:min-h-[420px]">
            <img src={image} alt="" className="photo absolute inset-0" />
          </div>
        )}
      </div>
    </section>
  );
}
