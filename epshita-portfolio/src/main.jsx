import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { motion } from 'framer-motion';
import { ArrowDownRight, ArrowRight, ArrowUpRight, Github, Linkedin, Mail, Menu, X, Code2, Sparkles, Layers3, ExternalLink, Download, MapPin, Terminal, Braces, Globe2 } from 'lucide-react';
import './styles.css';

const PROFILE = {
  name: 'Epshita',
  role: 'Full-stack developer',
  email: 'epshita2102@gmail.com',
  github: 'https://github.com/epshita1802-del',
  linkedin: 'https://linkedin.com/in/epshita-4b1958342',
  resume: '/resume.pdf', // Add your resume PDF to the public folder
};

// Opens Gmail's compose window in a new tab with To, Subject and Body pre-filled
const GMAIL_COMPOSE = `https://mail.google.com/mail/?view=cm&fs=1&to=${PROFILE.email}&su=${encodeURIComponent("Let's connect")}&body=${encodeURIComponent("Hi Epshita,\n\n")}`;

const projects = [
  { no: '01', name: 'TrendCraft AI', type: 'AI / ML · Smart wardrobe', description: 'A digital wardrobe and virtual styling assistant designed to turn clothing items into personalized outfit ideas with styling suggestions.', stack: ['React', 'Node.js', 'MongoDB', 'AI/ML'], tone: 'peach', label: 'STYLE / INTELLIGENCE', status: 'In development', github: '', demo: '' },
  { no: '02', name: 'VoyageAI', type: 'Full-stack · Travel tech', description: 'A smart tour-planning experience with AI-assisted destination matching, budget-aware itineraries, packing lists, and travel tips.', stack: ['React', 'Express', 'MongoDB', 'AI'], tone: 'violet', label: 'EXPLORE / DISCOVER', status: 'Project', github: '', demo: '' },
  { no: '03', name: 'ABTalks Redesign', type: 'Web development', description: 'A redesigned web experience focused on clear presentation, thoughtful layout, and responsive interface design.', stack: ['HTML', 'CSS', 'JavaScript'], tone: 'mint', label: 'IDEAS / IN CONVERSATION', status: 'Repository available', github: 'https://github.com/epshita1802-del/abtalks-redesign', demo: '' },
  { no: '04', name: 'Game Predictor', type: 'Web project', description: 'A game prediction project built as a hands-on coding experiment. Explore the source code on GitHub.', stack: ['JavaScript', 'Web development'], tone: 'blue', label: 'PLAY / PREDICT', status: 'Repository available', github: 'https://github.com/epshita1802-del/game_perdictor', demo: '' },
  { no: '05', name: 'Salon Website', type: 'Website · Salon', description: 'A salon website designed to present services and create a polished online presence.', stack: ['Web design', 'Responsive UI'], tone: 'peach', label: 'STYLE / SELF-CARE', status: 'Live website', github: '', demo: 'https://y-omega-steel.vercel.app/' },
  { no: '06', name: 'More work soon', type: 'Project in progress', description: 'A space for another project. Repository and live demo links can be added when ready.', stack: ['Coming soon'], tone: 'violet', label: 'NEXT / IN PROGRESS', status: 'Details to be added', github: '', demo: '' },
];

const certificates = [
  { title: 'Python Programming', issuer: 'Welcode Computer Training Institute', date: 'July 2024', file: '/certificates/Welcode Python Course Completion Certificate.png', kind: 'image' },
  { title: 'Data Analytics Job Simulation', issuer: 'Deloitte · Forage', date: 'March 28, 2026', file: '/certificates/deloitte-data-analytics-original.png', kind: 'image' },
  { title: 'Full Stack Web Development', issuer: 'Training certificate', date: 'June 15 – July 30, 2026', file: '/certificates/full-stack-original.pdf', kind: 'pdf' },
  { title: 'The Joy of Computing using Python', issuer: 'NPTEL', date: 'January – April 2026 · Score: 82', file: '/certificates/nptel-joy-of-computing-original.pdf', kind: 'pdf' },
  { title: 'Students’ Library Committee', issuer: 'Amritsar Group of Colleges · Certificate of Appreciation', date: 'Date not shown', file: '/certificates/library-committee-original.png', kind: 'image' },
  { title: 'Pallas Athena Cultural Society', issuer: 'Amritsar Group of Colleges · Certificate of Appreciation', date: 'Date not shown', file: '/certificates/pallas-athena-original.png', kind: 'image' },
];

