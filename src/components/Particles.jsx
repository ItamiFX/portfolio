import React, { useRef, useEffect } from 'react'

export default function Particles({ amount = 80 }){
  const canvasRef = useRef(null)
  const mouse = useRef({ x: null, y: null, radius: 80 })

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    let dpr = window.devicePixelRatio || 1
    let width = canvas.clientWidth || 300
    let height = canvas.clientHeight || 150
    canvas.width = Math.floor(width * dpr)
    canvas.height = Math.floor(height * dpr)
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

    let particles = []

    function rand(min, max){ return Math.random() * (max - min) + min }

    function init(){
      particles = []
      for(let i=0;i<amount;i++){
        particles.push({
          x: rand(0, width),
          y: rand(0, height),
          vx: rand(-0.35, 0.35),
          vy: rand(-0.35, 0.35),
          r: rand(1, 3),
          hue: rand(250, 290),
          alpha: rand(0.35, 0.9)
        })
      }
    }

    let rafId
    function draw(){
      ctx.clearRect(0, 0, width, height)
      for(let i=0;i<particles.length;i++){
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy

        if(p.x < -10) p.x = width + 10
        if(p.x > width + 10) p.x = -10
        if(p.y < -10) p.y = height + 10
        if(p.y > height + 10) p.y = -10

        if (mouse.current.x !== null) {
          const dx = p.x - mouse.current.x
          const dy = p.y - mouse.current.y
          const dist2 = dx*dx + dy*dy
          if (dist2 > 0) {
            const dist = Math.sqrt(dist2)
            if (dist < mouse.current.radius) {
              const angle = Math.atan2(dy, dx)
              const force = (mouse.current.radius - dist) / mouse.current.radius
              const impulse = 0.14 * force
              p.vx += Math.cos(angle) * impulse
              p.vy += Math.sin(angle) * impulse
            }
          }
        }

        p.vx *= 0.995
        p.vy *= 0.995

        const maxSpeed = 1.6
        const sp = Math.sqrt(p.vx*p.vx + p.vy*p.vy) || 0
        if (sp > maxSpeed) {
          p.vx = (p.vx / sp) * maxSpeed
          p.vy = (p.vy / sp) * maxSpeed
        }

        ctx.beginPath()
        ctx.fillStyle = `hsla(${p.hue},80%,60%, ${p.alpha})`
        ctx.arc(p.x, p.y, p.r, 0, Math.PI*2)
        ctx.fill()
      }

      const maxConnectThreshold = 80
      if (particles.length <= maxConnectThreshold) {
        for (let a = 0; a < particles.length; a++) {
          for (let b = a + 1; b < particles.length; b++) {
            const pa = particles[a]
            const pb = particles[b]
            const dx = pa.x - pb.x
            const dy = pa.y - pb.y
            const dist = Math.sqrt(dx * dx + dy * dy)
            if (dist < 90) {
              const alpha = 0.08 * (1 - dist / 90)
              ctx.beginPath()
              ctx.strokeStyle = `rgba(140,100,255,${alpha})`
              ctx.lineWidth = 1
              ctx.moveTo(pa.x, pa.y)
              ctx.lineTo(pb.x, pb.y)
              ctx.stroke()
            }
          }
        }
      }

      rafId = requestAnimationFrame(draw)
    }

    function onResize(){
      width = canvas.clientWidth || width
      height = canvas.clientHeight || height
      dpr = window.devicePixelRatio || 1
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      init()
    }

    function onMove(e){
      const rect = canvas.getBoundingClientRect()
      mouse.current.x = (e.clientX - rect.left)
      mouse.current.y = (e.clientY - rect.top)
    }
    function onLeave(){ mouse.current.x = null; mouse.current.y = null }

    init()
    draw()

    window.addEventListener('resize', onResize)
    canvas.addEventListener('mousemove', onMove)
    canvas.addEventListener('mouseleave', onLeave)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', onResize)
      canvas.removeEventListener('mousemove', onMove)
      canvas.removeEventListener('mouseleave', onLeave)
    }
  }, [amount])

  return (
    <canvas ref={canvasRef} className="particles-canvas" style={{position:'absolute', inset:0, width:'100%', height:'100%', zIndex:0}} aria-hidden="true"></canvas>
  )
}
