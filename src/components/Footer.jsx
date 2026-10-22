import React from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Compass, ShieldCheck } from 'lucide-react'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="mt-32 border-t border-[#ECE6DE] bg-[#FAF8F5] text-[#2C2720]">
      {/* Upper Footer: Brand & Offices */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Brand Info */}
          <div className="space-y-4 md:col-span-1">
            <Link to="/" className="inline-block">
              <Logo />
            </Link>
            <p className="text-xs text-[#6B6154] font-light leading-relaxed">
              Curating architecturally distinct residential estates, sky penthouses, and private pavilions across Pune's prime neighborhoods.
            </p>
            <div className="pt-2 text-xs text-[#524A3F] space-y-1.5 font-light">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#8C8071]" />
                <span>+91 (020) 8492-3000</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#8C8071]" />
                <span>concierge@aevora.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-[#1F1B16]">
              Portfolio
            </h4>
            <ul className="space-y-2 text-xs text-[#665D50] font-light">
              <li>
                <Link to="/properties" className="hover:text-[#1A1A1A] transition-colors">
                  All Current Residences
                </Link>
              </li>
              <li>
                <Link to="/properties?type=Penthouse" className="hover:text-[#1A1A1A] transition-colors">
                  Sky Penthouses
                </Link>
              </li>
              <li>
                <Link to="/properties?type=Villa" className="hover:text-[#1A1A1A] transition-colors">
                  Architectural Villas
                </Link>
              </li>
              <li>
                <Link to="/properties?type=Duplex" className="hover:text-[#1A1A1A] transition-colors">
                  Waterfront Duplexes
                </Link>
              </li>
              <li>
                <a href="/#cinematic-films" className="hover:text-[#1A1A1A] transition-colors">
                  Cinematic Property Films
                </a>
              </li>
            </ul>
          </div>

          {/* Pune Neighborhoods */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-[#1F1B16]">
              Neighborhoods
            </h4>
            <ul className="space-y-2 text-xs text-[#665D50] font-light">
              <li>
                <Link to="/properties?location=Koregaon+Park" className="hover:text-[#1A1A1A] transition-colors">
                  Koregaon Park
                </Link>
              </li>
              <li>
                <Link to="/properties?location=Baner" className="hover:text-[#1A1A1A] transition-colors">
                  Baner & Pashan Hills
                </Link>
              </li>
              <li>
                <Link to="/properties?location=Kharadi" className="hover:text-[#1A1A1A] transition-colors">
                  Kharadi Waterfront
                </Link>
              </li>
              <li>
                <Link to="/properties?location=Hinjawadi" className="hover:text-[#1A1A1A] transition-colors">
                  Hinjawadi Foothills
                </Link>
              </li>
            </ul>
          </div>

          {/* Offices & Representation */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-[#1F1B16]">
              Pune Studios
            </h4>
            <div className="space-y-3 text-xs text-[#665D50] font-light">
              <div>
                <p className="font-medium text-[#29241E]">Koregaon Park Flagship</p>
                <p className="text-[11px] text-[#7A7165]">Lane 5, North Main Road, Koregaon Park, Pune 411001</p>
              </div>
              <div>
                <p className="font-medium text-[#29241E]">Baner Gallery</p>
                <p className="text-[11px] text-[#7A7165]">Baner-Pashan Link Road, Baner, Pune 411045</p>
              </div>
              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-block text-xs uppercase tracking-wider underline underline-offset-4 decoration-[#B8AC9C] text-[#1E1E1E] font-medium"
                >
                  Request Private Consultation →
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Demonstration & Sample Notice Banner */}
      <div className="border-t border-[#ECE6DE] bg-[#F4EFE9]/80 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs text-[#7A7062] font-light space-y-1">
          <p className="font-medium text-[#423C33]">
            Sample Property Demonstration Platform
          </p>
          <p className="text-[11px] max-w-3xl mx-auto leading-relaxed">
            Aevora is a conceptual luxury real estate discovery and architectural presentation website. All property names, specifications, photography, floor plans, and pricing in Pune (Baner, Koregaon Park, Kharadi, Hinjawadi) are curated demo samples for demonstration purposes only.
          </p>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-[#ECE6DE] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#8C8274] font-light">
          <div>
            © {new Date().getFullYear()} Aevora Fine Properties. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link to="/about" className="hover:text-[#1E1E1E] transition-colors">Agency Overview</Link>
            <Link to="/contact" className="hover:text-[#1E1E1E] transition-colors">Private Client Services</Link>
            <a href="https://docs.runwayml.com" target="_blank" rel="noreferrer" className="hover:text-[#1E1E1E] transition-colors">Runway Integration Architecture</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
