import React, { useState, useRef } from 'react'
import { Play, Pause, Volume2, VolumeX, Maximize, Film, Info } from 'lucide-react'

export default function CinematicVideoPlayer({
  video,
  propertyTitle,
  posterImage
}) {
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(true)
  const videoRef = useRef(null)

  if (!video) return null

  const togglePlay = () => {
    if (!videoRef.current) return
    if (isPlaying) {
      videoRef.current.pause()
      setIsPlaying(false)
    } else {
      videoRef.current.play()
      setIsPlaying(true)
    }
  }

  const toggleMute = () => {
    if (!videoRef.current) return
    videoRef.current.muted = !isMuted
    setIsMuted(!isMuted)
  }

  const toggleFullscreen = () => {
    if (!videoRef.current) return
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen()
    }
  }

  return (
    <div className="relative rounded-sm overflow-hidden bg-[#1A1816] border border-[#DDD5CA] shadow-md group">
      
      {/* Aspect Container */}
      <div className="relative aspect-video w-full bg-black">
        <video
          ref={videoRef}
          src={video.videoUrl}
          poster={posterImage}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="w-full h-full object-cover cursor-pointer"
          onClick={togglePlay}
        />

        {/* Ambient Top HUD */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
          <div className="flex items-center gap-2 px-3 py-1 rounded-xs bg-black/60 backdrop-blur-xs text-white text-xs font-mono tracking-wider border border-white/10">
            <Film className="w-3.5 h-3.5 text-[#E6DDD0]" />
            <span>CINEMATIC FILM • {video.filmStyle || '4K Architectural'}</span>
          </div>

          <div className="px-2.5 py-1 rounded-xs bg-black/60 backdrop-blur-xs text-[#E6DDD0] text-xs font-mono">
            {video.duration || '0:45'}
          </div>
        </div>

        {/* Big Center Play/Pause button when hovered or paused */}
        {!isPlaying && (
          <div
            onClick={togglePlay}
            className="absolute inset-0 flex items-center justify-center bg-black/40 cursor-pointer"
          >
            <div className="w-16 h-16 rounded-full bg-white/90 text-[#1E1E1E] flex items-center justify-center shadow-lg transition-transform hover:scale-105">
              <Play className="w-7 h-7 fill-current ml-1" />
            </div>
          </div>
        )}

        {/* Bottom Control Bar */}
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 flex items-center justify-between text-white transition-opacity">
          
          <div className="flex items-center gap-3">
            <button
              onClick={togglePlay}
              className="p-1.5 rounded-xs hover:bg-white/20 transition-colors"
              aria-label={isPlaying ? 'Pause film' : 'Play film'}
            >
              {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current" />}
            </button>

            <button
              onClick={toggleMute}
              className="p-1.5 rounded-xs hover:bg-white/20 transition-colors"
              aria-label={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>

            <span className="text-xs font-light text-[#E5DDD2] hidden sm:inline">
              {video.title || propertyTitle}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleFullscreen}
              className="p-1.5 rounded-xs hover:bg-white/20 transition-colors"
              aria-label="Fullscreen"
            >
              <Maximize className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>

      {/* Video Caption & Technical Note */}
      <div className="p-4 bg-[#23201C] border-t border-[#3B362F] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#C7BEB1]">
        <div>
          <span className="font-semibold text-white block">
            {video.title || 'Architectural Tour'}
          </span>
          <span className="text-[11px] text-[#A69C8E] font-light mt-0.5 block">
            {video.description || 'High-definition camera trajectory synthesized for luxury property exploration.'}
          </span>
        </div>

        <div className="flex items-center gap-2 text-[11px] text-[#A89E90] bg-[#181614] px-2.5 py-1 rounded-xs border border-[#3A352D] shrink-0">
          <Info className="w-3.5 h-3.5 text-[#C4B7A5]" />
          <span>Cinematic Stream</span>
        </div>
      </div>

    </div>
  )
}
