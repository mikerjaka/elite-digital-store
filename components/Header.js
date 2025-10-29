
import { useState } from 'react'
import Drawer from './Drawer'
import categories from '../data/categories.json'
import Link from 'next/link'
import config from '../config.json'

export default function Header(){
  const [open, setOpen] = useState(false)
  return (<header className="header">
    <div className="container header-in">
      <div style={{display:'flex',alignItems:'center',gap:8}}>
        <button className="btn" onClick={()=>setOpen(true)} aria-label="Abrir menú">☰</button>
        <div className="brand">
          <div className="logo">ED</div>
          <div>
            <div className="brand-name">Elite Digital</div>
            <div className="tag">{config.tagline}</div>
          </div>
        </div>
      </div>
      <nav className="menu">
        <Link className="btn" href="/">Inicio</Link>
        <Link className="btn" href="/tienda">Tienda</Link>
        <Link className="btn" href="/packs">Packs y Combos</Link>
      </nav>
    </div>
    <Drawer open={open} onClose={()=>setOpen(false)}>
      <h3 style={{marginTop:0}}>Categorías</h3>
      {categories.map(c=>(
        <Link key={c} className="cat" href={`/tienda?cat=${encodeURIComponent(c)}`} onClick={()=>setOpen(false)}>{c}</Link>
      ))}
    </Drawer>
  </header>)
}
