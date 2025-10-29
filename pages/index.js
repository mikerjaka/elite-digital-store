// pages/index.js
import Header from "../components/Header"
import Slider from "../components/Slider"
import MiniBanners from "../components/MiniBanners"
import products from "../data/products.json"
import ProductCard from "../components/ProductCard"
import Link from "next/link"

export default function Home(){
  const featured = products.filter(p=>p.featured).slice(0,18)
  return (
    <div>
      <Header/>

      {/* Banner grande manual */}
      <section className="container section">
        <Slider/>
      </section>

      {/* Mini-banners automáticos */}
      <section className="container section">
        <MiniBanners/>
      </section>

      {/* Productos destacados fijos */}
      <section className="container section">
        <h2 className="sec">PRODUCTOS DESTACADOS</h2>
        <div className="grid">
          {featured.map(p=> <ProductCard key={p.id} p={p}/>)}
        </div>
        <div className="catalog-cta">
          <Link className="btn" href="/tienda">VER CATÁLOGO</Link>
        </div>
      </section>
    </div>
  )
}
