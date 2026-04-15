import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mukhthar Ali Ashraf",
  description: "QA engineer in Kochi, building apps and exploring agentic AI.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="max-w-xl mx-auto px-6 py-16">
          <header className="mb-16">
            <nav className="flex items-center justify-between text-sm">
              <Link href="/" className="no-underline font-medium">
                Mukhthar
              </Link>
              <div className="flex gap-6">
                <Link href="/" className="no-underline hover:underline">home</Link>
                <Link href="/blog" className="no-underline hover:underline">blog</Link>
                <a
                  href="https://github.com/mukhtharali16"
                  target="_blank"
                  rel="noreferrer"
                  className="no-underline hover:underline"
                >
                  github
                </a>
              </div>
            </nav>
          </header>
          <main>{children}</main>
          <footer className="mt-24 pt-8 border-t border-neutral-200 dark:border-neutral-900 text-xs text-neutral-500">
            © {new Date().getFullYear()} Mukhthar Ali Ashraf
          </footer>
        </div>
      </body>
    </html>
  );
}
