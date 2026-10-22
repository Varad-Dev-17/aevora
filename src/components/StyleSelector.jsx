import React from 'react'
import { Sparkles, Film, Building, Compass } from 'lucide-react'
import { VIDEO_STYLES } from '../services/videoGenerationService'

export default function StyleSelector({ selectedStyleId, onSelectStyle }) {
  const getIcon = (id) => {
    switch (id) {
      case 'luxury-cinematic':
        return Film
      case 'modern-minimalist':
        return Building
      case 'property-showcase':
        return Compass
      default:
        return Sparkles
    }
  }

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-xl font-medium tracking-tight text-[#1A1A1A]">
          2. Architectural Video Style
        </h2>
        <p className="text-xs sm:text-sm text-[#665E54] mt-0.5 font-light">
          Defines the generative camera trajectory, frame rate cadence, and atmospheric lighting balance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {VIDEO_STYLES.map((style) => {
          const isSelected = selectedStyleId === style.id
          const Icon = getIcon(style.id)

          return (
            <div
              key={style.id}
              onClick={() => onSelectStyle(style.id)}
              className={`relative text-left p-5 rounded-sm border cursor-pointer transition-all duration-200 ${
                isSelected
                  ? 'border-[#1E1E1E] bg-[#F3EFE9] ring-1 ring-[#1E1E1E] shadow-xs'
                  : 'border-[#DDD5CA] bg-[#FAF8F4] hover:bg-[#F4EFE7] hover:border-[#BFB5A5]'
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div
                  className={`w-9 h-9 rounded-sm flex items-center justify-center transition-colors ${
                    isSelected
                      ? 'bg-[#1E1E1E] text-[#FAF8F5]'
                      : 'bg-[#EAE3D7] text-[#474138]'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>

                <span
                  className={`text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 rounded-xs border ${
                    isSelected
                      ? 'border-[#1E1E1E] bg-[#1E1E1E] text-white'
                      : 'border-[#D9D1C5] bg-[#EFE9DF] text-[#61584C]'
                  }`}
                >
                  {style.badge}
                </span>
              </div>

              <h3 className="text-base font-semibold text-[#1F1B16] tracking-tight">
                {style.name}
              </h3>

              <p className="mt-2 text-xs text-[#5E564A] leading-relaxed font-light">
                {style.description}
              </p>

              <div className="mt-4 pt-3 border-t border-[#E3DBD0] space-y-1.5 text-[11px] text-[#6E6557]">
                <div className="flex items-center justify-between">
                  <span className="text-[#8C8274]">Motion:</span>
                  <span className="font-medium text-[#2E2922] truncate max-w-[170px]" title={style.cameraMotion}>
                    {style.cameraMotion}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#8C8274]">Lighting:</span>
                  <span className="font-medium text-[#2E2922] truncate max-w-[170px]" title={style.lighting}>
                    {style.lighting}
                  </span>
                </div>
              </div>

            </div>
          )
        })}
      </div>
    </div>
  )
}
