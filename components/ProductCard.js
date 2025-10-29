// components/ProductCard.js
import React from "react";

export default function ProductCard({ product }) {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} className="card-img" />
      <div className="card-body">
        <h3 className="card-title">{product.name}</h3>
        <p className="card-price">
          S/. {product.price.toFixed(2)}{" "}
          <span className="card-oldprice">S/. {product.oldPrice.toFixed(2)}</span>
        </p>
        <p className="card-stock">{product.stock} disponibles</p>
        <div className="card-buttons">
          <button className="btn-view">Ver</button>
          <button className="btn-buy">Comprar</button>
        </div>
      </div>

      <style jsx>{`
        .card {
          background: #111;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 0 12px rgba(0, 0, 0, 0.4);
          transition: transform 0.2s ease, box-shadow 0.3s ease;
        }
        .card:hover {
          transform: scale(1.03);
          box-shadow: 0 0 20px rgba(0, 255, 100, 0.3);
        }
        .card-img {
          width: 100%;
          height: 180px;
          object-fit: cover;
        }
        .card-body {
          padding: 12px;
          text-align: center;
        }
        .card-title {
          color: #fff;
          font-weight: bold;
          font-size: 1.1rem;
        }
        .card-price {
          color: #0f0;
          font-weight: bold;
        }
        .card-oldprice {
          color: #777;
          text-decoration: line-through;
          font-size: 0.9rem;
        }
        .card-stock {
          color: #aaa;
          font-size: 0.85rem;
        }
        .card-buttons {
          display: flex;
          justify-content: space-between;
          margin-top: 10px;
        }
        .btn-view,
        .btn-buy {
          flex: 1;
          margin: 0 5px;
          padding: 8px;
          border: none;
          border-radius: 6px;
          font-weight: bold;
          cursor: pointer;
        }
        .btn-view {
          background: #222;
          color: #0f0;
        }
        .btn-buy {
          background: #0f0;
          color: #000;
        }
      `}</style>
    </div>
  );
}
