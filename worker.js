import { generateSvg } from "./utils/index.js";

export default {
  async fetch(request, env, ctx) {
    const { pathname } = new URL(request.url);

    const headers = {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "no-cache,max-age=0",
      Pragma: "no-cache",
    };

    if (!pathname || pathname === "/") {
      const svg = generateSvg("wx:zxpzdtom");
      return new Response(svg, { headers });
    }

    const count = (await env.REFERER_COUNTER.get(pathname)) || 0;
    const value = parseInt(count) + 1;
    await env.REFERER_COUNTER.put(pathname, value);

    const svg = generateSvg(String(value).padStart(6, "0"));
    return new Response(svg, { headers });
  },
};
