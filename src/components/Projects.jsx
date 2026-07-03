import { motion } from 'framer-motion'
import MagneticButton from './MagneticButton'
import TiltCard from './TiltCard'

const featuredProjects = [
  {
    title: "ARCHER — Cognitive Robotics System",
    desc: "A privacy-preserving robotic architecture integrating local LLM reasoning (Ollama/Llama 3.2), voice control (Whisper), semantic memory (FAISS), and autonomous navigation (SLAM, Nav2, YOLOv8) in ROS 2 — no cloud dependency.",
    link: "archer.html"
  },
  {
    title: "Local LLM Systems Integration",
    desc: "Self-hosted AI infrastructure on a VPS using Ollama, OpenClaw agent orchestration, and Telegram interfaces for autonomous conversational workflows — full-stack private AI deployment.",
    link: "local_llm.html"
  },
  {
    title: "Zero Trust System",
    desc: "A containerised, AI‑optimised safety system that analyses API behaviour using static AST parsing, dynamic telemetry, and explainable risk scoring engineered for zero‑trust microservice environments.",
    link: "zero_trust_system.html"
  },
  {
    title: "Drone Swarm Optimisation",
    desc: "Optimised multi-drone coordination using Particle Swarm Optimisation.",
    link: "drones.html"
  },
  {
    title: "Grey Wolf Optimisation",
    desc: "Nature-inspired optimisation modelling leadership hierarchy and hunting behaviour.",
    link: "grey_wolf.html"
  },
  {
    title: "Breast Cancer Perception",
    desc: "High-accuracy morphological classification using multi-model ML.",
    link: "breast_cancer.html"
  }
]

const educationInfo = [
  {
    degree: "MSc Robotics and Intelligent Systems",
    institution: "Nottingham Trent University, UK",
    date: "2025–Present",
    desc: "Modules: Foundations of AI, Computational Intelligence, Artificial Perception, Cognitive Robotics, Intro to Software Programming, Research Methods. Building expertise in AI-driven perception and intelligent control for autonomous robotic systems."
  },
  {
    degree: "MBA Business Analytics (First Class)",
    institution: "Savitribai Phule Pune University, India",
    date: "2024–2025",
    desc: "Modules: Business Analytics & Statistical Methods (R), Data Mining, Machine Learning & Deep Learning, Business Intelligence, Risk Analytics. Applied machine learning and statistical modelling to data-driven business decision making."
  },
  {
    degree: "B.E. Mechanical Engineering (First Class)",
    institution: "Savitribai Phule Pune University, India",
    date: "2020–2024",
    desc: "Core Areas: Mechanics, Thermofluids, CAD/CAE, Manufacturing, Mechatronics, Robotics, FEM. Engineering foundation for designing and analysing mechanical and robotic systems."
  },

]

const otherProjects = [
  {
    name: "SIPRI-Military-Data-Project",
    link: "https://github.com/Aditya-1711/SIPRI-Military-Data-Project",
    desc: "Python data analysis and Tkinter GUI dashboard for the SIPRI Arms Transfers dataset."
  },
  {
    name: "salary-prediction",
    link: "https://github.com/Aditya-1711/salary-prediction",
    desc: "Salary band classification using survey data with feature engineering and model comparison."
  },
  {
    name: "human-activity-recognition",
    link: "https://github.com/Aditya-1711/human-activity-recognition",
    desc: "Machine learning pipeline recognizing and classifying different human activities from sensor data."
  },
  {
    name: "real_time_traffic_sign_recognition",
    link: "https://github.com/Aditya-1711/real_time_traffic_sign_recognition",
    desc: "Computer vision application for detecting and classifying traffic signs in real time."
  },
  {
    name: "Python-Projects",
    link: "https://github.com/Aditya-1711/Python-Projects",
    desc: "A collection of various Python scripts, data science tools, and mini-projects."
  }
]

export default function Projects() {
  return (
    <section id="projects">
      {/* SELECTED WORK */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <h2>Projects</h2>
      </motion.div>

      {featuredProjects.map((project, idx) => (
        <TiltCard 
          className="featured-project" 
          key={idx}
          delay={idx * 0.1}
        >
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }} viewport={{ once: true }}>
             <h3>{project.title}</h3>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }} viewport={{ once: true }}>
            <p>{project.desc}</p>
          </motion.div>
          <div style={{ marginTop: '20px' }}>
            <MagneticButton href={project.link} className="btn">View Case Study</MagneticButton>
          </div>
        </TiltCard>
      ))}

      {/* EDUCATION SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <h2 style={{ marginTop: '80px', marginBottom: '10px' }}>Education</h2>
      </motion.div>

      {educationInfo.map((edu, idx) => (
        <TiltCard 
          className="featured-project" 
          key={`edu-${idx}`}
          delay={idx * 0.1}
          style={{ padding: '24px 36px', marginTop: '24px' }}
        >
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }} viewport={{ once: true }}>
             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
               <h3 style={{ margin: 0 }}>{edu.degree}</h3>
               <span style={{ color: '#94a3b8', fontSize: '0.95rem', fontWeight: 500 }}>{edu.date}</span>
             </div>
             <h4 style={{ color: '#3b82f6', marginTop: '6px', fontWeight: 500, fontSize: '1.05rem' }}>{edu.institution}</h4>
          </motion.div>
          {edu.desc && (
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }} viewport={{ once: true }}>
              <p style={{ marginTop: '12px' }}>{edu.desc}</p>
            </motion.div>
          )}
        </TiltCard>
      ))}

      {/* GITHUB PROJECTS */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 style={{ marginTop: '80px', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="#cbd5e1">
            <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.2-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1 1.8-.8 2.1-1.2.1-.7.4-1.2.7-1.5-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2 1-.3 2-.4 3-.4s2 .1 3 .4c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.9 1.2 3.2 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.65 18.35.5 12 .5z"/>
          </svg>
          Open Source Github Repositories
        </h2>
      </motion.div>

      <div className="grid">
        {otherProjects.map((proj, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.6, delay: (idx % 4) * 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ 
               padding: '24px', 
               borderRadius: '16px', 
               background: 'rgba(255, 255, 255, 0.03)', 
               border: '1px solid rgba(255, 255, 255, 0.05)', 
               backdropFilter: 'blur(10px)',
               transition: '0.3s ease'
            }}
            whileHover={{ y: -5 }}
          >
            <a href={proj.link} target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column', width: '100%', height: '100%' }}>
              <h3 style={{ color: '#60a5fa', marginBottom: '10px', fontSize: '1.2rem', wordBreak: 'break-word' }}>{proj.name}</h3>
              {proj.desc && <p style={{ fontSize: '0.9rem', color: '#94a3b8', textTransform: 'none', letterSpacing: 'normal', fontFamily: 'Inter, sans-serif', fontWeight: 400, marginTop: 'auto' }}>{proj.desc}</p>}
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
