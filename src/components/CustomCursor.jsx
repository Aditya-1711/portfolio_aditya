import { useEffect, useRef, useState } from 'react'
import { Bot, Smile, Zap } from 'lucide-react'

export default function CustomCursor() {
  const cursorRef = useRef(null)
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)

  useEffect(() => {
    const updateMousePosition = e => {
      if (cursorRef.current) {
        // -11px offsets to center the 22x22 bot icon
        cursorRef.current.style.transform = `translate3d(${e.clientX - 11}px, ${e.clientY - 11}px, 0)`
      }
    }
    
    const handleMouseOver = (e) => {
      // Check if we are hovering over an interactive element
      if (e.target.closest('a, button, input, [role="button"], .interactive')) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)
    
    // Use passive listener for best performance on rapid moves
    window.addEventListener('mousemove', updateMousePosition, { passive: true })
    window.addEventListener('mouseover', handleMouseOver)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    
    // Hide initially until mouse moves
    if (cursorRef.current) {
      cursorRef.current.style.transform = 'translate3d(-100px, -100px, 0)'
    }

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
      window.removeEventListener('mouseover', handleMouseOver)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [])

  // Dynamic state styles
  let content = <Bot size={22} />
  let color = '#60a5fa' // default soft blue
  let scale = 1

  if (isClicking) {
    content = <Zap size={22} />
    color = '#facc15' // energetic yellow zap
    scale = 0.75
  } else if (isHovering) {
    content = <Smile size={24} />
    color = '#ffffff' // pure white to pop against the dark backgrounds
    scale = 1.3
  }

  return (
    <div
      ref={cursorRef}
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        pointerEvents: 'none',
        zIndex: 999999,
        color: color, 
        filter: `drop-shadow(0 0 8px ${color})`,
        willChange: 'transform' // Hint to browser to hardware accelerate
      }}
    >
      <div style={{ 
        transform: `scale(${scale})`, 
        transition: 'transform 0.15s cubic-bezier(0.175, 0.885, 0.32, 1.275), color 0.15s ease',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {content}
      </div>
    </div>
  )
}
