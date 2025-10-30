// components/Header.js
import React from "react";
import { FaBars, FaSearch, FaShoppingCart } from "react-icons/fa";

export default function Header() {
  return (
    <header style={styles.header}>
      {/* Menú y logo */}
      <div style={styles.left}>
        <FaBars size={22} style={styles.icon} />
        <h1 style={styles.logo}>Elite Digital</h1>
      </div>

      {/* Buscador */}
      <div style={styles.searchBox}>
        <input
          type="text"
          placeholder="Buscar productos..."
          style={styles.input}
        />
        <FaSearch size={18} style={styles.searchIcon} />
      </div>

      {/* Carrito */}
      <div style={styles.cart}>
        <FaShoppingCart size={22} style={styles.icon} />
      </div>

      {/* --- Responsive inline CSS --- */}
      <style jsx>{`
        @media (max-width: 768px) {
          header {
            flex-direction: column;
            align-items: stretch !important;
            gap: 8px;
          }
          .searchBox {
            max-width: 100% !important;
            margin: 0;
          }
        }
      `}</style>
    </header>
  );
}

const styles = {
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "12px 16px",
    backgroundColor: "#0c0c0c",
    color: "#fff",
    boxShadow: "0 2px 6px rgba(0,0,0,0.4)",
    position: "sticky",
    top: 0,
    zIndex: 100,
    flexWrap: "wrap",
  },
  left: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  logo: {
    fontSize: "1.2rem",
    fontWeight: "700",
    background: "linear-gradient(90deg, #00ff9d, #aaff00)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    margin: 0,
  },
  searchBox: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#1a1a1a",
    borderRadius: "20px",
    padding: "6px 12px",
    flex: 1,
    maxWidth: "320px",
    margin: "0 12px",
  },
  input: {
    flex: 1,
    background: "transparent",
    border: "none",
    outline: "none",
    color: "#fff",
    fontSize: "0.95rem",
  },
  searchIcon: {
    color: "#facc15",
    cursor: "pointer",
  },
  cart: {
    display: "flex",
    alignItems: "center",
  },
  icon: {
    cursor: "pointer",
  },
};
