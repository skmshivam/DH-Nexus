import { Download, ExternalLink } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

import dhLogo from "@/imports/655432755_17870109720587039_6433724712502054265_n.jpg";
import drEmilyPoster from "@/imports/Dr_emily_mcginn_session_poster___1_.png";
import punyapathPoster from "@/imports/Untitled_design__4_.png";
import internshipPoster from "@/imports/Internshi_poster.png";
import joinTeamPoster from "@/imports/Join_the_dh_nexus_team_.png";
import studentDirectoryPoster from "@/imports/Student_directory_DH_NExus.png";
import dhTalentPoster from "@/imports/DH_Talent.png";
import communityPoster from "@/imports/Untitled_design__9_.png";

const posters = [
  {
    id: "punyapath",
    label: "PunyaPath",
    sublabel: "Faith & Culture Survey",
    lang: "English",
    color: "#ffb300",
    glow: "#ffb30040",
    grad: "linear-gradient(135deg, #ff8f0030 0%, #ffb30008 100%)",
    image: punyapathPoster,
    icon: "🛕",
  },
  {
    id: "internship",
    label: "DH Nexus",
    sublabel: "Internship Opportunities",
    lang: "Apply Now",
    color: "#e040fb",
    glow: "#e040fb40",
    grad: "linear-gradient(135deg, #aa00ff30 0%, #e040fb08 100%)",
    image: internshipPoster,
    icon: "🎓",
  },
  {
    id: "join-team",
    label: "DH Nexus",
    sublabel: "Join the Team",
    lang: "Operations",
    color: "#00e5ff",
    glow: "#00e5ff40",
    grad: "linear-gradient(135deg, #006eff30 0%, #00e5ff08 100%)",
    image: joinTeamPoster,
    icon: "🤝",
  },
  {
    id: "student-directory",
    label: "DH Nexus",
    sublabel: "Student Directory",
    lang: "Get Featured",
    color: "#ff6b35",
    glow: "#ff6b3540",
    grad: "linear-gradient(135deg, #ff6b3530 0%, #ff6b3508 100%)",
    image: studentDirectoryPoster,
    icon: "📋",
  },
  {
    id: "dh-talent",
    label: "DH Talent",
    sublabel: "Hire from DH Nexus",
    lang: "For Employers",
    color: "#00bfa5",
    glow: "#00bfa540",
    grad: "linear-gradient(135deg, #00bfa530 0%, #00bfa508 100%)",
    image: dhTalentPoster,
    icon: "💼",
  },
  {
    id: "community",
    label: "DH Nexus",
    sublabel: "Join the Community",
    lang: "Open to All",
    color: "#ffea00",
    glow: "#ffea0040",
    grad: "linear-gradient(135deg, #ffea0030 0%, #ffea0008 100%)",
    image: communityPoster,
    icon: "🌐",
  },
  {
    id: "dr-emily",
    label: "DH Nexus Speaker Series",
    sublabel: "Dr. Emily McGinn — Expert Talk",
    lang: "Register",
    color: "#f472b6",
    glow: "#f472b640",
    grad: "linear-gradient(135deg, #f472b630 0%, #f472b608 100%)",
    image: drEmilyPoster,
    icon: "🎤",
  },
];

