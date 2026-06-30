import { register } from "@/lib/shell/registry";
import { t, c, cy, y, mu, fg, L, pad } from "./_helpers";
import { projects } from "@/lib/data/portfolio";

register({
  name: "projects",
  description: "List all projects.",
  run: () => {
    const lines: any[] = [L(c("Projects"), mu(` — ${projects.length} builds`)), L("")];
    const maxName = Math.max(...projects.map((p) => p.name.length), 8);
    projects.forEach((p, i) => {
      const idx = String(i + 1).padStart(2, "0");
      lines.push(L(mu(`${idx} `), pad(fg(p.name), maxName), statusSeg(p.status), mu("   " + p.tagline)));
      lines.push(L(mu("    "), cy("tech: "), fg(p.technologies.join(" · ")), mu(`   (${p.year})`)));
      lines.push(L(mu("    "), mu(`view with: project ${p.slug}`)));
      lines.push("");
    });
    return [t.rich(lines)];
  },
  complete: () => projects.map((p) => p.slug),
});

function statusSeg(s: string) {
  if (s === "Shipped") return c("  [shipped]");
  if (s === "In Progress") return y("  [wip]");
  return mu("  [proto]");
}
