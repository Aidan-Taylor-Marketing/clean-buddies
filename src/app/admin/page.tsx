import { Sparkles } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import { signOut, updateLeadStatus } from "@/app/admin/actions";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export const dynamic = "force-dynamic";

const STATUSES = ["new", "contacted", "quoted", "won", "lost"] as const;

const statusVariant: Record<string, "default" | "secondary" | "outline"> = {
  new: "default",
  contacted: "secondary",
  quoted: "secondary",
  won: "default",
  lost: "outline",
};

export default async function AdminDashboard() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: leads } = await supabase
    .from("leads")
    .select("*")
    .order("created_at", { ascending: false });

  const rows = leads ?? [];
  const counts = {
    total: rows.length,
    new: rows.filter((l) => l.status === "new").length,
    won: rows.filter((l) => l.status === "won").length,
  };

  return (
    <div className="min-h-screen bg-muted/20">
      <header className="border-b bg-background">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2 font-semibold">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Sparkles className="h-5 w-5" />
            </span>
            Admin · Leads
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden text-sm text-muted-foreground sm:inline">
              {user?.email}
            </span>
            <form action={signOut}>
              <Button variant="outline" size="sm">Sign out</Button>
            </form>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8">
        <div className="grid gap-4 sm:grid-cols-3">
          <Card><CardContent className="pt-6">
            <p className="text-sm text-muted-foreground">Total leads</p>
            <p className="text-3xl font-bold">{counts.total}</p>
          </CardContent></Card>
          <Card><CardContent className="pt-6">
            <p className="text-sm text-muted-foreground">New / unworked</p>
            <p className="text-3xl font-bold">{counts.new}</p>
          </CardContent></Card>
          <Card><CardContent className="pt-6">
            <p className="text-sm text-muted-foreground">Won</p>
            <p className="text-3xl font-bold">{counts.won}</p>
          </CardContent></Card>
        </div>

        <h2 className="mt-8 mb-3 text-lg font-semibold">All leads</h2>

        {rows.length === 0 ? (
          <div className="rounded-xl border border-dashed p-12 text-center text-muted-foreground">
            No leads yet. Submissions from the website will appear here.
          </div>
        ) : (
          <div className="space-y-3">
            {rows.map((lead) => (
              <Card key={lead.id}>
                <CardContent className="grid gap-4 pt-6 md:grid-cols-[1fr_auto]">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-semibold">{lead.name}</span>
                      <Badge variant={statusVariant[lead.status] ?? "secondary"}>
                        {lead.status}
                      </Badge>
                      {lead.service && (
                        <span className="text-sm text-muted-foreground">
                          · {lead.service}
                        </span>
                      )}
                    </div>
                    <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
                      <a href={`mailto:${lead.email}`} className="hover:text-foreground">
                        {lead.email}
                      </a>
                      {lead.phone && (
                        <a href={`tel:${lead.phone}`} className="hover:text-foreground">
                          {lead.phone}
                        </a>
                      )}
                      {lead.address && <span>{lead.address}</span>}
                      <span>
                        {new Date(lead.created_at).toLocaleString("en-US", {
                          month: "short",
                          day: "numeric",
                          hour: "numeric",
                          minute: "2-digit",
                        })}
                      </span>
                    </div>
                    {lead.message && (
                      <p className="mt-2 text-sm">{lead.message}</p>
                    )}
                  </div>

                  <form action={updateLeadStatus} className="flex items-start gap-2">
                    <input type="hidden" name="id" value={lead.id} />
                    <select
                      name="status"
                      defaultValue={lead.status}
                      className="border-input bg-transparent h-9 rounded-md border px-2 text-sm"
                    >
                      {STATUSES.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                    <Button type="submit" size="sm" variant="secondary">Save</Button>
                  </form>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
