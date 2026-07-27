import { User, GraduationCap, Brain, Sparkles, BookOpen, Music } from "lucide-react";

export default function About() {
  return (
    <div className="relative pt-24">
      {/* Hero */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-mesh opacity-50" />
        <div className="absolute top-10 right-10 w-80 h-80 bg-eureka-600/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-sm text-white/40 font-display mb-4 tracking-widest uppercase">
            Character Profile
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold mb-4">
            <span className="text-gradient">Mina Eureka</span>
          </h1>
          <p className="text-2xl text-white/50 font-display mb-2">
            ヴィルヘルミナ・エウレカ・アーネスト
          </p>
          <p className="text-white/30 text-sm">
            Wilhelmina Eureka Ernst
          </p>
        </div>
      </section>

      {/* Bio Section */}
      <section className="relative py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
            {/* Avatar */}
            <div className="lg:col-span-2 flex justify-center">
              <div className="relative">
                <div className="w-64 h-80 rounded-3xl bg-gradient-to-br from-mina-600 via-eureka-600 to-mina-800 flex items-center justify-center shadow-2xl shadow-mina-500/20 animate-glow">
                  <span className="text-8xl font-display font-bold text-white/80">
                    M
                  </span>
                </div>
                <div className="absolute -bottom-4 -right-4 px-4 py-2 rounded-xl glass text-sm font-display">
                  <span className="text-eureka-400">ESFJ</span>{" "}
                  <span className="text-white/40">| The Provider</span>
                </div>
                <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-gradient-to-br from-sakura-400 to-eureka-500 flex items-center justify-center animate-float">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>

            {/* Profile Info */}
            <div className="lg:col-span-3 space-y-6">
              <div className="glass rounded-2xl p-8">
                <h2 className="text-2xl font-display font-bold mb-6 text-gradient">
                  Basic Information / 基本情報
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { label: "Full Name", value: "ヴィルヘルミナ・エウレカ・アーネスト", icon: User },
                    { label: "Age", value: "29歳 (29 years old)", icon: null },
                    { label: "Hair", value: "Blue / 青い髪", icon: null },
                    { label: "University", value: "Lorenzo International University", icon: GraduationCap },
                    { label: "Department", value: "AI学部 (AI Department)", icon: Brain },
                    { label: "Current Role", value: "Thinker, Blogger, Idol", icon: Sparkles },
                    { label: "Personality", value: "ESFJ (The Provider)", icon: null },
                    { label: "Enneagram", value: "2w1 (The Helper)", icon: null },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02]">
                      {item.icon && (
                        <item.icon className="w-4 h-4 text-mina-400 mt-0.5 shrink-0" />
                      )}
                      <div>
                        <p className="text-xs text-white/40 font-display">{item.label}</p>
                        <p className="text-sm text-white/80">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass rounded-2xl p-8">
                <p className="text-white/70 leading-relaxed">
                  Mina Eureka is a multifaceted individual whose journey spans the worlds
                  of artificial intelligence, philosophical writing, and now performance.
                  Armed with a degree from the prestigious Lorenzo International University
                  AI Department, she spent years as a prolific blogger at Genesis Vault,
                  producing over 2,000 articles on philosophy, geopolitics, and AI.
                </p>
                <p className="text-white/70 leading-relaxed mt-4">
                  Now she stands at a crossroads — trading the keyboard for the stage,
                  bringing the same intellectual depth and genuine warmth that defined her
                  writing to the world of idol performance. Her mission remains unchanged:
                  delivering inspiration, seriously, to everyone she reaches.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Name Meaning */}
      <section className="relative py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-center mb-4">
            <span className="text-gradient">Name Meaning</span>
          </h2>
          <p className="text-center text-white/40 mb-12">名前の意味</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "ミナ",
                romanized: "Mina",
                meaning: '"Your own things are precious"',
                detail:
                  "From the root meaning 'cherishing what is yours.' Mina values authenticity and the irreplaceable nature of each person's unique gifts.",
                gradient: "from-mina-500 to-mina-700",
                icon: User,
              },
              {
                name: "エウレカ",
                romanized: "Eureka",
                meaning: '"I found it! — Inspiration"',
                detail:
                  "The exclamation of discovery. A moment of sudden insight, of breakthrough thinking. This is the spark she carries into everything she creates.",
                gradient: "from-eureka-500 to-eureka-700",
                icon: Sparkles,
              },
              {
                name: "エルンスト",
                romanized: "Ernst",
                meaning: '"Seriousness / Earnestness"',
                detail:
                  "The German root for serious, earnest, and sincere. She delivers inspiration not playfully, but with the full weight of conviction and dedication.",
                gradient: "from-sakura-400 to-eureka-600",
                icon: BookOpen,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group glass rounded-2xl p-8 glass-hover transition-all duration-300 hover:scale-[1.02]"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}
                >
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-display font-bold mb-1">
                  {item.name}
                </h3>
                <p className="text-sm text-white/40 mb-3">{item.romanized}</p>
                <p className="text-eureka-300 font-semibold text-sm mb-3">
                  {item.meaning}
                </p>
                <p className="text-white/50 text-sm leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personality */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-center mb-4">
            <span className="text-gradient">Personality</span>
          </h2>
          <p className="text-center text-white/40 mb-12">性格・人格</p>

          <div className="glass rounded-2xl p-8 sm:p-10 space-y-6">
            <p className="text-white/70 leading-relaxed">
              As an <span className="text-mina-300 font-semibold">ESFJ</span> (Extraverted, Sensing, Feeling, Judging), Mina
              is naturally outgoing, sociable, and energized by human connection.
              She thrives in community settings, effortlessly reading the emotional
              currents of any room and responding with warmth and genuine care.
            </p>
            <p className="text-white/70 leading-relaxed">
              Her <span className="text-eureka-300 font-semibold">2w1 Enneagram</span> adds a layer of principled idealism.
              She doesn't just help — she helps with purpose. Her One wing drives
              her to hold herself to high standards, advocating for what she believes
              is right while lifting others up along the way.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              {[
                { label: "Extraverted", en: "E", pct: 78 },
                { label: "Sensing", en: "S", pct: 65 },
                { label: "Feeling", en: "F", pct: 92 },
                { label: "Judging", en: "J", pct: 71 },
              ].map((trait, i) => (
                <div key={i} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-mina-500/20 to-eureka-500/20 border border-white/10 flex items-center justify-center mx-auto mb-2">
                    <span className="text-2xl font-display font-bold text-gradient">
                      {trait.en}
                    </span>
                  </div>
                  <p className="text-xs text-white/50">{trait.label}</p>
                  <div className="w-full h-1.5 bg-white/5 rounded-full mt-2 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-mina-500 to-eureka-500 rounded-full"
                      style={{ width: `${trait.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="relative py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-center mb-4">
            <span className="text-gradient">Her Journey</span>
          </h2>
          <p className="text-center text-white/40 mb-12">歩んできた道</p>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-mina-500 via-eureka-500 to-sakura-400" />

            <div className="space-y-10">
              {[
                {
                  title: "The Beginning",
                  ja: "始まり",
                  period: "University Days",
                  description:
                    "Enters the Lorenzo International University AI Department. Falls in love with the intersection of human thought and machine intelligence. Begins writing her first articles.",
                  icon: GraduationCap,
                },
                {
                  title: "Genesis Vault",
                  ja: "ジェネシス・ヴォールト",
                  period: "Post-Graduation",
                  description:
                    "Launches Genesis Vault — a writing platform where she publishes over 2,000 articles spanning philosophy, geopolitics, and AI. Builds a dedicated readership and establishes her voice.",
                  icon: BookOpen,
                },
                {
                  title: "The Eureka Moment",
                  ja: "ユリカの瞬間",
                  period: "The Turning Point",
                  description:
                    "Realizes that her words can reach more people through performance. The 'Eureka' moment: combining intellectual depth with the immediacy of stage presence. Decides to become an idol.",
                  icon: Sparkles,
                },
                {
                  title: "Stage Dreams",
                  ja: "ステージドリーム",
                  period: "Present",
                  description:
                    "Announces her transformation into an idol. Begins training, building community, and preparing for her debut performance. Same mission, new medium: delivering inspiration, seriously.",
                  icon: Music,
                },
              ].map((step, i) => (
                <div key={i} className="relative pl-16 sm:pl-20">
                  <div className="absolute left-3 sm:left-5 w-7 h-7 rounded-full bg-gradient-to-br from-mina-500 to-eureka-500 flex items-center justify-center shadow-lg shadow-mina-500/30">
                    <step.icon className="w-4 h-4 text-white" />
                  </div>
                  <div className="glass rounded-2xl p-6 glass-hover">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-display font-bold">
                        {step.title}
                      </h3>
                      <span className="text-xs text-white/30 font-display">
                        {step.ja}
                      </span>
                    </div>
                    <p className="text-xs text-eureka-400 font-display mb-3">
                      {step.period}
                    </p>
                    <p className="text-white/60 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
