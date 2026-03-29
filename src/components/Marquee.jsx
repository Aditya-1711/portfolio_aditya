import { motion } from "framer-motion";

const textPattern = ["AUTONOMOUS SYSTEMS", "●", "COMPUTER VISION", "●", "MACHINE LEARNING", "●", "CONTROL THEORY", "●", "ROBOTICS", "●"];

export default function Marquee() {
  return (
    <div style={{
      width: "100vw",
      overflow: "hidden",
      backgroundColor: "rgba(2, 6, 23, 0.4)",
      backdropFilter: "blur(12px)",
      borderTop: "1px solid rgba(255, 255, 255, 0.05)",
      borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
      padding: "30px 0",
      display: "flex",
      whiteSpace: "nowrap",
      position: "relative",
      zIndex: 10,
      marginTop: "10vh"
    }}>
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ ease: "linear", duration: 25, repeat: Infinity }}
        style={{ display: "flex", gap: "40px" }}
      >
        {[...Array(2)].map((_, index) => (
          <div key={index} style={{ display: 'flex', gap: '40px', alignItems: 'center', paddingRight: '40px' }}>
            {textPattern.map((text, i) => (
              <span key={i} style={{ 
                fontSize: text === "●" ? '1.2rem' : '2.5rem', 
                fontWeight: text === "●" ? 'normal' : 800, 
                color: text === "●" ? '#60a5fa' : 'transparent', 
                WebkitTextStroke: text === "●" ? 'none' : '1px rgba(255,255,255,0.2)',
                background: text === "●" ? 'none' : 'linear-gradient(to right, #f8fafc, #94a3b8)',
                WebkitBackgroundClip: text === "●" ? 'none' : 'text',
                letterSpacing: '0.1em' 
              }}>
                {text}
              </span>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
