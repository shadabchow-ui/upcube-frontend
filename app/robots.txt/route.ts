export const dynamic = "force-static";

export async function GET() {
  const body = [
    "User-agent: *",
    "Allow: /",
    "Sitemap: https://upcube.ai/sitemap.xml",
    "",
  ].join("\n");

  return new Response(body, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=3600",
    },
  });
}


