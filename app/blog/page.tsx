import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata = {
  title: "Blog — Your Name",
  description: "Articles and notes.",
};

export default function BlogIndex() {
  const posts = getAllPosts();
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Blog</h1>
      {posts.length === 0 ? (
        <p className="text-neutral-500">
          No posts yet. Add a <code>.md</code> file to <code>content/posts/</code>.
        </p>
      ) : (
        <ul className="space-y-6">
          {posts.map((post) => (
            <li key={post.slug} className="border-b border-neutral-200 dark:border-neutral-800 pb-6">
              <Link href={`/blog/${post.slug}`} className="block group">
                <div className="flex items-baseline justify-between gap-4">
                  <h2 className="text-xl font-semibold group-hover:text-blue-600">{post.title}</h2>
                  <span className="text-sm text-neutral-500 whitespace-nowrap">{post.date}</span>
                </div>
                {post.excerpt && (
                  <p className="text-neutral-600 dark:text-neutral-400 mt-2">{post.excerpt}</p>
                )}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
