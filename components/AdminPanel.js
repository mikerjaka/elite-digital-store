import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../lib/firebase";

export default function AdminPanel() {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
    category: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "products"), {
        name: product.name,
        price: parseFloat(product.price),
        description: product.description,
        image: product.image,
        category: product.category,
        createdAt: new Date(),
      });
      setMessage("✅ Producto agregado correctamente.");
      setProduct({
        name: "",
        price: "",
        description: "",
        image: "",
        category: "",
      });
    } catch (error) {
      setMessage("❌ Error al agregar producto: " + error.message);
    }
  };

  return (
    <div style={{ padding: "20px", color: "white" }}>
      <h2>Panel de Administración</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Nombre del producto"
          value={product.name}
          onChange={handleChange}
          required
        /><br />
        <input
          name="price"
          type="number"
          placeholder="Precio"
          value={product.price}
          onChange={handleChange}
          required
        /><br />
        <input
          name="image"
          placeholder="URL de la imagen"
          value={product.image}
          onChange={handleChange}
        /><br />
        <input
          name="category"
          placeholder="Categoría"
          value={product.category}
          onChange={handleChange}
        /><br />
        <textarea
          name="description"
          placeholder="Descripción"
          value={product.description}
          onChange={handleChange}
        /><br />
        <button type="submit">Agregar producto</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
