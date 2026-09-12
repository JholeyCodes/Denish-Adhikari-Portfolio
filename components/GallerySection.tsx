"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";

import { galleryData, GalleryItem } from "@/data/gallery";
import { Maximize2, X, MapPin, Calendar, ChevronLeft, ChevronRight } from "lucide-react";

export const GallerySection: React.FC = () => {
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<string>("ALL");

  const categories = ["ALL", "CONSTRUCTION", "SURVEYING", "STRUCTURES", "TESTING"];

  const filteredItems =
    selectedFilter === "ALL"
      ? galleryData
      : galleryData.filter((item) => item.category === selectedFilter);

  const handleNext = useCallback(() => {
    if (!activeItem) return;
    const currentIndex = filteredItems.findIndex((it) => it.id === activeItem.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setActiveItem(filteredItems[nextIndex]);
  }, [activeItem, filteredItems]);

  const handlePrev = useCallback(() => {
    if (!activeItem) return;
    const currentIndex = filteredItems.findIndex((it) => it.id === activeItem.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setActiveItem(filteredItems[prevIndex]);
  }, [activeItem, filteredItems]);

  useEffect(() => {
    if (!activeItem) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveItem(null);
      } else if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeItem, handleNext, handlePrev]);

  return (
    <section id="gallery" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-mono uppercase text-accent font-semibold tracking-widest">
              FIELD NOTES // SITE ARCHIVE
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary mt-2">
              Construction &amp; Surveying Records
            </h2>
            <p className="text-sm sm:text-base text-text-secondary mt-2 max-w-xl">
              Photographic and instrumental documentation capturing critical concreting, rebar inspection, leveling, and testing phases.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-surface p-1.5 rounded-xl border border-border">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className={`px-3.5 py-1.5 text-xs font-mono font-semibold rounded-lg transition-all ${
                  selectedFilter === cat
                    ? "bg-accent text-white shadow-md shadow-accent/20"
                    : "text-text-secondary hover:text-text-primary hover:bg-surface-light"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group bg-surface rounded-2xl border border-border/80 hover:border-accent overflow-hidden cursor-pointer transition-all duration-300 flex flex-col justify-between shadow-lg"
            >
              {/* Image with Aspect Ratio */}
              <div className="relative aspect-[4/3] w-full bg-surface-dark overflow-hidden border-b border-border/60">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Badges Overlay */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#0B0F14]/90 text-accent font-semibold border border-border">
                    {item.category}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-[#0B0F14]/80 text-text-secondary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>

              {/* Caption Card */}
              <div className="p-5 space-y-2">
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-text-muted">
                  <MapPin className="w-3 h-3 text-accent" />
                  <span className="truncate">{item.location}</span>
                </div>
                <h3 className="text-base font-bold text-text-primary group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-text-secondary line-clamp-2 leading-relaxed">
                  {item.caption}
                </p>

                <div className="pt-2 flex flex-wrap gap-1">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface-light text-text-muted"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal (Fully Scrollable & Responsive) */}
      {activeItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md overflow-y-auto animate-in fade-in"
          onClick={() => setActiveItem(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[92vh] flex flex-col bg-surface border border-border rounded-2xl overflow-hidden shadow-2xl my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Lightbox Header */}
            <div className="flex items-center justify-between p-4 sm:p-5 bg-surface-dark border-b border-border flex-shrink-0">
              <div>
                <span className="text-[10px] font-mono uppercase text-accent font-bold">
                  {activeItem.category} // SITE RECORD
                </span>
                <h3 className="text-base sm:text-lg font-bold text-text-primary mt-0.5">
                  {activeItem.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveItem(null)}
                className="p-2 rounded-lg bg-surface border border-border text-text-secondary hover:text-text-primary hover:border-accent transition-colors"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5 text-accent" />
              </button>
            </div>

            {/* Scrollable Content Container */}
            <div className="overflow-y-auto flex-1 flex flex-col">
              {/* Lightbox Image with Next/Prev Controls */}
              <div className="relative aspect-[16/10] max-h-[50vh] sm:max-h-[56vh] w-full bg-black flex items-center justify-center flex-shrink-0">
                <Image
                  src={activeItem.image}
                  alt={activeItem.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 896px"
                  className="object-contain"
                  priority
                />

                {/* Prev Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrev();
                  }}
                  className="absolute left-3 p-2.5 rounded-full bg-[#0B0F14]/80 text-white hover:text-accent hover:bg-[#0B0F14] border border-border/80 transition-all shadow-lg group z-10"
                  aria-label="Previous Record"
                >
                  <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
                </button>

                {/* Next Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                  className="absolute right-3 p-2.5 rounded-full bg-[#0B0F14]/80 text-white hover:text-accent hover:bg-[#0B0F14] border border-border/80 transition-all shadow-lg group z-10"
                  aria-label="Next Record"
                >
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                </button>

                {/* Keyboard Tip Pill */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B0F14]/85 border border-border/70 text-[10px] font-mono text-text-muted pointer-events-none">
                  <span>Use ← and → keys to navigate</span>
                  <span>•</span>
                  <span>ESC to close</span>
                </div>
              </div>

              {/* Lightbox Footer Info */}
              <div className="p-5 sm:p-6 space-y-3 bg-surface border-t border-border">
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-text-muted">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-accent" />
                    {activeItem.location}
                  </span>
                  <span>{activeItem.date}</span>
                </div>
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                  {activeItem.caption}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {activeItem.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-surface-light border border-border/60 text-text-muted"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions Bar */}
            <div className="p-3 bg-surface-dark border-t border-border flex items-center justify-between text-xs font-mono text-text-muted flex-shrink-0">
              <span className="hidden sm:inline">Click outside or press ESC to exit</span>
              <span className="sm:hidden text-[11px]">Swipe or tap outside to exit</span>
              <button
                onClick={() => setActiveItem(null)}
                className="px-4 py-1.5 rounded-lg bg-surface border border-border hover:border-accent text-text-primary text-xs font-sans font-semibold transition-colors"
              >
                Close Viewer
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
