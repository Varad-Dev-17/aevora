import React from 'react'

export default function Logo({
  showTagline = true,
  className = ''
}) {
  return (
    <div className={`flex items-center gap-3.5 group select-none ${className}`}>
      
      {/* Refined Architectural Emblem */}
      <div className="w-10 h-10 rounded-sm bg-[#1A1A1A] flex items-center justify-center text-[#FAF8F5] shadow-xs transition-transform duration-300 group-hover:scale-102 shrink-0">
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
        >
          {/* Architectural Apex & Columns */}
          <path
            d="M16 4.5L5.5 27.5H9L16 12L23 27.5H26.5L16 4.5Z"
            fill="#FAF8F5"
          />
          {/* Warm Sandstone Horizontal Cantilever Beam */}
          <line
            x1="8"
            y1="20"
            x2="24"
            y2="20"
            stroke="#D4C5B0"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
          {/* Subtle Zenith Keystone */}
          <circle
            cx="16"
            cy="16"
            r="1.25"
            fill="#D4C5B0"
          />
        </svg>
      </div>

      {/* Brand Typography Wordmark — Exact text styling you liked */}
      <div className="flex flex-col">
        <span className="font-serif-heading text-2xl tracking-[0.2em] font-semibold text-[#1A1A1A] uppercase leading-none">
          AEVORA
        </span>
        {showTagline && (
          <span className="text-[10px] uppercase tracking-widest text-[#786F62] font-medium mt-1">
            Pune Fine Properties
          </span>
        )}
      </div>

    </div>
  )
}
