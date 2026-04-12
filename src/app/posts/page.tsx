import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PostsContent from "@/components/PostsContent";

export default function Posts() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:32px_32px] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)]"></div>
        <div className="absolute right-0 top-0 w-[800px] h-[800px] bg-[rgb(var(--accent))] opacity-[0.03] blur-[150px] dark:opacity-[0.05]"></div>
      </div>

      <Navbar />
      <main className="flex-grow pt-16">
        <PostsContent />
      </main>
      <Footer />
    </div>
  );
}