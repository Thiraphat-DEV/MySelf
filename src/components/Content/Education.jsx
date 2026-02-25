import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, MapPin, CalendarDays } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const educationData = [
  {
    period: "Present",
    items: [
      { title: "Thiraphat Chorakhe", where: "WORK FROM HOME", from: "2020", to: "Present", type: "Work" },
    ],
  },
  {
    period: "Future",
    items: [
      { title: "Engineer", where: "BOATY", from: "2021", to: "2025", type: "Career" },
      { title: "Thiraphat", where: "HOME", from: "2022", to: "2025", type: "Personal" },
    ],
  },
];

function Education() {
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
        Education & Experience
      </motion.h1>

      <div className="max-w-3xl mx-auto">
        {educationData.map(({ period, items }) => (
          <div key={period} className="mb-10">
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                <GraduationCap size={20} className="text-white" />
              </div>
              <h2 className="text-2xl font-bold text-blue-700">{period}</h2>
            </motion.div>

            <div className="ml-5 border-l-2 border-blue-200 pl-6 flex flex-col gap-4">
              {items.map(({ title, where, from, to, type }) => (
                <motion.div key={title} variants={itemVariants}>
                  <Card className="shadow-md border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <CardHeader className="pb-2">
                      <div className="flex items-start justify-between gap-2 flex-wrap">
                        <CardTitle className="text-lg">{title}</CardTitle>
                        <Badge className="shrink-0">{type}</Badge>
                      </div>
                      <CardDescription className="flex items-center gap-1 mt-1">
                        <MapPin size={13} /> {where}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pb-4">
                      <p className="text-sm text-muted-foreground flex items-center gap-1">
                        <CalendarDays size={13} /> {from} — {to}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default Education;
