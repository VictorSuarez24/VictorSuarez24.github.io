'use client';

import { useEffect, useState } from 'react';
import { ArrowDownRight, ChevronRight, Code2, Database, Download, ExternalLink, Github, Globe2, Linkedin, LockKeyhole, Mail, Network, Radar, ServerCog, ShieldCheck } from 'lucide-react';
import CertificationCarousel from './CertificationCarousel';

const email = 'vicsuarezcruz@gmail.com';
type Locale = 'en' | 'es';
type Command = 'whoami' | 'neofetch --skills' | 'status';

const content = {
  es: {
    nav: ['Proyectos', 'Especialidades', 'Certificaciones', 'Sobre mí'],
    badge: 'Especialista en Ciberseguridad y Sistemas', availability: '// disponible para proyectos con propósito',
    title: 'Ingeniero de Ciberseguridad y Sistemas',
    intro: 'Defiendo entornos de Active Directory, construyo herramientas OSINT y despliego infraestructura autoalojada. De la detección de amenazas a APIs en FastAPI.',
    projectsButton: 'Ver proyectos', contactButton: 'Escribir por email',
    disciplines: ['defensa AD', 'OSINT', 'homelab'],
    selectedWork: 'Proyectos seleccionados', projectTitle: 'Proyectos que convierten curiosidad en sistemas útiles.',
    projectBody: 'Seguridad, automatización e infraestructura con una mentalidad orientada a la práctica.', viewRepo: 'Ver repositorio',
    capabilities: 'Matriz de capacidades', skillsTitle: 'Una base técnica, tres áreas de profundidad.',
    skillsBody: 'El contexto cambia; la disciplina es la misma: entender el sistema antes de decidir cómo protegerlo o construirlo.',
    certificationsEyebrow: '03 / Credenciales', certificationsTitle: 'Aprender, practicar, acreditar.',
    certificationsBody: 'Una selección de certificaciones y cursos de redes, infraestructura y desarrollo publicados en mi perfil profesional.',
    background: '04 / Trayectoria', aboutTitle: 'Pensar como defensor. Construir como ingeniero.',
    aboutBody: 'Formación académica y práctica técnica para abordar la seguridad desde el detalle operativo hasta la arquitectura.',
    openChannel: 'Canal abierto', contactTitle: '¿Hablamos de seguridad, sistemas o software?',
    contactBody: 'Para colaboraciones, oportunidades o una conversación técnica.', downloadCv: 'Descargar CV', terminalShortcuts: 'Atajos de terminal',
    footer: '© Víctor Suárez. Todos los derechos reservados.',
    skills: [
      ['Ciberseguridad', ['Defensa de Active Directory', 'OSINT y reconocimiento', 'Detección de amenazas', 'Pentesting / Kali Linux']],
      ['Sistemas y Homelab', ['Proxmox VE y LXC', 'Contenedores Docker', 'VPN WireGuard', 'Administración Linux (Debian)', 'Home Assistant y Pi-hole']],
      ['Desarrollo y herramientas', ['Python (FastAPI/CustomTkinter)', 'JavaScript / React', 'Tailwind CSS', 'PostgreSQL / SQLite', 'Git / GitHub Actions']],
    ],
    education: [
      ['Máster', 'Máster en Ciberseguridad', 'Universidad Pontificia Comillas'],
      ['BSc (Hons)', 'Ciberseguridad — First Class Honours', 'York St John University · Project Prize Winner'],
      ['FP Superior', 'Administración de Sistemas Informáticos en Red', 'Higher Technician in Network Computer Systems Administration'],
    ],
    terminal: {
      whoami: [['identidad', 'victor.suarez'], ['perfil', 'ingeniero de ciberseguridad y sistemas'], ['ubicación', 'España']],
      'neofetch --skills': [['seguridad', 'defensa AD · OSINT · detección'], ['sistemas', 'Proxmox · Docker · Debian'], ['desarrollo', 'Python · FastAPI · React']],
      status: [['homelab', 'en línea'], ['contenedores', 'saludables'], ['monitorización', 'activa']],
    },
    projects: [
      ['UserScope', 'Herramienta OSINT de escritorio para el rastreo de huella digital y análisis de usuarios en redes sociales.', ['Python', 'OSINT', 'CustomTkinter', 'Security']],
      ['HoneypotLite', 'Laboratorio educativo ligero para capturar intentos de conexión y estudiar el comportamiento de bots y atacantes en un entorno controlado.', ['Python', 'Blue Team', 'Security', 'Docker']],
      ['CheckPorts', 'Herramienta de análisis de seguridad de puertos para revisar servicios expuestos y detectar actividad maliciosa.', ['Bash', 'Network Security', 'Linux', 'Nmap']],
      ['IoT', 'Proyecto universitario de Internet de las Cosas.', ['C++', 'IoT', 'University Project']],
    ],
  },
  en: {
    nav: ['Projects', 'Specialties', 'Certifications', 'About'],
    badge: 'Cybersecurity & Systems Specialist', availability: '// available for meaningful work',
    title: 'Cybersecurity & Systems Engineer',
    intro: 'I defend Active Directory environments, build OSINT tooling, and deploy self-hosted infrastructure. From threat detection to FastAPI APIs.',
    projectsButton: 'View projects', contactButton: 'Email me',
    disciplines: ['AD defense', 'OSINT', 'homelab'],
    selectedWork: 'Selected work', projectTitle: 'Projects that turn curiosity into useful systems.',
    projectBody: 'Security, automation, and infrastructure built with a practical mindset.', viewRepo: 'View repository',
    capabilities: 'Capabilities matrix', skillsTitle: 'One technical foundation, three areas of depth.',
    skillsBody: 'The context changes; the discipline stays the same: understand the system before deciding how to protect or build it.',
    certificationsEyebrow: '03 / Credentials', certificationsTitle: 'Learn, practice, earn.',
    certificationsBody: 'A selection of networking, infrastructure, and development credentials and courses listed on my professional profile.',
    background: '04 / Background', aboutTitle: 'Think like a defender. Build like an engineer.',
    aboutBody: 'Academic training and hands-on practice to approach security from operational detail through to architecture.',
    openChannel: 'Open channel', contactTitle: 'Shall we talk security, systems, or software?',
    contactBody: 'For collaborations, opportunities, or a technical conversation.', downloadCv: 'Download CV', terminalShortcuts: 'Terminal shortcuts',
    footer: '© Víctor Suárez. All rights reserved.',
    skills: [
      ['Cybersecurity', ['Active Directory Defense', 'OSINT & Reconnaissance', 'Threat Detection', 'Pentesting / Kali Linux']],
      ['Systems & Homelab', ['Proxmox VE & LXC', 'Docker Containerization', 'WireGuard VPN', 'Linux Admin (Debian)', 'Home Assistant & Pi-hole']],
      ['Development & Tools', ['Python (FastAPI/CustomTkinter)', 'JavaScript / React', 'Tailwind CSS', 'PostgreSQL / SQLite', 'Git / GitHub Actions']],
    ],
    education: [
      ['Master’s', 'Master’s Degree in Cybersecurity', 'Universidad Pontificia Comillas'],
      ['BSc (Hons)', 'Cybersecurity — First Class Honours', 'York St John University · Project Prize Winner'],
      ['Higher Technician', 'Network Computer Systems Administration', 'Higher Technician in Network Computer Systems Administration'],
    ],
    terminal: {
      whoami: [['identity', 'victor.suarez'], ['role', 'cybersecurity & systems engineer'], ['location', 'Spain']],
      'neofetch --skills': [['security', 'AD defense · OSINT · detection'], ['systems', 'Proxmox · Docker · Debian'], ['build', 'Python · FastAPI · React']],
      status: [['homelab', 'online'], ['containers', 'healthy'], ['monitoring', 'active']],
    },
    projects: [
      ['UserScope', 'Desktop OSINT tool for digital-footprint tracking and social-media user analysis.', ['Python', 'OSINT', 'CustomTkinter', 'Security']],
      ['HoneypotLite', 'Lightweight educational lab for capturing connection attempts and studying bot and attacker behavior in a controlled environment.', ['Python', 'Blue Team', 'Security', 'Docker']],
      ['CheckPorts', 'Port-security analysis tool for auditing exposed services and identifying malicious activity.', ['Bash', 'Network Security', 'Linux', 'Nmap']],
      ['IoT', 'University Internet of Things project.', ['C++', 'IoT', 'University Project']],
    ],
  },
} as const;

