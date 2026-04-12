import { promises as fs } from 'fs';
import path from 'path';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { postsConfig } from "@/config/posts";
import { notFound } from 'next/navigation';
import PostDetail from "./PostDetail";

export async function generateStaticParams() {
  const allPosts = [...postsConfig.posts, ...postsConfig.archivedPosts];
  return allPosts.map((post) => ({
    slug: post.slug.replace('posts/', ''),
  }));
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const allPosts = [...postsConfig.posts, ...postsConfig.archivedPosts];
  const post = allPosts.find(p => p.slug === `posts/${slug}`);

  if (!post) {
    notFound();
  }

  // For posts with mdPages (fund posts), don't try to read generated HTML
  // The PostDetail component will handle language switching
  const postSlug = post.slug.replace('posts/', '');
  
  // Only try to read generated HTML if there's no mdPages (for backward compatibility)
  let postHtml = post.html || '';
  if (!post.mdPages) {
    const postHtmlPath = path.join(
      process.cwd(),
      'generated',
      'posts',
      `${postSlug}.html`
    );
    try {
      postHtml = await fs.readFile(postHtmlPath, 'utf8');
    } catch (error) {
      if (process.env.NODE_ENV !== 'production') {
        console.warn(`Falling back to config HTML for ${postSlug}:`, error);
      }
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:32px_32px] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)]"></div>
      </div>

      <Navbar />
      <main className="flex-grow pt-16 py-10 px-6">
        <article className="relative z-20 w-full max-w-3xl mx-auto">
          <PostDetail post={{
            ...post,
            html: postHtml || post.html,
          }} />
        </article>
      </main>
      <Footer />
    </div>
  );
}