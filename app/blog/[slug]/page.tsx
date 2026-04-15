import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllPosts, getPost } from "@/lib/posts";

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);
  if (!post) return {};
  return { title: `${post.title} — Mukhthar Ali Ashraf`, description: post.excerpt };
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);
  if (!post) notFound();
  return (
    <article>
      <Link href="/blog" className="text-sm no-underline hover:underline text-neutral-500">
        ← writing
      </Link>
      <h1 className="text-2xl font-medium mt-6 mb-2">{post.title}</h1>
      <p className="text-sm text-neutral-500 mb-10 tabular-nums">{post.date}</p>
      <div className="prose-custom" dangerouslySetInnerHTML={{ __html: post.html }} />
    </article>
  );
}
