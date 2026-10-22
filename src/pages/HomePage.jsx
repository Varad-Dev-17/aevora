import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Search, MapPin, Building, IndianRupee, ArrowRight, Film, Sparkles, Compass, Shield, Award, Users, ChevronRight } from 'lucide-react'
import { PROPERTIES, PUNE_NEIGHBORHOODS } from '../data/properties'
import PropertyCard from '../components/PropertyCard'
import CinematicVideoPlayer from '../components/CinematicVideoPlayer'

export default function HomePage() {
  const navigate = useNavigate()
  const [selectedLocation, setSelectedLocation] = useState('All')
  const [selectedType, setSelectedType] = useState('All')
  const [selectedBudget, setSelectedBudget] = useState('All')

  const featuredProperties = PROPERTIES.filter(p => p.featured)
  const premierFilmProperty = PROPERTIES[0] // The Vayu Sky Penthouse

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    const params = new URLSearchParams()
    if (selectedLocation !== 'All') params.set('location', selectedLocation)
    if (selectedType !== 'All') params.set('type', selectedType)
    if (selectedBudget !== 'All') params.set('budget', selectedBudget)
    navigate(`/properties?${params.toString()}`)
  }

  return (
    <div className="space-y-24 md:space-y-32">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[82vh] md:min-h-[88vh] flex items-center justify-center pt-10 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        
        {/* Full-bleed background architectural imagery */}
        <div className="absolute inset-0 z-0 bg-[#1A1816]">
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2400&q=85"
            alt="Luxury modern architectural residence in Pune"
            className="w-full h-full object-cover opacity-85 brightness-95"
          />
          {/* Subtle gradient scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#141210] via-black/45 to-black/35" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8 pt-8">
          
          {/* Top tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#FAF8F5] text-xs uppercase tracking-widest font-mono">
            <Sparkles className="w-3.5 h-3.5 text-[#E3D9CC]" />
            <span>Curated Fine Residences • Pune</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif-heading text-4xl sm:text-6xl md:text-7xl font-normal text-white tracking-tight leading-[1.12]">
            Find a Place That{' '}
            <span className="italic font-normal underline decoration-[#D8CFBE]/70 decoration-1 underline-offset-8">
              Feels Like Home.
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-[#E8E1D5] font-light leading-relaxed">
            Discover architecturally distinct penthouses, private villas, and bespoke riverfront residences across Koregaon Park, Baner, Kharadi, and Hinjawadi.
          </p>

          {/* Property Search Bar */}
          <div className="pt-4 max-w-4xl mx-auto">
            <form
              onSubmit={handleSearchSubmit}
              className="bg-[#FAF8F5]/95 backdrop-blur-md p-3 sm:p-4 rounded-sm border border-[#DDD5CA] shadow-2xl grid grid-cols-1 sm:grid-cols-4 gap-3 text-left"
            >
              {/* Location Filter */}
              <div className="p-2 sm:border-r border-[#E8E1D5]">
                <label className="block text-[10px] uppercase font-mono tracking-wider text-[#736B5F] mb-1">
                  Location
                </label>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full bg-transparent text-sm font-medium text-[#1E1E1E] focus:outline-none cursor-pointer"
                >
                  <option value="All">All Pune Enclaves</option>
                  <option value="Koregaon Park">Koregaon Park</option>
                  <option value="Baner">Baner</option>
                  <option value="Kharadi">Kharadi</option>
                  <option value="Hinjawadi">Hinjawadi</option>
                </select>
              </div>

              {/* Property Type Filter */}
              <div className="p-2 sm:border-r border-[#E8E1D5]">
                <label className="block text-[10px] uppercase font-mono tracking-wider text-[#736B5F] mb-1">
                  Property Type
                </label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full bg-transparent text-sm font-medium text-[#1E1E1E] focus:outline-none cursor-pointer"
                >
                  <option value="All">All Architectural Types</option>
                  <option value="Penthouse">Sky Penthouse</option>
                  <option value="Villa">Private Villa</option>
                  <option value="Duplex">Waterfront Duplex</option>
                  <option value="Apartment">Garden Apartment</option>
                </select>
              </div>

              {/* Budget Filter */}
              <div className="p-2">
                <label className="block text-[10px] uppercase font-mono tracking-wider text-[#736B5F] mb-1">
                  Budget Range
                </label>
                <select
                  value={selectedBudget}
                  onChange={(e) => setSelectedBudget(e.target.value)}
                  className="w-full bg-transparent text-sm font-medium text-[#1E1E1E] focus:outline-none cursor-pointer"
                >
                  <option value="All">Any Valuation</option>
                  <option value="under-5cr">Under ₹5 Cr</option>
                  <option value="5cr-10cr">₹5 Cr – ₹10 Cr</option>
                  <option value="above-10cr">Above ₹10 Cr</option>
                </select>
              </div>

              {/* Submit CTA */}
              <div className="flex items-center">
                <button
                  type="submit"
                  className="w-full h-full min-h-[46px] bg-[#1E1E1E] hover:bg-[#333333] text-white rounded-sm text-xs uppercase tracking-widest font-medium flex items-center justify-center gap-2 transition-colors shadow-sm"
                >
                  <Search className="w-3.5 h-3.5" />
                  <span>Search Residences</span>
                </button>
              </div>
            </form>
          </div>

        </div>

      </section>

      {/* 2. FEATURED RESIDENCES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-4 border-b border-[#ECE6DE]">
          <div>
            <span className="text-xs uppercase font-mono tracking-widest text-[#786F62] block mb-1">
              CURATED PORTFOLIO
            </span>
            <h2 className="font-serif-heading text-3xl sm:text-4xl text-[#1A1A1A]">
              Featured Properties
            </h2>
          </div>
          <Link
            to="/properties"
            className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-medium text-[#1E1E1E] hover:text-[#5C5040] transition-colors"
          >
            <span>View All Residences ({PROPERTIES.length})</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </section>

      {/* 3. CINEMATIC PROPERTY FILMS SECTION */}
      <section id="cinematic-films" className="bg-[#1C1A18] text-[#FAF8F5] py-20 md:py-28 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Film narrative column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#E3D9CC] text-[11px] font-mono uppercase tracking-widest border border-white/10">
                <Film className="w-3.5 h-3.5" />
                <span>Cinematic Property Films</span>
              </div>

              <h2 className="font-serif-heading text-3xl sm:text-4xl md:text-5xl font-normal leading-tight text-white">
                Experience Architecture in Motion
              </h2>

              <p className="text-sm sm:text-base text-[#D4C8B8] font-light leading-relaxed">
                Static photos cannot capture the way evening light filters through double-height glass or how breezes sweep across a private sky terrace. Aevora produces studio-grade architectural films for our flagship estates.
              </p>

              <div className="pt-2 space-y-3 border-t border-white/10 text-xs text-[#BCB0A0]">
                <div className="flex items-center justify-between">
                  <span>Featured Film:</span>
                  <span className="font-medium text-white">{premierFilmProperty.title}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Location:</span>
                  <span className="font-medium text-white">{premierFilmProperty.location}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Camera Direction:</span>
                  <span className="font-medium text-white">{premierFilmProperty.cinematicVideo.filmStyle}</span>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  to={`/properties/${premierFilmProperty.id}`}
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-[#1A1A1A] hover:bg-[#EAE4DC] text-xs uppercase tracking-widest font-medium transition-colors rounded-sm"
                >
                  <span>Explore Featured Residence</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Video Player Column */}
            <div className="lg:col-span-7">
              <CinematicVideoPlayer
                video={premierFilmProperty.cinematicVideo}
                propertyTitle={premierFilmProperty.title}
                posterImage={premierFilmProperty.images[0]}
              />
            </div>

          </div>

        </div>
      </section>

      {/* 4. EXPLORE BY LOCATION (PUNE NEIGHBORHOODS) */}
      <section id="neighborhoods" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase font-mono tracking-widest text-[#786F62] block mb-1">
            PUNE LOCALES
          </span>
          <h2 className="font-serif-heading text-3xl sm:text-4xl text-[#1A1A1A]">
            Explore by Neighborhood
          </h2>
          <p className="text-sm text-[#665D50] font-light mt-2">
            Each enclave possesses a distinct architectural rhythm, from historic banyan-canopied avenues to elevated skyline terraces.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PUNE_NEIGHBORHOODS.map((nh) => (
            <Link
              key={nh.id}
              to={`/properties?location=${encodeURIComponent(nh.name)}`}
              className="group relative rounded-sm overflow-hidden aspect-[4/5] bg-[#24211D] border border-[#DDD5CA] shadow-2xs"
            >
              <img
                src={nh.image}
                alt={nh.name}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-85"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141210]/90 via-[#141210]/30 to-transparent" />

              <div className="absolute bottom-0 inset-x-0 p-5 text-white flex flex-col justify-end space-y-1">
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#E3D9CC]">
                  {nh.avgPrice}
                </span>
                <h3 className="font-serif-heading text-2xl font-normal text-white">
                  {nh.name}
                </h3>
                <p className="text-xs text-[#DDD5CA] font-light line-clamp-2 pt-1 leading-snug">
                  {nh.description}
                </p>
                <div className="pt-2 flex items-center justify-between text-[11px] text-[#EBE4D8] font-medium">
                  <span>{nh.propertiesCount} Curated Homes</span>
                  <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 5. ABOUT AEVORA PHILOSOPHY */}
      <section className="bg-[#F4EFE9] border-y border-[#ECE6DE] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="text-xs uppercase font-mono tracking-widest text-[#786F62]">
              THE AEVORA STANDARD
            </span>
            <h2 className="font-serif-heading text-3xl sm:text-4xl text-[#1A1A1A] leading-snug">
              "We represent only homes where architecture, light, and materiality achieve harmony."
            </h2>
            <p className="text-sm text-[#61574A] font-light leading-relaxed">
              Founded in Pune, Aevora bridges world-class architectural appreciation with discreet client advisory. We eschew commodified property portals in favor of bespoke storytelling, high-resolution visual curation, and cinematic spatial experiences.
            </p>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
              <div className="p-4 bg-[#FAF8F5] border border-[#DDD5CA] rounded-xs space-y-1.5">
                <Award className="w-5 h-5 text-[#8C7E6D]" />
                <h4 className="text-sm font-semibold text-[#1F1B16]">Architectural Merit</h4>
                <p className="text-xs text-[#6B6154] font-light">Every listing undergoes rigorous spatial and design assessment.</p>
              </div>

              <div className="p-4 bg-[#FAF8F5] border border-[#DDD5CA] rounded-xs space-y-1.5">
                <Shield className="w-5 h-5 text-[#8C7E6D]" />
                <h4 className="text-sm font-semibold text-[#1F1B16]">Discreet Representation</h4>
                <p className="text-xs text-[#6B6154] font-light">Confidential acquisitions and private viewing protocols.</p>
              </div>

              <div className="p-4 bg-[#FAF8F5] border border-[#DDD5CA] rounded-xs space-y-1.5">
                <Film className="w-5 h-5 text-[#8C7E6D]" />
                <h4 className="text-sm font-semibold text-[#1F1B16]">Cinematic Storytelling</h4>
                <p className="text-xs text-[#6B6154] font-light">Capturing natural light, airflow, and volumetric scale.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PRIVATE CONSULTATION CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 text-center space-y-6">
        <h2 className="font-serif-heading text-3xl sm:text-4xl text-[#1A1A1A]">
          Seeking an Exceptional Residence in Pune?
        </h2>
        <p className="text-sm text-[#665D50] max-w-xl mx-auto font-light leading-relaxed">
          Our private client advisors maintain off-market relationships with distinguished homeowners across Koregaon Park and Baner Hills.
        </p>
        <div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#1E1E1E] hover:bg-[#333333] text-white text-xs uppercase tracking-widest font-medium transition-colors rounded-sm shadow-xs"
          >
            <span>Schedule Private Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  )
}
