"use client";

import { motion } from "framer-motion";
import { ExternalLink, Users, BarChart3, Scissors, Play, Palette } from "lucide-react";

const projects = [
  {
    id: "barbervault",
    label: "SaaS Platform",
    title: "BarberVault",
    description:
      "A custom software platform built specifically for barbershops. BarberVault combines booking management, client profiles, customer history, real-time analytics, automated email workflows, and complete business management tools into one cohesive system.",
    tags: ["Next.js", "TypeScript", "Automation", "SaaS"],
    highlights: [
      { icon: BarChart3, text: "Real-time analytics dashboard" },
      { icon: Users, text: "Client profiles & history" },
      { icon: Scissors, text: "Online booking system" },
    ],
    accentColor: "#FFD000",
    bgGradient: "from-[#FFD000]/10 via-transparent to-transparent",
    borderColor: "border-[#FFD000]/20",
    mockup: "barbervault",
    link: "https://barbervault.co.nz",
    linkLabel: "Visit BarberVault",
  },
  {
    id: "sprted",
    label: "Content Brand",
    title: "SPRTED",
    description:
      "A sports content brand focused on NBA edits and short-form content. Built an engaged audience from zero through high-quality video editing, storytelling, and consistent posting. It proves the value of great content and platform strategy.",
    tags: ["Video Editing", "TikTok", "Content Strategy", "Growth"],
    highlights: [
      { icon: Users, text: "10,000+ TikTok followers" },
      { icon: Play, text: "NBA short-form edits" },
      { icon: BarChart3, text: "Organic social growth" },
    ],
    accentColor: "#a855f7",
    bgGradient: "from-purple-500/10 via-transparent to-transparent",
    borderColor: "border-purple-500/20",
    mockup: "sprted",
    link: "https://www.tiktok.com/@sprted",
    linkLabel: "View @sprted on TikTok",
  },
  {
    id: "sports-graphics",
    label: "Design Work",
    title: "Sports Graphics",
    description:
      "Custom sports graphics, team announcements, player spotlights, and social media assets created for basketball teams. Clean, professional design work that gives teams a premium look across all their digital touchpoints.",
    tags: ["Graphic Design", "Sports", "Social Media", "Branding"],
    highlights: [
      { icon: Palette, text: "Team announcement graphics" },
      { icon: Users, text: "Player spotlight cards" },
      { icon: BarChart3, text: "Social media assets" },
    ],
    accentColor: "#3b82f6",
    bgGradient: "from-blue-500/10 via-transparent to-transparent",
    borderColor: "border-blue-500/20",
    mockup: "sports",
    link: "",
    linkLabel: "",
  },
];

function BarberVaultMockup() {
  return (
    <div className="w-full h-full bg-[#0a0a0a] rounded-xl overflow-hidden border border-white/10 p-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <img
            src="/barbervault-glow-logo.png"
            alt="BarberVault"
            className="h-10 w-10 object-cover object-center"
          />
          <span className="text-[#FFD000] text-xs font-bold">BarberVault</span>
        </div>
        <div className="flex gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
          <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
          <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
        </div>
      </div>

      <div className="group rounded-lg border border-[#FFD000]/20 bg-[#161616] p-1.5 shadow-xl shadow-black/40 transition-all duration-300 hover:-translate-y-1 hover:border-[#FFD000]/45 hover:shadow-[#FFD000]/10">
        <div className="mb-1.5 flex items-center gap-1.5 px-1">
          <div className="h-1.5 w-1.5 rounded-full bg-red-400/50" />
          <div className="h-1.5 w-1.5 rounded-full bg-yellow-400/50" />
          <div className="h-1.5 w-1.5 rounded-full bg-green-400/50" />
          <div className="ml-auto h-1 w-12 rounded-full bg-white/10" />
        </div>
        <div className="overflow-hidden rounded-md bg-black">
          <img
            src="/barbervault-analytics.png"
            alt="BarberVault shop analytics dashboard"
            className="aspect-video h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
      </div>
    </div>
  );
}

function SprtedProfileStrip() {
  return (
    <div className="mt-6 flex items-center gap-4 rounded-xl bg-white/[0.04] p-4">
      <img
        src="/sprted-pfp.jpg"
        alt="SPRTED"
        className="h-14 w-14 flex-shrink-0 rounded-full object-cover"
      />

      <div>
        <div className="text-lg font-semibold leading-tight">@sprted</div>
        <div className="text-sm text-white/40">Video editing</div>
      </div>
      <div className="ml-auto text-right">
        <div className="text-2xl font-bold text-purple-400">10.2K</div>
        <div className="text-sm text-white/40">Followers</div>
      </div>
    </div>
  );
}

