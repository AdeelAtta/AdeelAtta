export function LogoMarquee() {
  const technologies = [
    "Software Engineering",
    "Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "TailwindCSS",
    "Scalable Applications",
    "Node.js",
    "MongoDB",
    "PostgreSQL",
    "Git",
    "Docker",
    "REST APIs",
    "AI Hackathon Winner"
  ]

  return (
    <div className="overflow-hidden">
      <div className="relative overflow-hidden bg-black py-8 -rotate-3 mt-24 mb-8 min-w-[120vw] -mx-[10vw] left-0">
        <div className="flex items-center gap-12 animate-marquee whitespace-nowrap">
          {[...technologies, ...technologies, ...technologies, ...technologies].map((tech, index) => (
            <h6
              key={index}
              className="text-white text-xl md:text-2xl font-bold tracking-wide flex items-center gap-3"
            >
              <span className="w-2 h-2 bg-[#FF6B7A] rounded-full" />
              {tech}
            </h6>
          ))}
        </div>
      </div>
    </div>
  )
}
