import { memo } from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiMysql,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiElasticsearch,
  SiSocketdotio,
  SiSwagger,
  SiTypescript,
  SiGo,
  SiPython,
  SiNestjs,
  SiExpress,
  SiFastapi,
  SiFlask,
  SiDjango,
  SiLaravel,
  SiFlutter,
  SiDocker,
  SiKubernetes,
  SiNginx,
  SiGit,
  SiGithub,
  SiSourcetree,
  SiVim,
  SiPostman,
  SiBruno,
} from "react-icons/si";
import {  Code, Smartphone, Server } from "lucide-react";

const ICON_SIZE = "w-9 h-9";
const iconCls = `shrink-0 text-foreground ${ICON_SIZE}`;

const skillGroups = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML", Icon: () => <SiHtml5 className={iconCls} /> },
      { name: "CSS", Icon: () => <SiCss3 className={iconCls} /> },
      { name: "JavaScript", Icon: () => <SiJavascript className={iconCls} /> },
      { name: "React", Icon: () => <SiReact className={iconCls} /> },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "MySQL", Icon: () => <SiMysql className={iconCls} /> },
      { name: "MongoDB", Icon: () => <SiMongodb className={iconCls} /> },
      { name: "PostgreSQL", Icon: () => <SiPostgresql className={iconCls} /> },
      { name: "Redis", Icon: () => <SiRedis className={iconCls} /> },
      { name: "Elasticsearch", Icon: () => <SiElasticsearch className={iconCls} /> },
      { name: "Databricks", Icon: () => <Server className={iconCls} /> },
      { name: "Socket.io", Icon: () => <SiSocketdotio className={iconCls} /> },
      { name: "Swagger", Icon: () => <SiSwagger className={iconCls} /> },
      { name: "TypeScript", Icon: () => <SiTypescript className={iconCls} /> },
      { name: "Go", Icon: () => <SiGo className={iconCls} /> },
      { name: "Python", Icon: () => <SiPython className={iconCls} /> },
      { name: "NestJS", Icon: () => <SiNestjs className={iconCls} /> },
      { name: "Express", Icon: () => <SiExpress className={iconCls} /> },
      { name: "FastAPI", Icon: () => <SiFastapi className={iconCls} /> },
      { name: "Flask", Icon: () => <SiFlask className={iconCls} /> },
      { name: "Django", Icon: () => <SiDjango className={iconCls} /> },
      { name: "Laravel", Icon: () => <SiLaravel className={iconCls} /> },
    ],
  },
  {
    category: "Mobile",
    skills: [
      { name: "Flutter", Icon: () => <SiFlutter className={iconCls} /> },
      { name: "Shadcn/ui", Icon: () => <Smartphone className={iconCls} /> },
      { name: "Material", Icon: () => <Smartphone className={iconCls} /> },
    ],
  },
  {
    category: "Infrastructure",
    skills: [
      { name: "Docker", Icon: () => <SiDocker className={iconCls} /> },
      { name: "Kubernetes", Icon: () => <SiKubernetes className={iconCls} /> },
      { name: "Nginx", Icon: () => <SiNginx className={iconCls} /> },
      { name: "CI/CD", Icon: () => <Server className={iconCls} /> },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", Icon: () => <SiGit className={iconCls} /> },
      { name: "GitHub", Icon: () => <SiGithub className={iconCls} /> },
      { name: "SourceTree", Icon: () => <SiSourcetree className={iconCls} /> },
      { name: "Vim", Icon: () => <SiVim className={iconCls} /> },
      { name: "Postman", Icon: () => <SiPostman className={iconCls} /> },
      { name: "Bruno", Icon: () => <SiBruno className={iconCls} /> },
    ],
  },
  // {
  //   category: "Editor",
  //   skills: [
  //     { name: "WebStorm", Icon: () => <Code className={iconCls} /> },
  //     { name: "Atom", Icon: () => <Code className={iconCls} /> },
  //     { name: "Android Studio", Icon: () => <Code className={iconCls} /> },
  //     { name: "VSCode", Icon: () => <Code className={iconCls} /> },
  //     { name: "Google Colab", Icon: () => <Code className={iconCls} /> },
  //   ]
  // }
];

function SkillsComponent() {
  return (
    <section className="min-h-[calc(100vh-4rem)] py-6 sm:py-8 overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-3 sm:px-6 w-full min-w-0">
        <div className="mb-6">
          <p className="text-xs font-semibold text-indigo-500 uppercase tracking-widest mb-1">Expertise</p>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">Skills</h1>
          <div className="mt-2 w-10 h-0.5 bg-indigo-500" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-5">
          {skillGroups.map(({ category, skills }) => (
            <div key={category} className="min-w-0 rounded-lg p-3 bg-card/50 border border-border">
              <h2 className="text-[10px] sm:text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2 sm:mb-3">
                {category}
              </h2>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {skills.map(({ name, Icon }) => (
                  <div
                    key={name}
                    className="flex flex-col items-center gap-0.5 rounded-md bg-secondary/60 p-1.5 sm:p-2 hover-lift shrink-0"
                    title={name}
                  >
                    <div className={`${ICON_SIZE} flex items-center justify-center text-foreground`}>
                      <Icon />
                    </div>
                    <span className="text-[9px] sm:text-[10px] text-muted-foreground text-center max-w-[3.5rem] sm:max-w-[4rem] line-clamp-2 break-words leading-tight">
                      {name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export const Skills = memo(SkillsComponent);