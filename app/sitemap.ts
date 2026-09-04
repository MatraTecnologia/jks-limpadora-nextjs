import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { services } from "@/lib/services";

const sitemap = (): MetadataRoute.Sitemap => {
  const staticPaths = ["", "/servicos", "/empresa", "/certificados-clientes", "/contato", "/politica-de-privacidade"];
  return [
    ...staticPaths.map((p) => ({ url: `${site.url}${p}`, changeFrequency: "monthly" as const, priority: p === "" ? 1 : 0.7 })),
    ...services.map((s) => ({ url: `${site.url}/${s.slug}`, changeFrequency: "monthly" as const, priority: 0.8 })),
  ];
};

export default sitemap;
