import React from "react";

export default function ProductCard({ p }) {
  if (!p) {
    return (
      <div className="product-card">
        <p style={{ color: "#aaa", textAlign: "center" }}>Producto no disponible</p>
      </div>
    );
  }

  return (
    <div
      className="product-card"
      style={{
        backgroundColor: "#111",
        borderRadius: "12px",
        padding: "12px",
        boxShadow: "0 0 10px rgba(0,255,100,0.15)",
        textAlign: "center",
        transition: "transform 0.2s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.04)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <img
        src={p.image || "/placeholder.jpg"}
        alt={p.name || "Producto sin nombre"}
        style={{
          width: "100%",
          height: "160px",
          objectFit: "cover",
          borderRadius: "8px",
          marginBottom: "10px",
        }}
      />
      <h3
        style={{
          color: "#fff",
          fontSize: "16px",
          marginBottom: "5px",
        }}
      >
        {p.name || "Sin título"}
      </h3>
      <p style={{ color: "#00ff7f", fontWeight: "bold", margin: 0 }}>
        S/. {p.price ? p.price.toFixed(2) : "0.00"}
      </p>
    </div>
  );
}
