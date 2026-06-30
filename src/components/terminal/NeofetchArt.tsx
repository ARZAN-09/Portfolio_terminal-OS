"use client";

import { profile, projects, contacts } from "@/lib/data/portfolio";

const ART = String.raw`
   ___   ___   ____   ___ ___   ___ ___
  / _ \ / _ \ | __ ) / __| _ \ | _ \ _ \
 | (_) | |_| ||  _ \| (__|   / |  _/  _/
  \___/ \___/ |____/ \___|_|_\ |_| |_|
`;

export function NeofetchArt() {
  const rows: [string, string][] = [
    ["OS", profile.os],
    ["Host", profile.name],
    ["Shell", profile.shell],
    ["Role", profile.role],
    ["Education", "Diploma CSE"],
    ["Focus", profile.focus.join(", ")],
    ["Projects", String(projects.length)],
    ["GitHub", `@${profile.githubUsername}`],
    ["Location", profile.location],
    ["Uptime", "since you arrived"],
  ];
  const colors = [
    "text-term-accent",
    "text-term-cyan",
    "text-term-yellow",
  ];
  return (
    <div className="flex flex-col sm:flex-row gap-4 py-1">
      <pre className="text-term-accent text-glow text-xs leading-tight select-none">{ART}</pre>
      <div className="flex flex-col">
        <div className="text-term-accent text-glow mb-1">
          {profile.username}@{profile.host}
        </div>
        <div className="text-term-muted mb-1">{"─".repeat(28)}</div>
        {rows.map(([k, v], i) => (
          <div key={k} className="flex gap-2 text-sm">
            <span className={`${colors[i % colors.length]} w-28 shrink-0`}>{k}</span>
            <span className="text-term-fg">{v}</span>
          </div>
        ))}
        <div className="mt-2 flex gap-1">
          {["bg-term-accent", "bg-term-cyan", "bg-term-yellow", "bg-term-error", "bg-term-muted"].map(
            (c, i) => (
              <span key={i} className={`inline-block w-4 h-4 ${c}`} />
            )
          )}
        </div>
      </div>
    </div>
  );
}
