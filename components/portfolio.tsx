"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  Code2,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
} from "lucide-react";
import { projects, services, siteConfig, skills } from "@/data/site";

const links = ["Home", "About", "Projects", "Skills", "Experience", "Contact"];
const id = (label: string) => label.toLowerCase();

function Button({
  href,
  children,
  primary = false,
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  primary?: boolean;
  external?: boolean;
}) {
  return (
    <a
      className={`focus-ring inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition hover:-translate-y-0.5 ${
        primary
          ? "cta-primary"
          : "border border-[#333747] text-white hover:border-[#8b8cff]"
      }`}
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      {children}
      {external ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
    </a>
  );
}

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reducedMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reducedMotion ? false : { opacity: 0, y: 20 }}
      whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-white/[.07] bg-[#090a0e]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6">
        <a
          href="#home"
          className="focus-ring text-sm font-bold tracking-[-.04em]"
        >
          RB<span className="text-[#8b8cff]">/</span> Raghav Bucha
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          {links.slice(1).map((link) => (
            <a
              className="focus-ring text-xs font-medium text-[#aab0c0] transition hover:text-white"
              href={`#${id(link)}`}
              key={link}
            >
              {link}
            </a>
          ))}
          {siteConfig.resumePath ? (
            <Button href={siteConfig.resumePath}>Resume</Button>
          ) : (
            <span
              title="Resume will be added soon"
              className="cursor-default rounded-full border border-[#333747] px-4 py-2 text-xs text-[#72798c]"
            >
              Resume soon
            </span>
          )}
        </nav>
        <button
          onClick={() => setOpen(!open)}
          className="focus-ring rounded p-2 md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-white/[.07] px-6 py-4 md:hidden">
          {links.map((link) => (
            <a
              onClick={() => setOpen(false)}
              className="focus-ring block py-3 text-sm text-[#b9becc]"
              href={`#${id(link)}`}
              key={link}
            >
              {link}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

function CodePanel() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-[#34394a] bg-[#11131b] p-1 shadow-2xl shadow-black/30">
      <div className="flex gap-1.5 border-b border-[#2c3040] px-4 py-3">
        <i className="h-2.5 w-2.5 rounded-full bg-[#fa7c7c]" />
        <i className="h-2.5 w-2.5 rounded-full bg-[#f4c95d]" />
        <i className="h-2.5 w-2.5 rounded-full bg-[#67d391]" />
        <span className="ml-3 font-mono text-[10px] text-[#747c90]">
          raghav.ts
        </span>
      </div>
      <div className="space-y-2 p-5 font-mono text-[11px] leading-6 sm:text-xs">
        <p>
          <span className="text-[#c792ea]">const</span>{" "}
          <span className="text-[#82aaff]">builder</span> = {"{"}
        </p>
        <p className="pl-4">
          <span className="text-[#f07178]">focus</span>:{" "}
          <span className="text-[#c3e88d]">&quot;useful software&quot;</span>,
        </p>
        <p className="pl-4">
          <span className="text-[#f07178]">layers</span>: [
          <span className="text-[#c3e88d]">&quot;frontend&quot;</span>,{" "}
          <span className="text-[#c3e88d]">&quot;backend&quot;</span>,{" "}
          <span className="text-[#c3e88d]">&quot;identity&quot;</span>],
        </p>
        <p className="pl-4">
          <span className="text-[#f07178]">approach</span>:{" "}
          <span className="text-[#c3e88d]">
            &quot;thoughtful delivery&quot;
          </span>
          ,
        </p>
        <p>{"}"};</p>
        <div className="mt-8 flex items-center gap-2 text-[#8b8cff]">
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-[#8b8cff]" />{" "}
          ready to build
        </div>
      </div>
    </div>
  );
}

function Hero() {
  const reducedMotion = useReducedMotion();
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="grain pointer-events-none absolute inset-0 opacity-60" />
      <motion.div
        className="ambient-orb ambient-orb-one"
        animate={
          reducedMotion
            ? undefined
            : { x: [0, 45, 0], y: [0, 30, 0], scale: [1, 1.12, 1] }
        }
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="ambient-orb ambient-orb-two"
        animate={reducedMotion ? undefined : { x: [0, -35, 0], y: [0, -25, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="relative mx-auto grid min-h-[calc(100vh-64px)] max-w-[1200px] items-center gap-14 px-6 py-20 lg:grid-cols-[1.15fr_.85fr]">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow mb-6 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#8b8cff]" /> Full-stack
            systems · enterprise-ready
          </p>
          <h1 className="max-w-3xl text-[clamp(3.15rem,7vw,6.4rem)] font-bold leading-[.9] tracking-[-.075em]">
            Building modern web experiences{" "}
            <span className="text-[#8b8cff]">and</span> scalable software
            solutions.
          </h1>
          <p className="mt-7 max-w-xl text-base leading-7 text-[#aab0c0]">
            {siteConfig.summary}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button href="#projects" primary>
              Explore my projects
            </Button>
            <Button href="#contact">Let&apos;s work together</Button>
          </div>
          <div className="mt-12 flex items-center gap-5">
            <a
              className="focus-ring text-[#aab0c0] hover:text-white"
              aria-label="GitHub"
              href={siteConfig.socials.github}
              target="_blank"
              rel="noreferrer"
            >
              <Github size={20} />
            </a>
            <a
              className="focus-ring text-[#aab0c0] hover:text-white"
              aria-label="LinkedIn"
              href={siteConfig.socials.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={20} />
            </a>
            <span className="h-4 border-l border-[#394052]" />
            <span className="font-mono text-xs text-[#838b9f]">
              React · .NET · Power Platform
            </span>
          </div>
        </motion.div>
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
          whileHover={reducedMotion ? undefined : { y: -5 }}
        >
          <CodePanel />
        </motion.div>
      </div>
    </section>
  );
}

function SectionIntro({
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <Reveal className="mb-12 max-w-2xl">
      <p className="eyebrow">{label}</p>
      <h2 className="section-title">{title}</h2>
      {children && (
        <div className="text-base leading-7 text-[#aab0c0]">{children}</div>
      )}
    </Reveal>
  );
}

export function Portfolio() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <section id="about" className="section border-t border-white/[.07]">
          <SectionIntro
            label="01 / About"
            title="Software that meets the business where it is."
          >
            <p>
              I work across frontend, backend, identity, and low-code platforms
              to turn practical problems into reliable digital experiences. My
              background includes enterprise application modernization,
              authentication integrations, and business applications built for
              adoption—not just a demo.
            </p>
          </SectionIntro>
          <div className="grid gap-px overflow-hidden rounded-xl border border-[#2a2e3b] bg-[#2a2e3b] md:grid-cols-3">
            {[
              [
                "01",
                "Full-stack",
                "From responsive React interfaces through services, APIs, and data.",
              ],
              [
                "02",
                "Identity-aware",
                "Experience supporting Okta and Microsoft identity solutions.",
              ],
              [
                "03",
                "Business-minded",
                "Power Platform delivery for teams who need useful tools quickly.",
              ],
            ].map(([num, title, copy]) => (
              <div className="bg-[#11131b] p-7" key={title}>
                <span className="font-mono text-xs text-[#8b8cff]">{num}</span>
                <h3 className="mt-8 text-xl font-semibold tracking-tight">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#aab0c0]">{copy}</p>
              </div>
            ))}
          </div>
        </section>
        <section id="projects" className="section border-t border-white/[.07]">
          <SectionIntro
            label="02 / Selected work"
            title="Built to solve a real problem."
          >
            <p>
              Public work alongside enterprise applications presented with the
              right level of discretion.
            </p>
          </SectionIntro>
          <div className="grid gap-5 lg:grid-cols-2">
            {projects.map((project, index) => (
              <article
                className="group relative overflow-hidden rounded-2xl border border-[#2a2e3b] bg-[#11131b] p-6 sm:p-8"
                key={project.name}
              >
                <div
                  className={`absolute inset-x-0 top-0 h-1 ${
                    project.tone === "blue"
                      ? "bg-[#738bff]"
                      : project.tone === "violet"
                      ? "bg-[#ab7cff]"
                      : project.tone === "teal"
                      ? "bg-[#52cbb6]"
                      : "bg-[#e77caf]"
                  }`}
                />
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="font-mono text-xs text-[#858da0]">
                      0{index + 1} · {project.category}
                    </p>
                    <h3 className="mt-4 text-2xl font-semibold tracking-[-.04em]">
                      {project.name}
                    </h3>
                  </div>
                  {project.liveUrl && (
                    <a
                      className="focus-ring rounded-full border border-[#34394a] p-2 text-[#c8cddd] hover:border-[#8b8cff]"
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open ${project.name} live demo`}
                    >
                      <ExternalLink size={17} />
                    </a>
                  )}
                </div>
                <p className="mt-5 max-w-lg text-sm leading-6 text-[#b1b7c5]">
                  {project.description}
                </p>
                <div className="mt-6 grid gap-2 text-sm text-[#d1d5df]">
                  {project.highlights.map((highlight) => (
                    <p className="flex gap-2" key={highlight}>
                      <Check
                        size={16}
                        className="mt-0.5 shrink-0 text-[#8b8cff]"
                      />
                      {highlight}
                    </p>
                  ))}
                </div>
                {project.contribution && (
                  <p className="mt-6 border-l-2 border-[#555bc4] pl-3 text-xs leading-5 text-[#939bad]">
                    <span className="font-semibold text-[#d1d5df]">
                      Contribution:{" "}
                    </span>
                    {project.contribution}
                  </p>
                )}
                <div className="mt-7 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      className="rounded-full bg-white/[.055] px-3 py-1.5 text-[11px] text-[#cbd0dc]"
                      key={item}
                    >
                      {item}
                    </span>
                  ))}
                </div>
                {project.liveUrl ? (
                  <a
                    className="focus-ring mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#b9bcff] hover:text-white"
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View live project <ArrowUpRight size={16} />
                  </a>
                ) : (
                  <p className="mt-7 text-xs text-[#7f879a]">
                    {project.status}
                  </p>
                )}
              </article>
            ))}
          </div>
        </section>
        <section id="skills" className="section">
          <SectionIntro
            label="03 / Toolkit"
            title="Core strengths, with room to go deep."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {skills.map(([category, description, items]) => (
              <article
                className="rounded-xl border border-[#2a2e3b] bg-[#11131b] p-6"
                key={category}
              >
                <h3 className="text-lg font-semibold">{category}</h3>
                <p className="mt-2 text-sm text-[#8991a4]">{description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      className="rounded-md border border-[#34394a] px-2.5 py-1.5 text-xs text-[#cbd0dc]"
                      key={item}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
        <section id="experience" className="section">
          <SectionIntro
            label="04 / Experience"
            title="Enterprise context. Practical outcomes."
          >
            <p>
              Professional details are intentionally configurable while
              sensitive information stays private.
            </p>
          </SectionIntro>
          <div className="relative ml-2 border-l border-[#363b4b] pl-8">
            <div className="absolute -left-[5px] top-0 h-2.5 w-2.5 rounded-full bg-[#8b8cff] shadow-[0_0_20px_#8b8cff]" />
            <p className="eyebrow">
              Senior Analyst · Employment details available on request
            </p>
            <h3 className="mt-4 text-2xl font-semibold">
              Authentication modernization & business application delivery
            </h3>
            <div className="mt-6 grid gap-3 text-sm leading-6 text-[#aab0c0] md:grid-cols-2">
              <p>
                Supported migration from SiteMinder authentication to Okta
                across approximately 8–10 applications.
              </p>
              <p>
                Contributed to a multifactor-authentication modernization effort
                involving approximately 10 million user logins.
              </p>
              <p>
                Delivered solutions against business deadlines while keeping
                quality and user needs in view.
              </p>
              <p>
                Built Power Platform solutions with significant adoption,
                including Recognition Portal and Trivia Trek.
              </p>
            </div>
            <p className="mt-5 text-xs text-[#737b8e]">
              Scope, dates, metrics, and employer information should be
              confirmed before public publication.
            </p>
          </div>
        </section>
        <section className="section border-t border-white/[.07]">
          <SectionIntro
            label="05 / Services"
            title="A useful technical partner for the next build."
          />
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {services.map(([title, copy]) => (
              <article
                className="rounded-xl border border-[#2a2e3b] p-6 transition hover:border-[#5359a8]"
                key={title}
              >
                <Code2 size={20} className="text-[#9698ff]" />
                <h3 className="mt-6 text-lg font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#aab0c0]">{copy}</p>
              </article>
            ))}
          </div>
          <div className="mt-8">
            <Button href="#contact">Discuss a project</Button>
          </div>
        </section>
        <section id="contact" className="section">
          <div className="rounded-2xl border border-[#363c59] bg-[radial-gradient(circle_at_top_right,#3c3c8729,transparent_40%),#11131b] px-7 py-12 sm:px-12">
            <p className="eyebrow">06 / Contact</p>
            <div className="mt-4 flex flex-col justify-between gap-10 md:flex-row md:items-end">
              <div>
                <h2 className="max-w-xl text-4xl font-semibold tracking-[-.055em] sm:text-5xl">
                  Let&apos;s build something that works beautifully.
                </h2>
                <p className="mt-5 max-w-lg leading-7 text-[#aab0c0]">
                  For software opportunities, freelance projects, and technical
                  collaboration, I&apos;d be glad to connect.
                </p>
              </div>
              <div className="flex flex-col items-start gap-3">
                <Button primary href={`mailto:${siteConfig.email}`}>
                  Email Raghav <Mail size={16} />
                </Button>
                <a
                  className="focus-ring text-sm text-[#b8bdcb] hover:text-white"
                  href={siteConfig.socials.upwork}
                  target="_blank"
                  rel="noreferrer"
                >
                  Connect on Upwork{" "}
                  <ArrowUpRight className="inline" size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-white/[.07]">
        <div className="mx-auto flex max-w-[1200px] flex-col justify-between gap-5 px-6 py-8 text-sm text-[#8c94a7] sm:flex-row">
          <p>
            <span className="font-semibold text-white">Raghav Bucha</span> —
            practical software, thoughtfully built.
          </p>
          <div className="flex gap-4">
            <a
              className="focus-ring hover:text-white"
              href={siteConfig.socials.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              className="focus-ring hover:text-white"
              href={siteConfig.socials.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="focus-ring hover:text-white"
              href={`mailto:${siteConfig.email}`}
            >
              Email
            </a>
            <span>© {new Date().getFullYear()}</span>
          </div>
        </div>
      </footer>
    </>
  );
}
