import { motion, useScroll, useTransform } from 'framer-motion'
import { Bot } from 'lucide-react'

export default function TopNav() {
  const isFast = typeof sessionStorage !== 'undefined' && sessionStorage.getItem('hasSeenPreloader') === 'true';
  const { scrollY } = useScroll()

  // The robot head rotates continuously as you scroll down the page, extrapolating infinitely
  const rotateRobot = useTransform(scrollY, [0, 1000], [0, 720], { clamp: false })
  
  // The robot's color shifts from white to neon blue as you scroll
  const colorRobot = useTransform(scrollY, [0, 300], ['#f8fafc', '#60a5fa'])

  const bg = useTransform(scrollY, [0, 50], ['rgba(15, 23, 42, 0)', 'rgba(15, 23, 42, 0.75)'])
  const border = useTransform(scrollY, [0, 50], ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.05)'])
  const shadow = useTransform(scrollY, [0, 50], ['0px 0px 0px rgba(0,0,0,0)', '0px 10px 30px rgba(0,0,0,0.5)'])

  return (
    <motion.nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        padding: '16px 6%',
        display: 'flex',
        alignItems: 'center',
        zIndex: 9998,
        background: bg,
        borderBottomWidth: '1px',
        borderBottomStyle: 'solid',
        borderColor: border,
        boxShadow: shadow,
        backdropFilter: 'blur(16px)'
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, delay: isFast ? 0.4 : 6.6, ease: 'easeOut' }}
    >
      <a href="#" className="interactive" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
        <motion.div style={{ rotate: rotateRobot, color: colorRobot }}>
          <Bot size={32} />
        </motion.div>
        <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 600, color: '#f8fafc', letterSpacing: '0.02em' }}>
          Aditya Kapile
        </h3>
      </a>
    </motion.nav>
  )
}
