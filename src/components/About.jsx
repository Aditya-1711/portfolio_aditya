import { motion } from 'framer-motion'

const skills = ["Python", "C++", "ROS2", "PyTorch", "OpenCV", "TensorFlow", "MATLAB", "SLAM", "Deep Learning", "Control Theory"]

export default function About() {
  return (
    <section id="about" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>About Me</h2>
      </motion.div>
      <br />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <p style={{ maxWidth: '600px', color: '#94a3b8', fontSize: '1.1rem', lineHeight: 1.8 }}>
          I design and build intelligent systems that operate reliably in real-world environments,
          combining machine learning, perception, and optimisation. My work focuses on bridging the gap
          between raw data processing and autonomous mechanical action.
        </p>
      </motion.div>

      {/* Interactive Physics Skills Cloud */}
      <motion.div 
        style={{ marginTop: '60px', width: '100%', maxWidth: '800px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px', padding: '40px' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            drag
            dragConstraints={{ left: -20, right: 20, top: -20, bottom: 20 }}
            dragElastic={0.4}
            whileHover={{ scale: 1.1, backgroundColor: 'rgba(96, 165, 250, 0.15)' }}
            whileTap={{ scale: 0.9, cursor: 'grabbing' }}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: 'spring', stiffness: 300, damping: 20, delay: index * 0.05 }}
            style={{
              padding: '16px 28px',
              borderRadius: '999px',
              background: 'rgba(15, 23, 42, 0.4)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: '#f8fafc',
              fontSize: '1.05rem',
              fontWeight: 500,
              cursor: 'grab',
              boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
              backdropFilter: 'blur(12px)',
              userSelect: 'none'
            }}
          >
            {skill}
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
