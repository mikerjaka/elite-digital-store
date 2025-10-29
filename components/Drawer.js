
import { useEffect } from 'react'
export default function Drawer({open,onClose,children}){
  useEffect(()=>{
    const onEsc = (e)=>{ if(e.key==='Escape') onClose() }
    document.addEventListener('keydown', onEsc)
    return ()=>document.removeEventListener('keydown', onEsc)
  },[onClose])
  return (
    <div className={open ? 'drawer open' : 'drawer'}>
      <div className="backdrop" onClick={onClose}></div>
      <aside className="panel">{children}</aside>
    </div>
  )
}