const skillGroups = [
  { title: 'Languages', items: ['C', 'C++', 'Python', 'JavaScript', 'Java'] },
  { title: 'Frontend', items: ['HTML', 'CSS', 'React', 'Tailwind CSS', 'Responsive UI'] },
  { title: 'Backend & data', items: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs'] },
  { title: 'Beyond code', items: ['AI/ML exploration', 'Teaching', 'Communication', 'Public speaking'] },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  return <div className="site-shell">
    <div className="grain" aria-hidden="true" />
    <header className="nav-wrap">
      <a className="brand" href="#home" onClick={closeMenu}><span className="brand-mark">e.</span><span>Epshita</span></a>
      <button className="mobile-menu" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={21}/> : <Menu size={21}/>}</button>
      <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
        {['About', 'Projects', 'Skills', 'Journey', 'Certificates', 'Contact'].map(item => <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>)}
        <a className="nav-cta" href="#contact" onClick={closeMenu}>Let’s talk <ArrowUpRight size={15}/></a>
      </nav>
    </header>

    <main>
      <section className="hero section" id="home">
        <div className="hero-copy">
          <motion.div initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:.6}} className="availability"><span className="pulse-dot"/> OPEN TO INTERNSHIPS & COLLABORATIONS</motion.div>
          <motion.h1 initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{duration:.7,delay:.08}}>I build things<br/>for the <span className="serif-accent">curious.</span></motion.h1>
          <motion.p className="hero-description" initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{duration:.7,delay:.18}}>Hey, I’m <strong>Epshita</strong> — a Computer Science student, full-stack developer, and AI enthusiast turning ideas into thoughtful digital experiences.</motion.p>
          <motion.div className="hero-actions" initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:.6,delay:.25}}>
            <a className="button button-primary" href="#projects">Explore my work <ArrowDownRight size={17}/></a>
            <a className="button button-quiet" href={PROFILE.resume} target="_blank" rel="noreferrer"><Download size={16}/> Resume</a>
          </motion.div>
          <div className="hero-meta"><span><MapPin size={14}/> Amritsar, India</span><span className="meta-divider"/><span>Currently in 3rd year · CSE</span></div>
        </div>
        <motion.div className="hero-art" initial={{opacity:0,scale:.94,rotate:2}} animate={{opacity:1,scale:1,rotate:0}} transition={{duration:.9,delay:.15}}>
          <div className="art-grid"/>
          <div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="orbit orbit-three"/>
          <div className="art-core"><span className="core-spark">✳</span><span className="core-initial">e<span>.</span></span><span className="core-caption">DESIGN MINDS.<br/>BUILD WITH LOGIC.</span></div>
          <div className="float-card code-card"><div className="mini-dots"><i/><i/><i/></div><span className="mono muted">// currently learning</span><div className="code-line"><span>const</span> future = <em>"AI + web"</em>;</div><div className="code-line">build(future)<b>;</b></div></div>
          <div className="float-card sticker-card"><Sparkles size={16}/><span>curiosity<br/><b>in progress</b></span></div>
          <div className="art-index mono">FIG. 01 — THE MAKER</div>
        </motion.div>
        <div className="hero-bottom"><span className="mono">SCROLL TO EXPLORE</span><span className="scroll-line"/><span className="mono">01 / 05</span></div>
      </section>

      <section className="ticker" aria-label="Areas of interest"><div className="ticker-track">{Array.from({length:2},(_,i)=><React.Fragment key={i}><span>FULL-STACK DEVELOPMENT</span><b>✳</b><span>AI / ML</span><b>✳</b><span>CREATIVE PROBLEM SOLVING</span><b>✳</b><span>LEARNING BY BUILDING</span><b>✳</b></React.Fragment>)}</div></section>

      <section className="section about-section" id="about">
        <div className="section-kicker"><span className="mono">01 — A LITTLE ABOUT ME</span><span className="kicker-line"/></div>
        <div className="about-grid"><h2>Part logic.<br/>Part <span className="serif-accent">imagination.</span><br/>Always learning.</h2><div className="about-text"><p className="lead">I’m interested in the space where useful technology meets a genuinely good user experience.</p><p>From building full-stack applications to exploring AI-powered ideas, I enjoy taking a problem, breaking it into smaller pieces, and shaping it into something people can actually use.</p><p>Outside my editor, I teach coding and work on communicating complex ideas simply. It keeps me curious, patient, and focused on the person on the other side of the screen.</p><div className="about-signature">Nice to meet you <span>↗</span></div></div></div>
        <div className="stats-row"><div><strong>04<span>+</span></strong><span>Projects & experiments</span></div><div><strong>03<span>+</span></strong><span>Core areas explored</span></div><div><strong>∞</strong><span>Things left to learn</span></div></div>
      </section>

      <section className="section projects-section" id="projects">
        <div className="section-kicker"><span className="mono">02 — SELECTED WORK</span><span className="kicker-line"/></div>
        <div className="section-heading-row"><h2>Ideas, made <span className="serif-accent">real.</span></h2><p>A few things I’ve been building, exploring, and learning from.</p></div>
        <div className="projects-grid">{projects.map((project,i)=><motion.article key={project.no} className={`project-card ${project.tone}`} initial={{opacity:0,y:22}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.15}} transition={{duration:.5,delay:i*.07}}>
          <div className="project-top"><span className="mono">{project.no} / {String(projects.length).padStart(2,'0')}</span><span className="project-arrow"><ArrowUpRight size={18}/></span></div>
          <div className="project-visual"><div className="visual-label mono">{project.label}</div><div className={`visual-shape shape-${project.tone}`}><span>{project.no}</span><div className="shape-ring ring-a"/><div className="shape-ring ring-b"/></div><span className="visual-caption">CONCEPT → CODE</span></div>
          <div className="project-content"><div className="project-type">{project.type}</div><h3>{project.name}</h3><p>{project.description}</p><div className="tag-row">{project.stack.map(tag=><span key={tag}>{tag}</span>)}</div><div className="project-foot"><span>{project.status}</span><div className="project-links">{project.github && <a href={project.github} target="_blank" rel="noreferrer" aria-label={`View ${project.name} on GitHub`}><Github size={16}/> GitHub <ExternalLink size={12}/></a>}{project.demo && <a href={project.demo} target="_blank" rel="noreferrer" aria-label={`Open ${project.name} live demo`}><Globe2 size={16}/> Live demo <ExternalLink size={12}/></a>}</div></div></div>
        </motion.article>)}</div>
        <p className="project-note"><Sparkles size={15}/> More repository and live demo links can be added as they become available.</p>
      </section>

      <section className="section skills-section" id="skills">
        <div className="section-kicker"><span className="mono">03 — MY TOOLKIT</span><span className="kicker-line"/></div>
        <div className="section-heading-row"><h2>Tools of the <span className="serif-accent">trade.</span></h2><p>Growing a strong foundation, one concept at a time.</p></div>
        <div className="skills-grid">{skillGroups.map((group,i)=><motion.div key={group.title} className="skill-card" initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.08}}><div className="skill-card-head"><span className="skill-icon">{i===0?<Terminal size={18}/>:i===1?<Code2 size={18}/>:i===2?<Layers3 size={18}/>:<Sparkles size={18}/>}</span><span className="mono">0{i+1}</span></div><h3>{group.title}</h3><div className="skill-tags">{group.items.map(item=><span key={item}>{item}</span>)}</div></motion.div>)}</div>
      </section>

      <section className="section journey-section" id="journey">
        <div className="section-kicker"><span className="mono">04 — THE JOURNEY SO FAR</span><span className="kicker-line"/></div>
        <div className="journey-grid"><h2>Learning is<br/>the <span className="serif-accent">whole point.</span></h2><div className="timeline"><div className="timeline-item"><span className="timeline-dot"/><div className="timeline-date mono">2024 — 2028 · EXPECTED</div><h3>B.Tech, Computer Science & Engineering</h3><p>Amritsar Group of Colleges · Building foundations in programming, algorithms, software engineering, and emerging technology.</p></div><div className="timeline-item"><span className="timeline-dot"/><div className="timeline-date mono">TRAINING</div><h3>Full-stack Web Development</h3><p>Hands-on MERN-stack training with practical work across frontend interfaces, backend APIs, and database-driven applications.</p></div><div className="timeline-item"><span className="timeline-dot"/><div className="timeline-date mono">ONGOING</div><h3>Coding Instructor & Educator</h3><p>Helping young learners explore coding and computer concepts through approachable explanations and hands-on activities.</p></div></div></div>
      </section>

      <section className="section certificates-section" id="certificates">
        <div className="section-kicker"><span className="mono">05 — PROOF OF LEARNING</span><span className="kicker-line"/></div>
        <div className="section-heading-row"><h2>Learning, <span className="serif-accent">recognized.</span></h2><p>Courses, certificates, and milestones that mark the journey.</p></div>
        <div className="certificates-grid">{certificates.map((cert,i)=><motion.article key={cert.title} className="certificate-card" initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.12}} transition={{duration:.45,delay:i*.05}}><a className="certificate-preview" href={cert.file} target="_blank" rel="noreferrer" aria-label={`Open original ${cert.title}`}><div className="certificate-thumb">{cert.kind === "image" ? <img src={cert.file} alt={`${cert.title} original certificate`} loading="lazy"/> : <div className="certificate-icon"><Layers3 size={28}/><span>PDF</span></div>}</div><span className="mono certificate-count">CERTIFICATE {String(i+1).padStart(2,'0')}</span></a><div className="certificate-details"><h3>{cert.title}</h3><p className="certificate-issuer">{cert.issuer}</p><p className="certificate-date">{cert.date}</p><a className="certificate-link" href={cert.file} target="_blank" rel="noreferrer"><ExternalLink size={15}/> View Original Certificate</a></div></motion.article>)}</div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-orb orb-left"/><div className="contact-orb orb-right"/>
        <div className="contact-inner">
          <div className="section-kicker"><span className="mono">05 — YOUR TURN</span><span className="kicker-line"/></div>
          <p className="contact-overline">HAVE AN IDEA? LET’S TALK.</p>
          <h2>Let’s make<br/>something <span className="serif-accent">matter.</span></h2>
          <p className="contact-copy">Have an internship opportunity, a project idea, or just want to connect? My inbox is open.</p>

          <a className="button button-primary contact-button" href={GMAIL_COMPOSE} target="_blank" rel="noreferrer">
            Say hello <ArrowUpRight size={17}/>
          </a>

          <a className="contact-email" href={GMAIL_COMPOSE} target="_blank" rel="noreferrer">
            <Mail size={20}/><span>{PROFILE.email}</span><ArrowUpRight size={17}/>
          </a>

          <div className="social-links">
            <a href={PROFILE.github} target="_blank" rel="noreferrer"><Github size={17}/> GitHub <ExternalLink size={12}/></a>
            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn <ExternalLink size={12}/></a>
            <a href={GMAIL_COMPOSE} target="_blank" rel="noreferrer"><Mail size={17}/> Email me <ExternalLink size={12}/></a>
          </div>
        </div>
      </section>
    </main>
    <footer className="footer"><a className="brand" href="#home"><span className="brand-mark">e.</span><span>Epshita</span></a><span className="mono footer-note">DESIGNED WITH CURIOSITY · BUILT WITH CODE</span><a href="#home" className="back-top">BACK TO TOP ↑</a><span className="copyright">© {new Date().getFullYear()} Epshita</span></footer>
  </div>;
}

createRoot(document.getElementById('root')).render(<App />);