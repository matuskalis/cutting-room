export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#202020]">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes vt-clip-reveal {
              from { clip-path: inset(0 100% 0 0); }
              to   { clip-path: inset(0 0 0 0); }
            }
            @keyframes vt-pulse-line {
              0%, 100% { opacity: 0.3; }
              50%      { opacity: 1; }
            }
            @keyframes vt-fade-in {
              from { opacity: 0; }
              to   { opacity: 1; }
            }
            .vt-brand-text {
              animation: vt-clip-reveal 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
            }
            .vt-pulse-line {
              animation: vt-pulse-line 1.5s ease-in-out infinite;
            }
            .vt-init-text {
              animation: vt-fade-in 0.6s ease-out 0.6s both;
            }
            @media (prefers-reduced-motion: reduce) {
              .vt-brand-text,
              .vt-pulse-line,
              .vt-init-text {
                animation: none;
                opacity: 1;
                clip-path: none;
              }
            }
          `,
        }}
      />
      <div className="flex flex-col items-center gap-5">
        <p className="vt-brand-text font-mono text-sm uppercase tracking-[0.2em] text-white/80">
          NORTHBOUND SYSTEMS
        </p>
        <div
          className="vt-pulse-line h-[2px] w-10 rounded-full"
          style={{ backgroundColor: '#ff5841' }}
        />
        <p className="vt-init-text font-mono text-[10px] text-white/20">
          INITIALIZING...
        </p>
      </div>
    </div>
  )
}
