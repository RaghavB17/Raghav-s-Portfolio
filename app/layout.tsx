import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/data/site";
import { SmoothScroll } from "@/components/smooth-scroll";
import { ScrollRail } from "@/components/scroll-rail";

export const metadata: Metadata = {
  title: `${siteConfig.name} | ${siteConfig.role}`,
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: { title: `${siteConfig.name} | ${siteConfig.role}`, description: siteConfig.description, type: "website", url: siteConfig.url },
  icons: { icon: "/favicon.svg" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><SmoothScroll><ScrollRail/>{children}</SmoothScroll></body></html>;
}
