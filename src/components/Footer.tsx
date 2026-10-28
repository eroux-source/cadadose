import Link from "next/link";
import { dictionary as t } from "@/i18n/dictionaries";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-border">
      <div className="mx-auto max-w-5xl px-4 py-8 text-sm text-muted space-y-3">
        <p>{t.disclaimer}</p>
        <div className="flex gap-4">
          <Link href="/privacidade" className="hover:text-accent">{t.footer.privacy}</Link>
          <Link href="/termos" className="hover:text-accent">{t.footer.terms}</Link>
          <span>© 2026 CadaDose</span>
        </div>
      </div>
    </footer>
  );
}
