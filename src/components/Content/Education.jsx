import { memo } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

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
    year: "Jun 2024 – Present",
    role: "Back End Developer",
    org: "Fintechinno Co.,Ltd.",
    desc: "Fullstack Developer at Fintech. Building scalable backend systems and software solutions. Bangkok City, Thailand.",
    tag: "Work",
  },
  {
    year: "Dec 2023 – Jan 2024",
    role: "Data Scientist",
    org: "BOTNOI GROUP",
    desc: "Internship in NLP and image classification using LLMs and JavaScript. Worked on datasets for waste classification and road sign recognition. Bangkok, Thailand.",
    tag: "Internship",
  },
  {
    year: "Feb 2022 – Dec 2023",
    role: "Web Development Specialist",
    org: "Freelancer",
    desc: "WordPress Builder & Design: websites for faculty recruitment and education. Frontend and content management for education sector.",
    tag: "Work",
  },
  {
    year: "2019 – 2024",
    role: "Bachelor of Science, Information Technology",
    org: "Buriram Rajabhat University",
    desc: "BS in IT, GPA 3.57. Data analysis with Looker, Python, SQL. Certifications from Coursera and freeCodeCamp in web development and Google Data Analytics.",
    tag: "Education",
  },
];

function EducationComponent() {
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
                <span className="absolute -left-[2.15rem] top-1.5 w-2 h-2 rounded-full bg-indigo-500 ring-4 ring-background" />

                <p className="text-xs text-muted-foreground font-medium mb-2">{year}</p>
                <div className="border border-border rounded-lg p-5 bg-card hover:border-indigo-200 transition-colors duration-200 hover-lift">
                  <div className="flex items-start justify-between gap-3 mb-1">
                    <h3 className="text-sm font-semibold text-foreground">{role}</h3>
                    <Badge variant="secondary" className="text-indigo-500 bg-indigo-50 shrink-0">
                      {tag}
                    </Badge>
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

export const Education = memo(EducationComponent);