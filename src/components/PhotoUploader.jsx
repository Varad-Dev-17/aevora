import React, { useState, useRef } from 'react'
import { Upload, X, Image as ImageIcon, Sparkles, Check, AlertCircle } from 'lucide-react'
import { SAMPLE_PROPERTIES } from '../services/videoGenerationService'

export default function PhotoUploader({ images, onImagesChange }) {
  const [isDragging, setIsDragging] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const fileInputRef = useRef(null)

  const handleDragOver = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(true)
  }

  const handleDragLeave = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
  }

  const processFiles = (fileList) => {
    setErrorMsg('')
    const validFiles = []
    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp']

    for (let i = 0; i < fileList.length; i++) {
      const file = fileList[i]
      if (!allowedTypes.includes(file.type)) {
        setErrorMsg('Please upload standard property photos (JPEG, PNG, or WEBP).')
        continue
      }
      if (file.size > 20 * 1024 * 1024) {
        setErrorMsg('Each photo must be under 20MB.')
        continue
      }

      validFiles.push({
        id: `local_${Date.now()}_${i}`,
        name: file.name,
        size: `${(file.size / (1024 * 1024)).toFixed(1)} MB`,
        url: URL.createObjectURL(file),
        file,
        type: 'Uploaded Photo'
      })
    }

    if (validFiles.length > 0) {
      onImagesChange([...images, ...validFiles])
    }
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      processFiles(e.dataTransfer.files)
    }
  }

  const handleFileInput = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      processFiles(e.target.files)
    }
  }

  const removeImage = (idToRemove) => {
    onImagesChange(images.filter(img => img.id !== idToRemove))
  }

  const addSampleImage = (sample) => {
    if (images.some(img => img.id === sample.id)) return
    onImagesChange([...images, {
      id: sample.id,
      name: sample.name,
      type: sample.type,
      url: sample.url,
      thumbnail: sample.thumbnail,
      isSample: true
    }])
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
        <div>
          <h2 className="text-xl font-medium tracking-tight text-[#1A1A1A]">
            1. Property Photos
          </h2>
          <p className="text-xs sm:text-sm text-[#665E54] mt-0.5 font-light">
            Upload high-resolution architectural photography. The first image serves as the initial video keyframe.
          </p>
        </div>

        {/* Quick sample loader */}
        <div className="flex items-center gap-1.5 text-xs text-[#736A5E]">
          <span className="font-light">Sample library:</span>
          {SAMPLE_PROPERTIES.map((sample) => {
            const isAdded = images.some(img => img.id === sample.id)
            return (
              <button
                key={sample.id}
                type="button"
                onClick={() => addSampleImage(sample)}
                disabled={isAdded}
                className={`px-2 py-1 text-[11px] rounded-xs border transition-colors ${
                  isAdded
                    ? 'border-[#DBD3C6] bg-[#ECE6DC] text-[#8C8377] cursor-default'
                    : 'border-[#D9D1C5] bg-[#F7F4EF] hover:bg-[#EFE9DF] text-[#3A352E]'
                }`}
              >
                {sample.name.split(' ')[0]} {isAdded ? '✓' : '+'}
              </button>
            )
          })}
        </div>
      </div>

      {/* Drag & Drop Zone */}
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
        className={`relative border border-dashed rounded-sm p-8 md:p-10 text-center cursor-pointer transition-all duration-200 ${
          isDragging
            ? 'border-[#262626] bg-[#ECE5DB]'
            : 'border-[#D8CFBE] bg-[#F7F4EE] hover:bg-[#F2ECE3] hover:border-[#BDB3A2]'
        }`}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="image/jpeg,image/png,image/webp"
          multiple
          onChange={handleFileInput}
          className="hidden"
        />

        <div className="max-w-md mx-auto flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-[#EAE3D7] flex items-center justify-center text-[#3D372F] mb-4">
            <Upload className="w-5 h-5" />
          </div>
          <p className="text-sm font-medium text-[#1E1E1E]">
            Drag and drop property images here, or{' '}
            <span className="underline underline-offset-4 decoration-[#B8AD9C] text-[#1E1E1E]">
              browse files
            </span>
          </p>
          <p className="text-xs text-[#7A7165] mt-1.5 font-light">
            Supports JPEG, PNG, WEBP up to 20MB per photo. Landscape 16:9 or architectural crops recommended.
          </p>
        </div>
      </div>

      {errorMsg && (
        <div className="flex items-center gap-2 p-3 text-xs bg-red-50/80 border border-red-200 text-red-700 rounded-sm">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      {/* Preview Grid */}
      {images.length > 0 && (
        <div>
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs uppercase tracking-wider font-medium text-[#574E43]">
              Queued Frames ({images.length})
            </span>
            <button
              type="button"
              onClick={() => onImagesChange([])}
              className="text-xs text-[#8C8377] hover:text-[#2A2621] transition-colors"
            >
              Clear all
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {images.map((img, idx) => (
              <div
                key={img.id}
                className="group relative rounded-sm overflow-hidden border border-[#D8CFBE] bg-[#EFE9DF] aspect-[4/3] shadow-2xs"
              >
                <img
                  src={img.url}
                  alt={img.name || `Property photo ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-103"
                />

                {/* Tag pill */}
                <div className="absolute top-2 left-2 px-2 py-0.5 rounded-xs bg-[#1C1A18]/80 backdrop-blur-xs text-[10px] uppercase font-mono tracking-wider text-[#FAF8F5]">
                  {idx === 0 ? 'Primary Keyframe' : `Angle 0${idx + 1}`}
                </div>

                {/* Remove button */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    removeImage(img.id)
                  }}
                  className="absolute top-2 right-2 w-6 h-6 rounded-full bg-[#1C1A18]/70 hover:bg-[#C93B2B] text-white flex items-center justify-center transition-colors opacity-90 sm:opacity-0 sm:group-hover:opacity-100"
                  title="Remove image"
                >
                  <X className="w-3.5 h-3.5" />
                </button>

                {/* Caption bar */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-2 text-white">
                  <p className="text-[11px] truncate font-light">
                    {img.name || 'Architectural capture'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
