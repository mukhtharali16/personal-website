import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Your Name — Personal Site",
  description: "Portfolio, projects, and writing by Your Name.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="border-b border-neutral-200 dark:border-neutral-800">
          <nav className="max-w-3xl mx-auto flex items-center justify-between px-6 py-4">
            <Link href="/" className="font-semibold tracking-tight">
              Your Name
            </Link>
            <div className="flex gap-6 text-sm">
              <Link href="/" className="hover:underline">Home</Link>
              <Link href="/#projects" className="hover:underline">Projects</Link>
              <Link href="/blog" className="hover:underline">Blog</Link>
              <Link href="/#contact" className="hover:underline">Contact</Link>
            </div>
          </nav>
        </header>
        <main className="max-w-3xl mx-auto px-6 py-10">{children}</main>
        <footer className="max-w-3xl mx-auto px-6 py-10 text-sm text-neutral-500">
          © {new Date().getFullYear()} Your Name. Built with Next.js & Tailwind.
        </footer>
      </body>
    </html>
  );
}
