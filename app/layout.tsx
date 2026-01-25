import "./globals.css";
import { siteConfig } from "@/data/site-config";
import { Header } from "@/components/features/layout/header";
import { Footer } from "@/components/features/layout/footer";
import { ThemeProvider } from "@/context/theme-context";
import { branding } from "@/data/branding";

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
    <html lang="en">
      <body className="bg-background text-foreground font-sans min-h-screen flex flex-col">
        <ThemeProvider>
          <Header />
          <main className="grow">
            <div className="mx-auto max-w-7xl px-4 py-6">{children}</div>
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
