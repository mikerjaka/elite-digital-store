
import {useMemo} from "react"
import {useRouter} from "next/router"
import Header from "../components/Header"
import products from "../data/products.json"
import ProductCard from "../components/ProductCard"

export default function Tienda(){
  const router = useRouter()
  const cat = router.query.cat ? decodeURIComponent(router.query.cat) : null
  const list = useMemo(()=> products.filter(p => !cat || p.category === cat), [cat])
  return (<div>
    <Header/>
    <section className="container section">
      <h2 className="sec">{cat || "Todos los productos"}</h2>
      <div className="grid">
        {list.map(p => <ProductCard key={p.id} p={p}/>)}
      </div>
    </section>
  </div>)
}
