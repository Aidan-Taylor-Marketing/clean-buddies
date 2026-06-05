import { Plus } from "lucide-react";

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="mx-auto max-w-3xl divide-y rounded-xl border">
      {items.map((item) => (
        <details key={item.q} className="group px-5 py-4 [&_svg]:open:rotate-45">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
            {item.q}
            <Plus className="h-5 w-5 shrink-0 text-primary transition-transform" />
          </summary>
          <p className="mt-3 text-sm text-muted-foreground">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
