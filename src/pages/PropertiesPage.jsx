import React, { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Filter, SlidersHorizontal, RotateCcw, Building2, MapPin } from 'lucide-react'
import { PROPERTIES, PUNE_NEIGHBORHOODS } from '../data/properties'
import PropertyCard from '../components/PropertyCard'

export default function PropertiesPage() {
  const [searchParams, setSearchParams] = useSearchParams()

  // Read initial filter values from URL search params
  const [selectedLocation, setSelectedLocation] = useState(searchParams.get('location') || 'All')
  const [selectedType, setSelectedType] = useState(searchParams.get('type') || 'All')
  const [selectedBedrooms, setSelectedBedrooms] = useState(searchParams.get('bedrooms') || 'All')
  const [selectedBudget, setSelectedBudget] = useState(searchParams.get('budget') || 'All')
  const [sortBy, setSortBy] = useState('featured')

  // Filter logic
  const filteredProperties = useMemo(() => {
    return PROPERTIES.filter((property) => {
      // Location filter
      if (selectedLocation !== 'All') {
        if (!property.neighborhood.toLowerCase().includes(selectedLocation.toLowerCase()) &&
            !property.location.toLowerCase().includes(selectedLocation.toLowerCase())) {
          return false
        }
      }

      // Type filter
      if (selectedType !== 'All') {
        if (property.type.toLowerCase() !== selectedType.toLowerCase()) {
          return false
        }
      }

      // Bedrooms filter
      if (selectedBedrooms !== 'All') {
        const bedNum = parseInt(selectedBedrooms, 10)
        if (property.specs.bedrooms !== bedNum) {
          return false
        }
      }

      // Budget filter
      if (selectedBudget !== 'All') {
        if (selectedBudget === 'under-5cr' && property.priceValue >= 50000000) return false
        if (selectedBudget === '5cr-10cr' && (property.priceValue < 50000000 || property.priceValue > 100000000)) return false
        if (selectedBudget === 'above-10cr' && property.priceValue <= 100000000) return false
      }

      return true
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.priceValue - b.priceValue
      if (sortBy === 'price-desc') return b.priceValue - a.priceValue
      if (sortBy === 'area-desc') {
        const aArea = parseInt(a.specs.area.replace(/\D/g, ''), 10)
        const bArea = parseInt(b.specs.area.replace(/\D/g, ''), 10)
        return bArea - aArea
      }
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0)
    })
  }, [selectedLocation, selectedType, selectedBedrooms, selectedBudget, sortBy])

  const handleResetFilters = () => {
    setSelectedLocation('All')
    setSelectedType('All')
    setSelectedBedrooms('All')
    setSelectedBudget('All')
    setSortBy('featured')
    setSearchParams({})
  }

  const hasActiveFilters = selectedLocation !== 'All' || selectedType !== 'All' || selectedBedrooms !== 'All' || selectedBudget !== 'All'

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-10">
      
      {/* Editorial Header */}
      <div className="border-b border-[#ECE6DE] pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="text-xs uppercase font-mono tracking-widest text-[#786F62] block mb-1">
            RESIDENTIAL CATALOGUE
          </span>
          <h1 className="font-serif-heading text-4xl sm:text-5xl text-[#1A1A1A]">
            Curated Residences Across Pune
          </h1>
          <p className="mt-3 text-sm text-[#665D50] max-w-2xl font-light">
            Explore architecturally significant penthouses, heritage villas, and riverfront duplexes. Each residence is verified for bespoke craftsmanship, spatial volume, and prime locale.
          </p>
        </div>

        <div className="flex items-center gap-3 self-start md:self-end text-xs text-[#6B6154]">
          <span className="font-medium text-[#1A1A1A]">{filteredProperties.length}</span>
          <span>residences matching criteria</span>
        </div>
      </div>

      {/* Filter Control Bar */}
      <div className="bg-[#FAF8F5] border border-[#DDD5CA] rounded-sm p-4 sm:p-5 shadow-2xs space-y-4">
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#3D372F]">
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#8A7C6B]" />
            <span>Refine Criteria</span>
          </div>

          {hasActiveFilters && (
            <button
              onClick={handleResetFilters}
              className="flex items-center gap-1.5 text-xs text-[#7A6F60] hover:text-[#1A1A1A] transition-colors"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset Filters</span>
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          
          {/* Location */}
          <div>
            <label className="block text-[10px] uppercase font-mono tracking-wider text-[#736B5F] mb-1">
              Location
            </label>
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="w-full bg-[#F4EFE9] border border-[#DDD5CA] text-xs font-medium text-[#1E1E1E] p-2.5 rounded-xs focus:outline-none focus:border-[#1E1E1E]"
            >
              <option value="All">All Locations</option>
              <option value="Baner">Baner</option>
              <option value="Kharadi">Kharadi</option>
              <option value="Koregaon Park">Koregaon Park</option>
              <option value="Hinjawadi">Hinjawadi</option>
            </select>
          </div>

          {/* Property Type */}
          <div>
            <label className="block text-[10px] uppercase font-mono tracking-wider text-[#736B5F] mb-1">
              Type
            </label>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full bg-[#F4EFE9] border border-[#DDD5CA] text-xs font-medium text-[#1E1E1E] p-2.5 rounded-xs focus:outline-none focus:border-[#1E1E1E]"
            >
              <option value="All">All Types</option>
              <option value="Penthouse">Sky Penthouse</option>
              <option value="Villa">Villa / Pavilion</option>
              <option value="Duplex">Waterfront Duplex</option>
              <option value="Apartment">Garden Apartment</option>
            </select>
          </div>

          {/* Bedrooms */}
          <div>
            <label className="block text-[10px] uppercase font-mono tracking-wider text-[#736B5F] mb-1">
              Bedrooms
            </label>
            <select
              value={selectedBedrooms}
              onChange={(e) => setSelectedBedrooms(e.target.value)}
              className="w-full bg-[#F4EFE9] border border-[#DDD5CA] text-xs font-medium text-[#1E1E1E] p-2.5 rounded-xs focus:outline-none focus:border-[#1E1E1E]"
            >
              <option value="All">Any Bedrooms</option>
              <option value="3">3 Bedrooms</option>
              <option value="4">4 Bedrooms</option>
              <option value="5">5 Bedrooms</option>
            </select>
          </div>

          {/* Budget */}
          <div>
            <label className="block text-[10px] uppercase font-mono tracking-wider text-[#736B5F] mb-1">
              Valuation
            </label>
            <select
              value={selectedBudget}
              onChange={(e) => setSelectedBudget(e.target.value)}
              className="w-full bg-[#F4EFE9] border border-[#DDD5CA] text-xs font-medium text-[#1E1E1E] p-2.5 rounded-xs focus:outline-none focus:border-[#1E1E1E]"
            >
              <option value="All">Any Price</option>
              <option value="under-5cr">Under ₹5 Cr</option>
              <option value="5cr-10cr">₹5 Cr – ₹10 Cr</option>
              <option value="above-10cr">Above ₹10 Cr</option>
            </select>
          </div>

          {/* Sort */}
          <div>
            <label className="block text-[10px] uppercase font-mono tracking-wider text-[#736B5F] mb-1">
              Sort By
            </label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full bg-[#F4EFE9] border border-[#DDD5CA] text-xs font-medium text-[#1E1E1E] p-2.5 rounded-xs focus:outline-none focus:border-[#1E1E1E]"
            >
              <option value="featured">Curated & Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="area-desc">Area: Largest First</option>
            </select>
          </div>

        </div>

      </div>

      {/* Property Listings Grid */}
      {filteredProperties.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 border border-dashed border-[#D8CFBE] rounded-sm bg-[#FAF8F5] p-8 space-y-4">
          <Building2 className="w-10 h-10 text-[#8F8170] mx-auto" />
          <h3 className="font-serif-heading text-2xl text-[#1A1A1A]">
            No matching residences found
          </h3>
          <p className="text-xs sm:text-sm text-[#665D50] max-w-md mx-auto font-light">
            No properties currently match your selected filters. Try broadening your location, budget, or bedroom preferences.
          </p>
          <div className="pt-2">
            <button
              onClick={handleResetFilters}
              className="px-5 py-2.5 bg-[#1E1E1E] text-white text-xs uppercase tracking-wider font-medium rounded-sm"
            >
              Reset All Filters
            </button>
          </div>
        </div>
      )}

    </div>
  )
}
