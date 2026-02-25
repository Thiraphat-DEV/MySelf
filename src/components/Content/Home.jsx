import React from "react";
import { motion } from "framer-motion";
import { Github, Instagram, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  { icon: Github, href: "https://github.com/Thiraphat-DEV", label: "GitHub" },
  { icon: Code2, href: "#", label: "Portfolio" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

function TypewriterText({ texts }) {
  const [index, setIndex] = React.useState(0);
  const [displayed, setDisplayed] = React.useState("");
  const [deleting, setDeleting] = React.useState(false);

  React.useEffect(() => {
    const current = texts[index];
    let timeout;
    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1500);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIndex((index + 1) % texts.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, index, texts]);

  return (
    <span>
      {displayed}
      <span className="animate-pulse">|</span>
    </span>
  );
}

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 md:p-16 bg-gradient-to-br from-blue-50 to-white">
      {/* Profile image */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 120 }}
        className="relative"
      >
        <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-blue-500 shadow-2xl ring-4 ring-blue-200">
          <img
            src="https://images.unsplash.com/photo-1573767291321-c0af2eaf5266?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=762&q=80"
            alt="profile"
            className="w-full h-full object-cover"
          />
        </div>
        <motion.div
          className="absolute -bottom-2 -right-2 w-10 h-10 bg-green-400 rounded-full border-4 border-white shadow"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />
      </motion.div>

      {/* Name + title */}
      <motion.h1
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-8 text-4xl md:text-5xl font-extrabold text-gray-800 text-center"
      >
        Thiraphat C.
      </motion.h1>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="mt-3 text-lg md:text-xl text-blue-600 font-medium text-center"
      >
        <TypewriterText texts={["CODE FOR LIFE", "FULL STACK DEVELOPER", "PROBLEM SOLVER"]} />
      </motion.div>

      {/* Social icons */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="flex gap-4 mt-8"
      >
        {socialLinks.map(({ icon: Icon, href, label }) => (
          <motion.a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.15, y: -4 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-md border border-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-200"
            aria-label={label}
          >
            <Icon size={22} />
          </motion.a>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="mt-10"
      >
        <Button size="lg" className="rounded-full px-8 shadow-lg">
          View My Work
        </Button>
      </motion.div>
    </div>
  );
}

export default Home;