const repoUrls = ['https://github.com/VictorSuarez24/UserScope', 'https://github.com/VictorSuarez24/HoneypotLite', 'https://github.com/VictorSuarez24/Checkports', 'https://github.com/VictorSuarez24/IoT'];
const projectIcons = [Radar, ShieldCheck, Network, ServerCog];
const commands: Command[] = ['whoami', 'neofetch --skills', 'status'];

export default function Home() {
  const [locale, setLocale] = useState<Locale>('en');
  const [command, setCommand] = useState<Command>('whoami');
  const t = content[locale];

  useEffect(() => {
    setLocale(navigator.language.toLowerCase().startsWith('es') ? 'es' : 'en');
  }, []);
  useEffect(() => { document.documentElement.lang = locale; }, [locale]);

  return (
    <main lang={locale} className="overflow-x-clip bg-ink text-slate-100">
      <div className="pointer-events-none fixed inset-0 -z-10 grid-fade" />
      <nav className="sticky top-0 z-50 border-b border-white/[0.07] bg-ink/75 backdrop-blur-xl">
        <div className="mx-auto flex h-[70px] max-w-6xl items-center justify-between px-5 lg:px-8">
          <a href="#top" className="group flex items-center gap-2 font-mono text-sm font-bold tracking-tight text-white" aria-label="Home"><span className="text-terminal transition-transform group-hover:scale-125">●</span>racorp<span className="text-terminal">.</span>dev</a>
          <div className="hidden items-center gap-7 text-sm text-slate-300 md:flex"><a className="nav-link" href="#projects">{t.nav[0]}</a><a className="nav-link" href="#skills">{t.nav[1]}</a><a className="nav-link" href="#certifications">{t.nav[2]}</a><a className="nav-link" href="#about">{t.nav[3]}</a></div>
          <div className="flex items-center gap-1.5">
            <div className="mr-1 flex overflow-hidden rounded-md border border-white/[0.1] text-[10px] font-semibold"><button type="button" onClick={() => setLocale('es')} aria-pressed={locale === 'es'} className={'language-button ' + (locale === 'es' ? 'language-button-active' : '')}>ES</button><button type="button" onClick={() => setLocale('en')} aria-pressed={locale === 'en'} className={'language-button ' + (locale === 'en' ? 'language-button-active' : '')}>EN</button></div>
            <Globe2 className="hidden text-slate-600 sm:block" size={15} aria-hidden="true" />
            <a className="icon-link" href="https://github.com/VictorSuarez24" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a><a className="icon-link" href="https://www.linkedin.com/in/victorsuarezcruz/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
          </div>
        </div>
      </nav>

      <section id="top" className="relative mx-auto grid min-h-[calc(100svh-70px)] max-w-6xl items-center gap-12 px-5 py-20 lg:grid-cols-[1.08fr_.92fr] lg:px-8">
        <div className="relative z-10">
          <p className="mb-7 inline-flex items-center gap-2 rounded-full border border-terminal/25 bg-terminal/10 px-3 py-1.5 font-mono text-xs font-medium text-emerald-300"><span className="h-1.5 w-1.5 rounded-full bg-terminal shadow-[0_0_12px_#10b981]" />{t.badge}</p>
          <p className="mb-5 font-mono text-xs uppercase tracking-[.22em] text-cyber">{t.availability}</p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-[1.04] tracking-[-.055em] text-white sm:text-5xl lg:text-6xl">Víctor Suárez <span className="text-slate-500">—</span><br /><span className="text-gradient">{t.title}</span></h1>
          <p className="mt-7 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">{t.intro}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row"><a href="#projects" className="primary-button">{t.projectsButton} <ArrowDownRight size={17} /></a><a href={'mailto:' + email} className="secondary-button"><Mail size={17} />{t.contactButton}</a></div>
          <div className="mt-12 flex items-center gap-5 font-mono text-xs text-slate-500">{t.disciplines.map((item, index) => <span className="contents" key={item}><span>{item}</span>{index < 2 && <span className="text-terminal">/</span>}</span>)}</div>
        </div>
        <Terminal command={command} setCommand={setCommand} locale={locale} />
      </section>

      <section id="projects" className="scroll-mt-20 border-y border-white/[0.06] bg-[#0c1018]/70 py-24 sm:py-32"><div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionIntro index="01" eyebrow={t.selectedWork} title={t.projectTitle} body={t.projectBody} />
        <div className="mt-14 grid gap-4 md:grid-cols-2">{t.projects.map(([name, description, tags], index) => {
          const Icon = projectIcons[index]; const tone = index % 2 === 0 ? 'text-terminal border-terminal/20 bg-terminal/10' : 'text-cyber border-cyber/20 bg-cyber/10';
          return <article key={name} className="project-card group"><div className="flex items-start justify-between gap-5"><div className={'grid h-11 w-11 place-items-center rounded-xl border ' + tone}><Icon size={21} /></div><span className="font-mono text-xs text-slate-600">0{index + 1}</span></div><h3 className="mt-8 max-w-md text-xl font-semibold tracking-tight text-slate-100">{name}</h3><p className="mt-3 max-w-lg text-sm leading-7 text-slate-400">{description}</p><div className="mt-6 flex flex-wrap gap-2">{tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}</div><a href={repoUrls[index]} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-slate-200 transition-colors hover:text-terminal">{t.viewRepo} <ExternalLink size={15} /></a></article>;
        })}</div>
      </div></section>

      <section id="skills" className="scroll-mt-20 py-24 sm:py-32"><div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionIntro index="02" eyebrow={t.capabilities} title={t.skillsTitle} body={t.skillsBody} />
        <div className="mt-14 grid gap-4 lg:grid-cols-3"><SkillCard icon={<LockKeyhole size={21} />} title={t.skills[0][0]} items={t.skills[0][1]} /><SkillCard icon={<ServerCog size={21} />} title={t.skills[1][0]} items={t.skills[1][1]} /><SkillCard icon={<Code2 size={21} />} title={t.skills[2][0]} items={t.skills[2][1]} /></div>
      </div></section>

      <section id="certifications" className="scroll-mt-20 overflow-hidden border-t border-white/[0.06] bg-[#0c1018]/70 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[.2em] text-terminal">{t.certificationsEyebrow}</p>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-.04em] text-white sm:text-4xl">{t.certificationsTitle}</h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400">{t.certificationsBody}</p>
          </div>
          <CertificationCarousel locale={locale} />
        </div>
      </section>

      <section id="about" className="scroll-mt-20 border-t border-white/[0.06] bg-surface/40 py-24 sm:py-32"><div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[.78fr_1.22fr] lg:px-8">
        <div><p className="font-mono text-xs uppercase tracking-[.2em] text-terminal">{t.background}</p><h2 className="mt-5 text-3xl font-semibold tracking-[-.04em] text-white sm:text-4xl">{t.aboutTitle}</h2><p className="mt-5 max-w-md leading-7 text-slate-400">{t.aboutBody}</p></div>
        <div className="space-y-0 border-l border-white/10">{t.education.map(([year, title, school]) => <Education key={year} year={year} title={title} school={school} />)}</div>
      </div></section>

      <section className="mx-auto max-w-6xl px-5 py-20 lg:px-8"><div className="relative overflow-hidden rounded-2xl border border-cyber/20 bg-gradient-to-br from-cyber/15 via-surface to-terminal/10 p-8 sm:p-12"><Database className="absolute -right-5 -top-5 h-36 w-36 text-cyber/10" /><p className="font-mono text-xs uppercase tracking-[.2em] text-cyber">{t.openChannel}</p><h2 className="relative mt-4 max-w-xl text-3xl font-semibold tracking-[-.04em] text-white sm:text-4xl">{t.contactTitle}</h2><p className="relative mt-3 text-sm text-slate-400">{t.contactBody}</p><div className="relative mt-8 flex flex-wrap gap-3"><a href={'mailto:' + email} className="primary-button"><Mail size={17} />{t.contactButton}</a><a href="/Victor_Suarez_CV.pdf" download="Victor_Suarez_CV.pdf" className="secondary-button"><Download size={17} />{t.downloadCv}</a></div><p className="relative mt-3 font-mono text-xs text-slate-500">{email}</p></div></section>

      <footer className="border-t border-white/[0.06]"><div className="mx-auto flex max-w-6xl flex-col gap-5 px-5 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-8"><p>{t.footer}</p><div className="flex gap-5"><a href="https://github.com/VictorSuarez24" target="_blank" rel="noreferrer" className="footer-link">GitHub</a><a href="https://www.linkedin.com/in/victorsuarezcruz/" target="_blank" rel="noreferrer" className="footer-link">LinkedIn</a></div></div></footer>
    </main>
  );
}

