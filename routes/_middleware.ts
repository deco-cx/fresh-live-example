import { withLive } from "$live/mod.ts";

export const handler = withLive({
  site: "start",
  siteId: 8,
  domains: ["mysitename.com"],
});
