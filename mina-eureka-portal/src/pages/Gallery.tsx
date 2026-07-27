import { useState } from "react";
import { X, Camera, ChevronLeft, ChevronRight } from "lucide-react";

type Category = "all" | "portraits" | "events" | "artwork" | "candid";

interface GalleryItem {
  id: number;
  title: string;
  titleJa: string;
  category: Exclude<Category, "all">;
  gradient: string;
  icon: string;
  description: string;
}

const items: GalleryItem[] = [
  {
    id: 1,
    title: "Blue Hair Portrait",
    titleJa: "青髪ポレトレ",
    category: "portraits",
    gradient: "from-mina-600 via-mina-500 to-eureka-600",
    icon: "✦",
    description: "Signature look — vivid blue hair catching the light.",
  },
  {
    id: 2,
    title: "First Stage Appearance",
    titleJa: "初ステージ",
    category: "events",
    gradient: "from-eureka-600 via-sakura-400 to-eureka-700",
    icon: "★",
    description: "The moment Mina stepped onto the stage for the first time.",
  },
  {
    id: 3,
    title: "Genesis Vault Blog",
    titleJa: "ジェネシス・ヴォールト",
    category: "artwork",
    gradient: "from-sakura-400 via-eureka-500 to-mina-600",
    icon: "◈",
    description: "Digital artwork inspired by her writing platform.",
  },
  {
    id: 4,
    title: "AI Conference Talk",
    titleJa: "AIカンファレンス",
    category: "events",
    gradient: "from-mina-700 via-mina-500 to-eureka-500",
    icon: "◇",
    description: "Presenting research at the Lorenzo International AI Summit.",
  },
  {
    id: 5,
    title: "Thinking in Blue",
    titleJa: "青の思考",
    category: "portraits",
    gradient: "from-mina-800 via-mina-600 to-mina-400",
    icon: "◎",
    description: "A contemplative moment captured between writing sessions.",
  },
  {
    id: 6,
    title: "Studio Session",
    titleJa: "スタジオ収録",
    category: "candid",
    gradient: "from-eureka-500 via-mina-500 to-eureka-800",
    icon: "♫",
    description: "Behind the scenes — recording tracks for her debut.",
  },
  {
    id: 7,
    title: "Concept Art: Idol Form",
    titleJa: "コンセプトアート",
    category: "artwork",
    gradient: "from-sakura-500 via-eureka-400 to-mina-500",
    icon: "✧",
    description: "Fan-created concept art of Mina's idol transformation.",
  },
  {
    id: 8,
    title: "Morning Walk",
    titleJa: "朝の散歩",
    category: "candid",
    gradient: "from-mina-400 via-eureka-300 to-mina-500",
    icon: "✿",
    description: "A candid shot from her daily routine — finding inspiration in the ordinary.",
  },
  {
    id: 9,
    title: "Renaissance Portrait",
    titleJa: "ルネサンス肖像",
    category: "artwork",
    gradient: "from-eureka-700 via-sakura-400 to-mina-600",
    icon: "❖",
    description: "A classical-style portrait reimagined with modern aesthetics.",
  },
  {
    id: 10,
    title: "Community Meetup",
    titleJa: "コミュニティミート",
    category: "events",
    gradient: "from-mina-500 via-eureka-500 to-sakura-400",
    icon: "❤",
    description: "Connecting with fans at the first Genesis Vault meetup.",
  },
  {
    id: 11,
    title: "Window Light",
    titleJa: "窓辺の光",
    category: "portraits",
    gradient: "from-mina-600 via-eureka-400 to-mina-300",
    icon: "◇",
    description: "Natural light, natural beauty — a quiet afternoon moment.",
  },
  {
    id: 12,
    title: "Rehearsal Smile",
    titleJa: "リハーサルの笑顔",
    category: "candid",
    gradient: "from-sakura-400 via-mina-500 to-eureka-600",
    icon: "☆",
    description: "That genuine smile during rehearsal — the joy is real.",
  },
];

