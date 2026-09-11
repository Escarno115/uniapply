import Link from "next/link";
import { ProfileWizard } from "@/components/profile-wizard/ProfileWizard";

export default function ApplyPage() {
  return (
    <main className="min-h-screen">
      <header className="border-b border-ink-100">
        <div className="container flex items-center justify-between py-5">
          <Link href="/" className="font-serif text-lg font-semibold text-ink-900">
            UniApply
          </Link>
          <Link href="/dashboard" className="text-sm text-ink-500 hover:text-ink">
            Save &amp; exit
          </Link>
        </div>
      </header>
      <div className="container py-14">
        <ProfileWizard />
      </div>
    </main>
  );
}
