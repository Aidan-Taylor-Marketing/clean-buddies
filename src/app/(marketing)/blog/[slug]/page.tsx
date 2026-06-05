import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { createClient } from "@/lib/supabase/server";
import { Button } from "@/components/ui/button";

export const revalidate = 300;

async function getPost(slug: string) {
  const supabase = await createClient();
  const { data } = await supabase
    .from("blog_posts")
    .select("slug, title, excerpt, body, author, published_at")
    .eq("slug", slug)
    .eq("published", true)
    .maybeSingle();
  return data;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return { title: "Post not found" };
  return {
    title: post.title,
    description: post.excerpt ?? undefined,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-2xl px-4 py-16">
      <Link
        href="/blog"
        className="text-sm font-medium text-muted-foreground hover:text-foreground"
      >
        ← Back to blog
      </Link>
      <h1 className="mt-4 text-4xl font-bold tracking-tight">{post.title}</h1>
      <p className="mt-3 text-sm text-muted-foreground">
        By {post.author}
        {post.published_at &&
          ` · ${new Date(post.published_at).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}`}
      </p>

      <div className="prose prose-neutral mt-8 max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.body}</ReactMarkdown>
      </div>

      <div className="mt-12 rounded-xl bg-muted/40 p-6 text-center">
        <p className="font-medium">Want a hand with the cleaning?</p>
        <Button asChild className="mt-3">
          <Link href="/contact">Get a free quote</Link>
        </Button>
      </div>
    </article>
  );
}
