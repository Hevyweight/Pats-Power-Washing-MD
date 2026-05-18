import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Pat's Power Washing | DMV Pressure Washing",
  description: "Professional pressure washing across Maryland, DC, and Virginia.",
  icons: {
    icon: [
      { url: "/images/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/images/favicon/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/images/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/images/favicon/favicon-144x144.png", sizes: "144x144", type: "image/png" },
      { url: "/images/favicon/favicon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/favicon-32x32.png",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window,document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '2039268063636956');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=2039268063636956&ev=PageView&noscript=1"
          />
        </noscript>
      </head>
      {/* Do NOT put icon <link> tags here. Metadata handles it automatically. */}
      <body className="bg-transparent text-slate-900 min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}