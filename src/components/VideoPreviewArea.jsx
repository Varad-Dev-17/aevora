import React, { useState } from 'react'
import { Play, Pause, Download, RotateCcw, Sparkles, ExternalLink, ShieldCheck, CheckCircle2, Sliders, Info } from 'lucide-react'

export default function VideoPreviewArea({
  generationResult,
  originalImage,
  onReset
}) {
  const [isPlaying, setIsPlaying] = useState(true)
  const [activeTab, setActiveTab] = useState('video') // 'video' | 'comparison' | 'specs'

  if (!generationResult) return null

  const getAspectClass = (ratio) => {
    switch (ratio) {
      case '9:16':
        return 'aspect-[9/16] max-w-[340px] mx-auto'
      case '1:1':
        return 'aspect-square max-w-[480px] mx-auto'
      case '16:9':
      default:
        return 'aspect-video w-full'
    }
  }

  return (
    <div id="video-preview-target" className="mt-12 pt-10 border-t border-[#E3DBD0] space-y-6 scroll-mt-24">
      
      {/* Header and Status */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
            <h2 className="text-2xl font-serif-heading font-medium text-[#1A1A1A]">
              Generated Cinematic Video
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#6B6256] mt-0.5 font-light">
            Rendered at {generationResult.resolution} • {generationResult.durationSeconds}s runtime • 24 FPS
          </p>
        </div>

        {/* View Switcher & Action buttons */}
        <div className="flex items-center gap-3">
          <div className="flex rounded-sm border border-[#DDD5CA] bg-[#FAF8F4] p-0.5 text-xs font-medium">
            <button
              onClick={() => setActiveTab('video')}
              className={`px-3 py-1 rounded-xs transition-colors ${
                activeTab === 'video'
                  ? 'bg-[#1E1E1E] text-white shadow-2xs'
                  : 'text-[#5C5449] hover:text-[#1E1E1E]'
              }`}
            >
              Video Stream
            </button>
            <button
              onClick={() => setActiveTab('comparison')}
              className={`px-3 py-1 rounded-xs transition-colors ${
                activeTab === 'comparison'
                  ? 'bg-[#1E1E1E] text-white shadow-2xs'
                  : 'text-[#5C5449] hover:text-[#1E1E1E]'
              }`}
            >
              Side-by-Side
            </button>
            <button
              onClick={() => setActiveTab('specs')}
              className={`px-3 py-1 rounded-xs transition-colors ${
                activeTab === 'specs'
                  ? 'bg-[#1E1E1E] text-white shadow-2xs'
                  : 'text-[#5C5449] hover:text-[#1E1E1E]'
              }`}
            >
              Telemetry & Logs
            </button>
          </div>

          <a
            href={generationResult.videoUrl}
            download="aevora-architectural-video.mp4"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#F2ECE3] hover:bg-[#EAE2D7] text-[#2F2922] border border-[#D5CCC0] rounded-sm text-xs font-medium transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download</span>
          </a>
        </div>
      </div>

      {/* Mode Transparency Banner */}
      <div className="p-3.5 rounded-sm bg-[#F5F0E8] border border-[#DDD5C9] text-xs text-[#544D42] flex items-start gap-3">
        <Info className="w-4 h-4 text-[#8C7F6E] shrink-0 mt-0.5" />
        <div className="space-y-0.5">
          <p className="font-medium text-[#29241E]">
            Pipeline Mode: Simulation & Architecture Demonstration
          </p>
          <p className="text-[#696154] font-light leading-relaxed">
            Runway MCP is currently unconfigured in the Antigravity IDE environment. This sample video represents the expected motion trajectory and camera glide of the <strong>{generationResult.style}</strong> style preset. To execute real-time generative calls through Runway Gen-3 Alpha, register the Runway MCP server in your IDE configuration.
          </p>
        </div>
      </div>

      {/* Main Preview Container */}
      {activeTab === 'video' && (
        <div className="bg-[#1C1A18] rounded-sm overflow-hidden border border-[#D8CFBE] shadow-md p-2 sm:p-4">
          <div className={`relative bg-black rounded-xs overflow-hidden ${getAspectClass(generationResult.aspectRatio)}`}>
            <video
              src={generationResult.videoUrl}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
            
            {/* Watermark HUD */}
            <div className="absolute top-4 left-4 pointer-events-none">
              <div className="px-2.5 py-1 bg-black/60 backdrop-blur-xs text-[11px] font-mono tracking-wider text-white uppercase rounded-xs border border-white/10">
                AEVORA MOTION • {generationResult.aspectRatio}
              </div>
            </div>

            <div className="absolute bottom-4 right-4 pointer-events-none">
              <div className="px-2 py-0.5 bg-black/60 text-[10px] font-mono text-[#D8CFBE] rounded-xs">
                PROMPT SEED: {generationResult.style}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Side-by-Side Comparison */}
      {activeTab === 'comparison' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Static Keyframe */}
          <div className="border border-[#DDD5CA] bg-[#FAF8F4] rounded-sm overflow-hidden p-3 space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-[#2F2922]">Input Keyframe</span>
              <span className="text-[#786E61]">Source Photography</span>
            </div>
            <div className="aspect-video bg-black/5 rounded-xs overflow-hidden">
              <img
                src={generationResult.coverImage}
                alt="Source property"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-[11px] text-[#736B5F] font-light truncate">
              Original high-resolution architectural photograph
            </p>
          </div>

          {/* Generated Video */}
          <div className="border border-[#DDD5CA] bg-[#FAF8F4] rounded-sm overflow-hidden p-3 space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-[#2F2922]">Synthesized Motion Video</span>
              <span className="text-emerald-700 font-medium">H.264 / 24 FPS</span>
            </div>
            <div className="aspect-video bg-black rounded-xs overflow-hidden">
              <video
                src={generationResult.videoUrl}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-[11px] text-[#736B5F] font-light truncate">
              Camera glide synthesized from static input frame
            </p>
          </div>
        </div>
      )}

      {/* Technical Telemetry */}
      {activeTab === 'specs' && (
        <div className="border border-[#D8CFBE] bg-[#FAF8F4] rounded-sm p-5 space-y-4 font-mono text-xs text-[#38332A]">
          <div className="flex items-center justify-between pb-3 border-b border-[#E3DBD0]">
            <span className="font-semibold uppercase tracking-wider text-[#1F1B16]">Generation Telemetry</span>
            <span className="text-emerald-700">STATUS: SUCCESSFUL_SIMULATION</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
            <div>
              <span className="text-[#877E71] block">Job Identifier:</span>
              <span className="text-[#1E1E1E]">{generationResult.id}</span>
            </div>
            <div>
              <span className="text-[#877E71] block">Timestamp:</span>
              <span className="text-[#1E1E1E]">{generationResult.createdAt}</span>
            </div>
            <div>
              <span className="text-[#877E71] block">Aspect Ratio / Dimension:</span>
              <span className="text-[#1E1E1E]">{generationResult.aspectRatio} ({generationResult.resolution})</span>
            </div>
            <div>
              <span className="text-[#877E71] block">Framerate & Cadence:</span>
              <span className="text-[#1E1E1E]">24 FPS, Pro-Res Compatible</span>
            </div>
          </div>

          <div className="pt-2">
            <span className="text-[#877E71] block mb-1">Synthesized Prompt:</span>
            <p className="p-3 bg-[#EFE9DF] rounded-xs font-sans text-xs text-[#2B2721] leading-relaxed">
              {generationResult.prompt}
            </p>
          </div>
        </div>
      )}

      {/* Bottom bar */}
      <div className="flex items-center justify-between pt-2">
        <button
          onClick={onReset}
          className="inline-flex items-center gap-1.5 text-xs text-[#7A7165] hover:text-[#1A1A1A] transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Configure Another Video</span>
        </button>

        <a
          href={generationResult.videoUrl}
          target="_blank"
          rel="noreferrer"
          className="text-xs underline underline-offset-4 decoration-[#C9C0B2] text-[#3D372F] hover:text-[#1A1A1A]"
        >
          Open direct video URL in new tab →
        </a>
      </div>

    </div>
  )
}
