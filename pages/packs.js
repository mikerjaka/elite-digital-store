
import Header from "../components/Header"
import products from "../data/products.json"
import ProductCard from "../components/ProductCard"

export default function Packs(){
  const list = products.filter(p=>p.category==="Packs y Combos")
  return (<div>
    <Header/>
    <section className="container section">
      <h2 className="sec">Packs y Combos</h2>
      <div className="grid">
        {list.map(p=> <ProductCard key={p.id} p={p}/>)}
      </div>
    </section>
  </div>)
}
