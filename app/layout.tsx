import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { WhatsAppFloat } from "@/components/site/whatsapp-float";
import { MotionProvider } from "@/components/site/motion-provider";
import { MobileBar } from "@/components/site/mobile-bar";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-sans",
  axes: ["opsz", "wdth"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} · Limpeza pós-incêndio e higienização especializada`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: site.name,
  },
  robots: { index: true, follow: true },
};

const organization = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.name,
  url: site.url,
  telephone: "+551139754633",
  foundingDate: String(site.since),
  address: {
    "@type": "PostalAddress",
    streetAddress: `${site.address.street}, ${site.address.complement}`,
    addressLocality: site.address.city,
    addressRegion: site.address.state,
    postalCode: site.address.zip,
    addressCountry: "BR",
  },
  openingHours: "Mo-Su 07:00-21:00",
  areaServed: "BR",
  sameAs: Object.values(site.social),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={cn("h-full", bricolage.variable, "font-sans")}>
      <body className="flex min-h-full flex-col pb-[4.25rem] md:pb-0">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
        <MotionProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppFloat />
          <MobileBar />
        </MotionProvider>
      </body>
    </html>
  );
}
