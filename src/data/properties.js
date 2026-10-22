/**
 * Aevora - Curated Sample Real Estate Properties in Pune
 * 
 * DISCLAIMER:
 * All property listings, pricing, agent names, and specifications in this file
 * are realistic demo samples created for the Aevora platform demonstration.
 * They represent conceptual properties and are not actual listings currently
 * offered for sale on the open market.
 */

export const PUNE_NEIGHBORHOODS = [
  {
    id: "koregaon-park",
    name: "Koregaon Park",
    description: "Pune's premier heritage neighborhood, renowned for leafy banyan canopies, historic bungalows, and refined cosmopolitan lifestyle.",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
    propertiesCount: 6,
    avgPrice: "₹5.5 - 18 Cr"
  },
  {
    id: "baner",
    name: "Baner",
    description: "Nestled against scenic hills with vibrant contemporary infrastructure, Baner offers modern skyline penthouses and hilltop villas.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    propertiesCount: 8,
    avgPrice: "₹3.8 - 12 Cr"
  },
  {
    id: "kharadi",
    name: "Kharadi",
    description: "Eastern Pune's booming riverfront corridor featuring luxury waterfront towers, smart residential enclaves, and proximity to tech hubs.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    propertiesCount: 5,
    avgPrice: "₹2.9 - 8.5 Cr"
  },
  {
    id: "hinjawadi",
    name: "Hinjawadi",
    description: "Surrounded by Sahyadri foothills, Hinjawadi is evolving into an enclave for serene eco-villas and tech-forward gated estates.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    propertiesCount: 4,
    avgPrice: "₹2.4 - 6.2 Cr"
  }
];

