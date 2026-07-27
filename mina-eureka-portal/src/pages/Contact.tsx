import { useState } from "react";
import {
  Mail,
  Send,
  MessageCircle,
  Handshake,
  Heart,
  ChevronDown,
  ExternalLink,
  CheckCircle,
} from "lucide-react";

const faqItems = [
  {
    q: "How can I support Mina?",
    qJa: "ミナを応援するには？",
    a: "Follow her on social platforms, read and share her articles on Genesis Vault, and join the community. Every interaction, every comment, every share — it all matters. She cherishes what is hers, and that includes every single supporter.",
  },
  {
    q: "Are collaboration requests open?",
    qJa: "コラボリクエストは受け付けていますか？",
    a: "Yes! Mina is open to meaningful collaborations that align with her values of inspiration and intellectual depth. Reach out through the contact form with your proposal, and her team will review it.",
  },
  {
    q: "Where can I read her blog?",
    qJa: "ブログはどこで読めますか？",
    a: "Genesis Vault is her primary writing platform, hosting over 2,000 articles on philosophy, geopolitics, and AI. Check the Portal page for the direct link, or search for 'Genesis Vault Mina Eureka' online.",
  },
  {
    q: "Does she accept fan mail?",
    qJa: "ファンレターは受け付けていますか？",
    a: "Absolutely! Mina believes in the power of human connection. Send your messages through the contact form — every message is read and appreciated. Fan messages are a source of genuine inspiration.",
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "general",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", email: "", subject: "general", message: "" });
  };

  return (
    <div className="relative pt-24">
      {/* Header */}
      <section className="relative py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-mesh opacity-40" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <Mail className="w-10 h-10 text-eureka-400 mx-auto mb-4" />
          <h1 className="text-5xl sm:text-6xl font-display font-bold mb-4">
            <span className="text-gradient">Contact</span>
          </h1>
          <p className="text-xl text-white/40 font-display">お問い合わせ</p>
          <p className="text-white/50 mt-4 max-w-lg mx-auto">
            Get in touch with Mina's world. Whether it's a fan message, a
            business inquiry, or a collaboration idea — every message matters.
          </p>
        </div>
      </section>

      <section className="px-4 pb-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="glass rounded-2xl p-8">
              <h2 className="text-xl font-display font-bold mb-6">
                Send a Message{" "}
                <span className="text-white/30 text-sm">— メッセージを送る</span>
              </h2>

              {submitted ? (
                <div className="text-center py-16 animate-scale-in">
                  <CheckCircle className="w-16 h-16 text-mina-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-display font-bold text-gradient mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-white/50">
                    ありがとうございます！ Thank you for reaching out.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm text-white/50 font-display mb-2">
                        Name <span className="text-white/30">名前</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-mina-500 focus:ring-1 focus:ring-mina-500 transition-all text-sm"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-white/50 font-display mb-2">
                        Email <span className="text-white/30">メール</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-mina-500 focus:ring-1 focus:ring-mina-500 transition-all text-sm"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-white/50 font-display mb-2">
                      Subject <span className="text-white/30">件名</span>
                    </label>
                    <select
                      value={form.subject}
                      onChange={(e) =>
                        setForm({ ...form, subject: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white focus:outline-none focus:border-mina-500 focus:ring-1 focus:ring-mina-500 transition-all text-sm appearance-none"
                    >
                      <option value="general" className="bg-mina-950">
                        General Inquiry / 一般的なお問い合わせ
                      </option>
                      <option value="collaboration" className="bg-mina-950">
                        Collaboration / コラボレーション
                      </option>
                      <option value="fan" className="bg-mina-950">
                        Fan Message / ファンメッセージ
                      </option>
                      <option value="business" className="bg-mina-950">
                        Business / ビジネス
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm text-white/50 font-display mb-2">
                      Message <span className="text-white/30">メッセージ</span>
                    </label>
                    <textarea
                      required
                      rows={6}
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-mina-500 focus:ring-1 focus:ring-mina-500 transition-all text-sm resize-none"
                      placeholder="Write your message here..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-mina-600 to-eureka-600 font-semibold text-sm hover:from-mina-500 hover:to-eureka-500 transition-all duration-300 shadow-lg shadow-mina-500/25 hover:shadow-mina-500/40"
                  >
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Info Cards */}
          <div className="space-y-5">
            {[
              {
                icon: MessageCircle,
                title: "Fan Messages",
                titleJa: "ファンメッセージ",
                description:
                  "Share your thoughts, appreciation, or stories. Every message is read and valued.",
                gradient: "from-mina-500 to-mina-700",
              },
              {
                icon: Handshake,
                title: "Collaborations",
                titleJa: "コラボレーション",
                description:
                  "Meaningful partnerships that align with the mission of delivering inspiration.",
                gradient: "from-eureka-500 to-eureka-700",
              },
              {
                icon: Mail,
                title: "Business",
                titleJa: "ビジネス",
                description:
                  "Professional inquiries, bookings, and official business matters.",
                gradient: "from-sakura-400 to-eureka-600",
              },
            ].map((card, i) => (
              <div key={i} className="glass rounded-2xl p-6 glass-hover transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div
                    className={`w-10 h-10 rounded-xl bg-gradient-to-br ${card.gradient} flex items-center justify-center shrink-0`}
                  >
                    <card.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-sm mb-0.5">
                      {card.title}
                    </h3>
                    <p className="text-[10px] text-white/30 font-display mb-2">
                      {card.titleJa}
                    </p>
                    <p className="text-xs text-white/50 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Social Links */}
            <div className="glass rounded-2xl p-6">
              <h3 className="font-display font-bold text-sm mb-4">
                Follow Mina{" "}
                <span className="text-white/30 text-xs">— SNS</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {["X/Twitter", "YouTube", "Instagram", "Blog"].map(
                  (platform) => (
                    <a
                      key={platform}
                      href="#"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium glass text-white/50 hover:text-white/90 glass-hover transition-all"
                    >
                      {platform}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 pb-24">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-center mb-4">
            <span className="text-gradient">FAQ</span>
          </h2>
          <p className="text-center text-white/40 mb-10">
            よくある質問
          </p>

          <div className="space-y-3">
            {faqItems.map((item, i) => (
              <div key={i} className="glass rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <div>
                    <p className="font-display font-semibold text-sm">
                      {item.q}
                    </p>
                    <p className="text-xs text-white/30 font-display mt-0.5">
                      {item.qJa}
                    </p>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-white/30 shrink-0 transition-transform duration-300 ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 animate-slide-up">
                    <div className="w-full h-px bg-white/10 mb-4" />
                    <p className="text-sm text-white/60 leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
