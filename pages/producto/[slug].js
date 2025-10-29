import {useRouter} from 'next/router'
import Header from '../../components/Header'
import items from '../../data/products.json'
import {money} from '../../lib/store'
import Link from 'next/link'

export default function Product(){
  const router = useRouter()
  const p = items.find(x=>x.slug === router.query.slug)
  if(!p) return (<div><Header/><div style={{maxWidth:1100,margin:'0 auto',padding:'12px 16px'}}>Producto no encontrado.</div></div>)

  return (<div>
    <Header/>
    <section style={{maxWidth:1100,margin:'0 auto',padding:'12px 16px'}}>
      <div style={{display:'grid',gridTemplateColumns:'1fr',gap:16}}>
        <img src={p.cover} alt={p.title} style={{width:'100%',height:280,objectFit:'cover',borderRadius:16,border:'1px solid #1b1c1f'}}/>
        <div>
          <h1>{p.title}</h1>
          <div style={{display:'flex',gap:8,alignItems:'center'}}>
            <span style={{fontWeight:800}}>{money(p.price)}</span>
            {p.oldPrice && <span style={{textDecoration:'line-through',opacity:.7,fontSize:12}}>{money(p.oldPrice)}</span>}
          </div>
          <div style={{fontSize:12, color:'#a6ffcf', marginTop:4}}>{p.stock} disponibles</div>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:8,marginTop:8}}>
            <Link href="/tienda" style={{border:'1px solid #1b1c1f',padding:'10px 12px',borderRadius:10,textAlign:'center'}}>Añadir al carrito</Link>
            <a href={`https://wa.me/51946335004?text=${encodeURIComponent('Hola 👋, quiero comprar ' + p.title + ' desde Elite Digital')}`} target="_blank" rel="noreferrer" style={{background:'#0c8b57',color:'#fff',padding:'10px 12px',borderRadius:10,textAlign:'center',fontWeight:700}}>Comprar por WhatsApp</a>
          </div>
          <div style={{marginTop:16}}>
            <table style={{width:'100%',borderCollapse:'collapse',fontSize:13}}>
              <tbody>
                {p.content?.map((row,idx)=>(
                  <tr key={idx}>
                    <td style={{width:160,borderTop:'1px solid #1b1c1f',padding:'8px 0',color:'#a3b7ad'}}>{row.label}</td>
                    <td style={{borderTop:'1px solid #1b1c1f',padding:'8px 0'}}>{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{marginTop:16,border:'1px solid #1b1c1f',borderRadius:14,background:'#111214',padding:12}}>
            <div style={{fontWeight:800}}>Pago por Yape</div>
            <div style={{fontSize:18,fontWeight:900,letterSpacing:1}}>901027694</div>
            <div style={{fontSize:12,opacity:.8}}>Titular: Luis M. Lino S.</div>
          </div>
        </div>
      </div>
    </section>

    <section style={{maxWidth:1100,margin:'0 auto',padding:'12px 16px'}}>
      <h2 style={{fontSize:16,letterSpacing:.6}}>Productos relacionados</h2>
      <div style={{display:'grid',gap:12,gridTemplateColumns:'repeat(2,1fr)'}}>
        {items.filter(x=>x.category===p.category && x.id!==p.id).slice(0,6).map(r=>(
          <div key={r.id} style={{border:'1px solid #1b1c1f',borderRadius:14,overflow:'hidden',background:'#111214'}}>
            <img src={r.cover} alt={r.title} style={{width:'100%',height:160,objectFit:'cover'}}/>
            <div style={{padding:10}}>
              <div style={{display:'flex',justifyContent:'space-between',gap:8}}>
                <div style={{fontWeight:700}}>{r.title}</div>
                {r.badge && <span style={{fontSize:10,padding:'3px 6px',border:'1px solid #1b1c1f',borderRadius:999}}>{r.badge}</span>}
              </div>
              <div style={{display:'flex',gap:8,alignItems:'center',marginTop:6}}>
                <span style={{fontWeight:800}}>{r.price.toFixed(2)}</span>
              </div>
              <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:8,marginTop:8}}>
                <a href={`/producto/${r.slug}`} style={{border:'1px solid #1b1c1f',padding:'10px 12px',borderRadius:10,textAlign:'center'}}>Ver</a>
                <a href={`https://wa.me/51946335004?text=${encodeURIComponent('Hola 👋, quiero comprar ' + r.title + ' desde Elite Digital')}`} target="_blank" rel="noreferrer" style={{background:'#0c8b57',color:'#fff',padding:'10px 12px',borderRadius:10,textAlign:'center',fontWeight:700}}>Comprar</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>)
}
