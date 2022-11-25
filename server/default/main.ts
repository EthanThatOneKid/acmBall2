// Reference:
// https://github.com/EthanThatOneKid/generic-storage/blob/main/demos/default/main.ts

import { parse } from "https://deno.land/std@0.166.0/flags/mod.ts";

import { serve } from "https://github.com/ethanthatonekid/generic-storage/raw/main/serve.ts";

main();

function main() {
  const flags = parse(Deno.args);
  const port = Number(flags.port || flags.p) || 8080;

  serve({ port });
}
