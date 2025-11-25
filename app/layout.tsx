import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Pat’s Power Washing | DMV Pressure Washing",
  description: "Professional pressure washing across Maryland, DC, and Virginia.",
  icons: {
    // These generate the <link rel="icon"...> & <link rel="apple-touch-icon"...> tags
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: "/favicon-32x32.png", // optional
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900">
        <Header />
        <main>{children}</main>
        {/* keep your footer */}
      </body>
      <Footer />
    </html>
  );
}
