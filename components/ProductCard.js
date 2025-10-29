
import Link from 'next/link'
import { money } from '../lib/store'
export default function ProductCard({p}){
  return (<div className="card">
    <img src={p.cover} alt={p.title}/>
    <div className="card-body">
      <div style={{display:'flex',justifyContent:'space-between',gap:8}}>
        <div style={{fontWeight:800}}>{p.title}</div>
      </div>
      <div className="price">
        <span className="now">{money(p.price)}</span>
        {p.oldPrice && <span className="old">{money(p.oldPrice)}</span>}
      </div>
      <div className="stock">{p.stock} disponibles</div>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:8,marginTop:8}}>
        <Link className="btn" href={`/producto/${p.slug}`}>Ver</Link>
        <Link className="btn primary" href={`/producto/${p.slug}?buy=1`}>Comprar</Link>
      </div>
    </div>
  </div>)
}