function SprtedMockup() {
  return (
    <div className="w-full h-full">
      <div className="grid grid-cols-1 gap-4">
        <div className="group transition-all duration-300 hover:-translate-y-1">
          <div className="rounded-xl bg-[#121214] p-2 shadow-2xl shadow-black/50 ring-1 ring-white/10">
            <div className="mb-2 flex items-center gap-1.5 px-1">
              <span className="h-2 w-2 rounded-full bg-red-400/60" />
              <span className="h-2 w-2 rounded-full bg-yellow-400/60" />
              <span className="h-2 w-2 rounded-full bg-green-400/60" />
              <span className="ml-auto h-1.5 w-20 rounded-full bg-white/10" />
            </div>
            <div className="overflow-hidden rounded-lg bg-black">
              <img
                src="/sprted-desktop-rajon-rondo.png"
                alt="Desktop editing timeline for a Rajon Rondo basketball edit"
                className="aspect-[16/9] h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 px-8">
          {[
            {
              src: "/sprted-edit-bad-guy.png",
              alt: "Mobile edit timeline for BAD GUY basketball video",
            },
            {
              src: "/sprted-edit-nuggets.png",
              alt: "Mobile edit timeline for Denver Nuggets basketball graphic",
            },
          ].map((screen) => (
            <div key={screen.src} className="group transition-all duration-300 hover:-translate-y-1">
              <div className="rounded-[1.7rem] bg-[#111114] p-1.5 shadow-2xl shadow-black/55 ring-1 ring-white/12">
                <div className="relative aspect-[9/18.5] overflow-hidden rounded-[1.35rem] bg-black">
                  <div className="absolute left-1/2 top-1.5 z-10 h-3 w-12 -translate-x-1/2 rounded-full bg-black/90" />
                  <img
                    src={screen.src}
                    alt={screen.alt}
                    className="h-full w-full object-cover object-top"
                  />
                  <div className="absolute inset-x-8 bottom-1.5 h-0.5 rounded-full bg-white/70" />
                  <div className="pointer-events-none absolute inset-0 rounded-[1.35rem] ring-1 ring-inset ring-white/10" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SportsMockup() {
  return (
    <div className="w-full h-full bg-[#0a0a0a] rounded-xl overflow-hidden border border-white/10 p-4">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-2 h-2 rounded-full bg-blue-400" />
        <span className="text-blue-400 text-xs font-bold">Sports Graphics</span>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {/* Player spotlight */}
        <div className="col-span-2 aspect-video rounded-lg bg-gradient-to-br from-blue-900/50 to-black flex items-center justify-center relative overflow-hidden border border-blue-500/20">
          <div className="text-center">
            <div className="text-xs font-bold text-white/80">PLAYER SPOTLIGHT</div>
            <div className="text-[10px] text-white/40">Team Announcement</div>
          </div>
          <div className="absolute top-2 right-2 text-[10px] text-blue-400 font-bold">#24</div>
        </div>
        {/* Small cards */}
        {["Game Day", "Stats Drop", "Roster"].map((t) => (
          <div
            key={t}
            className="aspect-square rounded-lg bg-gradient-to-br from-blue-800/30 to-black border border-blue-500/10 flex items-center justify-center"
          >
            <span className="text-[10px] text-white/50">{t}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectMockup({ type }: { type: string }) {
  if (type === "barbervault") return <BarberVaultMockup />;
  if (type === "sprted") return <SprtedMockup />;
  return <SportsMockup />;
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#080808] to-[#0a0a0a]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#FFD000]/4 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 grid gap-5 border-b border-white/10 pb-8 md:grid-cols-[auto_1fr] md:items-end"
        >
          <div className="studio-label w-fit border border-[#FFD000]/30 bg-[#FFD000]/5 px-3 py-2 text-[10px] font-semibold text-[#FFD000]">
            02 / Featured Work
          </div>
          <div className="md:text-right">
            <h2 className="display-font text-5xl md:text-7xl font-bold leading-none">
              <span className="gradient-text">Built by me</span>
            </h2>
            <p className="mt-3 text-white/45">
              Real products and results across software, content, and design.
            </p>
          </div>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.65, delay: i * 0.1 }}
              className={`studio-panel relative border ${project.borderColor} bg-[#0f0f0f] overflow-hidden card-hover`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.bgGradient} pointer-events-none`}
              />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Text side */}
                <div className="p-8 lg:p-12 flex flex-col justify-center border-b border-white/5 lg:border-b-0 lg:border-r">
                  <div className="studio-label mb-6 flex items-center justify-between text-[9px] text-white/25">
                    <span>PROJECT / 0{i + 1}</span>
                    <span>{project.id.toUpperCase()}</span>
                  </div>
                  <div
                    className="studio-label inline-flex items-center gap-2 px-3 py-1.5 border text-[9px] font-semibold mb-5 w-fit"
                    style={{
                      borderColor: project.accentColor + "40",
                      color: project.accentColor,
                      backgroundColor: project.accentColor + "10",
                    }}
                  >
                    {project.label}
                  </div>

                  <h3 className="display-font flex items-center gap-3 text-4xl md:text-5xl font-bold mb-4">
                    {project.id === "barbervault" && (
                      <img
                        src="/barbervault-glow-logo.png"
                        alt=""
                        className="h-12 w-12 rounded-xl object-cover object-center"
                      />
                    )}
                    <span>{project.title}</span>
                  </h3>
                  <p className="text-white/55 leading-relaxed mb-8 text-sm md:text-base">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-3 mb-8">
                    {project.highlights.map((h) => (
                      <div key={h.text} className="flex items-center gap-3">
                        <div
                          className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: project.accentColor + "15" }}
                        >
                          <h.icon
                            size={14}
                            style={{ color: project.accentColor }}
                          />
                        </div>
                        <span className="text-sm text-white/70">{h.text}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="studio-label px-3 py-1.5 text-[9px] text-white/50 border border-white/10 bg-white/[0.03]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {project.id === "sprted" && <SprtedProfileStrip />}

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="studio-label mt-6 inline-flex w-fit items-center gap-2 border border-white/15 bg-white/[0.03] px-4 py-3 text-[10px] font-medium text-white/75 transition-all duration-200 hover:border-[#23D5E8] hover:text-[#23D5E8]"
                    >
                      {project.linkLabel}
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>

                {/* Mockup side */}
                <div className="corner-marks m-4 p-4 lg:m-6 lg:p-6 flex items-center justify-center min-h-[280px] lg:min-h-[400px]">
                  <div className={`w-full ${project.id === "sprted" || project.id === "barbervault" ? "max-w-lg" : "max-w-sm"}`}>
                    <ProjectMockup type={project.mockup} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
