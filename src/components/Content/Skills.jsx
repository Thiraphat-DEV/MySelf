import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.1 },
  }),
};

const skillGroups = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "React", level: 75 },
    ],
  },
  {
    category: "Backend & Tools",
    skills: [
      { name: "SQL", level: 65 },
      { name: "C", level: 60 },
      { name: "Git", level: 72 },
      { name: "Problem Solving", level: 88 },
    ],
  },
];

export default function Skills() {
  return (
    <section className="min-h-[calc(100vh-4rem)] py-20">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible" className="mb-14">
          <p className="text-xs font-semibold text-indigo-500 uppercase tracking-widest mb-2">Expertise</p>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">Skills</h1>
          <div className="mt-3 w-10 h-0.5 bg-indigo-500" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {skillGroups.map(({ category, skills }, gi) => (
            <motion.div key={category} custom={gi + 1} variants={fadeUp} initial="hidden" animate="visible">
              <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-6">
                {category}
              </h2>
              <div className="flex flex-col gap-5">
                {skills.map(({ name, level }, si) => (
                  <div key={name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-foreground">{name}</span>
                      <span className="text-xs text-muted-foreground tabular-nums">{level}%</span>
                    </div>
                    <div className="h-1 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-indigo-500 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${level}%` }}
                        transition={{
                          duration: 0.9,
                          delay: gi * 0.15 + si * 0.1 + 0.4,
                          ease: "easeOut",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

