import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { universities } from "@/data/universities";

// Placeholder — in a real app this comes from the signed-in student's data.
const mockApplications = [
  { university: universities[0], status: "Submitted" as const },
  { university: universities[2], status: "In progress" as const },
  { university: universities[4], status: "Not started" as const },
];

const statusStyles: Record<string, string> = {
  Submitted: "bg-sage-100 text-sage",
  "In progress": "bg-brass-100 text-brass-700",
  "Not started": "bg-ink-50 text-ink-300",
};

export default function DashboardPage() {
  const profileCompletion = 66;

  return (
    <main className="min-h-screen">
      <header className="border-b border-ink-100">
        <div className="container flex items-center justify-between py-5">
          <Link href="/" className="font-serif text-lg font-semibold text-ink-900">
            UniApply
          </Link>
          <Link href="/apply" className="text-sm text-ink-500 hover:text-ink">
            Edit profile
          </Link>
        </div>
      </header>

      <div className="container grid gap-8 py-12 lg:grid-cols-[1fr_320px]">
        <div>
          <h1 className="text-2xl font-semibold text-ink-900">Your applications</h1>

          <div className="mt-6 space-y-4">
            {mockApplications.map(({ university, status }) => (
              <Card key={university.id}>
                <CardContent className="flex items-center justify-between p-5">
                  <div>
                    <h3 className="text-[15px] font-semibold text-ink-900">{university.name}</h3>
                    <p className="mt-0.5 text-sm text-ink-500">
                      {university.location} · Deadline {university.deadline}
                    </p>
                  </div>
                  <span className={`rounded-full px-3 py-1 text-xs font-medium ${statusStyles[status]}`}>
                    {status}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>

          <Link href="/universities">
            <Button variant="outline" className="mt-6">
              Add another school
            </Button>
          </Link>
        </div>

        <aside>
          <Card>
            <CardContent className="p-6">
              <h2 className="text-sm font-semibold text-ink-900">Profile completeness</h2>
              <div className="mt-3">
                <Progress value={profileCompletion} />
                <p className="mt-2 text-xs text-ink-500">{profileCompletion}% complete</p>
              </div>
              <ul className="mt-5 space-y-2.5 text-sm">
                <li className="flex items-center justify-between">
                  <span className="text-ink-700">Personal info</span>
                  <span className="text-xs font-medium text-sage">Done</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-ink-700">Academic history</span>
                  <span className="text-xs font-medium text-sage">Done</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-ink-700">Personal statement</span>
                  <span className="text-xs font-medium text-ink-300">Not started</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </aside>
      </div>
    </main>
  );
}
