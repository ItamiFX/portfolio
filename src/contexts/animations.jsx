import React, { createContext, useContext, useState, useEffect } from 'react'

const AnimationContext = createContext()

export function AnimationProvider({ children }) {
  const [animationsEnabled, setAnimationsEnabled] = useState(() => {
    const saved = localStorage.getItem('animationsEnabled')
    return saved !== null ? JSON.parse(saved) : true
  })

  useEffect(() => {
    localStorage.setItem('animationsEnabled', JSON.stringify(animationsEnabled))
    
    if (animationsEnabled) {
      document.body.classList.remove('no-animations')
    } else {
      document.body.classList.add('no-animations')
    }
  }, [animationsEnabled])

  const toggleAnimations = () => {
    setAnimationsEnabled(prev => !prev)
  }

  return (
    <AnimationContext.Provider value={{ animationsEnabled, toggleAnimations }}>
      {children}
    </AnimationContext.Provider>
  )
}

export function useAnimations() {
  const context = useContext(AnimationContext)
  if (!context) {
    throw new Error('useAnimations must be used within AnimationProvider')
  }
  return context
}
