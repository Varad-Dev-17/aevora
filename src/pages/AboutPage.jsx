import React from 'react'
import { Link } from 'react-router-dom'
import { Building, Award, Shield, Users, Compass, ArrowRight } from 'lucide-react'

export default function AboutPage() {
  const leadership = [
    {
      name: "Rohan Kulkarni",
      role: "Managing Director & Founder",
      bio: "Over 18 years shaping landmark property acquisitions and architectural advisory across Pune and Mumbai.",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Aditi Deshmukh",
      role: "Principal Private Client Advisor",
      bio: "Specializing in high-value sky penthouses and heritage estates in Koregaon Park and Baner Hills.",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Nikhil Ranade",
      role: "Director of Architectural Cinema & Media",
      bio: "Pioneering spatial cinematography and drone visualization for luxury property presentations.",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
    }
  ]

  return (
    <div className="space-y-24 py-12 md:py-16">
      
      {/* Hero Narrative */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <span className="text-xs uppercase font-mono tracking-widest text-[#786F62] block">
          ABOUT AEVORA
        </span>
        <h1 className="font-serif-heading text-4xl sm:text-5xl md:text-6xl text-[#1A1A1A] leading-tight">
          An Agency Defined by Architecture, Light, and Discretion.
        </h1>
        <p className="text-base sm:text-lg text-[#5E5549] font-light leading-relaxed">
          Aevora was founded on a simple observation: high-end real estate in Pune was being marketed through commodified classified portals that failed to honor the emotional depth, craftsmanship, and spatial poetry of fine homes.
        </p>
      </section>

      {/* Large Visual Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative aspect-[21/9] rounded-sm overflow-hidden border border-[#DDD5CA]">
          <img
            src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=2000&q=85"
            alt="Aevora architectural heritage in Pune"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <p className="font-serif-heading text-2xl font-light">The Pune Architectural Renaissance</p>
              <p className="text-xs text-[#DDD5CA] font-light">From classic bungalows in Koregaon Park to cantilevered hill residences in Baner</p>
            </div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#E6DED3]">Est. 2021 • Pune</span>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-[#FAF8F5] border border-[#DDD5CA] rounded-sm space-y-3">
            <Award className="w-6 h-6 text-[#8F816F]" />
            <h3 className="font-serif-heading text-xl text-[#1E1E1E]">Architectural Curation</h3>
            <p className="text-xs sm:text-sm text-[#61584C] font-light leading-relaxed">
              We decline more representations than we accept. A residence must showcase exceptional natural lighting, thoughtful volume, and lasting materiality before earning inclusion in our catalogue.
            </p>
          </div>

          <div className="p-8 bg-[#FAF8F5] border border-[#DDD5CA] rounded-sm space-y-3">
            <Compass className="w-6 h-6 text-[#8F816F]" />
            <h3 className="font-serif-heading text-xl text-[#1E1E1E]">Cinematic Storytelling</h3>
            <p className="text-xs sm:text-sm text-[#61584C] font-light leading-relaxed">
              Every flagship listing is accompanied by a custom 4K property film capturing transitions of daylight, acoustics, and seamless connections between interiors and outdoor grounds.
            </p>
          </div>

          <div className="p-8 bg-[#FAF8F5] border border-[#DDD5CA] rounded-sm space-y-3">
            <Shield className="w-6 h-6 text-[#8F816F]" />
            <h3 className="font-serif-heading text-xl text-[#1E1E1E]">Discreet Acquisitions</h3>
            <p className="text-xs sm:text-sm text-[#61584C] font-light leading-relaxed">
              Our private client practice orchestrates off-market transactions with stringent privacy protocols, protecting the confidentiality of buyers and sellers alike.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase font-mono tracking-widest text-[#786F62] block mb-1">
            PRIVATE CLIENT ADVISORY
          </span>
          <h2 className="font-serif-heading text-3xl sm:text-4xl text-[#1A1A1A]">
            Agency Leadership
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {leadership.map((leader, i) => (
            <div key={i} className="border border-[#DDD5CA] bg-[#FAF8F5] rounded-sm overflow-hidden">
              <div className="aspect-[4/3] bg-[#EAE3D8] overflow-hidden">
                <img
                  src={leader.avatar}
                  alt={leader.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 space-y-2">
                <h3 className="text-base font-semibold text-[#1F1B16]">{leader.name}</h3>
                <p className="text-xs text-[#7A7165] font-mono uppercase tracking-wider">{leader.role}</p>
                <p className="text-xs text-[#5C5449] font-light leading-relaxed pt-2">
                  {leader.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 text-center space-y-6">
        <h2 className="font-serif-heading text-3xl text-[#1A1A1A]">
          Begin Your Conversation With Aevora
        </h2>
        <p className="text-sm text-[#635A4D] font-light">
          Whether you are seeking a residence in Pune or exploring confidential representation for an architectural estate.
        </p>
        <div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#1E1E1E] text-white text-xs uppercase tracking-widest font-medium rounded-sm"
          >
            <span>Connect with our Directors</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

    </div>
  )
}
