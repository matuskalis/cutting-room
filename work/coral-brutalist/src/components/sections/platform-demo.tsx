"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { Container } from "@/components/ui/container"

const tabs = ["Ingest", "Transform", "Authorize"] as const

type LineColor = "default" | "dimmed" | "muted" | "command" | "success" | "accent" | "info" | "label"

interface TerminalLineSegment { text: string; color: LineColor }
interface TerminalLineData {
  content: string | TerminalLineSegment[]
  delay?: number
  blank?: boolean
}

function colorToClass(color: LineColor): string {
  switch (color) {
    case "command": return "text-white"
    case "default": return "text-white/80"
    case "success": return "text-green-400"
    case "accent": return "text-[#ff5841]"
    case "dimmed": return "text-white/60"
    case "label": return "text-white/50"
    case "muted": return "text-white/20"
    case "info": return "text-blue-400"
    default: return "text-white/80"
  }
}

/* ─── Tab Data ─────────────────────────────────────────────── */

const ingestLines: TerminalLineData[] = [
  { content: [{ text: "$ northbound ingest --sources all --env production", color: "command" }], delay: 200 },
  { content: [{ text: "[INFO]", color: "info" }, { text: " Connecting to registered data sources...", color: "default" }] },
  { content: "", blank: true, delay: 50 },
  { content: [{ text: " Source            Status     Records      Latency", color: "label" }] },
  { content: [{ text: " ──────────────── ────────── ──────────── ────────", color: "muted" }], delay: 50 },
  { content: [{ text: " PostgreSQL        ", color: "default" }, { text: "● LIVE", color: "success" }, { text: "     ", color: "default" }, { text: "2.4M rows", color: "accent" }, { text: "    ", color: "default" }, { text: "12ms", color: "dimmed" }], delay: 150 },
  { content: [{ text: " AWS S3            ", color: "default" }, { text: "● LIVE", color: "success" }, { text: "     ", color: "default" }, { text: "847 files", color: "accent" }, { text: "    ", color: "default" }, { text: "34ms", color: "dimmed" }], delay: 150 },
  { content: [{ text: " REST API v2       ", color: "default" }, { text: "● LIVE", color: "success" }, { text: "     ", color: "default" }, { text: "125K/min", color: "accent" }, { text: "     ", color: "default" }, { text: "8ms", color: "dimmed" }], delay: 150 },
  { content: [{ text: " Azure Blob        ", color: "default" }, { text: "● LIVE", color: "success" }, { text: "     ", color: "default" }, { text: "1.2TB", color: "accent" }, { text: "        ", color: "default" }, { text: "45ms", color: "dimmed" }], delay: 150 },
  { content: "", blank: true, delay: 50 },
  { content: [{ text: " ✓", color: "success" }, { text: " All sources online. Pipeline active.", color: "default" }] },
  { content: [{ text: " ↳", color: "dimmed" }, { text: " Streaming ", color: "default" }, { text: "4.7M", color: "accent" }, { text: " records/hour...", color: "default" }] },
]

const transformLines: TerminalLineData[] = [
  { content: [{ text: "$ northbound transform --pipeline ato-ready", color: "command" }], delay: 200 },
  { content: "", blank: true, delay: 50 },
  { content: [{ text: " [1/4] Deduplication ..................... ", color: "default" }, { text: "✓", color: "success" }, { text: "  847K → 831K", color: "accent" }], delay: 400 },
  { content: [{ text: " [2/4] Schema Validation ................ ", color: "default" }, { text: "✓", color: "success" }, { text: "  99.97% pass", color: "accent" }], delay: 400 },
  { content: [{ text: " [3/4] PII Detection & Masking .......... ", color: "default" }, { text: "✓", color: "success" }, { text: "  2,341 masked", color: "accent" }], delay: 400 },
  { content: [{ text: " [4/4] FIPS 140-2 Encryption ............ ", color: "default" }, { text: "✓", color: "success" }, { text: "  AES-256-GCM", color: "accent" }], delay: 400 },
  { content: "", blank: true, delay: 50 },
  { content: [{ text: " Data Quality", color: "default" }] },
  { content: [{ text: " ├─ ", color: "muted" }, { text: "Completeness  ", color: "default" }, { text: "████████████████████░", color: "success" }, { text: "  94%", color: "accent" }] },
  { content: [{ text: " ├─ ", color: "muted" }, { text: "Accuracy      ", color: "default" }, { text: "█████████████████████", color: "success" }, { text: "  98%", color: "accent" }] },
  { content: [{ text: " └─ ", color: "muted" }, { text: "Consistency   ", color: "default" }, { text: "████████████████████░", color: "success" }, { text: "  97%", color: "accent" }] },
  { content: "", blank: true, delay: 50 },
  { content: [{ text: " ✓", color: "success" }, { text: " Transform complete. Ready for authorization.", color: "default" }] },
]

