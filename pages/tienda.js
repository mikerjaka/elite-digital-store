import { useMemo } from "react";
import { useRouter } from "next/router";
import Header from "../components/Header";
import products from "../data/products.json";
import ProductCard from "../components/ProductCard";

export default function Tienda() {
  const router = useRouter();

  // Validación segura
  if (!products || !Array.isArray(products)) {
    return <div style={{ color: "white", textAlign: "center", padding: "20px" }}>Error cargando productos</div>;
  }

  const cat = router.query.cat ? decodeURIComponent(router.query.cat) : null;

  const list = useMemo(() => {
    return products.filter((p) => !cat || p.category === cat);
  }, [cat]);

  return (
    <div>
      <Header />
      <section className="container section">
        <h2 className="section-title">Todos los productos</h2>
        <div className="grid">
          {list.map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
