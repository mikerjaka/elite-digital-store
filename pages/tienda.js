import {useMemo} from 'react'
import {useRouter} from 'next/router'
import Header from '../components/Header'
import products from '../data/products.json'
import ProductCard from '../components/ProductCard'

export default function Tienda(){
  const router = useRouter()
  const cat = router.query.cat ? decodeURIComponent(router.query.cat) : null
  const list = useMemo(()=> products.filter(p => !cat || p.category === cat), [cat])
  return (<div>
    <Header/>
    <section style={{maxWidth:1100,margin:'0 auto',padding:'12px 16px'}}>
      <h2 style={{fontSize:16,letterSpacing:.6}}>{cat || 'Todos los productos'}</h2>
      <div style={{display:'grid',gap:12,gridTemplateColumns:'repeat(2,1fr)'}}>
        {list.map(p => <ProductCard key={p.id} p={p}/>)}
      </div>
    </section>
  </div>)
}
