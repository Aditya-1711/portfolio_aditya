import { motion } from 'framer-motion'

export function RevealText({ children, delay = 0, block = false }) {
  // block=true allows the container to span full width instead of inline-block (useful for paragraphs)
  return (
    <div style={{ overflow: 'hidden', display: block ? 'block' : 'inline-block', verticalAlign: 'bottom', paddingBottom: '5px' }}>
      <motion.div
        initial={{ y: "110%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
        style={{ display: block ? 'block' : 'inline-block' }}
      >
        {children}
      </motion.div>
    </div>
  )
}
