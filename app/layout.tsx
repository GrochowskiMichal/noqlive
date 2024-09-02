import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script"; // Import the Script component
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NoQ - Coming Soon",
  description:
    "NoQ is on a mission to redefine Food ordering. Stay tuned for our groundbreaking product that will change everything.",
  icons: {
    icon: [
      { rel: "icon", url: "/apple-icon.png" },
      { rel: "icon", type: "image/png", sizes: "96x96", url: "/favicon-96x96.png" },
      { rel: "icon", type: "image/png", sizes: "192x192", url: "/android-icon-192x192.png" },
    ],
    apple: [
      { rel: "apple-touch-icon", sizes: "72x72", url: "/apple-icon-72x72.png" },
      { rel: "apple-touch-icon", sizes: "152x152", url: "/apple-icon-152x152.png" },
      { rel: "apple-touch-icon", sizes: "180x180", url: "/apple-icon-180x180.png" },
    ],
    other: [
      { rel: "icon", type: "image/png", sizes: "70x70", url: "/ms-icon-70x70.png" },
      { rel: "icon", type: "image/png", sizes: "310x310", url: "/ms-icon-310x310.png" },
      { rel: "android-chrome", sizes: "72x72", url: "/android-icon-72x72.png" },
    ],
  },
  openGraph: {
    title: "NoQ - Coming Soon",
    description:
      "NoQ is on a mission to redefine Food ordering. Stay tuned for our groundbreaking product that will change everything.",
    url: "https://noqueue.pl",
    images: [
      {
        url: "https://noqueue.pl/og-image.jpg", // Placeholder for Open Graph image
        width: 1200,
        height: 630,
        alt: "NoQ - Coming Soon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NoQ - Revolutionizing [Your Industry]",
    description:
      "Something big is coming. Join our waitlist to be among the first to experience NoQ and its groundbreaking features.",
    images: ["https://noqueue.pl/twitter-image.jpg"], // Placeholder for Twitter image
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics Script */}
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-YV47CB2E9M`}
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YV47CB2E9M');
          `}
        </Script>
      </head>
      <body className={inter.className}>
      <Analytics/>
        {children}
      </body>
    </html>
  );
}
