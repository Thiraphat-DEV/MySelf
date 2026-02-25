import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.12 },
  }),
};

const timeline = [
  {
    year: "2020 – Present",
    role: "Self-taught Developer",
    org: "Work from Home",
    desc: "Building web projects independently, continuously learning modern JavaScript ecosystem and frontend frameworks.",
    tag: "Work",
  },
  {
    year: "2021 – 2025",
    role: "Engineering Studies",
    org: "BOATY",
    desc: "Studying engineering fundamentals with a focus on practical problem-solving and computational thinking.",
    tag: "Education",
  },
  {
    year: "2022 – 2025",
    role: "Personal Projects",
    org: "Self-study",
    desc: "Dedicating time to mastering React, modern CSS, and open-source contributions to deepen expertise.",
    tag: "Personal",
  },
];

export default function Education() {
  return (
    <section className="min-h-[calc(100vh-4rem)] py-20">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible" className="mb-14">
          <p className="text-xs font-semibold text-indigo-500 uppercase tracking-widest mb-2">Timeline</p>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            Education & Experience
          </h1>
          <div className="mt-3 w-10 h-0.5 bg-indigo-500" />
        </motion.div>

        <div className="relative max-w-2xl">
          {/* Vertical line */}
          <div className="absolute left-2 top-2 bottom-2 w-px bg-border" />

          <div className="flex flex-col gap-10 pl-10">
            {timeline.map(({ year, role, org, desc, tag }, i) => (
              <motion.div
                key={role}
                custom={i + 1}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="relative"
              >
                {/* Timeline dot */}
                <span className="absolute -left-[2.15rem] top-1.5 w-2 h-2 rounded-full bg-indigo-500 ring-4 ring-background" />

                <p className="text-xs text-muted-foreground font-medium mb-2">{year}</p>
                <div className="border border-border rounded-lg p-5 bg-card hover:border-indigo-200 transition-colors duration-200">
                  <div className="flex items-start justify-between gap-3 mb-1">
                    <h3 className="text-sm font-semibold text-foreground">{role}</h3>
                    <span className="text-xs font-medium text-indigo-500 bg-indigo-50 px-2 py-0.5 rounded shrink-0">
                      {tag}
                    </span>
                  </div>
                  <p className="text-xs font-medium text-muted-foreground mb-2">{org}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

