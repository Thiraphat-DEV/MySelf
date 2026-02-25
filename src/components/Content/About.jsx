import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Briefcase } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function About() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen p-8 md:p-16 bg-gradient-to-br from-blue-50 to-white"
    >
      <motion.h1
        variants={itemVariants}
        className="text-4xl font-extrabold text-gray-800 mb-10 text-center"
      >
        About Me
      </motion.h1>

      <div className="max-w-3xl mx-auto flex flex-col gap-6">
        {/* Profile card */}
        <motion.div variants={itemVariants}>
          <Card className="overflow-hidden shadow-lg border-0">
            <div className="flex flex-col md:flex-row items-center gap-6 p-6">
              <motion.img
                whileHover={{ scale: 1.05 }}
                src="https://images.unsplash.com/photo-1573767291321-c0af2eaf5266?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=762&q=80"
                alt="profile"
                className="w-36 h-36 rounded-full object-cover border-4 border-blue-400 shadow-md shrink-0"
              />
              <div className="text-center md:text-left">
                <h2 className="text-2xl font-bold text-gray-800">Hi, I'm Thiraphat</h2>
                <p className="text-blue-600 font-medium mt-1">BOATY</p>
                <div className="flex flex-wrap gap-2 mt-3 justify-center md:justify-start">
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <Calendar size={12} /> Age: 19
                  </Badge>
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <MapPin size={12} /> HOME
                  </Badge>
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <Briefcase size={12} /> Developer
                  </Badge>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Info cards */}
        {[
          { title: "Who am I?", body: "I'm Thiraphat, a passionate developer who loves coding and solving real-world problems. I believe in the philosophy of 'Code for Life'." },
          { title: "What I do?", body: "I build web applications using modern technologies like React, JavaScript, and various frontend frameworks. I'm always looking to learn and improve." },
        ].map(({ title, body }) => (
          <motion.div key={title} variants={itemVariants}>
            <Card className="shadow-md border-0 hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-blue-700 mb-2">{title}</h3>
                <p className="text-gray-600 leading-relaxed">{body}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default About;
