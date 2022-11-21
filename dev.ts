#!/usr/bin/env -S deno run -A --watch=static/,routes/

import dev from "$live/dev.ts";

await dev(import.meta.url, "./main.ts");
