import React from 'react'
import { Sparkles, RefreshCw, Wand2, Plus } from 'lucide-react'

export default function PromptEditor({
  prompt,
  onChangePrompt,
  onResetPrompt,
  onAppendTag,
  selectedStyleName
}) {
  const suggestions = [
    '+ Golden hour twilight glow',
    '+ Slow aerial drone pullback',
    '+ Crisp architectural symmetry',
    '+ Warm natural oak reflections',
    '+ Subtle pool surface caustic ripple',
    '+ 35mm shallow depth of field'
  ]

  return (
    <div className="space-y-3">
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
        <div>
          <h2 className="text-xl font-medium tracking-tight text-[#1A1A1A]">
            4. AI Video Motion Prompt
          </h2>
          <p className="text-xs sm:text-sm text-[#665E54] mt-0.5 font-light">
            Customise the neural synthesis instructions. Pre-seeded with parameters from {selectedStyleName}.
          </p>
        </div>

        <button
          type="button"
          onClick={onResetPrompt}
          className="inline-flex items-center gap-1.5 text-xs text-[#736A5E] hover:text-[#1F1B16] transition-colors"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Reset to {selectedStyleName} preset</span>
        </button>
      </div>

      <div className="relative">
        <textarea
          rows={3}
          value={prompt}
          onChange={(e) => onChangePrompt(e.target.value)}
          placeholder="Describe camera movement, lighting, lens details, and architectural atmosphere..."
          className="w-full p-4 rounded-sm border border-[#D5CCC0] bg-[#FAF8F4] focus:bg-[#FFFFFF] focus:border-[#24211D] focus:ring-1 focus:ring-[#24211D] text-sm text-[#1F1B16] leading-relaxed transition-all placeholder:text-[#999083] font-normal"
        />

        <div className="mt-2 flex flex-wrap items-center gap-1.5">
          <span className="text-[11px] text-[#7A7165] font-light mr-1 flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-[#A89A88]" />
            Add modifiers:
          </span>
          {suggestions.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => onAppendTag(tag.replace('+', '').trim())}
              className="text-[11px] px-2.5 py-1 rounded-full border border-[#DDD5CA] bg-[#F4EFE8] hover:bg-[#EAE3D8] text-[#4A4237] transition-colors font-light"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