const authorizeLines: TerminalLineData[] = [
  { content: [{ text: "$ northbound authorize --framework fedramp-high", color: "command" }], delay: 200 },
  { content: "", blank: true, delay: 50 },
  { content: [{ text: " Scanning control families...", color: "dimmed" }] },
  { content: "", blank: true, delay: 50 },
  { content: [{ text: " Control                  Status      Evidence", color: "label" }] },
  { content: [{ text: " ──────────────────────── ─────────── ────────", color: "muted" }], delay: 50 },
  { content: [{ text: " AC", color: "accent" }, { text: "  Access Control        ", color: "default" }, { text: "✓ PASSED", color: "success" }, { text: "   ", color: "default" }, { text: "147", color: "accent" }, { text: " docs", color: "dimmed" }], delay: 150 },
  { content: [{ text: " AU", color: "accent" }, { text: "  Audit & Account.      ", color: "default" }, { text: "✓ PASSED", color: "success" }, { text: "   ", color: "default" }, { text: "89", color: "accent" }, { text: " docs", color: "dimmed" }], delay: 150 },
  { content: [{ text: " CM", color: "accent" }, { text: "  Config Management     ", color: "default" }, { text: "✓ PASSED", color: "success" }, { text: "   ", color: "default" }, { text: "203", color: "accent" }, { text: " docs", color: "dimmed" }], delay: 150 },
  { content: [{ text: " IA", color: "accent" }, { text: "  Identification        ", color: "default" }, { text: "✓ PASSED", color: "success" }, { text: "   ", color: "default" }, { text: "76", color: "accent" }, { text: " docs", color: "dimmed" }], delay: 150 },
  { content: [{ text: " SC", color: "accent" }, { text: "  System & Comms        ", color: "default" }, { text: "✓ PASSED", color: "success" }, { text: "   ", color: "default" }, { text: "184", color: "accent" }, { text: " docs", color: "dimmed" }], delay: 150 },
  { content: "", blank: true, delay: 50 },
  { content: [{ text: " ─────────────────────────────────────────", color: "muted" }], delay: 50 },
  { content: [{ text: " ATO STATUS    ", color: "label" }, { text: "✓ AUTHORIZED", color: "success" }] },
  { content: [{ text: " RISK LEVEL    ", color: "label" }, { text: "LOW", color: "success" }] },
  { content: [{ text: " COMPLIANCE    ", color: "label" }, { text: "FedRAMP High · IL5 · HIPAA", color: "accent" }] },
  { content: [{ text: " PACKAGE ID    ", color: "label" }, { text: "VT-ATO-2024-0847", color: "dimmed" }] },
  { content: [{ text: " ─────────────────────────────────────────", color: "muted" }], delay: 50 },
]

/* ─── Hook ─────────────────────────────────────────────────── */

function useTypewriter(lines: TerminalLineData[], reducedMotion: boolean) {
  const [visibleCount, setVisibleCount] = useState(0)
  const timeoutsRef = useRef<NodeJS.Timeout[]>([])

  useEffect(() => {
    timeoutsRef.current.forEach(clearTimeout)
    timeoutsRef.current = []
    setVisibleCount(0)

    if (reducedMotion) {
      setVisibleCount(lines.length)
      return
    }

    let aborted = false
    let cumulativeDelay = 300
    lines.forEach((line, i) => {
      const lineDelay = line.delay ?? 100
      cumulativeDelay += lineDelay
      const timeout = setTimeout(() => {
        if (!aborted) setVisibleCount(i + 1)
      }, cumulativeDelay)
      timeoutsRef.current.push(timeout)
    })

    return () => {
      aborted = true
      timeoutsRef.current.forEach(clearTimeout)
      timeoutsRef.current = []
    }
  }, [lines, reducedMotion])

  const isComplete = visibleCount >= lines.length

  return { visibleCount, isComplete }
}

/* ─── Sub-components ───────────────────────────────────────── */

function BlinkingCursor({ reducedMotion }: { reducedMotion: boolean }) {
  if (reducedMotion) return null
  return (
    <motion.span
      className="text-white/80 font-mono"
      animate={{ opacity: [1, 1, 0, 0] }}
      transition={{ duration: 1, repeat: Infinity, times: [0, 0.5, 0.5, 1] }}
    >
      █
    </motion.span>
  )
}