export default function App() {
  return (
    <div
      className="min-h-screen text-white"
      style={{
        fontFamily: "'Inter', sans-serif",
        background: "#080818",
      }}
    >
      {/* Animated colourful background blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-30 blur-3xl"
          style={{ background: "radial-gradient(circle, #7c3aed 0%, transparent 70%)" }}
        />
        <div
          className="absolute top-1/3 -right-32 w-[500px] h-[500px] rounded-full opacity-25 blur-3xl"
          style={{ background: "radial-gradient(circle, #0ea5e9 0%, transparent 70%)" }}
        />
        <div
          className="absolute -bottom-40 left-1/3 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(circle, #f97316 0%, transparent 70%)" }}
        />
      </div>

      {/* Nav */}
      <header
        className="relative z-20 sticky top-0 border-b"
        style={{
          borderColor: "rgba(255,255,255,0.07)",
          background: "rgba(8,8,24,0.85)",
          backdropFilter: "blur(16px)",
        }}
      >
        <div className="max-w-6xl mx-auto px-5 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ImageWithFallback
              src={dhLogo}
              alt="DH Nexus logo"
              className="w-10 h-10 object-contain rounded-xl"
            />
            <div>
              <p
                className="font-black text-white text-base uppercase tracking-widest leading-none"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                DH NEXUS
              </p>
              <p style={{ color: "#a78bfa", fontSize: "10px", letterSpacing: "0.1em" }}>
                Engineering the Future of Knowledge
              </p>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-xs font-medium px-4 py-1.5 rounded-full"
            style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.5)" }}>
            Scan · Participate · Build · Grow
          </div>
        </div>
      </header>

      {/* Hero — bright gradient, no image background */}
      <section className="relative z-10 py-20 px-5 text-center overflow-hidden">
        {/* Bright radial behind text */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(124,58,237,0.35) 0%, transparent 70%)",
          }}
        />

        <div className="relative max-w-3xl mx-auto">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold mb-6 border"
            style={{
              background: "rgba(124,58,237,0.2)",
              borderColor: "#7c3aed60",
              color: "#c4b5fd",
            }}
          >
            🚀 One Community · Multiple Innovations
          </span>

          <h1
            className="font-black uppercase leading-none mb-5"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "clamp(3.5rem, 10vw, 7rem)",
              background: "linear-gradient(135deg, #ffffff 0%, #c4b5fd 40%, #ff6b35 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            JOIN<br />DH NEXUS
          </h1>

          <p className="text-white/55 text-base max-w-md mx-auto leading-relaxed">
            Scan any QR code below to fill our surveys, join our community, or apply for internships.
          </p>

          {/* Colour pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {[
              { label: "🛕 PunyaPath", color: "#ffb300" },
              { label: "🎓 Internship", color: "#e040fb" },
              { label: "🤝 Join Team", color: "#00e5ff" },
              { label: "📋 Student Directory", color: "#ff6b35" },
              { label: "💼 DH Talent", color: "#00bfa5" },
              { label: "🌐 Community", color: "#ffea00" },
            ].map((pill) => (
              <span
                key={pill.label}
                className="px-3 py-1 rounded-full text-xs font-medium border"
                style={{
                  color: pill.color,
                  borderColor: pill.color + "50",
                  background: pill.color + "15",
                }}
              >
                {pill.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="relative z-10 max-w-6xl mx-auto px-5">
        <div
          className="h-px w-full"
          style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent)" }}
        />
      </div>

      {/* Posters */}
      <section className="relative z-10 max-w-6xl mx-auto px-5 py-14">
        <div className="text-center mb-10">
          <h2
            className="text-3xl lg:text-5xl font-black uppercase"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              background: "linear-gradient(90deg, #ffffff, #a78bfa)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Scan &amp; Participate
          </h2>
          <p className="text-white/35 text-sm mt-2">
            Point your phone camera at the QR code inside each poster.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {posters.map((p) => (
            <div
              key={p.id}
              className="rounded-2xl overflow-hidden border transition-all duration-300 hover:scale-[1.015] hover:-translate-y-1"
              style={{
                borderColor: p.color + "35",
                background: p.grad,
                boxShadow: `0 4px 60px ${p.glow}, 0 0 0 1px ${p.color}10`,
              }}
            >
              {/* Glowing top stripe */}
              <div
                className="h-[3px]"
                style={{
                  background: `linear-gradient(90deg, ${p.color} 0%, ${p.color}80 50%, transparent 100%)`,
                  boxShadow: `0 0 12px ${p.color}`,
                }}
              />

              {/* Card header */}
              <div className="flex items-center justify-between px-4 pt-4 pb-3">
                <div className="flex items-center gap-2">
                  <span className="text-lg">{p.icon}</span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest" style={{ color: p.color }}>
                      {p.label}
                    </p>
                    <p className="text-white/40 text-[11px]">{p.sublabel}</p>
                  </div>
                </div>
                <span
                  className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full border"
                  style={{ color: p.color, borderColor: p.color + "45", background: p.color + "18" }}
                >
                  {p.lang}
                </span>
              </div>

              {/* Full poster */}
              <div className="px-3 pb-4">
                <div className="rounded-xl overflow-hidden" style={{ boxShadow: `0 8px 30px rgba(0,0,0,0.5), 0 0 0 1px ${p.color}20` }}>
                  <ImageWithFallback
                    src={p.image}
                    alt={`${p.label} — ${p.sublabel}`}
                    className="w-full object-contain"
                    style={{ display: "block" }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="relative z-10 max-w-6xl mx-auto px-5 pb-4">
        <div className="h-px w-full" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent)" }} />
      </div>

      {/* Forms & Community Resources */}
      <section className="relative z-10 max-w-6xl mx-auto px-5 py-14">
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold mb-4 border" style={{ background: "rgba(0,229,255,0.1)", borderColor: "#00e5ff40", color: "#00e5ff" }}>
            📋 Quick Access Forms
          </span>
          <h2
            className="text-3xl lg:text-5xl font-black uppercase"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              background: "linear-gradient(90deg, #ffffff, #00e5ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            DH Nexus Forms &amp;<br />Community Resources
          </h2>
          <p className="text-white/35 text-sm mt-2">Scan the QR or click the link to open the form directly.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {[
            {
              icon: "👥",
              title: "Join the DH Nexus Talent Directory",
              desc: "Connect with recruiters, researchers, and collaborators by showcasing your profile.",
              url: "https://forms.gle/h8wi7UhxjsYsoqnMA",
              color: "#00e5ff",
            },
            {
              icon: "🎓",
              title: "Join the DH Nexus Student Directory",
              desc: "Become part of the growing Digital Humanities student community.",
              url: "https://forms.gle/927FLPxgbi7ww78K9",
              color: "#e040fb",
            },
            {
              icon: "💬",
              title: "Feedback & Community Form",
              desc: "Share feedback, report bugs, suggest new features, or volunteer with DH Nexus.",
              url: "https://forms.gle/VqqeGB2EvyXym5UW7",
              color: "#ffb300",
            },
            {
              icon: "🤝",
              title: "Join the DH Nexus Team",
              desc: "Interested in contributing? Join our team and help build the future of Digital Humanities.",
              url: "https://forms.gle/uwmUJyDbyq5VVLUx7",
              color: "#00e676",
            },
            {
              icon: "💼",
              title: "Submit an Opportunity",
              desc: "Submit internships, jobs, fellowships, research positions, or other opportunities for the DH community.",
              url: "https://forms.gle/6DrH5bSRQAuPqE997",
              color: "#ff6b35",
            },
            {
              icon: "🎥",
              title: "DH Community Voices — Testimonial",
              desc: "Share your Digital Humanities journey through a short video or written testimonial.",
              url: "https://forms.gle/5EiNrQu2CFwUcP886",
              color: "#ff4081",
            },
            {
              icon: "🤝",
              title: "DH Nexus Session Collaboration",
              desc: "Collaborate on sessions, workshops, and events with the DH Nexus community.",
              url: "https://forms.gle/q3GHqDS7GV5G6G446",
              color: "#a3e635",
            },
            {
              icon: "🚀",
              title: "DH Nexus Internship Opportunities",
              desc: "Apply for internships with DH Nexus and its partner startups and research initiatives.",
              url: "https://forms.gle/NwyUh2vzgyqa7PXJ7",
              color: "#818cf8",
            },
            {
              icon: "🎤",
              title: "Expert Talk — Dr. Emily McGinn",
              desc: "Register for the interactive session on Reimagining Digital Humanities at India, featuring Dr. Emily McGinn, Johns Hopkins University.",
              url: "https://forms.gle/a2iwwhsHKHMKBu9t9",
              color: "#f472b6",
            },
            {
              icon: "🌏",
              title: "Reimagining Digital Humanities at India",
              desc: "Join the conversation on shaping the future of Digital Humanities in the Indian context.",
              url: "https://forms.gle/Qzb2UyhUZRnkBHTw9",
              color: "#34d399",
            },
          ].map((form) => (
            <div
              key={form.url}
              className="rounded-2xl border overflow-hidden transition-all duration-300 hover:scale-[1.015] hover:-translate-y-1"
              style={{
                borderColor: form.color + "30",
                background: `linear-gradient(135deg, ${form.color}10 0%, #0a0a1a 100%)`,
                boxShadow: `0 4px 40px ${form.color}15`,
              }}
            >
              {/* Glow stripe */}
              <div className="h-[3px]" style={{ background: `linear-gradient(90deg, ${form.color}, transparent)`, boxShadow: `0 0 10px ${form.color}` }} />

              <div className="flex gap-5 p-5">
                {/* QR code */}
                <div className="shrink-0">
                  <div className="bg-white rounded-xl p-1.5 shadow-lg" style={{ boxShadow: `0 0 20px ${form.color}40` }}>
                    <img
                      src={`https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=${encodeURIComponent(form.url)}&color=000000&bgcolor=ffffff`}
                      alt={`QR for ${form.title}`}
                      className="w-24 h-24 rounded-lg"
                    />
                  </div>
                </div>

                {/* Text */}
                <div className="flex flex-col justify-between min-w-0">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-lg">{form.icon}</span>
                      <p className="text-xs font-bold uppercase tracking-wider" style={{ color: form.color }}>{form.title}</p>
                    </div>
                    <p className="text-white/50 text-xs leading-relaxed">{form.desc}</p>
                  </div>
                  <a
                    href={form.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 font-mono text-[11px] truncate hover:underline"
                    style={{ color: form.color }}
                  >
                    {form.url}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* All Forms + Downloadable QR Codes */}
      <section className="relative z-10 border-t py-16" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold mb-4 border" style={{ background: "rgba(255,107,53,0.1)", borderColor: "#ff6b3540", color: "#ff6b35" }}>
              📥 All Forms & QR Codes
            </span>
            <h2
              className="text-3xl lg:text-5xl font-black uppercase"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                background: "linear-gradient(90deg, #ffffff, #ff6b35)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Download QR Codes
            </h2>
            <p className="text-white/35 text-sm mt-2">Click the download button to save any QR code as an image.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: "👥", title: "DH Nexus Talent Directory", url: "https://forms.gle/h8wi7UhxjsYsoqnMA", color: "#00e5ff" },
              { icon: "🎓", title: "DH Nexus Student Directory", url: "https://forms.gle/927FLPxgbi7ww78K9", color: "#e040fb" },
              { icon: "💬", title: "Feedback & Community Form", url: "https://forms.gle/VqqeGB2EvyXym5UW7", color: "#ffb300" },
              { icon: "🤝", title: "Join the DH Nexus Team", url: "https://forms.gle/uwmUJyDbyq5VVLUx7", color: "#00e676" },
              { icon: "💼", title: "Submit an Opportunity", url: "https://forms.gle/6DrH5bSRQAuPqE997", color: "#ff6b35" },
              { icon: "🎥", title: "DH Community Voices — Testimonial", url: "https://forms.gle/5EiNrQu2CFwUcP886", color: "#ff4081" },
              { icon: "🤝", title: "DH Nexus Session Collaboration", url: "https://forms.gle/q3GHqDS7GV5G6G446", color: "#a3e635" },
              { icon: "🚀", title: "DH Nexus Internship Opportunities", url: "https://forms.gle/NwyUh2vzgyqa7PXJ7", color: "#818cf8" },
              { icon: "🎤", title: "Expert Talk — Dr. Emily McGinn", url: "https://forms.gle/a2iwwhsHKHMKBu9t9", color: "#f472b6" },
              { icon: "🌏", title: "Reimagining Digital Humanities at India", url: "https://forms.gle/Qzb2UyhUZRnkBHTw9", color: "#34d399" },
            ].map((form) => {
              const qrSrc = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(form.url)}&color=000000&bgcolor=ffffff&margin=10`;
              const handleDownload = async () => {
                try {
                  const res = await fetch(qrSrc);
                  const blob = await res.blob();
                  const blobUrl = URL.createObjectURL(blob);
                  const a = document.createElement("a");
                  a.href = blobUrl;
                  a.download = `qr-${form.title.toLowerCase().replace(/\s+/g, "-")}.png`;
                  a.click();
                  URL.revokeObjectURL(blobUrl);
                } catch {
                  window.open(qrSrc, "_blank");
                }
              };
              return (
                <div
                  key={form.url}
                  className="rounded-2xl border overflow-hidden transition-all duration-300 hover:-translate-y-1"
                  style={{
                    borderColor: form.color + "30",
                    background: `linear-gradient(135deg, ${form.color}0d 0%, #0a0a1a 100%)`,
                    boxShadow: `0 4px 30px ${form.color}15`,
                  }}
                >
                  <div className="h-[3px]" style={{ background: form.color, boxShadow: `0 0 10px ${form.color}` }} />
                  <div className="p-5 flex flex-col items-center gap-4">
                    {/* Large QR */}
                    <div className="bg-white rounded-2xl p-3 shadow-xl" style={{ boxShadow: `0 0 30px ${form.color}50` }}>
                      <img
                        src={qrSrc}
                        alt={`QR code for ${form.title}`}
                        className="w-36 h-36 rounded-xl"
                      />
                    </div>

                    {/* Title */}
                    <div className="text-center">
                      <p className="text-lg mb-0.5">{form.icon}</p>
                      <p className="text-white/90 text-sm font-semibold leading-snug">{form.title}</p>
                      <a
                        href={form.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-[10px] break-all hover:underline mt-1 block"
                        style={{ color: form.color }}
                      >
                        {form.url}
                      </a>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-2 w-full">
                      <button
                        onClick={handleDownload}
                        className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-semibold transition-all hover:opacity-90 active:scale-95"
                        style={{ background: form.color, color: "#000" }}
                      >
                        <Download size={13} />
                        Download QR
                      </button>
                      <a
                        href={form.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1 px-3 py-2 rounded-xl text-xs font-semibold border transition-all hover:opacity-90"
                        style={{ borderColor: form.color + "50", color: form.color, background: form.color + "12" }}
                      >
                        <ExternalLink size={13} />
                        Open
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="relative z-10 border-t py-10 text-center"
        style={{ borderColor: "rgba(255,255,255,0.06)" }}
      >
        <div className="flex items-center justify-center gap-3 mb-2">
          <ImageWithFallback
            src={dhLogo}
            alt="DH Nexus"
            className="w-8 h-8 object-contain rounded-lg"
          />
          <span
            className="text-xl font-black uppercase tracking-widest text-white"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            DH NEXUS
          </span>
        </div>
        <p style={{ color: "rgba(255,255,255,0.2)", fontSize: "12px" }}>
          Engineering the Future of Knowledge
        </p>
      </footer>
    </div>
  );
}
