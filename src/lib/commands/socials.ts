import { register } from "@/lib/shell/registry";
import { t, c, cy, mu, fg, L, pad } from "./_helpers";
import { socials } from "@/lib/data/portfolio";

register({
  name: "socials",
  description: "List social links.",
  run: () => {
    const lines: any[] = [L(c("Socials")), L("")];
    const w = 14;
    for (const s of socials) {
      lines.push(L(pad(cy(s.label), w), fg(` ${s.handle}`), mu(`  → ${s.url}`)));
    }
    return [t.rich(lines)];
  },
});
