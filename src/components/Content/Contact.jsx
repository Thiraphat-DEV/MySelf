import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Instagram, Github, Code2 } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const contactDetails = [
  { icon: Mail, label: "Email", value: "thiraboaty@gmail.com", href: "mailto:thiraboaty@gmail.com" },
  { icon: Phone, label: "Phone", value: "083-452-7401", href: "tel:0834527401" },
  { icon: Instagram, label: "Instagram", value: "@BOATY", href: "#" },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/Thiraphat-DEV", label: "GitHub" },
  { icon: Code2, href: "#", label: "Portfolio" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

function Contact() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen p-8 md:p-16 bg-gradient-to-br from-blue-50 to-white"
    >
      <motion.h1
        variants={itemVariants}
        className="text-4xl font-extrabold text-gray-800 mb-3 text-center"
      >
        Contact Me
      </motion.h1>
      <motion.p
        variants={itemVariants}
        className="text-center text-muted-foreground mb-10"
      >
        Feel free to reach out anytime!
      </motion.p>

      <div className="max-w-xl mx-auto flex flex-col gap-4">
        {contactDetails.map(({ icon: Icon, label, value, href }) => (
          <motion.div key={label} variants={itemVariants}>
            <Card className="shadow-md border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
              <CardContent className="flex items-center gap-4 p-5">
                <div className="w-11 h-11 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <Icon size={20} className="text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{label}</p>
                  <a
                    href={href}
                    className="font-semibold text-gray-800 hover:text-blue-600 transition-colors"
                  >
                    {value}
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}

        {/* Social buttons */}
        <motion.div variants={itemVariants} className="flex justify-center gap-4 mt-6">
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

        <motion.div variants={itemVariants} className="text-center mt-4">
          <Button size="lg" className="rounded-full px-8 shadow-lg" asChild>
            <a href="mailto:thiraboaty@gmail.com">Send Email</a>
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Contact;

