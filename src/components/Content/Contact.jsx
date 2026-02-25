import { motion } from "framer-motion";
import { Mail, Phone, Github } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.1 },
  }),
};

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "thiraboaty@gmail.com",
    href: "mailto:thiraboaty@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "083-452-7401",
    href: "tel:0834527401",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/Thiraphat-DEV",
    href: "https://github.com/Thiraphat-DEV",
  },
];

export default function Contact() {
  return (
    <section className="min-h-[calc(100vh-4rem)] py-20">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible" className="mb-14">
          <p className="text-xs font-semibold text-indigo-500 uppercase tracking-widest mb-2">
            Get in touch
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">Contact</h1>
          <div className="mt-3 w-10 h-0.5 bg-indigo-500" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left: intro + contact rows */}
          <motion.div custom={1} variants={fadeUp} initial="hidden" animate="visible">
            <p className="text-muted-foreground leading-relaxed mb-8">
              I'm always open to new opportunities and collaborations. Whether you
              have a project in mind or just want to say hello, feel free to reach out.
            </p>

            <div className="flex flex-col gap-3">
              {contacts.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="group flex items-center gap-4 p-4 rounded-lg border border-border bg-card hover:border-indigo-200 transition-colors duration-200"
                >
                  <div className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center shrink-0 group-hover:bg-indigo-50 transition-colors">
                    <Icon size={16} className="text-indigo-500" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{label}</p>
                    <p className="text-sm font-medium text-foreground">{value}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: quick email card */}
          <motion.div custom={2} variants={fadeUp} initial="hidden" animate="visible">
            <div className="p-6 rounded-xl border border-border bg-card">
              <h3 className="text-sm font-semibold text-foreground mb-1">Send a message</h3>
              <p className="text-xs text-muted-foreground mb-6">
                I'll get back to you as soon as possible.
              </p>
              <a
                href="mailto:thiraboaty@gmail.com"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-indigo-500 text-white text-sm font-medium hover:bg-indigo-600 transition-colors"
              >
                <Mail size={15} /> Email me
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

