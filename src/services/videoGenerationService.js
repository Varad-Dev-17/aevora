/**
 * Aevora - Video Generation Service Module
 * 
 * ARCHITECTURE & SECURITY:
 * 1. Client-Side Safety: Never expose Runway ML API Secret Keys (RUNWAYML_API_SECRET)
 *    directly in client-side code. Production calls must be routed via a secure backend
 *    API proxy or an authorized MCP (Model Context Protocol) server.
 * 2. Runway MCP Status: Currently NOT configured in Antigravity environment.
 * 3. Fallback / Preview Mode: Provides realistic client-side pipeline validation,
 *    live step-by-step progress tracking, and architectural cinematic previews.
 */

export const RUNWAY_MCP_STATUS = {
  isConfigured: false,
  detectedTools: [],
  serverName: "RunwayMCP",
  statusMessage: "Runway MCP is not configured in Antigravity's mcp_config.json",
  documentationUrl: "https://docs.runwayml.com/reference/image_to_video",
  mcpDocsUrl: "https://modelcontextprotocol.io"
};

export const VIDEO_STYLES = [
  {
    id: "luxury-cinematic",
    name: "Luxury Cinematic",
    description: "Slow 24fps drone pan, warm golden-hour architectural lighting, shallow depth of field, and elegant camera glide.",
    cameraMotion: "Slow aerial pull-back and subtle lateral drift",
    framerate: "24 fps",
    lighting: "Warm twilight / golden hour ambient glow",
    promptSeed: "Cinematic 4K architectural film, ultra-smooth drone glide, golden hour warm lighting, elegant luxury residence, 35mm lens, photorealistic reflections, slow cinematic pacing",
    badge: "Most Popular"
  },
  {
    id: "modern-minimalist",
    name: "Modern Minimalist",
    description: "Clean orthogonal camera dolly, high-key natural daylight, crisp geometry, and serene architectural flow.",
    cameraMotion: "Linear forward dolly tracking through space",
    framerate: "30 fps",
    lighting: "Bright architectural diffused daylight",
    promptSeed: "Architectural Digest aesthetic, modern minimalist interior, crisp natural morning daylight, smooth forward dolly movement, neutral warm concrete and white oak textures, ultra-clean geometry",
    badge: "Editorial"
  },
  {
    id: "property-showcase",
    name: "Property Showcase",
    description: "Wide interior gimbal sweep, spotlighting high-end finishes, transitions between spaces, and expansive depth.",
    cameraMotion: "Steadicam walkthrough pan with gentle parallax",
    framerate: "30 fps",
    lighting: "Balanced interior recessed lighting & window glow",
    promptSeed: "Luxury real estate walkthrough showcase, smooth gimbal pan, expansive open-concept living space, high ceiling architectural details, vibrant premium finish highlights",
    badge: "MLS & Social"
  }
];

export const ASPECT_RATIOS = [
  {
    id: "16:9",
    label: "16:9 Landscape",
    subtitle: "YouTube, Website, MLS, TV Displays",
    width: 1920,
    height: 1080,
    icon: "rectangle-horizontal",
    recommendedFor: "Desktop showcases, YouTube listings, and luxury portal headers"
  },
  {
    id: "9:16",
    label: "9:16 Vertical",
    subtitle: "Instagram Reels, TikTok, YouTube Shorts",
    width: 1080,
    height: 1920,
    icon: "rectangle-vertical",
    recommendedFor: "Mobile social media advertising and viral property reels"
  },
  {
    id: "1:1",
    label: "1:1 Square",
    subtitle: "Instagram Feed, LinkedIn, Square Cards",
    width: 1080,
    height: 1080,
    icon: "square",
    recommendedFor: "Multi-platform social carousels and portfolio grids"
  }
];

// Curated high-res architectural sample images for testing
export const SAMPLE_PROPERTIES = [
  {
    id: "sample-1",
    name: "Bel-Air Modern Villa",
    type: "Exterior / Poolside",
    url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80",
    thumbnail: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=400&q=80",
    aspectRatio: "16:9"
  },
  {
    id: "sample-2",
    name: "Minimalist Living Pavilion",
    type: "Interior / Open Concept",
    url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
    thumbnail: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80",
    aspectRatio: "16:9"
  },
  {
    id: "sample-3",
    name: "Nordic Glass Residence",
    type: "Twilight Exterior",
    url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80",
    thumbnail: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=400&q=80",
    aspectRatio: "16:9"
  }
];

