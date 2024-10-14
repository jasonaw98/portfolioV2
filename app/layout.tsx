import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jason Aw ",
  description: "Welcome to my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          defer
          src="https://umami-analytics-gules.vercel.app/script.js"
          data-website-id="fb708083-5417-4766-8af3-b66ccfda14ad"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jasonaw.vercel.app/" />
        <meta property="og:title" content="Jason Aw " />
        <meta property="og:description" content="Welcome to my portfolio" />
        <meta property="og:image" content="/ogimage.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://jasonaw.vercel.app/" />
        <meta property="twitter:title" content="Jason Aw " />
        <meta
          property="twitter:description"
          content="Welcome to my portfolio"
        />
        <meta property="twitter:image" content="/ogimage.png" />
      </head>
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 10 100 100'><text y='.9em' font-size='110'>🧑‍💻</text></svg>"
      />
      <body className={`${inter.className} bg-slate-100 dark:bg-[#05091ead]`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