const categories: { key: Category; label: string; ja: string }[] = [
  { key: "all", label: "All", ja: "すべて" },
  { key: "portraits", label: "Portraits", ja: "ポートレート" },
  { key: "events", label: "Events", ja: "イベント" },
  { key: "artwork", label: "Artwork", ja: "アート" },
  { key: "candid", label: "Candid", ja: "素顔" },
];

export default function Gallery() {
  const [active, setActive] = useState<Category>("all");
  const [selected, setSelected] = useState<GalleryItem | null>(null);

  const filtered =
    active === "all"
      ? items
      : items.filter((item) => item.category === active);

  const handleNav = (dir: "prev" | "next") => {
    if (!selected) return;
    const idx = filtered.findIndex((i) => i.id === selected.id);
    const next =
      dir === "next"
        ? filtered[(idx + 1) % filtered.length]
        : filtered[(idx - 1 + filtered.length) % filtered.length];
    setSelected(next);
  };

  return (
    <div className="relative pt-24">
      {/* Header */}
      <section className="relative py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-mesh opacity-40" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <Camera className="w-10 h-10 text-eureka-400 mx-auto mb-4" />
          <h1 className="text-5xl sm:text-6xl font-display font-bold mb-4">
            <span className="text-gradient">Gallery</span>
          </h1>
          <p className="text-xl text-white/40 font-display">ギャラリー</p>
          <p className="text-white/50 mt-4 max-w-lg mx-auto">
            Explore the visual world of Mina Eureka — portraits, events,
            artwork, and candid moments from her journey.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="px-4 mb-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActive(cat.key)}
                className={`px-5 py-2.5 rounded-xl text-sm font-display font-medium transition-all duration-200 ${
                  active === cat.key
                    ? "bg-gradient-to-r from-mina-600 to-eureka-600 text-white shadow-lg shadow-mina-500/20"
                    : "glass text-white/50 hover:text-white/80 glass-hover"
                }`}
              >
                {cat.label}
                <span className="text-[10px] ml-1.5 opacity-50">{cat.ja}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="px-4 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((item, i) => (
              <button
                key={item.id}
                onClick={() => setSelected(item)}
                className="group text-left"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <div className="glass rounded-2xl overflow-hidden glass-hover transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-mina-500/10">
                  <div
                    className={`aspect-[4/3] bg-gradient-to-br ${item.gradient} flex items-center justify-center relative overflow-hidden`}
                  >
                    <span className="text-6xl text-white/30 group-hover:scale-125 transition-transform duration-500">
                      {item.icon}
                    </span>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-display font-semibold text-sm">
                        {item.title}
                      </h3>
                      <span className="text-[10px] text-white/30 font-display">
                        {item.titleJa}
                      </span>
                    </div>
                    <span className="text-[10px] text-eureka-400 uppercase tracking-wider font-display">
                      {item.category}
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-white/30">
              <p className="font-display text-lg">No items found</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fade-in"
          onClick={() => setSelected(null)}
        >
          <button
            onClick={() => setSelected(null)}
            className="absolute top-6 right-6 p-2 rounded-full glass text-white/60 hover:text-white transition-colors z-10"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNav("prev");
            }}
            className="absolute left-4 sm:left-8 p-2 rounded-full glass text-white/60 hover:text-white transition-colors z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNav("next");
            }}
            className="absolute right-4 sm:right-8 p-2 rounded-full glass text-white/60 hover:text-white transition-colors z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div
            className="relative max-w-3xl w-full glass rounded-3xl overflow-hidden animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className={`aspect-video bg-gradient-to-br ${selected.gradient} flex items-center justify-center`}
            >
              <span className="text-8xl text-white/30">{selected.icon}</span>
            </div>
            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-2">
                <h2 className="text-2xl font-display font-bold">
                  {selected.title}
                </h2>
                <span className="text-sm text-white/30 font-display">
                  {selected.titleJa}
                </span>
              </div>
              <span className="inline-block px-3 py-1 rounded-full text-xs text-eureka-300 bg-eureka-500/10 font-display mb-3">
                {selected.category}
              </span>
              <p className="text-white/60 leading-relaxed">
                {selected.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