function TerminalLine({ line, reducedMotion }: { line: TerminalLineData; reducedMotion: boolean }) {
  if (line.blank) {
    return <div className="h-5" />
  }

  const content = typeof line.content === "string" ? (
    <span className={colorToClass("default")}>{line.content}</span>
  ) : (
    line.content.map((segment, i) => (
      <span key={i} className={colorToClass(segment.color)}>{segment.text}</span>
    ))
  )

  if (reducedMotion) {
    return <div className="font-mono text-sm leading-7 whitespace-pre">{content}</div>
  }

  return (
    <motion.div
      className="font-mono text-sm leading-7 whitespace-pre"
      initial={{ opacity: 0, y: 4 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.15 }}
    >
      {content}
    </motion.div>
  )
}

function TerminalContent({ lines, reducedMotion }: { lines: TerminalLineData[]; reducedMotion: boolean }) {
  const { visibleCount, isComplete } = useTypewriter(lines, reducedMotion)

  return (
    <div>
      {lines.slice(0, visibleCount).map((line, i) => (
        <TerminalLine key={i} line={line} reducedMotion={reducedMotion} />
      ))}
      {!isComplete && <BlinkingCursor reducedMotion={reducedMotion} />}
      {isComplete && (
        <div className="mt-1">
          <BlinkingCursor reducedMotion={reducedMotion} />
        </div>
      )}
    </div>
  )
}

/* ─── Main Export ──────────────────────────────────────────── */

export function PlatformDemo() {
  const [activeTab, setActiveTab] = useState(0)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    setReducedMotion(mq.matches)
    function handleChange(e: MediaQueryListEvent) {
      setReducedMotion(e.matches)
    }
    mq.addEventListener("change", handleChange)
    return () => mq.removeEventListener("change", handleChange)
  }, [])

  function handleTabKeyDown(e: React.KeyboardEvent, currentIndex: number) {
    let newIndex: number | null = null
    if (e.key === "ArrowRight") newIndex = (currentIndex + 1) % tabs.length
    else if (e.key === "ArrowLeft") newIndex = (currentIndex - 1 + tabs.length) % tabs.length
    else if (e.key === "Home") newIndex = 0
    else if (e.key === "End") newIndex = tabs.length - 1
    if (newIndex !== null) {
      e.preventDefault()
      setActiveTab(newIndex)
      document.getElementById(`platform-tab-${newIndex}`)?.focus()
    }
  }

  const tabData = [ingestLines, transformLines, authorizeLines]
  const terminalTitles = [
    "northbound-cli \u2014 ingest",
    "northbound-cli \u2014 transform",
    "northbound-cli \u2014 authorize",
  ]

  return (
    <section
      className="bg-[#202020] py-28 md:py-36 border-t border-[#4d4d4d]"
      data-header-theme="light"
    >
      <Container>
        <p className="mono-label text-[#ff5841] mb-4">See It in Action</p>
        <h2
          className="font-serif font-medium text-white leading-tight mb-12"
          style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
        >
          From Raw Data to Authority to Operate
        </h2>

        <div>
          {/* Tab bar */}
          <div className="flex" role="tablist">
            {tabs.map((tab, i) => (
              <button
                key={tab}
                type="button"
                id={`platform-tab-${i}`}
                className={cn(
                  "font-mono text-xs uppercase tracking-[0.1em] px-6 py-3 transition-colors rounded-t-lg relative -mb-px z-10",
                  activeTab === i
                    ? "bg-[#0d0d0d] text-[#ff5841] border border-[#333] border-b-[#0d0d0d]"
                    : "bg-[#1a1a1a] text-white/30 hover:text-white/50 border border-[#333]"
                )}
                onClick={() => setActiveTab(i)}
                onKeyDown={(e) => handleTabKeyDown(e, i)}
                tabIndex={activeTab === i ? 0 : -1}
                aria-selected={activeTab === i}
                aria-controls="platform-tabpanel"
                role="tab"
              >
                {tab}
              </button>
            ))}
            <div className="flex-1 border-b border-[#333]" />
          </div>

          {/* Terminal */}
          <div
            role="tabpanel"
            id="platform-tabpanel"
            aria-labelledby={`platform-tab-${activeTab}`}
          >
            <div className="rounded-t-none rounded-b-lg border border-[#333] border-t-0 overflow-hidden">
              <div className="bg-[#1a1a1a] border-b border-[#333] px-4 py-3 flex items-center gap-3">
                <div className="flex gap-2" aria-hidden="true">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                </div>
                <span className="font-mono text-xs text-white/40 ml-2">
                  {terminalTitles[activeTab]}
                </span>
              </div>
              <div className="bg-[#0d0d0d] p-4 md:p-6 lg:p-8 min-h-[320px] overflow-x-auto">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={reducedMotion ? false : { opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={reducedMotion ? undefined : { opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <TerminalContent
                      lines={tabData[activeTab]}
                      reducedMotion={reducedMotion}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
