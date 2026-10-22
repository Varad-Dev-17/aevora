import React, { useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import {
  MapPin, Bed, Bath, Maximize2, Car, Calendar, Layers, ShieldCheck,
  Check, Phone, Mail, Share2, Heart, Film, ArrowLeft, ArrowRight,
  Sparkles, Send, User, ChevronRight, AlertCircle
} from 'lucide-react'
import { getPropertyById, getSimilarProperties } from '../data/properties'
import CinematicVideoPlayer from '../components/CinematicVideoPlayer'
import PropertyCard from '../components/PropertyCard'

export default function PropertyDetailPage() {
  const { id } = useParams()
  const property = getPropertyById(id)

  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [inquiryName, setInquiryName] = useState('')
  const [inquiryEmail, setInquiryEmail] = useState('')
  const [inquiryPhone, setInquiryPhone] = useState('')
  const [inquiryMessage, setInquiryMessage] = useState('I would like to schedule a confidential private viewing for this residence.')
  const [inquirySubmitted, setInquirySubmitted] = useState(false)

  if (!property) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-24 text-center space-y-6">
        <h1 className="font-serif-heading text-4xl text-[#1A1A1A]">Residence Not Found</h1>
        <p className="text-sm text-[#665D50] font-light">
          The requested property identifier does not exist or has been withdrawn from private curation.
        </p>
        <Link
          to="/properties"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#1E1E1E] text-white text-xs uppercase tracking-widest font-medium rounded-sm"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Return to All Properties</span>
        </Link>
      </div>
    )
  }

  const similarProperties = getSimilarProperties(property.id, 3)

  const handleInquirySubmit = (e) => {
    e.preventDefault()
    setInquirySubmitted(true)
  }

  return (
    <div className="space-y-16 py-8 md:py-12">
      
      {/* Top Breadcrumb & Status Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#ECE6DE] text-xs">
          
          <nav className="flex items-center gap-2 text-[#7A7165]">
            <Link to="/" className="hover:text-[#1A1A1A] transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-[#B0A594]" />
            <Link to="/properties" className="hover:text-[#1A1A1A] transition-colors">Properties</Link>
            <ChevronRight className="w-3 h-3 text-[#B0A594]" />
            <Link to={`/properties?location=${encodeURIComponent(property.neighborhood)}`} className="hover:text-[#1A1A1A] transition-colors">
              {property.neighborhood}
            </Link>
            <ChevronRight className="w-3 h-3 text-[#B0A594]" />
            <span className="text-[#1A1A1A] font-medium truncate max-w-[200px]">{property.title}</span>
          </nav>

          <div className="flex items-center gap-4 text-xs">
            <span className="px-2.5 py-1 rounded-xs bg-[#EFE9DF] text-[#4A4237] font-mono uppercase text-[10px] tracking-wider">
              {property.status}
            </span>
            <span className="text-[#8C8274]">Reference ID: {property.id}</span>
          </div>

        </div>
      </div>

      {/* Property Title & Header Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-xs bg-[#1E1E1E] text-white text-[10px] uppercase font-mono tracking-widest">
                {property.type}
              </span>
              <span className="text-xs text-[#7A7165] font-light">
                {property.neighborhood}, Pune
              </span>
            </div>

            <h1 className="font-serif-heading text-3xl sm:text-4xl md:text-5xl text-[#1A1A1A] tracking-tight">
              {property.title}
            </h1>

            <p className="text-sm md:text-base text-[#61574B] font-light max-w-2xl">
              {property.tagline}
            </p>
          </div>

          <div className="text-left md:text-right">
            <span className="text-xs uppercase font-mono tracking-wider text-[#736A5E] block">
              Offered At
            </span>
            <span className="font-serif-heading text-3xl sm:text-4xl text-[#1A1A1A] font-normal">
              {property.price}
            </span>
            <span className="text-[11px] text-[#8C8274] block mt-0.5 font-light">
              Inclusive of designated bays & amenities
            </span>
          </div>
        </div>
      </div>

      {/* 1. LARGE IMAGE GALLERY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4">
          
          {/* Main Selected Image Stage */}
          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full rounded-sm overflow-hidden bg-[#24211D] border border-[#DDD5CA] shadow-sm">
            <img
              src={property.images[activeImageIndex]}
              alt={`${property.title} - View ${activeImageIndex + 1}`}
              className="w-full h-full object-cover transition-all duration-500"
            />
            
            <div className="absolute top-4 left-4 px-3 py-1 rounded-xs bg-black/60 backdrop-blur-xs text-white text-xs font-mono">
              View {activeImageIndex + 1} of {property.images.length}
            </div>

            {/* In-image navigation arrows */}
            <div className="absolute inset-y-0 inset-x-4 flex items-center justify-between pointer-events-none">
              <button
                type="button"
                onClick={() => setActiveImageIndex((prev) => (prev === 0 ? property.images.length - 1 : prev - 1))}
                className="w-10 h-10 rounded-full bg-black/60 hover:bg-black/85 text-white flex items-center justify-center pointer-events-auto transition-colors"
                aria-label="Previous image"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setActiveImageIndex((prev) => (prev === property.images.length - 1 ? 0 : prev + 1))}
                className="w-10 h-10 rounded-full bg-black/60 hover:bg-black/85 text-white flex items-center justify-center pointer-events-auto transition-colors"
                aria-label="Next image"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Thumbnail Selector Strip */}
          <div className="grid grid-cols-5 gap-3">
            {property.images.map((img, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveImageIndex(idx)}
                className={`relative aspect-[16/10] rounded-xs overflow-hidden border transition-all ${
                  activeImageIndex === idx
                    ? 'border-[#1E1E1E] ring-2 ring-[#1E1E1E]/80 opacity-100'
                    : 'border-[#DDD5CA] opacity-70 hover:opacity-100'
                }`}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* 2. SPECIFICATIONS SUMMARY BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF8F5] border border-[#DDD5CA] rounded-sm p-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
          
          <div className="space-y-1">
            <span className="text-[11px] uppercase font-mono tracking-wider text-[#7A7164] block">Bedrooms</span>
            <div className="flex items-center justify-center gap-1.5 font-medium text-[#1A1A1A] text-base">
              <Bed className="w-4 h-4 text-[#8C7E6D]" />
              <span>{property.specs.bedrooms} Suites</span>
            </div>
          </div>

          <div className="space-y-1">
            <span className="text-[11px] uppercase font-mono tracking-wider text-[#7A7164] block">Bathrooms</span>
            <div className="flex items-center justify-center gap-1.5 font-medium text-[#1A1A1A] text-base">
              <Bath className="w-4 h-4 text-[#8C7E6D]" />
              <span>{property.specs.bathrooms} Baths</span>
            </div>
          </div>

          <div className="space-y-1">
            <span className="text-[11px] uppercase font-mono tracking-wider text-[#7A7164] block">Living Area</span>
            <div className="flex items-center justify-center gap-1.5 font-medium text-[#1A1A1A] text-base">
              <Maximize2 className="w-4 h-4 text-[#8C7E6D]" />
              <span>{property.specs.area}</span>
            </div>
          </div>

          <div className="space-y-1">
            <span className="text-[11px] uppercase font-mono tracking-wider text-[#7A7164] block">Parking</span>
            <div className="flex items-center justify-center gap-1.5 font-medium text-[#1A1A1A] text-base">
              <Car className="w-4 h-4 text-[#8C7E6D]" />
              <span>{property.specs.parking}</span>
            </div>
          </div>

          <div className="space-y-1">
            <span className="text-[11px] uppercase font-mono tracking-wider text-[#7A7164] block">Elevation</span>
            <div className="flex items-center justify-center gap-1.5 font-medium text-[#1A1A1A] text-base">
              <Layers className="w-4 h-4 text-[#8C7E6D]" />
              <span className="truncate">{property.specs.floor}</span>
            </div>
          </div>

          <div className="space-y-1">
            <span className="text-[11px] uppercase font-mono tracking-wider text-[#7A7164] block">Completion</span>
            <div className="flex items-center justify-center gap-1.5 font-medium text-[#1A1A1A] text-base">
              <Calendar className="w-4 h-4 text-[#8C7E6D]" />
              <span>{property.specs.yearBuilt}</span>
            </div>
          </div>

        </div>
      </section>

      {/* 3. NARRATIVE DESCRIPTION & AMENITIES VS INQUIRY FORM */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Description & Amenities (8 cols) */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Editorial Description */}
            <div className="space-y-4">
              <h2 className="font-serif-heading text-2xl sm:text-3xl text-[#1A1A1A]">
                Architectural Narrative
              </h2>
              <div className="text-sm md:text-base text-[#4F463B] font-light leading-relaxed space-y-4">
                <p>{property.description}</p>
              </div>
            </div>

            {/* Bespoke Amenities Grid */}
            <div className="space-y-4 pt-6 border-t border-[#ECE6DE]">
              <h3 className="font-serif-heading text-xl sm:text-2xl text-[#1A1A1A]">
                Finishes & Features
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {property.amenities.map((amenity, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3.5 bg-[#FAF8F5] border border-[#DDD5CA] rounded-xs text-xs text-[#383228]"
                  >
                    <Check className="w-4 h-4 text-[#8A7966] shrink-0" />
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. DEDICATED CINEMATIC PROPERTY VIDEO PLAYER */}
            <div className="space-y-4 pt-8 border-t border-[#ECE6DE]">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs uppercase font-mono tracking-widest text-[#786F62] block mb-1">
                    MOTION EXPLORATION
                  </span>
                  <h3 className="font-serif-heading text-2xl text-[#1A1A1A]">
                    Cinematic Property Film
                  </h3>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-[#706657]">
                  <Film className="w-4 h-4 text-[#8F816F]" />
                  <span>4K Video Stream</span>
                </div>
              </div>

              <CinematicVideoPlayer
                video={property.cinematicVideo}
                propertyTitle={property.title}
                posterImage={property.images[0]}
              />
            </div>

          </div>

          {/* Right Column: Private Client Advisor & Viewing Request (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Agent Profile Card */}
            <div className="bg-[#FAF8F5] border border-[#DDD5CA] rounded-sm p-6 space-y-6 sticky top-28 shadow-2xs">
              
              <div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#7A7165] block mb-2">
                  DISCREET REPRESENTATION
                </span>
                <div className="flex items-center gap-4">
                  <img
                    src={property.agent.avatar}
                    alt={property.agent.name}
                    className="w-14 h-14 rounded-full object-cover border border-[#DDD5CA]"
                  />
                  <div>
                    <h4 className="text-base font-semibold text-[#1F1B16]">{property.agent.name}</h4>
                    <p className="text-xs text-[#736A5D] font-light">{property.agent.title}</p>
                    <p className="text-xs text-[#8C8172] font-mono mt-0.5">{property.agent.phone}</p>
                  </div>
                </div>
              </div>

              {/* Inquiry Form */}
              <div className="pt-4 border-t border-[#ECE6DE]">
                <h5 className="text-xs uppercase font-mono tracking-wider font-semibold text-[#3D362C] mb-3">
                  Schedule Private Viewing
                </h5>

                {inquirySubmitted ? (
                  <div className="p-4 bg-[#F2EDE5] border border-[#DDD5CA] rounded-xs text-xs text-[#423C32] space-y-2">
                    <div className="flex items-center gap-1.5 text-emerald-800 font-semibold">
                      <Check className="w-4 h-4" />
                      <span>Inquiry Dispatched</span>
                    </div>
                    <p className="font-light leading-relaxed">
                      Thank you. {property.agent.name} will contact you shortly to coordinate your confidential walkthrough of {property.title}.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleInquirySubmit} className="space-y-3 text-xs">
                    <div>
                      <label className="block text-[#665D50] mb-1 font-light">Full Name</label>
                      <input
                        type="text"
                        required
                        value={inquiryName}
                        onChange={(e) => setInquiryName(e.target.value)}
                        placeholder="e.g. Vikram Singhania"
                        className="w-full p-2.5 bg-[#F7F4EE] border border-[#DDD5CA] rounded-xs text-[#1E1E1E] focus:outline-none focus:border-[#1E1E1E]"
                      />
                    </div>

                    <div>
                      <label className="block text-[#665D50] mb-1 font-light">Email Address</label>
                      <input
                        type="email"
                        required
                        value={inquiryEmail}
                        onChange={(e) => setInquiryEmail(e.target.value)}
                        placeholder="v.singhania@domain.com"
                        className="w-full p-2.5 bg-[#F7F4EE] border border-[#DDD5CA] rounded-xs text-[#1E1E1E] focus:outline-none focus:border-[#1E1E1E]"
                      />
                    </div>

                    <div>
                      <label className="block text-[#665D50] mb-1 font-light">Direct Phone</label>
                      <input
                        type="tel"
                        required
                        value={inquiryPhone}
                        onChange={(e) => setInquiryPhone(e.target.value)}
                        placeholder="+91 98220 XXXXX"
                        className="w-full p-2.5 bg-[#F7F4EE] border border-[#DDD5CA] rounded-xs text-[#1E1E1E] focus:outline-none focus:border-[#1E1E1E]"
                      />
                    </div>

                    <div>
                      <label className="block text-[#665D50] mb-1 font-light">Confidential Notes</label>
                      <textarea
                        rows={3}
                        value={inquiryMessage}
                        onChange={(e) => setInquiryMessage(e.target.value)}
                        className="w-full p-2.5 bg-[#F7F4EE] border border-[#DDD5CA] rounded-xs text-[#1E1E1E] focus:outline-none focus:border-[#1E1E1E]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 bg-[#1E1E1E] hover:bg-[#333333] text-white rounded-xs text-xs uppercase tracking-widest font-medium transition-colors flex items-center justify-center gap-1.5"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Submit Viewing Request</span>
                    </button>
                  </form>
                )}
              </div>

              {/* Security note */}
              <div className="pt-2 flex items-center gap-2 text-[11px] text-[#7A7164] font-light">
                <ShieldCheck className="w-4 h-4 text-[#8C7E6C] shrink-0" />
                <span>NDA & private client discretion observed.</span>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 5. SIMILAR RESIDENCES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 border-t border-[#ECE6DE]">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs uppercase font-mono tracking-widest text-[#786F62] block mb-1">
              PARALLEL SELECTIONS
            </span>
            <h3 className="font-serif-heading text-2xl sm:text-3xl text-[#1A1A1A]">
              Similar Residences in Pune
            </h3>
          </div>
          <Link
            to="/properties"
            className="text-xs uppercase tracking-wider font-medium text-[#1E1E1E] hover:text-[#574B3B] transition-colors"
          >
            Explore All Residences →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {similarProperties.map((simProp) => (
            <PropertyCard key={simProp.id} property={simProp} />
          ))}
        </div>
      </section>

    </div>
  )
}
