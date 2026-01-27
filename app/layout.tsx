import "./globals.css";
import { siteConfig } from "@/data/site-config";
import { branding } from "@/data/branding";
import Providers from "@/components/layout/providers";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import MotionSection from "@/components/layout/motion-section";

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
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="bg-background text-foreground font-sans min-h-screen flex flex-col">
        <Providers>
          {/* Header animation */}
          <MotionSection direction="up">
            <Header />
          </MotionSection>

          {/* Page content */}
          <main className="grow mx-auto max-w-7xl px-4 py-6">{children}</main>

          {/* Footer animation */}
          <MotionSection direction="down" delay={0.2}>
            <Footer />
          </MotionSection>
        </Providers>
      </body>
    </html>
  );
}
