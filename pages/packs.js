import Header from '../components/Header'
import products from '../data/products.json'
import ProductCard from '../components/ProductCard'

export default function Packs(){
  const list = products.filter(p=>p.category==='Packs y Combos')
  return (<div>
    <Header/>
    <section style={{maxWidth:1100,margin:'0 auto',padding:'12px 16px'}}>
      <h2 style={{fontSize:16,letterSpacing:.6}}>Packs y Combos</h2>
      <div style={{display:'grid',gap:12,gridTemplateColumns:'repeat(2,1fr)'}}>
        {list.map(p => <ProductCard key={p.id} p={p}/>)}
      </div>
    </section>
  </div>)
}
