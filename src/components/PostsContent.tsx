"use client";
import { useState } from "react";
import { postsConfig } from "@/config/posts";
import PostCard from "@/components/PostCard";
import { useBilingual } from "@/hooks/useBilingual";

const POSTS_PER_PAGE = 5;

export default function PostsContent() {
  const { t, mounted } = useBilingual();
  const [activeTab, setActiveTab] = useState<"posts" | "archive">("posts");

  const activePosts = activeTab === "posts" ? postsConfig.posts : postsConfig.archivedPosts;
  const totalPages = Math.ceil(activePosts.length / POSTS_PER_PAGE);
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPosts = activePosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  const handleTabChange = (tab: "posts" | "archive") => {
    setActiveTab(tab);
    setCurrentPage(1);
  };

  const title = mounted ? t('Blog Posts', '博客文章') : 'Blog Posts';
  const archiveTitle = mounted ? t('Archive', '归档') : 'Archive';
  const noPosts = mounted ? t('No posts found matching your search.', '未找到匹配的文章。') : 'No posts found matching your search.';
  const previous = mounted ? t('Previous', '上一页') : 'Previous';
  const next = mounted ? t('Next', '下一页') : 'Next';

  return (
    <section className="relative z-20 w-full max-w-3xl mx-auto py-10 px-6">
      <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[rgb(var(--accent))] mb-2">Writing</p>
      <div className="flex items-center gap-1 mb-6">
        <button
          onClick={() => handleTabChange("posts")}
          className={`px-4 py-1.5 text-sm font-medium transition-colors duration-200 border-b-2 ${
            activeTab === "posts"
              ? "border-[rgb(var(--accent))] text-neutral-900 dark:text-neutral-100"
              : "border-transparent text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300"
          }`}
        >
          {title}
          <span className={`ml-1.5 text-xs ${
            activeTab === "posts" ? "text-[rgb(var(--accent))]" : "text-neutral-400 dark:text-neutral-500"
          }`}>
            ({postsConfig.posts.length})
          </span>
        </button>
        <button
          onClick={() => handleTabChange("archive")}
          className={`px-4 py-1.5 text-sm font-medium transition-colors duration-200 border-b-2 ${
            activeTab === "archive"
              ? "border-[rgb(var(--accent))] text-neutral-900 dark:text-neutral-100"
              : "border-transparent text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300"
          }`}
        >
          {archiveTitle}
          <span className={`ml-1.5 text-xs ${
            activeTab === "archive" ? "text-[rgb(var(--accent))]" : "text-neutral-400 dark:text-neutral-500"
          }`}>
            ({postsConfig.archivedPosts.length})
          </span>
        </button>
      </div>

      {currentPosts.length === 0 ? (
        <div className="text-center py-16 text-neutral-400 dark:text-neutral-500">
          <p className="text-base">{noPosts}</p>
        </div>
      ) : (
        <>
          <div className="flex flex-col divide-y divide-[rgb(var(--border))]">
            {currentPosts.map((post) => (
              <PostCard
                key={post.slug}
                title={post.title}
                titleZh={post.titleZh}
                description={post.description}
                descriptionZh={post.descriptionZh}
                date={post.date}
                href={`/posts/${post.slug.replace('posts/', '')}`}
                pattern="dots"
                imageUrl={post.image}
                readingTime={parseInt(post.readTime || "5")}
              />
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-1 mt-8">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                className={`px-3 py-1 text-sm text-neutral-500 dark:text-neutral-400 ${
                  currentPage === 1 ? "opacity-40 cursor-not-allowed" : "hover:text-neutral-900 dark:hover:text-neutral-100"
                }`}
              >
                {previous}
              </button>
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`w-7 h-7 flex items-center justify-center text-sm ${
                    index + 1 === currentPage
                      ? "font-bold text-[rgb(var(--accent))]"
                      : "text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
                className={`px-3 py-1 text-sm text-neutral-500 dark:text-neutral-400 ${
                  currentPage === totalPages ? "opacity-40 cursor-not-allowed" : "hover:text-neutral-900 dark:hover:text-neutral-100"
                }`}
              >
                {next}
              </button>
            </div>
          )}
        </>
      )}
    </section>
  );
}