import React, { useState } from 'react'
import { X, Check, Copy, ExternalLink, ShieldAlert, Cpu, Terminal, Layers } from 'lucide-react'

export default function RunwayMcpModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false)

  if (!isOpen) return null

  const configSnippet = `{
  "mcpServers": {
    "supabase": {
      "serverUrl": "https://mcp.supabase.com/mcp"
    },
    "StitchMCP": {
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote",
        "https://stitch.googleapis.com/mcp",
        "--header",
        "X-Goog-Api-Key: YOUR_STITCH_KEY"
      ]
    },
    "runway": {
      "command": "npx",
      "args": ["-y", "@runwayml/mcp-server"],
      "env": {
        "RUNWAYML_API_SECRET": "YOUR_RUNWAY_API_KEY_HERE"
      }
    }
  }
}`

  const handleCopy = () => {
    navigator.clipboard.writeText(configSnippet)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div
        className="relative w-full max-w-2xl bg-[#FAF8F5] border border-[#DDD5CA] rounded-sm shadow-xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-5 border-b border-[#ECE6DE] flex items-center justify-between bg-[#F4EFE9]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xs bg-[#1E1E1E] flex items-center justify-center text-white">
              <Cpu className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-[#1A1A1A]">
                Runway MCP & Antigravity Configuration
              </h3>
              <p className="text-xs text-[#736A5E] font-light">
                Model Context Protocol diagnostics & integration guide
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full hover:bg-[#EAE4DC] flex items-center justify-center text-[#61584C] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-[#38332D]">
          
          {/* Current Inspection Status */}
          <div className="p-4 rounded-sm bg-[#FFFDF9] border border-[#E5DDD2] space-y-2">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-[#7D7365]">ENVIRONMENT AUDIT:</span>
              <span className="px-2 py-0.5 rounded-xs bg-amber-100 text-amber-800 font-medium">
                RUNWAY_MCP: UNCONFIGURED
              </span>
            </div>
            <p className="text-xs text-[#524B41] leading-relaxed">
              Antigravity currently has <strong>StitchMCP</strong> and <strong>Supabase</strong> configured in <code className="bg-[#EFEAE2] px-1 py-0.5 rounded-xs text-[#26231E]">mcp_config.json</code>. No Runway MCP server was detected.
            </p>
          </div>

          {/* Expected Tools & Schemas */}
          <div className="space-y-2">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-[#4A433A]">
              Runway Gen-3 API & MCP Tool Capabilities
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
              <div className="p-3 bg-[#F5F0E8] border border-[#DDD5CA] rounded-xs">
                <span className="font-semibold block text-[#1F1B16]">1. image_to_video</span>
                <span className="text-[11px] text-[#696053] font-light mt-1 block">
                  Takes <code className="text-[#383228]">promptImage</code>, <code className="text-[#383228]">promptText</code>, <code className="text-[#383228]">ratio</code>, <code className="text-[#383228]">duration</code> to initialize video synthesis.
                </span>
              </div>
              <div className="p-3 bg-[#F5F0E8] border border-[#DDD5CA] rounded-xs">
                <span className="font-semibold block text-[#1F1B16]">2. get_task_status</span>
                <span className="text-[11px] text-[#696053] font-light mt-1 block">
                  Polls the task identifier (<code className="text-[#383228]">id</code>) until status transitions from <code className="text-[#383228]">PENDING</code> / <code className="text-[#383228]">RUNNING</code> to <code className="text-[#383228]">SUCCEEDED</code>.
                </span>
              </div>
              <div className="p-3 bg-[#F5F0E8] border border-[#DDD5CA] rounded-xs">
                <span className="font-semibold block text-[#1F1B16]">3. retrieve_video</span>
                <span className="text-[11px] text-[#696053] font-light mt-1 block">
                  Returns the signed MP4 URL directly from Runway's CDN container for instant streaming and download.
                </span>
              </div>
            </div>
          </div>

          {/* Configuration Guide */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="text-xs uppercase tracking-wider font-semibold text-[#4A433A]">
                To Connect Runway MCP to Antigravity
              </h4>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 text-xs text-[#5C5449] hover:text-[#1A1A1A] transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy Configuration'}</span>
              </button>
            </div>

            <p className="text-xs text-[#635A4E] font-light">
              Add the following block to your global Antigravity config file at:
              <br />
              <code className="text-[11px] bg-[#EFEAE2] px-1.5 py-0.5 rounded-xs font-mono text-[#26231E]">
                C:\Users\Amita Mule\.gemini\config\mcp_config.json
              </code>
            </p>

            <pre className="p-4 bg-[#1E1C1A] text-[#EDE7DE] rounded-sm text-xs font-mono overflow-x-auto leading-relaxed border border-[#3D3833]">
              {configSnippet}
            </pre>
          </div>

          {/* Security Alert */}
          <div className="flex items-start gap-3 p-3.5 rounded-sm bg-[#FAF5ED] border border-[#E3DBD0] text-xs text-[#574F44]">
            <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <div className="space-y-0.5">
              <span className="font-semibold text-[#29241E]">Security Requirement</span>
              <p className="font-light">
                Never embed secret API keys in the client-side browser code. Keys must strictly reside in environment variables handled by the MCP process or a secure backend proxy server.
              </p>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-[#ECE6DE] bg-[#F4EFE9] flex items-center justify-between">
          <a
            href="https://docs.runwayml.com/reference/image_to_video"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-[#524A3F] hover:text-[#1E1E1E] transition-colors"
          >
            Official Runway API Docs
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#1E1E1E] hover:bg-[#333333] text-white text-xs font-medium uppercase tracking-wider rounded-sm transition-colors"
          >
            Close Inspector
          </button>
        </div>

      </div>
    </div>
  )
}
