import Link from 'next/link'
import {money} from '../lib/store'
export default function ProductCard({p,currency='S/.'}){
  return (<div style={{border:'1px solid #1b1c1f',borderRadius:14,overflow:'hidden',background:'#111214'}}>
    <img src={p.cover} alt={p.title} style={{width:'100%',height:160,objectFit:'cover'}}/>
    <div style={{padding:10}}>
      <div style={{display:'flex',justifyContent:'space-between',gap:8}}>
        <div style={{fontWeight:700}}>{p.title}</div>
        {p.badge && <span style={{fontSize:10,padding:'3px 6px',border:'1px solid #1b1c1f',borderRadius:999}}>{p.badge}</span>}
      </div>
      <div style={{display:'flex',gap:8,alignItems:'center',marginTop:6}}>
        <span style={{fontWeight:800}}>{money(p.price,currency)}</span>
        {p.oldPrice && <span style={{textDecoration:'line-through',opacity:.7,fontSize:12}}>{money(p.oldPrice,currency)}</span>}
      </div>
      <div style={{fontSize:12, color:'#a6ffcf', marginTop:4}}>{p.stock} disponibles</div>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:8,marginTop:8}}>
        <Link href={`/producto/${p.slug}`} style={{border:'1px solid #1b1c1f',padding:'10px 12px',borderRadius:10,textAlign:'center'}}>Ver</Link>
        <Link href={`/producto/${p.slug}?buy=1`} style={{background:'#0c8b57',color:'#fff',padding:'10px 12px',borderRadius:10,textAlign:'center',fontWeight:700}}>Comprar</Link>
      </div>
    </div>
  </div>)
}
