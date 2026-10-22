import React from 'react'
import { Sparkles, ArrowDown, Play, Video, Layers, Camera } from 'lucide-react'

export default function Hero({ onExploreClick }) {
  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 border-b border-[#ECE6DE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Minimalist Tag */}
        <div className="flex items-center justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#D9D1C5] bg-[#F4EFE9] text-[#5C5449] text-xs uppercase tracking-widest font-medium">
            <Sparkles className="w-3.5 h-3.5 text-[#8A7968]" />
            <span>Generative Real Estate Cinema</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          <h1 className="font-serif-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[#1A1A1A] tracking-tight leading-[1.12]">
            Turn Property Photos Into{' '}
            <span className="italic font-normal text-[#38332D] underline decoration-[#D8CFBE] decoration-1 underline-offset-8">
              Cinematic Videos
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg md:text-xl text-[#5C554B] max-w-2xl mx-auto font-light leading-relaxed">
            Elevate static architectural captures into fluid, 4K camera movements. Designed for luxury developments, high-end brokers, and modern architecture firms.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#studio"
              className="px-7 py-3.5 bg-[#1E1E1E] hover:bg-[#333333] text-[#FAF8F5] text-sm uppercase tracking-wider font-medium transition-all shadow-sm rounded-sm"
            >
              Generate Property Video
            </a>
            <a
              href="#preview-showcase"
              className="px-6 py-3.5 bg-transparent hover:bg-[#F2ECE4] text-[#2C2721] border border-[#D8CFBE] text-sm uppercase tracking-wider font-medium transition-all rounded-sm flex items-center gap-2"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              Watch Sample
            </a>
          </div>
        </div>

        {/* Architectural Imagery Showcase Banner */}
        <div className="mt-12 relative rounded-sm overflow-hidden border border-[#DDD5CA] shadow-sm">
          <div className="relative aspect-[21/9] sm:aspect-[2.4/1] w-full bg-[#24211D] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85"
              alt="Luxury modern architectural residence"
              className="w-full h-full object-cover opacity-90 transition-transform duration-700 hover:scale-102"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#141210]/70 via-transparent to-transparent" />
            
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-8 sm:right-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-[#FAF8F5]">
              <div>
                <span className="text-[11px] uppercase tracking-widest text-[#E3D9CC] font-mono">
                  Synthesized Motion Path • 24 FPS
                </span>
                <p className="font-serif-heading text-lg sm:text-2xl font-light text-white mt-1">
                  The Oakhaven Glass Pavilion
                </p>
                <p className="text-xs sm:text-sm text-[#DDD5CA] font-light">
                  Smooth camera dolly through double-height living area into outdoor terrace
                </p>
              </div>

              <div className="flex items-center gap-6 text-xs text-[#D9D1C5]">
                <div className="flex items-center gap-1.5">
                  <Camera className="w-3.5 h-3.5" />
                  <span>35mm Architectural</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5" />
                  <span>4K Gen-3 Diffusion</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
