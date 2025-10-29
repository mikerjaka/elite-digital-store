// components/Slider.js
import { useEffect, useRef, useState } from 'react'

// 3 banners grandes (manual swipe/click, sin autoplay)
const BANNERS = [
  "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1600&auto=format&fit=crop",
]

export default function Slider(){
  const [idx, setIdx] = useState(0)
  const trackRef = useRef(null)
  const touch = useRef({startX:0, dx:0})

  useEffect(()=>{ 
    const el = trackRef.current
    if(el) el.style.transform = `translateX(-${idx*100}%)`
  },[idx])

  const onStart = (e)=>{ touch.current.startX = e.touches ? e.touches[0].clientX : e.clientX }
  const onMove  = (e)=>{ const x = e.touches ? e.touches[0].clientX : e.clientX; touch.current.dx = x - touch.current.startX }
  const onEnd   = ()=>{ 
    if(touch.current.dx > 60) setIdx(i => (i+2)%BANNERS.length)
    else if(touch.current.dx < -60) setIdx(i => (i+1)%BANNERS.length)
    touch.current.dx = 0
  }

  return (
    <div className="slider"
      onMouseDown={onStart} onMouseMove={onMove} onMouseUp={onEnd}
      onTouchStart={onStart} onTouchMove={onMove} onTouchEnd={onEnd}
    >
      <div className="track" ref={trackRef}>
        {BANNERS.map((src,i)=>(
          <div key={i} className="slide">
            <img src={src} alt={`Banner ${i+1}`} style={{width:'100%',height:'100%',objectFit:'cover'}}/>
          </div>
        ))}
      </div>
      <div className="controls">
        <button className="ctrl" onClick={()=>setIdx(i => (i+2)%BANNERS.length)} aria-label="Anterior">‹</button>
        <button className="ctrl" onClick={()=>setIdx(i => (i+1)%BANNERS.length)} aria-label="Siguiente">›</button>
      </div>
      <div className="dots">
        {BANNERS.map((_,i)=> <div key={i} className={i===idx?'dot active':'dot'} onClick={()=>setIdx(i)}></div>)}
      </div>
    </div>
  )
}
