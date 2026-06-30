import { register } from "@/lib/shell/registry";
import { t, c, cy, y, mu, fg, L, pad } from "./_helpers";
import { contacts } from "@/lib/data/portfolio";

register({
  name: "contact",
  description: "Display contact channels.",
  run: () => {
    const w = 12;
    return [
      t.rich([
        L(c("Contact")),
        L(""),
        L(pad(cy("Email"), w), fg(" " + contacts.email)),
        L(pad(cy("Phone"), w), fg(" " + contacts.phone)),
        L(pad(cy("Location"), w), fg(" " + contacts.location)),
        L(pad(cy("GitHub"), w), fg(" " + contacts.github)),
        L(pad(cy("Instagram"), w), fg(" " + contacts.instagram)),
        L(pad(cy("Twitter/X"), w), fg(" " + contacts.twitter)),
        L(""),
        L(mu("// type `email` to compose a message right here in the terminal")),
      ]),
    ];
  },
});
