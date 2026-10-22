import React from 'react'
import { ASPECT_RATIOS } from '../services/videoGenerationService'

export default function AspectRatioSelector({ selectedRatio, onSelectRatio }) {
  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-xl font-medium tracking-tight text-[#1A1A1A]">
          3. Aspect Ratio & Delivery Format
        </h2>
        <p className="text-xs sm:text-sm text-[#665E54] mt-0.5 font-light">
          Optimized canvas bounds for MLS portals, social channels, and presentation screens.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {ASPECT_RATIOS.map((item) => {
          const isSelected = selectedRatio === item.id

          return (
            <div
              key={item.id}
              onClick={() => onSelectRatio(item.id)}
              className={`p-4 rounded-sm border cursor-pointer transition-all duration-200 flex flex-col justify-between ${
                isSelected
                  ? 'border-[#1E1E1E] bg-[#F3EFE9] ring-1 ring-[#1E1E1E]'
                  : 'border-[#DDD5CA] bg-[#FAF8F4] hover:bg-[#F4EFE7] hover:border-[#BFB5A5]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-semibold text-sm text-[#1A1A1A]">
                    {item.label}
                  </span>

                  {/* Visual aspect preview shape */}
                  <div className="w-9 h-9 flex items-center justify-center bg-[#E8E1D5] rounded-xs">
                    {item.id === '16:9' && (
                      <div className="w-6 h-3.5 border border-[#2B2721] bg-[#DBD2C3] rounded-xs" />
                    )}
                    {item.id === '9:16' && (
                      <div className="w-3.5 h-6 border border-[#2B2721] bg-[#DBD2C3] rounded-xs" />
                    )}
                    {item.id === '1:1' && (
                      <div className="w-5 h-5 border border-[#2B2721] bg-[#DBD2C3] rounded-xs" />
                    )}
                  </div>
                </div>

                <p className="text-xs text-[#524B41] font-light leading-snug">
                  {item.subtitle}
                </p>
              </div>

              <div className="mt-4 pt-2.5 border-t border-[#E3DBD0] flex items-center justify-between text-[11px] text-[#786E61]">
                <span>Canvas Size</span>
                <span className="font-mono text-[#2B2721]">{item.width} × {item.height}</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
