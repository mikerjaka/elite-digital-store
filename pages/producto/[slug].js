
import {useRouter} from "next/router"
import Header from "../../components/Header"
import items from "../../data/products.json"
import {money} from "../../lib/store"
import Link from "next/link"

export default function Product(){
  const router = useRouter()
  const p = items.find(x=>x.slug === router.query.slug)
  if(!p) return (<div><Header/><div className="container section">Producto no encontrado.</div></div>)
  const related = items.filter(x=>x.category===p.category && x.id!==p.id).slice(0,6)
  return (<div>
    <Header/>
    <section className="container section">
      <div style={{display:"grid",gridTemplateColumns:"1fr",gap:16}}>
        <img src={p.cover} alt={p.title} style={{width:"100%",height:280,objectFit:"cover",borderRadius:16,border:"1px solid #151515"}}/>
        <div>
          <h1>{p.title}</h1>
          <div className="price">
            <span className="now">{money(p.price)}</span>
            {p.oldPrice && <span className="old">{money(p.oldPrice)}</span>}
          </div>
          <div className="stock">{p.stock} disponibles</div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginTop:8}}>
            <Link className="btn" href="/tienda">Añadir al carrito</Link>
            <a className="btn primary" href={`https://wa.me/51946335004?text=${encodeURIComponent("Hola 👋, quiero comprar " + p.title + " desde Elite Digital")}`} target="_blank" rel="noreferrer">Comprar por WhatsApp</a>
          </div>
          <div style={{marginTop:16,border:"1px solid #151515",borderRadius:14,background:"#0b0b0b",padding:12}}>
            <div style={{fontWeight:800}}>Pago por Yape</div>
            <div style={{fontSize:18,fontWeight:900,letterSpacing:1}}>901027694</div>
            <div style={{fontSize:12,opacity:.8}}>Titular: Luis M. Lino S.</div>
          </div>
        </div>
      </div>
    </section>
    <section className="container section">
      <h2 className="sec">Productos relacionados</h2>
      <div className="grid">
        {related.map(r=> (
          <div key={r.id} className="card">
            <img src={r.cover} alt={r.title}/>
            <div className="card-body">
              <div style={{display:"flex",justifyContent:"space-between",gap:8}}>
                <div style={{fontWeight:800}}>{r.title}</div>
              </div>
              <div className="price">
                <span className="now">{money(r.price)}</span>
                {r.oldPrice && <span className="old">{money(r.oldPrice)}</span>}
              </div>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginTop:8}}>
                <a className="btn" href={`/producto/${r.slug}`}>Ver</a>
                <a className="btn primary" href={`https://wa.me/51946335004?text=${encodeURIComponent("Hola 👋, quiero comprar " + r.title + " desde Elite Digital")}`} target="_blank" rel="noreferrer">Comprar</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>)
}
