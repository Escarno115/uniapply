import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export default function LandingPage() {
  return (
    <main>
      <header className="container flex items-center justify-between py-6">
        <span className="font-serif text-lg font-semibold text-ink-900">UniApply</span>
        <nav className="flex items-center gap-6 text-sm">
          <Link href="/universities" className="text-ink-500 hover:text-ink">
            Browse schools
          </Link>
          <Link href="/dashboard">
            <Button variant="outline" size="sm">Sign in</Button>
          </Link>
        </nav>
      </header>

      <section className="container grid gap-12 py-16 md:grid-cols-[1.1fr_0.9fr] md:py-24">
        <div>
          <h1 className="max-w-[13ch] text-[2.75rem] leading-[1.08] font-semibold tracking-tight md:text-[3.5rem]">
            One application. Every school you're applying to.
          </h1>
          <p className="mt-6 max-w-[46ch] text-lg leading-relaxed text-ink-500">
            Fill in your profile, transcripts, and essays once. Add the
            colleges you're applying to, and we route your information to
            each one in the format they need.
          </p>
          <div className="mt-9 flex items-center gap-4">
            <Link href="/apply">
              <Button size="lg" variant="brass">
                Start your profile
              </Button>
            </Link>
            <Link
              href="/universities"
              className="inline-flex items-center gap-1 text-sm font-medium text-ink hover:text-brass-700"
            >
              See participating schools <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="self-center">
          <div className="rounded-lg border border-ink-100 bg-white p-7 shadow-card">
            <p className="font-serif text-base text-ink-700">Your application, at a glance</p>
            <ul className="mt-5 space-y-4">
              {[
                { label: "Profile & transcripts", status: "Complete" },
                { label: "Personal statement", status: "In progress" },
                { label: "Recommendation letters", status: "Not started" },
              ].map((row) => (
                <li key={row.label} className="flex items-center justify-between border-t border-ink-100 pt-4 first:border-t-0 first:pt-0">
                  <span className="text-sm text-ink-700">{row.label}</span>
                  <span
                    className={`text-xs font-medium ${
                      row.status === "Complete"
                        ? "text-sage"
                        : row.status === "In progress"
                        ? "text-brass-700"
                        : "text-ink-300"
                    }`}
                  >
                    {row.status}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="container py-16">
        <div className="ledger-rule pt-10 grid gap-10 md:grid-cols-3">
          {[
            {
              title: "Build your profile once",
              body: "Personal details, academic history, and essays live in one place, ready to reuse for every school.",
            },
            {
              title: "Add the schools you want",
              body: "Search and select from participating colleges and universities. Each shows its own deadlines and extra requirements.",
            },
            {
              title: "Track every decision",
              body: "Follow each application's status — submitted, under review, decided — from a single dashboard.",
            },
          ].map((f) => (
            <div key={f.title}>
              <h3 className="text-lg font-semibold text-ink-900">{f.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-500">{f.body}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
