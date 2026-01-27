export const dynamic = "force-static";

function xmlEscape(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export async function GET() {
  const sitemaps = [
    "https://upcube.ai/sitemap-main.xml",
    "https://chat.upcube.ai/sitemap.xml",
    "https://image.upcube.ai/sitemap.xml",
    "https://headshots.upcube.ai/sitemap.xml",
    "https://voice.upcube.ai/sitemap.xml",
    "https://video.upcube.ai/sitemap.xml",
    "https://detect.upcube.ai/sitemap.xml",
    "https://script.upcube.ai/sitemap.xml",
  ];

  const body =
    `<?xml version="1.0" encoding="UTF-8"?>` +
    `<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">` +
    sitemaps.map((loc) => `<sitemap><loc>${xmlEscape(loc)}</loc></sitemap>`).join("") +
    `</sitemapindex>`;

  return new Response(body, {
    headers: {
      "content-type": "application/xml; charset=utf-8",
      "cache-control": "public, max-age=3600",
    },
  });
}