// Sample high-quality architectural video loops for preview demonstration
export const SAMPLE_VIDEOS = {
  "16:9": "https://assets.mixkit.co/videos/preview/mixkit-modern-architecture-building-with-glass-facade-42354-large.mp4",
  "9:16": "https://assets.mixkit.co/videos/preview/mixkit-looking-up-at-a-modern-building-with-blue-sky-42355-large.mp4",
  "1:1": "https://assets.mixkit.co/videos/preview/mixkit-modern-architecture-building-with-glass-facade-42354-large.mp4"
};

/**
 * Generates an optimized AI prompt for real estate video synthesis
 */
export function buildPrompt(styleId, customNotes = "") {
  const selectedStyle = VIDEO_STYLES.find(s => s.id === styleId) || VIDEO_STYLES[0];
  let prompt = selectedStyle.promptSeed;
  if (customNotes.trim()) {
    prompt += `, ${customNotes.trim()}`;
  }
  return prompt;
}

/**
 * Checks Runway MCP configuration status
 */
export function checkRunwayMcpStatus() {
  return RUNWAY_MCP_STATUS;
}

/**
 * Generation stages for pipeline transparency
 */
export const GENERATION_PIPELINE_STAGES = [
  { step: 1, name: "Image Analysis", desc: "Evaluating spatial depth, vanishing lines & architectural composition" },
  { step: 2, name: "Trajectory Synthesis", desc: "Generating virtual camera motion path & smooth parallax vectors" },
  { step: 3, name: "Diffusion Rendering", desc: "Synthesizing high-fidelity 4K video frames with temporal consistency" },
  { step: 4, name: "Grading & Finalizing", desc: "Applying architectural color grade and final video container encoding" }
];

/**
 * Simulates a realistic video generation workflow with live progress updates
 */
export async function simulateVideoGeneration({
  images,
  styleId,
  aspectRatio,
  prompt,
  onProgress
}) {
  if (!images || images.length === 0) {
    throw new Error("Please upload or select at least one property photo.");
  }

  const stages = [
    { progress: 15, stageIndex: 0, status: "Analyzing image depth and architectural composition..." },
    { progress: 40, stageIndex: 1, status: "Calculating camera glide trajectory and perspective parallax..." },
    { progress: 75, stageIndex: 2, status: "Rendering temporal diffusion frames at 4K resolution..." },
    { progress: 95, stageIndex: 3, status: "Applying color grading and encoding H.264 video stream..." },
    { progress: 100, stageIndex: 3, status: "Generation complete. Ready for playback." }
  ];

  for (const item of stages) {
    if (onProgress) {
      onProgress(item);
    }
    await new Promise(resolve => setTimeout(resolve, 850));
  }

  const selectedRatio = aspectRatio || "16:9";
  const videoUrl = SAMPLE_VIDEOS[selectedRatio] || SAMPLE_VIDEOS["16:9"];

  return {
    success: true,
    isSimulated: true,
    id: `vid_${Date.now()}`,
    videoUrl,
    coverImage: images[0].url || images[0].preview,
    style: styleId,
    aspectRatio: selectedRatio,
    prompt,
    durationSeconds: 6,
    resolution: selectedRatio === "16:9" ? "1920x1080" : selectedRatio === "9:16" ? "1080x1920" : "1080x1080",
    createdAt: new Date().toISOString()
  };
}

/**
 * Live Runway API / MCP Dispatcher template
 * Throws with exact diagnostics when MCP is not available
 */
export async function dispatchRunwayGeneration(payload) {
  const mcpStatus = checkRunwayMcpStatus();
  if (!mcpStatus.isConfigured) {
    throw new Error(
      `Runway MCP is currently not configured in Antigravity. ` +
      `To trigger live video synthesis, register the Runway MCP server in ~/.gemini/config/mcp_config.json or pass your secure backend proxy.`
    );
  }

  // Schema definition for Runway Gen-3 Alpha Turbo:
  // POST https://api.runwayml.com/v1/image_to_video
  // Headers: Authorization: Bearer <RUNWAYML_API_SECRET>, X-Runway-Version: 2024-09-13
  // Body: {
  //   promptImage: payload.imageUrl,
  //   promptText: payload.prompt,
  //   model: "gen3a_turbo",
  //   ratio: payload.aspectRatio === "9:16" ? "768:1280" : "1280:768",
  //   duration: 5,
  //   watermark: false
  // }
  return null;
}
