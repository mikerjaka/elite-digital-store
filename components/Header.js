// components/Header.js
import { useState } from 'react'
import Drawer from './Drawer'
import categories from '../data/categories.json'
import Link from 'next/link'

export default function Header(){
  const [open, setOpen] = useState(false)

  return (
    <header className="header">
      {/* Franja superior */}
      <div className="topbar">
        ¡Streaming 24/7 sin interrupciones!
      </div>

      {/* Bloque central estilo Noodle Store */}
      <div className="hero-title">
        <h1 className="brand-gradient">Elite Digital</h1>
      </div>

      {/* Barra con menú hamburguesa + nav */}
      <div className="container header-in">
        <div style={{display:'flex',alignItems:'center',gap:8}}>
          <button className="btn" onClick={()=>setOpen(true)} aria-label="Abrir menú">☰</button>
          <nav className="menu">
            <Link className="btn" href="/">Inicio</Link>
            <Link className="btn" href="/tienda">Tienda</Link>
            <Link className="btn" href="/packs">Packs y Combos</Link>
          </nav>
        </div>
      </div>

      {/* Drawer de categorías (3 líneas a la izquierda) */}
      <Drawer open={open} onClose={()=>setOpen(false)}>
        <h3 style={{marginTop:0}}>Categorías</h3>
        {categories.map(c=>(
          <Link key={c} className="cat" href={`/tienda?cat=${encodeURIComponent(c)}`} onClick={()=>setOpen(false)}>{c}</Link>
        ))}
      </Drawer>
    </header>
  )
}