export const PROPERTIES = [
  {
    id: "the-vayu-sky-penthouse-baner",
    title: "The Vayu Sky Penthouse",
    tagline: "Double-height architectural aerie over Baner Hills with private infinity pool",
    location: "Baner Hills, Pune",
    neighborhood: "Baner",
    price: "₹8.75 Cr",
    priceValue: 87500000,
    type: "Penthouse",
    status: "Private Viewing",
    featured: true,
    specs: {
      bedrooms: 4,
      bathrooms: 5,
      area: "5,400 sq.ft.",
      parking: "3 Covered Bays",
      floor: "27th & 28th Penthouse",
      yearBuilt: 2024
    },
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=85"
    ],
    cinematicVideo: {
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-modern-architecture-building-with-glass-facade-42354-large.mp4",
      title: "Cinematic Film: The Vayu Sky Penthouse",
      duration: "0:48",
      filmStyle: "Luxury Architectural 4K Drone & Steadicam",
      aspectRatio: "16:9",
      description: "A sweeping aerial ascent from Baner Valley transitioning into the double-height glass living salon."
    },
    description: "Perched high above the Baner skyline, The Vayu Penthouse is a masterclass in modern tropical brutalism softened by warm Italian travertine and sustainable teak. Featuring 22-foot double-height ceilings, floor-to-ceiling acoustic glass curtains, and an unobstructed 270-degree panorama of the Sahyadri foothills. The private rooftop sanctuary features a cantilevered heated infinity plunge pool, a private sauna pavilion, and an open-air fire table designed for intimate entertaining.",
    amenities: [
      "Private Heated Infinity Plunge Pool",
      "22-Foot Double Height Living Salon",
      "Private High-Speed Elevator Access",
      "Italian Travertine & Warm Teak Flooring",
      "Miele-Equipped Chef's Kitchen",
      "Automated Lutron Lighting & Climate",
      "Air Purification & Acoustic Glazing",
      "24/7 Dedicated Concierge & Valet"
    ],
    agent: {
      name: "Aditi Deshmukh",
      title: "Principal Private Client Advisor",
      phone: "+91 (020) 8492-3001",
      email: "aditi.deshmukh@aevora.com",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80"
    }
  },
  {
    id: "the-banyan-heritage-estate-koregaon-park",
    title: "The Banyan Heritage Pavilion",
    tagline: "Courtyard sanctuary enveloped by historic banyans in Koregaon Park",
    location: "Lane 5, Koregaon Park, Pune",
    neighborhood: "Koregaon Park",
    price: "₹14.50 Cr",
    priceValue: 145000000,
    type: "Villa",
    status: "Exclusive Mandate",
    featured: true,
    specs: {
      bedrooms: 5,
      bathrooms: 6,
      area: "7,200 sq.ft.",
      parking: "4 Vehicles",
      floor: "Independent G+2 Estate",
      yearBuilt: 2023
    },
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1600&q=85"
    ],
    cinematicVideo: {
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-looking-up-at-a-modern-building-with-blue-sky-42355-large.mp4",
      title: "Cinematic Film: The Banyan Heritage Estate",
      duration: "0:52",
      filmStyle: "Steadicam Walkthrough & Water Courtyard Glide",
      aspectRatio: "16:9",
      description: "Fluid walkthrough through the central frangipani courtyard and sunlit colonnade."
    },
    description: "Nestled in Koregaon Park's most coveted private avenue, The Banyan Pavilion redefines tropical urban living. Designed around a sacred central courtyard with reflecting lily pools and aged frangipani trees, the residence blurs indoor and outdoor boundaries through pivoting glass doors. Natural basalt stone, exposed concrete, and brass detailing create a serene sanctuary minutes from Osho Teerth Park.",
    amenities: [
      "Central Lily Courtyard with Water Features",
      "Private Lap Pool with Sunken Lounge",
      "Separate Staff Quarters & Chef Prep Area",
      "Sub-Zero & Wolf Culinary Suite",
      "Dedicated Wine & Cigar Tasting Lounge",
      "Solid Teak Pivoting Architectural Doors",
      "Solar Power Battery Storage System",
      "Biometric Perimeter Security"
    ],
    agent: {
      name: "Rohan Kulkarni",
      title: "Senior Director, Heritage & Luxury Estates",
      phone: "+91 (020) 8492-3002",
      email: "rohan.kulkarni@aevora.com",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80"
    }
  },
  {
    id: "the-azure-riverfront-residence-kharadi",
    title: "The Azure Riverfront Residence",
    tagline: "Expansive riverbank modern duplex with wraparound landscaped terrace",
    location: "Riverfront Road, Kharadi, Pune",
    neighborhood: "Kharadi",
    price: "₹4.60 Cr",
    priceValue: 46000000,
    type: "Duplex",
    status: "Private Viewing",
    featured: true,
    specs: {
      bedrooms: 4,
      bathrooms: 4,
      area: "3,850 sq.ft.",
      parking: "2 Covered Bays",
      floor: "18th & 19th Duplex",
      yearBuilt: 2024
    },
    images: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1600&q=85"
    ],
    cinematicVideo: {
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-modern-architecture-building-with-glass-facade-42354-large.mp4",
      title: "Cinematic Film: The Azure Riverfront",
      duration: "0:40",
      filmStyle: "Golden Hour Riverfront Drone & Interior Dolly",
      aspectRatio: "16:9",
      description: "Golden hour river vista sweeping across the open living room terrace."
    },
    description: "Positioned on the banks of the Mula-Mutha river in Kharadi, this contemporary duplex offers uninterrupted water and sunrise views. The lower level encompasses an expansive great room with custom bronze screens and open dining, while the upper level is dedicated to a serene family study and primary sanctuary with private outdoor rain shower.",
    amenities: [
      "Wraparound Landscaped Riverview Balcony",
      "Custom Bronze & Teak Architectural Screens",
      "Master Suite with Outdoor Rain Shower",
      "EV Fast-Charging Dual Bay",
      "Integrated Sonos Whole-Home Audio",
      "Clubhouse Access with Olympic Lap Pool",
      "Direct Riverside Jogging Track Access",
      "24/7 Advanced Surveillance & Access Control"
    ],
    agent: {
      name: "Aditi Deshmukh",
      title: "Principal Private Client Advisor",
      phone: "+91 (020) 8492-3001",
      email: "aditi.deshmukh@aevora.com",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80"
    }
  },
  {
    id: "the-silicon-pavilion-hinjawadi",
    title: "The Silicon Hillside Pavilion",
    tagline: "Eco-modern architectural villa overlooking the Sahyadri Valley",
    location: "Phase 1 Hills, Hinjawadi, Pune",
    neighborhood: "Hinjawadi",
    price: "₹3.90 Cr",
    priceValue: 39000000,
    type: "Villa",
    status: "Private Viewing",
    featured: false,
    specs: {
      bedrooms: 3,
      bathrooms: 4,
      area: "3,400 sq.ft.",
      parking: "2 Vehicles",
      floor: "Single Level Glass Pavilion",
      yearBuilt: 2023
    },
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=85"
    ],
    cinematicVideo: {
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-looking-up-at-a-modern-building-with-blue-sky-42355-large.mp4",
      title: "Cinematic Film: Hillside Pavilion",
      duration: "0:36",
      filmStyle: "Morning Mist Drone Glide & Architectural Details",
      aspectRatio: "16:9",
      description: "Morning mountain mist lifting above the glass pavilion courtyard."
    },
    description: "Designed for leaders in technology and design seeking respite without isolation, this single-level modern pavilion in Hinjawadi features raw board-formed concrete, floor-to-ceiling glass, and indigenous landscape gardens. The home operates with net-zero solar energy and rainwater harvesting systems.",
    amenities: [
      "Net-Zero Solar & Thermal Architecture",
      "Acoustically Isolated Executive Home Office",
      "Zen Meditation Rock Garden & Water Basin",
      "Seamless Indoor-Outdoor Glass Transitions",
      "Smart Irrigation & Native Plant Gardens",
      "High-Performance Fiber Optic Backbone",
      "Covered Al-Fresco Dining Deck",
      "Gated Community with 24/7 Security"
    ],
    agent: {
      name: "Rohan Kulkarni",
      title: "Senior Director, Heritage & Luxury Estates",
      phone: "+91 (020) 8492-3002",
      email: "rohan.kulkarni@aevora.com",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80"
    }
  },
  {
    id: "the-terraces-at-baner-hills",
    title: "The Terraces at Baner Hills",
    tagline: "Cascading modern garden apartment with sweeping sunset exposure",
    location: "Baner-Pashan Link Road, Pune",
    neighborhood: "Baner",
    price: "₹3.40 Cr",
    priceValue: 34000000,
    type: "Apartment",
    status: "Private Viewing",
    featured: false,
    specs: {
      bedrooms: 3,
      bathrooms: 3,
      area: "2,750 sq.ft.",
      parking: "2 Covered Bays",
      floor: "12th Floor Corner Unit",
      yearBuilt: 2024
    },
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1600&q=85"
    ],
    cinematicVideo: {
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-modern-architecture-building-with-glass-facade-42354-large.mp4",
      title: "Cinematic Film: The Terraces",
      duration: "0:42",
      filmStyle: "Sunset Interior Dolly & Balcony Panorama",
      aspectRatio: "16:9",
      description: "Sunset interior dolly leading out to the deep cantilevered terrace garden."
    },
    description: "An elegant corner residence that embraces natural cross-ventilation and golden afternoon light. Designed by renowned Pune architects, the layout features a 30-foot living gallery opening onto a deep private planter terrace overlooking the Baner hill reserve.",
    amenities: [
      "Deep Cantilevered Terrace with Hill Views",
      "Custom Modular Kitchen with Quartz Surfaces",
      "Engineered Oak Wood Bedroom Flooring",
      "Clubhouse, Infinity Pool & Squash Court",
      "High-Speed Passenger & Service Elevators",
      "Comprehensive Rainwater Harvesting",
      "Dedicated EV Charging Point",
      "3-Tier Video Intercom Security"
    ],
    agent: {
      name: "Aditi Deshmukh",
      title: "Principal Private Client Advisor",
      phone: "+91 (020) 8492-3001",
      email: "aditi.deshmukh@aevora.com",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80"
    }
  },
  {
    id: "north-main-luxury-residence-kp",
    title: "North Main Residence",
    tagline: "Discreet low-rise garden condominium in Koregaon Park's cultural core",
    location: "North Main Road, Koregaon Park, Pune",
    neighborhood: "Koregaon Park",
    price: "₹7.20 Cr",
    priceValue: 72000000,
    type: "Apartment",
    status: "Private Viewing",
    featured: false,
    specs: {
      bedrooms: 4,
      bathrooms: 4,
      area: "4,100 sq.ft.",
      parking: "3 Bays",
      floor: "3rd Floor (Only 2 units per floor)",
      yearBuilt: 2023
    },
    images: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1600&q=85"
    ],
    cinematicVideo: {
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-looking-up-at-a-modern-building-with-blue-sky-42355-large.mp4",
      title: "Cinematic Film: North Main Residence",
      duration: "0:45",
      filmStyle: "Low-Light Ambient Walkthrough",
      aspectRatio: "16:9",
      description: "Low-light ambient walkthrough of the expansive living lounge and private master suite."
    },
    description: "Located along a private cul-de-sac off North Main Road, this boutique residence offers rare exclusivity with only two residences per floor. Lush mature banyan views filter through every window, complemented by Italian marble finishes, bespoke cabinetry, and an expansive primary suite with walk-in dressing salon.",
    amenities: [
      "Low-Density Boutique Building (Only 8 Homes)",
      "Unobstructed Canopy Views Across Koregaon Park",
      "Direct Private Keycard Elevator Entry",
      "Imported Italian Bottochino Marble",
      "Dedicated Butler & Service Entrance",
      "Temperature-Controlled Wine Cellar Unit",
      "Resident Rooftop Lounge & Plunge Pool",
      "Full Power Backup & 24/7 Concierge"
    ],
    agent: {
      name: "Rohan Kulkarni",
      title: "Senior Director, Heritage & Luxury Estates",
      phone: "+91 (020) 8492-3002",
      email: "rohan.kulkarni@aevora.com",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80"
    }
  }
];

export function getPropertyById(id) {
  return PROPERTIES.find(p => p.id === id);
}

export function getSimilarProperties(currentPropertyId, count = 3) {
  const current = getPropertyById(currentPropertyId);
  if (!current) return PROPERTIES.slice(0, count);

  return PROPERTIES
    .filter(p => p.id !== currentPropertyId)
    .sort((a, b) => {
      // Prioritize same neighborhood, then similar price
      if (a.neighborhood === current.neighborhood && b.neighborhood !== current.neighborhood) return -1;
      if (b.neighborhood === current.neighborhood && a.neighborhood !== current.neighborhood) return 1;
      return Math.abs(a.priceValue - current.priceValue) - Math.abs(b.priceValue - current.priceValue);
    })
    .slice(0, count);
}
