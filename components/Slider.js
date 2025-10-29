
import { useEffect, useRef, useState } from 'react'
export default function Slider(){
  const [idx, setIdx] = useState(0)
  const trackRef = useRef(null)
  const touch = useRef({startX:0, dx:0})

  useEffect(()=>{
    const t = setInterval(()=> setIdx(i => (i+1)%3), 4000)
    return ()=>clearInterval(t)
  },[])

  useEffect(()=>{
    const el = trackRef.current
    if(el) el.style.transform = `translateX(-${idx*100}%)`
  },[idx])

  const onStart = (e)=>{ touch.current.startX = e.touches ? e.touches[0].clientX : e.clientX }
  const onMove = (e)=>{ const x = e.touches ? e.touches[0].clientX : e.clientX; touch.current.dx = x - touch.current.startX }
  const onEnd = ()=>{ if(touch.current.dx > 60) setIdx(i => (i+2)%3); else if(touch.current.dx < -60) setIdx(i => (i+1)%3); touch.current.dx = 0 }

  return (
    <div className="slider" onMouseDown={onStart} onMouseMove={onMove} onMouseUp={onEnd}
         onTouchStart={onStart} onTouchMove={onMove} onTouchEnd={onEnd}>
      <div className="track" ref={trackRef}>
        <div className="slide"><img src="/banner1.jpg" alt="Banner 1" style={{width:'100%',height:'100%',objectFit:'cover'}}/></div>
        <div className="slide"><img src="/banner2.jpg" alt="Banner 2" style={{width:'100%',height:'100%',objectFit:'cover'}}/></div>
        <div className="slide"><img src="/banner3.jpg" alt="Banner 3" style={{width:'100%',height:'100%',objectFit:'cover'}}/></div>
      </div>
      <div className="controls">
        <button className="ctrl" onClick={()=>setIdx(i => (i+2)%3)} aria-label="Anterior">‹</button>
        <button className="ctrl" onClick={()=>setIdx(i => (i+1)%3)} aria-label="Siguiente">›</button>
      </div>
      <div className="dots">
        {[0,1,2].map(i=> <div key={i} className={i===idx?'dot active':'dot'} onClick={()=>setIdx(i)}></div>)}
      </div>
    </div>
  )
}
