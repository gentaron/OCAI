import { Link } from "react-router-dom";
import {
  Sparkles,
  BookOpen,
  Music,
  Cpu,
  ArrowRight,
  Star,
  Zap,
} from "lucide-react";

function FloatingDot({
  className,
  delay = "0s",
}: {
  className: string;
  delay?: string;
}) {
  return (
    <div
      className={`absolute w-1 h-1 bg-white/30 rounded-full animate-float ${className}`}
      style={{ animationDelay: delay }}
    />
  );
}

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-mesh" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-mina-600/20 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-eureka-600/15 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-mina-500/10 rounded-full blur-3xl" />

        {/* Floating decorations */}
        <FloatingDot className="top-[15%] left-[20%]" delay="0s" />
        <FloatingDot className="top-[25%] right-[30%]" delay="1s" />
        <FloatingDot className="top-[60%] left-[15%]" delay="2s" />
        <FloatingDot className="bottom-[20%] right-[25%]" delay="0.5s" />
        <FloatingDot className="top-[40%] left-[60%]" delay="1.5s" />
        <FloatingDot className="top-[70%] right-[15%]" delay="2.5s" />
        <div
          className="star top-[10%] left-[40%]"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="star top-[30%] right-[20%]"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="star bottom-[30%] left-[35%]"
          style={{ animationDelay: "2s" }}
        />

        {/* Hero content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-white/70 mb-8">
              <Sparkles className="w-4 h-4 text-eureka-400" />
              <span>Welcome to the world of</span>
            </div>
          </div>

          <h1 className="animate-slide-up text-5xl sm:text-7xl lg:text-8xl font-display font-bold mb-4 leading-tight">
            <span className="text-gradient">Mina Eureka</span>
          </h1>

          <p className="animate-slide-up animate-delay-200 text-2xl sm:text-3xl font-display text-white/60 mb-2">
            ミナ・エウレカ
          </p>

          <p className="animate-slide-up animate-delay-300 text-lg sm:text-xl text-white/40 mb-4 font-display">
            スーパーポータル
          </p>

          <div className="animate-slide-up animate-delay-400 mb-10">
            <p className="text-xl sm:text-2xl text-white/70 font-light italic">
              「ひらめきを、真剣に、あなたに届けに行く。」
            </p>
            <p className="text-sm text-white/40 mt-2">
              Delivering inspiration, seriously, to you.
            </p>
          </div>

          <div className="animate-slide-up animate-delay-500 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/about"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-mina-600 to-eureka-600 font-semibold hover:from-mina-500 hover:to-eureka-500 transition-all duration-300 shadow-lg shadow-mina-500/25 hover:shadow-mina-500/40 hover:scale-105"
            >
              Discover Mina
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/portal"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl glass glass-hover font-semibold transition-all duration-300"
            >
              Enter Portal
              <Zap className="w-5 h-5 text-eureka-400" />
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5">
            <div className="w-1.5 h-3 bg-white/40 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="relative py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
              <span className="text-gradient">Who is Mina?</span>
            </h2>
            <p className="text-white/40 text-lg">
              多角的な才能、一人の女性。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="group glass rounded-2xl p-8 glass-hover transition-all duration-300 hover:scale-[1.02] animate-slide-up animate-delay-100">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-mina-500 to-mina-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BookOpen className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-display font-bold mb-3">
                Thinker & Blogger
              </h3>
              <p className="text-white/50 leading-relaxed text-sm">
                Writing from Genesis Vault on philosophy, geopolitics, and AI.
                Over 2,000 articles exploring the intersection of human thought
                and technology. A voice that bridges complex ideas with
                accessibility.
              </p>
              <p className="text-white/30 text-xs mt-4 font-display">
                思想家・ブロガー
              </p>
            </div>

            {/* Card 2 */}
            <div className="group glass rounded-2xl p-8 glass-hover transition-all duration-300 hover:scale-[1.02] animate-slide-up animate-delay-200">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-eureka-500 to-eureka-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Music className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-display font-bold mb-3">
                Aspiring Idol
              </h3>
              <p className="text-white/50 leading-relaxed text-sm">
                A bold new chapter. Mina steps onto the stage, bringing her
                unique blend of intellectual depth and genuine warmth to the
                world of performance. From thinker to idol — same passion,
                new stage.
              </p>
              <p className="text-white/30 text-xs mt-4 font-display">
                アイドル志望
              </p>
            </div>

            {/* Card 3 */}
            <div className="group glass rounded-2xl p-8 glass-hover transition-all duration-300 hover:scale-[1.02] animate-slide-up animate-delay-300">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-sakura-400 to-eureka-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Cpu className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-display font-bold mb-3">
                AI Graduate
              </h3>
              <p className="text-white/50 leading-relaxed text-sm">
                Graduate of the Lorenzo International University AI Department.
                Her deep understanding of artificial intelligence informs
                everything she creates — from blog posts to stage presence to
                community building.
              </p>
              <p className="text-white/30 text-xs mt-4 font-display">
                AI学部卒業生
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="relative py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass rounded-3xl p-12 sm:p-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-mina-600/10 to-eureka-600/10" />
            <Star className="absolute top-6 left-6 w-8 h-8 text-eureka-400/20" />
            <Star className="absolute bottom-6 right-6 w-6 h-6 text-mina-400/20" />

            <div className="relative z-10">
              <p className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold leading-tight mb-6">
                <span className="text-gradient">
                  「ひらめきを、真剣に、
                  <br />
                  あなたに届けに行く。」
                </span>
              </p>
              <p className="text-lg text-white/50 mb-2">
                "Delivering inspiration, seriously, to you."
              </p>
              <div className="flex items-center justify-center gap-2 mt-6">
                <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-mina-500" />
                <span className="text-sm text-white/30 font-display">
                  ミナ・エウレカ
                </span>
                <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-mina-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="relative py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-center mb-12">
            <span className="text-gradient">Explore</span>
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                to: "/about",
                label: "About",
                ja: "紹介",
                icon: Sparkles,
                gradient: "from-mina-500 to-mina-700",
              },
              {
                to: "/gallery",
                label: "Gallery",
                ja: "ギャラリー",
                icon: Star,
                gradient: "from-eureka-500 to-eureka-700",
              },
              {
                to: "/portal",
                label: "Portal",
                ja: "ポータル",
                icon: Zap,
                gradient: "from-sakura-400 to-eureka-600",
              },
              {
                to: "/contact",
                label: "Contact",
                ja: "連絡",
                icon: ArrowRight,
                gradient: "from-mina-400 to-sakura-400",
              },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="group glass rounded-2xl p-6 glass-hover transition-all duration-300 hover:scale-[1.03] text-center"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${link.gradient} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                >
                  <link.icon className="w-6 h-6 text-white" />
                </div>
                <p className="font-display font-semibold mb-1">
                  {link.label}
                </p>
                <p className="text-white/30 text-xs">{link.ja}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
