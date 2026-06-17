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
  },
  {
    id: "sprted",
    label: "Content Brand",
    title: "SPRTED",
    description:
      "A sports content brand focused on NBA edits and short-form content. Built an engaged audience from zero through high-quality video editing, storytelling, and consistent posting — proving the value of great content and platform strategy.",
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
  },
];

function BarberVaultMockup() {
  return (
    <div className="w-full h-full bg-[#0a0a0a] rounded-xl overflow-hidden border border-white/10 p-4">
      {/* Header bar */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
        <img src="/barbervault-logo.png" alt="BarberVault" className="w-5 h-5 object-contain" />
          <span className="text-[#FFD000] text-xs font-bold">BarberVault</span>
        </div>
        <div className="flex gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
          <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
          <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
        </div>
      </div>
      {/* Stats row */}
      <div className="grid grid-cols-3 gap-2 mb-4">
        {["Bookings", "Revenue", "Clients"].map((label, i) => (
          <div key={label} className="bg-white/5 rounded-lg p-3">
            <div className="text-[10px] text-white/40 mb-1">{label}</div>
            <div className="text-sm font-bold text-white">
              {i === 0 ? "48" : i === 1 ? "$2.4k" : "312"}
            </div>
          </div>
        ))}
      </div>
      {/* Chart placeholder */}
      <div className="bg-white/5 rounded-lg p-3 mb-3">
        <div className="text-[10px] text-white/40 mb-2">Weekly bookings</div>
        <div className="flex items-end gap-1 h-10">
          {[40, 65, 50, 80, 70, 90, 75].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm bg-[#FFD000]/60"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>
      {/* Recent clients */}
      <div className="space-y-2">
        {["James R.", "Marcus T.", "Devon K."].map((name) => (
          <div key={name} className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2">
            <div className="w-5 h-5 rounded-full bg-[#FFD000]/20 flex-shrink-0" />
            <span className="text-[10px] text-white/60">{name}</span>
            <div className="ml-auto text-[10px] text-[#FFD000]">Booked</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SprtedMockup() {
  return (
    <div className="w-full h-full bg-[#0a0a0a] rounded-xl overflow-hidden border border-white/10 p-4">
      <div className="flex items-center gap-3 mb-4 bg-white/5 rounded-lg p-3">
        <img src="/sprted-pfp.jpg" alt="SPRTED" className="w-10 h-10 rounded-full object-cover flex-shrink-0" />

        <div>
          <div className="text-xs font-semibold">@sprted</div>
          <div className="text-[10px] text-white/40">Video editing</div>
        </div>
        <div className="ml-auto text-right">
          <div className="text-sm font-bold text-purple-400">10.2K</div>
          <div className="text-[10px] text-white/40">Followers</div>
        </div>
      </div>

      <div className="space-y-3">
        <div className="grid grid-cols-2 gap-3">
          {[
            {
              src: "/sprted-desktop-rajon-rondo.png",
              alt: "Desktop editing timeline for a Rajon Rondo basketball edit",
            },
            {
              src: "/sprted-desktop-jalen-brunson.png",
              alt: "Desktop editing timeline for a Jalen Brunson basketball edit",
            },
          ].map((edit) => (
            <div
              key={edit.src}
              className="rounded-lg border border-white/10 bg-[#17171a] p-1.5 shadow-xl shadow-black/40"
            >
              <div className="overflow-hidden rounded-md bg-black">
                <img
                  src={edit.src}
                  alt={edit.alt}
                  className="aspect-video h-full w-full object-cover object-top"
                />
              </div>
              <div className="mx-auto mt-1.5 h-1 w-10 rounded-full bg-white/15" />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-3">
        {[
          {
            src: "/sprted-edit-bad-guy.png",
            alt: "Mobile edit timeline for BAD GUY basketball video",
          },
          {
            src: "/sprted-edit-nuggets.png",
            alt: "Mobile edit timeline for Denver Nuggets basketball graphic",
          },
        ].map((edit) => (
          <div
            key={edit.src}
            className="relative rounded-[1.6rem] border border-white/15 bg-[#17171a] p-1.5 shadow-2xl shadow-black/50"
          >
            <div className="relative aspect-[9/16] overflow-hidden rounded-[1.25rem] bg-black">
              <div className="absolute left-1/2 top-1.5 z-10 h-3 w-12 -translate-x-1/2 rounded-full bg-black/90" />
              <img
                src={edit.src}
                alt={edit.alt}
                className="h-full w-full object-cover object-top"
              />
              <div className="absolute inset-x-8 bottom-1.5 h-0.5 rounded-full bg-white/70" />
              <div className="pointer-events-none absolute inset-0 rounded-[1.25rem] ring-1 ring-inset ring-white/10" />
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
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#FFD000]/20 bg-[#FFD000]/5 text-[#FFD000] text-xs font-semibold uppercase tracking-wider mb-5">
            Featured Work
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Projects That <span className="gradient-text">Speak for Themselves</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Real products and results across software, content, and design.
          </p>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.65, delay: i * 0.1 }}
              className={`relative rounded-2xl border ${project.borderColor} bg-[#0f0f0f] overflow-hidden card-hover`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.bgGradient} pointer-events-none`}
              />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Text side */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-semibold uppercase tracking-wider mb-5 w-fit"
                    style={{
                      borderColor: project.accentColor + "40",
                      color: project.accentColor,
                      backgroundColor: project.accentColor + "10",
                    }}
                  >
                    {project.label}
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold mb-4">
                    {project.title}
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
                        className="px-3 py-1 rounded-full text-xs text-white/50 border border-white/8 bg-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Mockup side */}
                <div className="p-6 lg:p-8 flex items-center justify-center min-h-[280px] lg:min-h-[400px]">
                  <div className="w-full max-w-sm">
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
