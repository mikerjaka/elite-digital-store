// pages/index.js
import { useEffect, useState } from "react"
import Header from "../components/Header"
import Slider from "../components/Slider"
import MiniBanners from "../components/MiniBanners"
import ProductCard from "../components/ProductCard"
import Link from "next/link"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../lib/firebase"

export default function Home() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const querySnapshot = await getDocs(collection(db, "products"))
      const items = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
      setProducts(items)
    }
    fetchProducts()
  }, [])

  const featured = products.filter(p => p.featured).slice(0, 18)

  return (
    <div>
      <Header/>

      {/* Banner principal */}
      <section className="container section">
        <Slider/>
      </section>

      {/* Mini-banners */}
      <section className="container section">
        <MiniBanners/>
      </section>

      {/* Productos */}
      <section className="container section">
        <h2 className="sec">PRODUCTOS DESTACADOS</h2>
        <div className="grid">
          {featured.map(p => <ProductCard key={p.id} p={p} />)}
        </div>
        <div className="catalog-cta">
          <Link className="btn" href="/tienda">VER CATÁLOGO</Link>
        </div>
      </section>
    </div>
  )
}
