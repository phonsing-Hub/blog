import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import NavbarBlog from "@/components/blog/navbarBlog";
import ListMenu from "@/components/blog/menu";
import AntdProvider from "@/components/blog/ConfigProvider";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { Dashed } from "@/components/blog/Dashed";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: "p.phonsing_",
    template: `p.phonsing_%s`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="./favicon.ico" sizes="32x32" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <Dashed/>
          <NavbarBlog />
          <div className="Blog max-w-7xl mx-auto ">
            <main className="flex relative">
              <section
                id="BlogNavbar1"
                className="hidden lg:flex justify-end flex-[1] pt-10 relative"
              >
                <div className=" sticky top-10">
                  <ListMenu />
                </div>
              </section>
              <AntdProvider>
             {children}
             </AntdProvider>
            </main>
          </div>
        </ThemeProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
