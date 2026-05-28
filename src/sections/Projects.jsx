import { ArrowUpRight } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const GitHubLogo = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.54 2.87 8.39 6.84 9.75.5.09.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05A9.27 9.27 0 0 1 12 7.03c.85 0 1.7.12 2.5.35 1.9-1.32 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.95.68 1.92 0 1.38-.01 2.49-.01 2.83 0 .27.18.59.69.49A10.1 10.1 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
  </svg>
);

const projects = [
    {
      title: "E-commerce CRM",
      description:
        "Developed an eCommerce CRM system to manage sales across both online and offline stores, while maintaining accounts and inventory management. Streamlined business operations by integrating sales tracking, inventory control, and financial management into a unified platform.",
      image: "/projects/ecom-crm.png",
      tags: ["Nest.js", "React.js", "MySql", "docker"],
      link: "#contact",
      github: "#contact",
    },
    {
      title: "Email delivery Platform",
      description:
        "Designed and developed a scalable email delivery platform using ZoneMTA, WildDuck, and supporting tools for high-volume outbound mailing and mailbox management. Implemented secure email routing, queue management, monitoring, and automation features to ensure reliable and efficient email delivery.",
      image: "/projects/email-platform.png",
      tags: ["Node.js", "Docker", "zoneMTA", "wildduck", "Haraka", "MongoDB", "Redis"],
      link: "#contact",
      github: "#contact",
  },
  {
    title: "Hosting provider Platform & Backend",
    description:
      "Designed and developed platform and backend applications for a well known hosting provider, including DevOps operations with Docker, Nomad, Kubernetes, Envoy Proxy, Nginx, and SSH.",
    image: "/projects/hosting-platform.png",
    tags: ["Node.js", "Docker", "Nomad", "Kubernetes", "Nginx"],
    link: "#contact",
    github: "#contact",
  },
  {
    title: "Quality Management Applications",
    description:
      "Developed call center quality management applications, HRMS modules, optimized MySQL queries, functional tests, unit tests, and Docker Compose deployment setups.",
    image: "/projects/qms.png",
    tags: ["PHP", "CodeIgniter", "Laravel", "MySQL", "Docker Compose"],
    link: "#contact",
    github: "#contact",
  },
  {
    title: "E-learning platform & CRM",
    description:
      "Developed & maintained E-learning Platform and custom CRM applications with optimized database work and responsive user interfaces.",
    image: "/projects/e-learning.png",
    tags: ["PHP", "MySQL", "APIs", "CRM", "Responsive UI"],
    link: "#contact",
    github: "#contact",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects across
            <span className="font-serif italic font-normal text-white">
              {" "}
              product and platform work.
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Selected work from client-facing products, internal business tools,
            backend platforms, deployment systems, and infrastructure
            operations.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className="group glass rounded-2xl overflow-hidden animate-fade-in"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={`${project.title} project screenshot`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-60" />

                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} live demo`}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} GitHub repository`}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <GitHubLogo className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.title} live demo`}
                  >
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </a>
                </div>

                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={`${project.title}-${tag}`}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton
            href="https://www.linkedin.com/in/siltu-koley-42159671"
            target="_blank"
            rel="noopener noreferrer"
          >
            View LinkedIn
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};
