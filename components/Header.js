import Link from 'next/link'
import categories from '../data/categories.json'
export default function Header(){
  return (<header style={{position:'sticky',top:0,backdropFilter:'blur(8px)',background:'rgba(10,10,12,.6)',borderBottom:'1px solid #1b1c1f',zIndex:50}}>
    <div style={{maxWidth:1100,margin:'0 auto',padding:'12px 16px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
      <div style={{display:'flex',alignItems:'center',gap:10}}>
        <div style={{width:36,height:36,borderRadius:10,background:'#0c8b57',display:'grid',placeItems:'center',fontWeight:800}}>ED</div>
        <div>
          <div style={{fontWeight:800}}>Elite Digital</div>
          <div style={{fontSize:12,opacity:.8}}>Tenemos diferentes plataformas streaming.</div>
        </div>
      </div>
      <nav style={{display:'flex',gap:10,flexWrap:'wrap'}}>
        <Link href="/">Inicio</Link>
        <Link href="/tienda">Tienda</Link>
        <Link href="/packs">Packs y Combos</Link>
      </nav>
    </div>
    <div style={{maxWidth:1100,margin:'0 auto',padding:'0 16px 10px 16px',display:'flex',gap:8,flexWrap:'wrap'}}>
      {categories.map(c => <Link key={c} href={`/tienda?cat=${encodeURIComponent(c)}`} style={{fontSize:12,border:'1px solid #1b1c1f',padding:'6px 8px',borderRadius:8}}>{c}</Link>)}
    </div>
  </header>)
}
