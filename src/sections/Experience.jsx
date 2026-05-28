const experiences = [
  {
    period: "November 2025 - Present",
    role: "Full Stack Developer",
    company: "Karmick Solutions Private Limited",
    description:
      "Full-stack developer with experience in building scalable e-commerce applications using React, NestJS, and MySQL, along with developing customized compliance management solutions. Skilled in creating OCR-based automation tools using Python to streamline document processing and improve operational efficiency.",
    technologies: [
      "Node.js",
      "Laravel",
      "Livewire",
      "Nest.js",
      "React.js",
      "Python",
    ],
    current: true,
  },
  {
    period: "April 2023 - November 2025",
    role: "Software Developer",
    company: "Triophase Global Services Private Limited",
    description:
      "Implemented CI/CD pipelines for WordPress, PHP Laravel, and Node.js applications. Used Docker, HashiCorp Nomad, Consul, Prometheus, and Grafana to manage scalable infrastructure and optimize application performance.",
    technologies: [
      "Node.js",
      "Laravel",
      "Docker",
      "Nomad",
      "Consul",
      "Prometheus",
      "Grafana",
    ],
    current: false,
  },
  {
    period: "March 2022 - March 2023",
    role: "Sr. PHP Developer",
    company: "Omind Technologies Pvt Ltd.",
    description:
      "Developed scalable web applications and quality management systems using PHP, CodeIgniter, Laravel, JavaScript, MySQL, HTML, CSS, and Bootstrap. Optimized MySQL queries, collaborated with UI/UX designers, reviewed code, wrote tests, and configured deployments.",
    technologies: ["PHP", "CodeIgniter", "Laravel", "MySQL", "Bootstrap"],
    current: false,
  },
  {
    period: "October 2021 - March 2022",
    role: "PHP Developer",
    company: "Fastinfo Legal Services Pvt Ltd",
    description:
      "Wrote and maintained server-side code, integrated databases, developed APIs, fixed bugs, refactored code, and optimized performance for Fastinfo Class, Online Legal India, Online Class India, and internal CRM applications.",
    technologies: ["PHP", "MySQL", "APIs", "CRM", "Responsive UI"],
    current: false,
  },
  {
    period: "December 2020 - October 2021",
    role: "Web Developer",
    company: "Uaguria Software Pvt Ltd",
    description:
      "Built and maintained websites across frontend and backend tasks, including core PHP and Laravel projects, e-commerce systems, park management applications, dashboards, and admin, user, and vendor panels.",
    technologies: ["Core PHP", "Laravel", "HTML", "CSS", "JavaScript"],
    current: false,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/4 w-96
       h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-16">
          <span
            className="text-secondary-foreground text-sm
           font-medium tracking-wider uppercase animate-fade-in"
          >
            Experience
          </span>

          <h2
            className="text-4xl md:text-5xl font-bold
 mt-4 mb-6 animate-fade-in animation-delay-100
  text-secondary-foreground"
          >
            Building through{" "}
            <span className="font-serif italic font-normal text-white">
              production experience.
            </span>
          </h2>

          <p
            className="text-muted-foreground
 animate-fade-in animation-delay-200"
          >
            My experience combines PHP and Node.js development, MySQL
            optimization, DevOps automation, containerized deployments, and
            team-based delivery for business-critical web applications.
          </p>
        </div>

        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={exp.role}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div className="glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500">
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>

                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>

                    <p className="text-muted-foreground">{exp.company}</p>

                    <p className="text-sm text-muted-foreground mt-4">
                      {exp.description}
                    </p>

                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.technologies.map((tech) => (
                        <span
                          key={`${exp.role}-${tech}`}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
