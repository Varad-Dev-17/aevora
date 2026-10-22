import React from 'react'
import { Link } from 'react-router-dom'
import { Bed, Bath, Maximize2, MapPin, Film, ArrowUpRight } from 'lucide-react'

export default function PropertyCard({ property }) {
  if (!property) return null

  return (
    <article className="group flex flex-col bg-[#FAF8F5] border border-[#DDD5CA] rounded-sm overflow-hidden transition-all duration-300 hover:border-[#B0A594] hover:shadow-sm">
      
      {/* Property Primary Image Container */}
      <Link
        to={`/properties/${property.id}`}
        className="relative block aspect-[16/10] overflow-hidden bg-[#EAE3D8]"
      >
        <img
          src={property.images[0]}
          alt={property.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103"
          loading="lazy"
        />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-xs bg-[#1E1E1E]/85 backdrop-blur-xs text-white text-[10px] uppercase font-mono tracking-wider">
            {property.neighborhood}
          </span>
          <span className="px-2 py-0.5 rounded-xs bg-white/90 backdrop-blur-xs text-[#2E2820] text-[10px] uppercase font-medium tracking-wider">
            {property.type}
          </span>
        </div>

        {/* Video tour indicator badge if available */}
        {property.cinematicVideo && (
          <div className="absolute bottom-3 right-3 flex items-center gap-1.5 px-2 py-1 rounded-xs bg-black/70 backdrop-blur-xs text-white text-[10px] font-mono tracking-wider">
            <Film className="w-3 h-3 text-[#E0D7CB]" />
            <span>4K Film</span>
          </div>
        )}
      </Link>

      {/* Property Details */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        
        <div>
          {/* Price & Location */}
          <div className="flex items-baseline justify-between gap-2 mb-1.5">
            <span className="font-serif-heading text-2xl font-normal text-[#1A1A1A] tracking-tight">
              {property.price}
            </span>
            <span className="text-[11px] uppercase tracking-wider text-[#7A7165] font-medium">
              {property.status}
            </span>
          </div>

          <h3 className="text-base font-semibold text-[#1F1B16] tracking-tight group-hover:text-[#615443] transition-colors line-clamp-1">
            <Link to={`/properties/${property.id}`}>
              {property.title}
            </Link>
          </h3>

          <div className="flex items-center gap-1.5 text-xs text-[#6B6256] mt-1 font-light">
            <MapPin className="w-3.5 h-3.5 text-[#8F8374] shrink-0" />
            <span className="truncate">{property.location}</span>
          </div>
        </div>

        {/* Specifications Bar */}
        <div className="pt-3 border-t border-[#ECE5DB] flex items-center justify-between text-xs text-[#524B40] font-light">
          <div className="flex items-center gap-1.5">
            <Bed className="w-3.5 h-3.5 text-[#8A7E70]" />
            <span>{property.specs.bedrooms} Beds</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Bath className="w-3.5 h-3.5 text-[#8A7E70]" />
            <span>{property.specs.bathrooms} Baths</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Maximize2 className="w-3.5 h-3.5 text-[#8A7E70]" />
            <span>{property.specs.area}</span>
          </div>
        </div>

        {/* View Action Link */}
        <div className="pt-1">
          <Link
            to={`/properties/${property.id}`}
            className="inline-flex items-center gap-1 text-xs uppercase tracking-wider font-medium text-[#1E1E1E] group-hover:text-[#4A4033] transition-colors"
          >
            <span>Explore Residence</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

      </div>

    </article>
  )
}
