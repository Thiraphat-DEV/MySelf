import { memo } from "react";
import { motion } from "framer-motion";
import { MapPin, Calendar, Code2 } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

const dateToday = new Date();
const myBirthday = new Date("2002-01-08");
const myAge = dateToday.getFullYear() - myBirthday.getFullYear();
const meta = [
  { icon: Calendar, label: "Age", value: myAge },
  { icon: MapPin, label: "Location", value: "Thailand" },
  { icon: Code2, label: "Role", value: "FullStack Developer" },
];

function AboutComponent() {
  return (
    <section className="min-h-[calc(100vh-4rem)] py-20">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible" className="mb-14">
          <p className="text-xs font-semibold text-indigo-500 uppercase tracking-widest mb-2">About</p>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">Who I am</h1>
          <div className="mt-3 w-10 h-0.5 bg-indigo-500" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-start">
          <motion.div
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="md:col-span-2"
          >
            <div className="aspect-square w-full max-w-xs rounded-2xl overflow-hidden bg-secondary hover-lift cursor-default">
              <img
                src="https://images.unsplash.com/photo-1573767291321-c0af2eaf5266?ixlib=rb-1.2.1&auto=format&fit=crop&w=762&q=80"
                alt="Thiraphat"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <div className="md:col-span-3 flex flex-col gap-5">
            <motion.div custom={2} variants={fadeUp} initial="hidden" animate="visible">
              <h2 className="text-xl font-semibold text-foreground mb-3">Thiraphat Chorakhe</h2>
              <p className="text-muted-foreground leading-relaxed">
                I'm a passionate developer based in Thailand who loves coding and solving real-world
                problems. I believe in writing clean, maintainable code and building experiences
                that users love.
              </p>
            </motion.div>

            <motion.div custom={3} variants={fadeUp} initial="hidden" animate="visible">
              <p className="text-muted-foreground leading-relaxed">
                I build web applications using modern technologies like React and JavaScript.
                I'm always eager to learn new things and continuously improve my craft.
              </p>
            </motion.div>

            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-2.5 pt-3 border-t border-border"
            >
              {meta.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-3 text-sm">
                  <Icon size={14} className="text-indigo-500 shrink-0" />
                  <span className="text-muted-foreground w-20">{label}</span>
                  <span className="text-foreground font-medium">{value}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export const About = memo(AboutComponent);