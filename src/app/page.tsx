import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HomeContent from '@/components/HomeContent';

export default function Home() {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:32px_32px] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)]"></div>
        <div className="absolute right-0 top-0 w-[600px] h-[600px] bg-[rgb(var(--accent))] opacity-[0.03] blur-[120px] dark:opacity-[0.05]"></div>
      </div>

      <Navbar />
      <main className="flex-grow pt-16 pb-2 flex items-center">
        <HomeContent />
      </main>
      <Footer />
    </div>
  );
}