/* Run:
 * deno run --reload --allow-net --allow-env server/dev/main.ts
 *
 * Reference:
 * https://github.com/EthanThatOneKid/generic-storage/blob/main/demos/default/main.ts
 */

import { parse } from "https://deno.land/std@0.166.0/flags/mod.ts";

import { serve } from "https://github.com/ethanthatonekid/generic-storage/raw/main/serve.ts";

main();

function main() {
  const flags = parse(Deno.args);
  const port = Number(flags.port || flags.p) || 8080;
  const allowedOrigins =
    (typeof flags.cors === "string" ? String(flags.cors) : flags.cors && "*") ||
    Deno.env.get("CORS") || "http://localhost:5173";

  serve({ port, allowedOrigins });
}
