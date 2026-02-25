import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, type: "spring" } },
};

const skillCategories = [
  {
    category: "Frontend",
    icon: "🎨",
    skills: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    category: "Backend",
    icon: "⚙️",
    skills: ["SQL", "C"],
  },
  {
    category: "Other",
    icon: "🧠",
    skills: ["Problem Solving", "Git"],
  },
];

function Skills() {
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
        My Skills
      </motion.h1>

      <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillCategories.map(({ category, icon, skills }) => (
          <motion.div key={category} variants={itemVariants}>
            <Card className="shadow-lg border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <span>{icon}</span> {category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, i) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.08 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      <Badge className="text-sm px-3 py-1 cursor-default">{skill}</Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* All skills bar */}
      <motion.div variants={itemVariants} className="max-w-3xl mx-auto mt-8">
        <Card className="shadow-lg border-0">
          <CardHeader>
            <CardTitle className="text-lg">All Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              {skillCategories.flatMap(({ skills }) => skills).map((skill, i) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 + 0.3 }}
                  whileHover={{ scale: 1.08, y: -2 }}
                >
                  <Badge variant="secondary" className="text-sm px-3 py-1.5 cursor-default shadow-sm">
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}

export default Skills;
