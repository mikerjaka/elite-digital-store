export default function ProductCard({ p }) {
  if (!p) {
    return <div style={{ color: "white", padding: "10px" }}>Producto no disponible</div>;
  }

  return (
    <div className="product-card">
      <img
        src={p.image || "/placeholder.jpg"}
        alt={p.name || "Producto sin nombre"}
        style={{ width: "100%", borderRadius: "8px" }}
      />
      <h3 style={{ color: "white", textAlign: "center", marginTop: "8px" }}>
        {p.name || "Sin título"}
      </h3>
      <p style={{ color: "#00ff99", textAlign: "center" }}>
        S/. {p.price ? p.price.toFixed(2) : "0.00"}
      </p>
    </div>
  );
}
