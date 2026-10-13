export type Project = { name: string; category: string; description: string; stack: string[]; highlights: string[]; contribution?: string; liveUrl?: string; status?: string; tone: "blue" | "violet" | "teal" | "rose" };
export const siteConfig = {
  name: "Raghav Bucha", role: "Senior Analyst | Full Stack Developer", url: "https://example.com", resumePath: "", email: "work.raghavbuchaa@gmail.com",
  description: "Raghav Bucha is a Senior Analyst and Full Stack Developer building modern web applications, enterprise integrations, and business-focused solutions.",
  summary: "I’m Raghav Bucha, a Senior Analyst and Full Stack Developer with 5+ years of experience building web applications, modernizing enterprise systems, and developing business-focused solutions.",
  socials: { github: "https://github.com/RaghavB17", linkedin: "https://www.linkedin.com/in/raghav-bucha-2a1647125", upwork: "https://www.upwork.com/freelancers/~01fb7d76c12eef8a20?mp_source=share" },
};
export const skills = [
  ["Frontend", "Interfaces that are clear, responsive, and maintainable.", ["React", "Next.js", "JavaScript", "TypeScript", "HTML", "CSS", "Material UI"]],
  ["Backend", "Practical services and integrations for modern applications.", ["Node.js", "Express.js", ".NET MVC", ".NET Core", "REST APIs"]],
  ["Data & Cloud", "Connected systems, identity, and cloud-aware delivery.", ["MongoDB", "Firebase", "Microsoft Azure", "Okta", "Microsoft Entra ID", "MSAL"]],
  ["Engineering", "Quality-minded development practices and automation.", ["Jest", "React Testing Library", "Vitest", "Git", "CI/CD"]],
  ["Power Platform", "Business applications that make everyday work easier.", ["Microsoft Power Apps", "Microsoft Power Automate"]],
] as const;
export const projects: Project[] = [
  { name: "Money Matters", category: "Full-stack web application", tone: "blue", liveUrl: "https://moneymatter.vercel.app/", description: "A personal finance tracker for bringing income and expenses into one focused view.", stack: ["React", "Node.js", "MongoDB", "Firebase"], highlights: ["OTP-based authentication", "Transaction CRUD flows", "Income and expense tracking", "Data visualization"], contribution: "Frontend development, backend integration, authentication, database operations, and data visualization." },
  { name: "F1 Dashboard", category: "Frontend & API integration", tone: "violet", liveUrl: "https://f1-dashboard-rb.vercel.app/", description: "A responsive motorsport dashboard that turns historical race and replay data into a focused browsing experience.", stack: ["HTML", "CSS", "JavaScript", "OpenF1 API", "Jolpica API"], highlights: ["External API integration", "Historical race information", "Race replay discovery", "Responsive data presentation"], contribution: "API integration and responsive interface design for motorsport datasets." },
  { name: "Recognition Portal", category: "Enterprise low-code application", tone: "teal", description: "A business-focused recognition experience created in Microsoft Power Apps, designed for organization-wide adoption.", stack: ["Microsoft Power Apps"], highlights: ["~30,000 users", "Business application delivery", "Enterprise adoption"], status: "Additional public details intentionally withheld." },
  { name: "Trivia Trek", category: "Interactive business application", tone: "rose", description: "An interactive quiz application built in Microsoft Power Apps for an engaging internal experience.", stack: ["Microsoft Power Apps"], highlights: ["~2,000 users", "Interactive quiz experience", "Business application delivery"], status: "Additional public details intentionally withheld." },
];
export const services = [
  ["React & Next.js", "Build polished, responsive web experiences that support real business goals."],
  ["Full-stack development", "Take an application from interface through APIs, authentication, and data."],
  ["Modernization", "Move legacy web experiences toward maintainable, current technology."],
  ["Identity integrations", "Implement practical authentication flows with Okta and Microsoft identity tools."],
  ["Power Platform", "Create focused Power Apps and automation solutions for business teams."],
];
