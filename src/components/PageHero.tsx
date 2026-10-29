import Link from "next/link";

/** Inner-page header, as in the reference: dark teal band with blob texture, serif title, breadcrumb under it. */
export default function PageHero({ eyebrow, title, lede, image, crumbs, children, tall }: {
  eyebrow?: string; title: string; lede?: string; image?: string; tall?: boolean; crumbs?: { label: string; href?: string }[]; children?: React.ReactNode;
}) {
  return (
    <section className="blobs text-white">
      <div className={`mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:px-10 md:py-24 ${image ? "md:grid-cols-[3fr_2fr]" : ""} ${tall ? "pb-28 md:pb-40" : ""}`}>
        <div>
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h1 className="mt-4 max-w-4xl">{title}</h1>
          {lede && <p className="mt-6 max-w-2xl text-base font-light text-white/75 md:text-lg">{lede}</p>}
          {crumbs && (
            <nav className="mt-8 text-xs font-light text-white/60">
              {crumbs.map((c, i) => (
                <span key={i}>{i > 0 && <span className="mx-2">/</span>}{c.href ? <Link href={c.href} className="hover:text-accent">{c.label}</Link> : <span className="text-white/85">{c.label}</span>}</span>
              ))}
            </nav>
          )}
          {children}
        </div>
        {image && (
          <div className="frame"><div className="aspect-[4/3] overflow-hidden rounded-[3px]"><img src={image} alt="" className="photo" /></div></div>
        )}
      </div>
    </section>
  );
}
