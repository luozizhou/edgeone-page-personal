import { promises as fs } from 'fs';
import path from 'path';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { presentationConfig } from "@/config/presentation";
import { notFound } from 'next/navigation';
import PresentationDetail from "./PresentationDetail";

export async function generateStaticParams() {
  const presentations = presentationConfig.presentations;
  return presentations.map((post) => ({
    slug: post.slug.replace('presentation/', ''),
  }));
}

export default async function Presentation({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const presentations = presentationConfig.presentations;
  const post = presentations.find(p => p.slug === `presentation/${slug}`);

  if (!post) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:32px_32px] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)]"></div>
      </div>

      <Navbar />
      <main className="flex-grow pt-16 py-10 px-6">
        <article className="relative z-20 w-full max-w-3xl mx-auto">
          <PresentationDetail post={post} />
        </article>
      </main>
      <Footer />
    </div>
  );
}