function Terminal({ command, setCommand, locale }: { command: Command; setCommand: (command: Command) => void; locale: Locale }) {
  const t = content[locale]; const rows = t.terminal[command];
  return <div className="terminal-shell relative mx-auto w-full max-w-xl lg:translate-y-3"><div className="absolute -inset-10 -z-10 rounded-full bg-terminal/10 blur-3xl" /><div className="flex items-center gap-1.5 border-b border-white/[0.08] bg-white/[0.025] px-4 py-3"><span className="h-2.5 w-2.5 rounded-full bg-red-400/90" /><span className="h-2.5 w-2.5 rounded-full bg-amber-300/90" /><span className="h-2.5 w-2.5 rounded-full bg-terminal/90" /><span className="ml-2 font-mono text-[10px] text-slate-500">victor@lab:~</span></div><div className="min-h-[350px] p-5 font-mono text-xs leading-7 sm:p-7 sm:text-sm"><div className="mb-8 flex flex-wrap items-center gap-x-2 text-slate-300"><span className="text-terminal">victor@lab</span><span className="text-slate-600">:</span><span className="text-cyber">~</span><span className="text-slate-600">$</span><span className="ml-1">{command}</span><span className="cursor-blink text-terminal">▋</span></div><div className="space-y-2">{rows.map(([label, value]) => <div className="grid grid-cols-[105px_1fr] gap-3" key={label}><span className="text-slate-500">{label}</span><span className={command === 'status' ? 'text-terminal' : 'text-slate-200'}>{value}</span></div>)}</div><div className="mt-9 border-t border-white/[0.08] pt-5"><p className="mb-3 text-[10px] uppercase tracking-[.18em] text-slate-600">{t.terminalShortcuts}</p><div className="flex flex-wrap gap-2">{commands.map((item) => <button type="button" onClick={() => setCommand(item)} key={item} className={'terminal-command ' + (command === item ? 'terminal-command-active' : '')}>{item}</button>)}</div></div></div></div>;
}

