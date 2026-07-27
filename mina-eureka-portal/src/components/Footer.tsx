import { Sparkles, Heart } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-mina-950/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-mina-500 to-eureka-500 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="font-display font-bold text-lg text-gradient">
                Mina Eureka
              </span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed">
              ひらめきを、真剣に、あなたに届けに行く。
              <br />
              Delivering inspiration, seriously, to you.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-white/80 mb-4">
              Navigation
            </h3>
            <div className="space-y-2">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About" },
                { to: "/gallery", label: "Gallery" },
                { to: "/portal", label: "Portal" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="block text-white/40 hover:text-white/80 text-sm transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-display font-semibold text-white/80 mb-4">
              Connect
            </h3>
            <div className="flex gap-3">
              {["X/Twitter", "YouTube", "Instagram"].map((platform) => (
                <span
                  key={platform}
                  className="px-3 py-1.5 rounded-full text-xs font-medium glass text-white/50 hover:text-white/80 cursor-pointer transition-colors"
                >
                  {platform}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/30 text-xs">
          <p>
            &copy; 2026 ミナ・エウレカ Super Portal. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-sakura-400" /> and
            inspiration
          </p>
        </div>
      </div>
    </footer>
  );
}
