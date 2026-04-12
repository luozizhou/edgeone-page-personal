"use client";

import { useEffect, useRef, useState } from "react";

interface PdfViewerProps {
  src: string;
  title?: string;
}

// PDF.js CDN - using jsdelivr mirror for better performance in China
const PDFJS_CDN = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js";
const PDFJS_WORKER_CDN = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";

export default function PdfViewer({ src, title }: PdfViewerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [numPages, setNumPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [pdfDoc, setPdfDoc] = useState<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Convert relative path to absolute URL
  const absoluteUrl = src.startsWith('http') ? src : `https://luozizhou.cn${src}`;

  useEffect(() => {
    let pdfjsLib: any;

    const loadPdf = async () => {
      try {
        // Load PDF.js dynamically
        if (!(window as any).pdfjsLib) {
          const script = document.createElement('script');
          script.src = PDFJS_CDN;
          script.async = true;
          document.head.appendChild(script);
          
          await new Promise((resolve, reject) => {
            script.onload = resolve;
            script.onerror = reject;
          });
        }

        pdfjsLib = (window as any).pdfjsLib;
        pdfjsLib.GlobalWorkerOptions.workerSrc = PDFJS_WORKER_CDN;

        // Load the PDF document
        const loadingTask = pdfjsLib.getDocument(absoluteUrl);
        const pdf = await loadingTask.promise;
        
        setPdfDoc(pdf);
        setNumPages(pdf.numPages);
        setIsLoading(false);
      } catch (err) {
        console.error('Error loading PDF:', err);
        setError('Failed to load PDF. Please try again.');
        setIsLoading(false);
      }
    };

    loadPdf();
  }, [absoluteUrl]);

  // Render current page
  useEffect(() => {
    if (!pdfDoc || !canvasRef.current) return;

    const renderPage = async () => {
      try {
        const page = await pdfDoc.getPage(currentPage);
        const canvas = canvasRef.current!;
        const context = canvas.getContext('2d')!;

        // Calculate scale to fit container width
        const containerWidth = containerRef.current?.clientWidth || 800;
        const viewport = page.getViewport({ scale: 1 });
        const scale = (containerWidth - 40) / viewport.width;
        const scaledViewport = page.getViewport({ scale });

        canvas.height = scaledViewport.height;
        canvas.width = scaledViewport.width;

        await page.render({
          canvasContext: context,
          viewport: scaledViewport
        }).promise;
      } catch (err) {
        console.error('Error rendering page:', err);
      }
    };

    renderPage();
  }, [pdfDoc, currentPage]);

  const goToPrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const goToNextPage = () => {
    if (currentPage < numPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="my-8">
      {title && (
        <h3 className="text-lg font-semibold mb-3 text-neutral-800 dark:text-neutral-200">
          {title}
        </h3>
      )}
      
      <div 
        ref={containerRef}
        className="relative w-full border border-neutral-200 dark:border-neutral-700 rounded-lg overflow-hidden bg-neutral-50 dark:bg-neutral-800"
        onContextMenu={(e) => e.preventDefault()}
      >
        {isLoading && (
          <div className="flex items-center justify-center h-[600px]">
            <div className="flex flex-col items-center gap-2">
              <div className="w-8 h-8 border-2 border-[rgb(var(--accent))] border-t-transparent rounded-full animate-spin"></div>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">Loading PDF...</p>
            </div>
          </div>
        )}

        {error && (
          <div className="flex items-center justify-center h-[600px]">
            <p className="text-red-500">{error}</p>
          </div>
        )}

        {!isLoading && !error && (
          <div className="flex flex-col">
            <canvas 
              ref={canvasRef} 
              className="w-full h-auto"
            />
            
            {/* Page navigation */}
            {numPages > 1 && (
              <div className="flex items-center justify-center gap-4 py-3 bg-neutral-100 dark:bg-neutral-700">
                <button
                  onClick={goToPrevPage}
                  disabled={currentPage === 1}
                  className={`px-3 py-1 text-sm rounded ${
                    currentPage === 1 
                      ? 'opacity-50 cursor-not-allowed' 
                      : 'hover:bg-neutral-200 dark:hover:bg-neutral-600'
                  }`}
                >
                  Previous
                </button>
                <span className="text-sm text-neutral-600 dark:text-neutral-300">
                  Page {currentPage} of {numPages}
                </span>
                <button
                  onClick={goToNextPage}
                  disabled={currentPage === numPages}
                  className={`px-3 py-1 text-sm rounded ${
                    currentPage === numPages 
                      ? 'opacity-50 cursor-not-allowed' 
                      : 'hover:bg-neutral-200 dark:hover:bg-neutral-600'
                  }`}
                >
                  Next
                </button>
              </div>
            )}
          </div>
        )}
      </div>
      
      <p className="mt-2 text-xs text-neutral-500 dark:text-neutral-400 text-center">
        Online reading only. Download is disabled.
      </p>
    </div>
  );
}
