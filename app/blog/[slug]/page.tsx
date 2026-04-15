import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllPosts, getPost } from "@/lib/posts";

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);
  if (!post) return {};
  return { title: `${post.title} — Your Name`, description: post.excerpt };
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);
  if (!post) notFound();
  return (
    <article>
      <Link href="/blog" className="text-sm text-blue-600 hover:underline">← Back to blog</Link>
      <h1 className="text-4xl font-bold mt-4 mb-2">{post.title}</h1>
      <p className="text-sm text-neutral-500 mb-8">{post.date}</p>
      <div className="prose-custom" dangerouslySetInnerHTML={{ __html: post.html }} />
    </article>
  );
}
