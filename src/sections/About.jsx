import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Backend Development",
    description:
      "Building scalable PHP, Laravel, CodeIgniter, Node.js, Express.js, and MySQL applications and APIs.",
  },
  {
    icon: Rocket,
    title: "DevOps Delivery",
    description:
      "Automating deployments with CI/CD pipelines, Docker, Docker Compose, Nomad, Consul, and cloud platforms.",
  },
  {
    icon: Users,
    title: "Production Operations",
    description:
      "Monitoring and improving application performance with Prometheus, Grafana, Nginx, Envoy, Linux, and shell scripting.",
  },
  {
    icon: Lightbulb,
    title: "Team Leadership",
    description:
      "Collaborating with teams, reviewing code, writing tests, and translating client requirements into reliable software.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Scalable applications.
              <br />
              <span className="font-serif italic font-normal text-white">
                {" "}
                Reliable deployments.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm Siltu Koley, a software developer from West Bengal with
                experience building PHP, Laravel, CodeIgniter, Node.js, and
                MySQL web applications for business and platform teams.
              </p>
              <p>
                My work spans backend APIs, custom CRM systems, quality
                management applications, learning platforms, e-commerce
                systems, and hosting infrastructure for production clients.
              </p>
              <p>
                Alongside application development, I work with CI/CD,
                containerization, orchestration, monitoring, server networking,
                and deployments using Docker, Nomad, Consul, Kubernetes,
                Prometheus, Grafana, Nginx, Envoy, and Linux tooling.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "I build practical web applications and deployment workflows
                that keep business platforms fast, maintainable, and ready to
                scale."
              </p>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
