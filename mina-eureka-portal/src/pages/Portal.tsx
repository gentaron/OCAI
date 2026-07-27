import { useState } from "react";
import {
  BookOpen,
  Music,
  Cpu,
  Radio,
  Users,
  Library,
  ExternalLink,
  Circle,
} from "lucide-react";

const portals = [
  {
    title: "Genesis Vault",
    titleJa: "ジェネシス・ヴォールト",
    description:
      "Her writing platform — over 2,000 articles on philosophy, geopolitics, and AI. The intellectual foundation of everything Mina creates.",
    icon: BookOpen,
    gradient: "from-mina-500 to-mina-700",
    hoverGradient: "group-hover:from-mina-400 group-hover:to-mina-600",
    url: "#",
    tag: "Blog",
  },
  {
    title: "Stage Dreams",
    titleJa: "ステージドリーム",
    description:
      "Her idol journey — upcoming performances, music releases, and the transformation from thinker to performer.",
    icon: Music,
    gradient: "from-eureka-500 to-eureka-700",
    hoverGradient: "group-hover:from-eureka-400 group-hover:to-eureka-600",
    url: "#",
    tag: "Music",
  },
  {
    title: "AI Laboratory",
    titleJa: "AI研究所",
    description:
      "Experiments in artificial intelligence — research notes, projects, and explorations at the frontier of human-machine interaction.",
    icon: Cpu,
    gradient: "from-sakura-400 to-eureka-600",
    hoverGradient: "group-hover:from-sakura-300 group-hover:to-eureka-500",
    url: "#",
    tag: "Tech",
  },
  {
    title: "Live Streams",
    titleJa: "ライブ配信",
    description:
      "Scheduled streams and past recordings. Watch Mina live — Q&A sessions, writing sessions, behind-the-scenes glimpses.",
    icon: Radio,
    gradient: "from-mina-400 to-sakura-400",
    hoverGradient: "group-hover:from-mina-300 group-hover:to-sakura-300",
    url: "#",
    tag: "Broadcast",
  },
  {
    title: "Social Hub",
    titleJa: "ソーシャルハブ",
    description:
      "Connect across platforms — X/Twitter, YouTube, Instagram. The community space where fans and Mina interact.",
    icon: Users,
    gradient: "from-eureka-400 to-mina-500",
    hoverGradient: "group-hover:from-eureka-300 group-hover:to-mina-400",
    url: "#",
    tag: "Community",
  },
  {
    title: "Reading Room",
    titleJa: "読書室",
    description:
      "Curated articles, book recommendations, and reading lists. Dive deep into the ideas that inspire Mina's work.",
    icon: Library,
    gradient: "from-mina-600 to-eureka-500",
    hoverGradient: "group-hover:from-mina-500 group-hover:to-eureka-400",
    url: "#",
    tag: "Archive",
  },
];

const statuses = [
  {
    text: "Preparing debut performance",
    ja: "デビューパーフォーマンス準備中",
    active: true,
  },
  {
    text: 'Writing new series: "AI & Philosophy"',
    ja: "新連載「AIと哲学」執筆中",
    active: true,
  },
  {
    text: "Building community connections",
    ja: "コミュニティ交流構築中",
    active: true,
  },
  {
    text: "Recording studio sessions",
    ja: "スタジオ収録中",
    active: false,
  },
];

export default function Portal() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <div className="relative pt-24">
      {/* Header */}
      <section className="relative py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-mesh opacity-40" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-eureka-600/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-sm text-white/40 font-display mb-4 tracking-widest uppercase">
            Hub / ハブ
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold mb-4">
            <span className="text-gradient">Super Portal</span>
          </h1>
          <p className="text-xl text-white/40 font-display mb-6">
            スーパーポータル
          </p>
          <p className="text-white/50 max-w-lg mx-auto">
            Enter Mina's connected worlds — from writing to performance,
            research to community. Every portal is a doorway to inspiration.
          </p>
        </div>
      </section>

      {/* Status Section */}
      <section className="px-4 mb-16">
        <div className="max-w-3xl mx-auto">
          <div className="glass rounded-2xl p-6 sm:p-8">
            <h2 className="text-lg font-display font-bold mb-5 flex items-center gap-2">
              <span className="text-gradient">Currently</span>
              <span className="text-white/30 text-sm">— 現在</span>
            </h2>
            <div className="space-y-3">
              {statuses.map((s, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02]"
                >
                  {s.active && (
                    <Circle className="w-2 h-2 fill-mina-400 text-mina-400 animate-pulse shrink-0" />
                  )}
                  {!s.active && (
                    <Circle className="w-2 h-2 text-white/20 shrink-0" />
                  )}
                  <div>
                    <p className="text-sm text-white/80">{s.text}</p>
                    <p className="text-xs text-white/30">{s.ja}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portal Grid */}
      <section className="px-4 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portals.map((p, i) => (
              <a
                key={i}
                href={p.url}
                className="group glass rounded-2xl overflow-hidden glass-hover transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-mina-500/10"
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                <div className="relative h-32 overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${p.gradient} ${p.hoverGradient} transition-all duration-500`}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p.icon
                      className={`w-12 h-12 text-white/70 transition-transform duration-500 ${
                        hoveredIdx === i ? "scale-125 rotate-6" : ""
                      }`}
                    />
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-display font-medium bg-black/30 text-white/80 backdrop-blur-sm">
                      {p.tag}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-display font-bold">
                      {p.title}
                    </h3>
                    <ExternalLink className="w-4 h-4 text-white/20 group-hover:text-white/60 transition-colors" />
                  </div>
                  <p className="text-xs text-white/30 font-display mb-3">
                    {p.titleJa}
                  </p>
                  <p className="text-sm text-white/50 leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
