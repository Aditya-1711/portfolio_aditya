import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

const greetings = [
  "Hello",
  "Bonjour",
  "Ciao",
  "Olá",
  "やあ",
  "Hallå",
  "Guten tag",
  "Hallo",
  "नमस्ते"
]

export default function Preloader({ onComplete }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index === greetings.length - 1) {
      const timer = setTimeout(() => {
        onComplete()
      }, 1000)
      return () => clearTimeout(timer)
    }

    const timer = setTimeout(() => {
      setIndex(index + 1)
    }, 600) // Much slower, uniform 600ms interval

    return () => clearTimeout(timer)
  }, [index, onComplete])

  return (
    <motion.div 
      className="preloader"
      initial={{ y: 0 }}
      exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
      style={{
        position: 'fixed', inset: 0, zIndex: 999999, 
        background: '#020617', display: 'flex', 
        alignItems: 'center', justifyContent: 'center',
        color: '#f8fafc', fontSize: '2.8rem', fontWeight: 500,
        fontFamily: "'Inter', sans-serif"
      }}
    >
      <div className="preloader-unit" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1.2, repeat: Infinity }}
          style={{ display: 'block', width: '14px', height: '14px', background: '#f8fafc', borderRadius: '50%' }} 
        />
        <div className="preloader-text-container">
          <AnimatePresence mode="wait">
            <motion.p
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              style={{ margin: 0, padding: 0, position: 'absolute', whiteSpace: 'nowrap' }}
            >
              {greetings[index]}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  )
}
