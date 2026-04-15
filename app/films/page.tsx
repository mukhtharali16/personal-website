import type { Metadata } from "next";
import { films } from "@/lib/films";

export const metadata: Metadata = {
  title: "Films — Mukhthar Ali Ashraf",
  description:
    "A running list of my favourite films — Kurosawa to Nolan, with a few Malayalam classics thrown in.",
};

export default function FilmsPage() {
  return (
    <div className="space-y-10">
      <section>
        <h1 className="text-2xl font-medium mb-4">Films</h1>
        <p className="text-neutral-700 dark:text-neutral-300 leading-7">
          A top-ten list that refused to stay at ten. In no particular order —
          ranking favourites is a fool's errand.
        </p>
      </section>

      <section>
        <ul className="grid grid-cols-2 gap-x-5 gap-y-10">
          {films.map((f) => (
            <li key={f.title} className="space-y-3">
              <div className="aspect-[2/3] overflow-hidden rounded-md bg-neutral-100 dark:bg-neutral-900 ring-1 ring-neutral-200 dark:ring-neutral-800">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={f.poster}
                  alt={`${f.title} poster`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div>
                <div className="flex items-baseline justify-between gap-2">
                  <span className="font-medium leading-tight">{f.title}</span>
                  <span className="text-xs text-neutral-500 tabular-nums">
                    {f.year}
                  </span>
                </div>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1 leading-6">
                  {f.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
