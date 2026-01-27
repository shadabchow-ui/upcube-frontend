export const dynamic = "force-static";

type Entry = {
  loc: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: number;
};

function xmlEscape(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export async function GET() {
  const base = "https://upcube.ai";

  const urls: Entry[] = [
    { loc: `${base}/`, changefreq: "daily", priority: 1.0 },
    { loc: `${base}/research`, changefreq: "weekly", priority: 0.8 },
    { loc: `${base}/company`, changefreq: "monthly", priority: 0.6 },
    { loc: `${base}/news`, changefreq: "daily", priority: 0.7 },
    { loc: `${base}/privacy-policy`, changefreq: "yearly", priority: 0.3 },
    { loc: `${base}/terms-of-service`, changefreq: "yearly", priority: 0.3 },
    { loc: `${base}/security`, changefreq: "yearly", priority: 0.3 },
  ];

  const body =
    `<?xml version="1.0" encoding="UTF-8"?>` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">` +
    urls
      .map((u) => {
        const pr = typeof u.priority === "number" ? `<priority>${u.priority.toFixed(1)}</priority>` : ``;
        const cf = u.changefreq ? `<changefreq>${u.changefreq}</changefreq>` : ``;
        return `<url><loc>${xmlEscape(u.loc)}</loc>${cf}${pr}</url>`;
      })
      .join("") +
    `</urlset>`;

  return new Response(body, {
    headers: {
      "content-type": "application/xml; charset=utf-8",
      "cache-control": "public, max-age=3600",
    },
  });
}
