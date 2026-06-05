import type { Metadata } from "next";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { site } from "@/lib/site";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Blog",
  description: `Cleaning tips, guides, and news from ${site.name}.`,
};

// Revalidate periodically so newly published posts appear without a redeploy.
export const revalidate = 300;

export default async function BlogIndex() {
  const supabase = await createClient();
  const { data: posts } = await supabase
    .from("blog_posts")
    .select("slug, title, excerpt, author, published_at")
    .eq("published", true)
    .order("published_at", { ascending: false });

  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight">The Clean Buddies blog</h1>
        <p className="mt-3 text-muted-foreground">
          Cleaning tips, how-tos, and a little behind-the-scenes from our crew.
        </p>
      </div>

      {!posts || posts.length === 0 ? (
        <div className="mt-12 rounded-xl border border-dashed p-12 text-center text-muted-foreground">
          <p>No posts yet — check back soon!</p>
        </div>
      ) : (
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
              <Card className="h-full transition-shadow group-hover:shadow-md">
                <CardHeader>
                  <CardTitle className="group-hover:text-primary">
                    {post.title}
                  </CardTitle>
                  {post.published_at && (
                    <p className="text-xs text-muted-foreground">
                      {new Date(post.published_at).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  )}
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{post.excerpt}</p>
                  <span className="mt-3 inline-block text-sm font-medium text-primary">
                    Read more →
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
