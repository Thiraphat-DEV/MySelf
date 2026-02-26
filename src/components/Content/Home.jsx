import React, { memo } from "react";
import { motion } from "framer-motion";
import { Github, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay },
  }),
};

function TypewriterText({ texts }) {
  const [index, setIndex] = React.useState(0);
  const [displayed, setDisplayed] = React.useState("");
  const [deleting, setDeleting] = React.useState(false);

  React.useEffect(() => {
    const current = texts[index];
    let timeout;
    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 70);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % texts.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, index, texts]);

  return (
    <span>
      {displayed}
      <span className="inline-block w-[2px] h-5 bg-indigo-500 ml-0.5 align-middle animate-pulse" />
    </span>
  );
}

function HomeComponent() {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center">
      <div className="max-w-5xl mx-auto px-6 py-20 w-full">
        <div className="max-w-2xl">
          <motion.p
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-xs font-semibold text-indigo-500 uppercase tracking-widest mb-5"
          >
            Hi, I'm
          </motion.p>

          <motion.h1
            custom={0.1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-5xl md:text-6xl font-bold text-foreground tracking-tight leading-tight mb-3"
          >
            Thiraphat.C
          </motion.h1>

          <motion.div
            custom={0.2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-xl md:text-2xl text-muted-foreground font-light mb-8 h-8"
          >
            <TypewriterText texts={["FullStack Developer", "Problem Solver", "Code is Job"]} />
          </motion.div>

          <motion.p
            custom={0.35}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-muted-foreground leading-relaxed mb-10 max-w-lg"
          >
            Building clean, performant web experiences with modern tools.
            Passionate about elegant code and solving complex problems.
          </motion.p>

          <motion.div
            custom={0.5}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap items-center gap-3"
          >
            <Button asChild className="bg-indigo-500 hover:bg-indigo-600">
              <Link to="/about">
                About Me <ArrowRight size={15} />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <a
                href="https://github.com/Thiraphat-DEV"
                target="_blank"
                rel="noreferrer"
              >
                <Github size={15} /> GitHub
              </a>
            </Button>
          </motion.div>
        </div>

        <motion.div
          custom={0.8}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-24 flex items-center gap-8 text-xs text-muted-foreground"
        >
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Available for work
          </div>
          <div>Thailand 🇹🇭</div>
        </motion.div>
      </div>
    </section>
  );
}


export const Home = memo(HomeComponent);