function SectionIntro({ index, eyebrow, title, body }: { index: string; eyebrow: string; title: string; body: string }) {
  return <div className="grid gap-5 md:grid-cols-[110px_1fr_330px] md:items-end"><p className="font-mono text-xs tracking-[.2em] text-terminal">{index} /</p><div><p className="font-mono text-xs uppercase tracking-[.18em] text-cyber">{eyebrow}</p><h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-[-.04em] text-white sm:text-4xl">{title}</h2></div><p className="max-w-md text-sm leading-7 text-slate-400">{body}</p></div>;
}

function SkillCard({ icon, title, items }: { icon: React.ReactNode; title: string; items: readonly string[] }) {
  return <article className="rounded-2xl border border-white/[0.08] bg-surface/60 p-7 transition duration-300 hover:-translate-y-1 hover:border-white/[0.16]"><div className="grid h-10 w-10 place-items-center rounded-lg border border-cyber/20 bg-cyber/10 text-cyber">{icon}</div><h3 className="mt-7 text-lg font-semibold text-white">{title}</h3><ul className="mt-5 space-y-3">{items.map((item) => <li className="flex items-start gap-3 text-sm leading-6 text-slate-400" key={item}><ChevronRight size={16} className="mt-1 shrink-0 text-terminal" />{item}</li>)}</ul></article>;
}

function Education({ year, title, school }: { year: string; title: string; school: string }) {
  return <article className="relative border-b border-white/[0.08] py-7 pl-7 first:pt-0"><span className="absolute -left-[5px] top-9 h-2.5 w-2.5 rounded-full bg-terminal first:top-1" /><p className="font-mono text-xs text-cyber">{year}</p><h3 className="mt-2 text-lg font-medium text-white">{title}</h3><p className="mt-1 text-sm text-slate-400">{school}</p></article>;
}
