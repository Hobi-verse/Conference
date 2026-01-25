import "./globals.css";
import { siteConfig } from "@/data/site-config";
import { branding } from "@/data/branding";
import { AnimatedLayout } from "@/components/layout/animated-layout";

export const metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  icons: {
    icon: branding.logo.src,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-background text-foreground font-sans min-h-screen flex flex-col transition-all duration-300">
        <AnimatedLayout>{children}</AnimatedLayout>
      </body>
    </html>
  );
}
