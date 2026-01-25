// components/longform/table-of-contents.tsx
"use client";

import { useEffect, useMemo, useState } from "react";

type TocItem = { id: string; label: string };

export default function TableOfContents({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = useState<string>(items[0]?.id ?? "");

  const ids = useMemo(() => items.map((i) => i.id), [items]);

  useEffect(() => {
    const els = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        // Prefer the entry closest to the top that is intersecting
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (a.boundingClientRect.top ?? 0) - (b.boundingClientRect.top ?? 0));

        if (visible[0]?.target?.id) setActiveId(visible[0].target.id);
      },
      {
        root: null,
        // tune so a section becomes active as it nears the top
        rootMargin: "-20% 0px -70% 0px",
        threshold: [0, 1],
      }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [ids]);

  return (
    <nav className="space-y-2">
      {items.map((i) => {
        const isActive = i.id === activeId;
        return (
          <a
            key={i.id}
            href={`#${i.id}`}
            className={[
              "block text-sm",
              isActive
                ? "font-semibold text-white underline underline-offset-4"
                : "text-white/75 hover:text-white hover:underline hover:underline-offset-4",
            ].join(" ")}
          >
            {i.label}
          </a>
        );
      })}
    </nav>
  );
}
