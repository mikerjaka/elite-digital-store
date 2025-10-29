import React from "react";

export default function ProductCard({ p }) {
  if (!p) {
    return (
      <div className="product-card-empty">
        <p>Producto no disponible</p>
      </div>
    );
  }

  return (
    <div className="product-card">
      <div className="product-image">
        <img
          src={p.image || "/placeholder.jpg"}
          alt={p.name || "Producto sin nombre"}
        />
      </div>
      <div className="product-info">
        <h3>{p.name || "Sin título"}</h3>
        <p className="price">S/. {p.price ? p.price.toFixed(2) : "0.00"}</p>
      </div>
    </div>
  );
}
