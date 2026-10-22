import React, { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send, Check, ShieldCheck } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    neighborhood: 'Koregaon Park',
    budget: '5cr-10cr',
    inquiryType: 'Acquisition / Buying',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-16">
      
      {/* Page Header */}
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <span className="text-xs uppercase font-mono tracking-widest text-[#786F62] block">
          PRIVATE CLIENT SERVICES
        </span>
        <h1 className="font-serif-heading text-4xl sm:text-5xl text-[#1A1A1A]">
          Connect With Aevora
        </h1>
        <p className="text-sm md:text-base text-[#61574A] font-light leading-relaxed">
          Our advisors represent private collectors, family offices, and discerning individuals seeking exceptional architectural residences in Pune.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Column: Contact Form (7 cols) */}
        <div className="lg:col-span-7 bg-[#FAF8F5] border border-[#DDD5CA] rounded-sm p-8 sm:p-10 shadow-2xs">
          
          <h2 className="font-serif-heading text-2xl text-[#1A1A1A] mb-2">
            Schedule a Confidential Consultation
          </h2>
          <p className="text-xs text-[#706658] font-light mb-8">
            Complete the form below and a private client advisor will respond within 24 business hours.
          </p>

          {submitted ? (
            <div className="p-8 bg-[#F4EFE9] border border-[#DDD5CA] rounded-xs text-center space-y-3">
              <div className="w-12 h-12 bg-emerald-800 text-white rounded-full flex items-center justify-center mx-auto">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="font-serif-heading text-2xl text-[#1A1A1A]">Inquiry Received</h3>
              <p className="text-xs text-[#5E5549] max-w-md mx-auto font-light leading-relaxed">
                Thank you, {formData.name}. Your inquiry has been routed to our Senior Private Client Advisory desk in Pune. We will reach out to you discreetly via {formData.email || formData.phone}.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#574E42] mb-1 font-medium">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Vikram Singhania"
                    className="w-full p-3 bg-[#F8F5EE] border border-[#DDD5CA] rounded-xs text-[#1E1E1E] focus:outline-none focus:border-[#1E1E1E]"
                  />
                </div>

                <div>
                  <label className="block text-[#574E42] mb-1 font-medium">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="v.singhania@domain.com"
                    className="w-full p-3 bg-[#F8F5EE] border border-[#DDD5CA] rounded-xs text-[#1E1E1E] focus:outline-none focus:border-[#1E1E1E]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#574E42] mb-1 font-medium">Direct Telephone *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98220 XXXXX"
                    className="w-full p-3 bg-[#F8F5EE] border border-[#DDD5CA] rounded-xs text-[#1E1E1E] focus:outline-none focus:border-[#1E1E1E]"
                  />
                </div>

                <div>
                  <label className="block text-[#574E42] mb-1 font-medium">Inquiry Type</label>
                  <select
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    className="w-full p-3 bg-[#F8F5EE] border border-[#DDD5CA] rounded-xs text-[#1E1E1E] focus:outline-none focus:border-[#1E1E1E]"
                  >
                    <option value="Acquisition / Buying">Property Acquisition</option>
                    <option value="Representation / Selling">Confidential Representation / Sale</option>
                    <option value="Cinematic Media">Architectural Film Commission</option>
                    <option value="Other">General Private Client Inquiry</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#574E42] mb-1 font-medium">Preferred Neighborhood</label>
                  <select
                    value={formData.neighborhood}
                    onChange={(e) => setFormData({ ...formData, neighborhood: e.target.value })}
                    className="w-full p-3 bg-[#F8F5EE] border border-[#DDD5CA] rounded-xs text-[#1E1E1E] focus:outline-none focus:border-[#1E1E1E]"
                  >
                    <option value="Koregaon Park">Koregaon Park</option>
                    <option value="Baner">Baner & Baner Hills</option>
                    <option value="Kharadi">Kharadi Riverfront</option>
                    <option value="Hinjawadi">Hinjawadi Foothills</option>
                    <option value="Other">Other Prime Pune Enclave</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[#574E42] mb-1 font-medium">Investment Budget</label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full p-3 bg-[#F8F5EE] border border-[#DDD5CA] rounded-xs text-[#1E1E1E] focus:outline-none focus:border-[#1E1E1E]"
                  >
                    <option value="under-5cr">Under ₹5 Cr</option>
                    <option value="5cr-10cr">₹5 Cr – ₹10 Cr</option>
                    <option value="above-10cr">Above ₹10 Cr</option>
                    <option value="undisclosed">Confidential / Undisclosed</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[#574E42] mb-1 font-medium">Confidential Message</label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Detail any specific architectural preferences, square footage requirements, or viewing schedules..."
                  className="w-full p-3 bg-[#F8F5EE] border border-[#DDD5CA] rounded-xs text-[#1E1E1E] focus:outline-none focus:border-[#1E1E1E]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 bg-[#1E1E1E] hover:bg-[#333333] text-white text-xs uppercase tracking-widest font-medium transition-colors flex items-center justify-center gap-2 rounded-xs"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Confidential Inquiry</span>
                </button>
              </div>

              <div className="pt-3 flex items-center gap-2 text-[11px] text-[#7A7165]">
                <ShieldCheck className="w-4 h-4 text-[#8C7E6C] shrink-0" />
                <span>All client correspondence is strictly confidential.</span>
              </div>
            </form>
          )}

        </div>

        {/* Right Column: Pune Studios & Information (5 cols) */}
        <div className="lg:col-span-5 space-y-8">
          
          {/* Koregaon Park Studio */}
          <div className="p-6 bg-[#FAF8F5] border border-[#DDD5CA] rounded-sm space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#786E60]">
              <MapPin className="w-3.5 h-3.5 text-[#8C7E6C]" />
              <span>Flagship Studio</span>
            </div>
            <h3 className="font-serif-heading text-xl text-[#1E1E1E]">Koregaon Park</h3>
            <p className="text-xs text-[#635A4E] font-light leading-relaxed">
              Lane 5, North Main Road, Koregaon Park<br />
              Pune, Maharashtra 411001, India
            </p>
            <div className="pt-2 border-t border-[#ECE5DB] text-xs text-[#524B40] space-y-1 font-light">
              <p>Telephone: +91 (020) 8492-3000</p>
              <p>Direct: +91 98220 84920</p>
            </div>
          </div>

          {/* Baner Studio */}
          <div className="p-6 bg-[#FAF8F5] border border-[#DDD5CA] rounded-sm space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#786E60]">
              <MapPin className="w-3.5 h-3.5 text-[#8C7E6C]" />
              <span>West Studio & Gallery</span>
            </div>
            <h3 className="font-serif-heading text-xl text-[#1E1E1E]">Baner Hills</h3>
            <p className="text-xs text-[#635A4E] font-light leading-relaxed">
              Baner-Pashan Link Road, Baner<br />
              Pune, Maharashtra 411045, India
            </p>
            <div className="pt-2 border-t border-[#ECE5DB] text-xs text-[#524B40] space-y-1 font-light">
              <p>Telephone: +91 (020) 8492-3005</p>
              <p>Email: baner@aevora.com</p>
            </div>
          </div>

          {/* Hours & Protocol */}
          <div className="p-6 bg-[#F4EFE9] border border-[#DDD5CA] rounded-sm space-y-2 text-xs text-[#5C5346] font-light">
            <div className="flex items-center gap-2 font-medium text-[#29231D]">
              <Clock className="w-3.5 h-3.5" />
              <span>Private Consultation Hours</span>
            </div>
            <p className="leading-relaxed">
              Monday through Saturday: 10:00 AM – 7:00 PM IST<br />
              Sunday: By advance private appointment only.
            </p>
          </div>

        </div>

      </div>

    </div>
  )
}
