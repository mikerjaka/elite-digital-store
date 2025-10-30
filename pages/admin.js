// pages/admin.js
import { useEffect, useState } from "react";
import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../lib/firebase";

export default function AdminPanel() {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
    category: "",
    featured: false,
  });

  // Obtener productos de Firebase
  const fetchProducts = async () => {
    const querySnapshot = await getDocs(collection(db, "products"));
    const items = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setProducts(items);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Agregar producto
  const handleAdd = async () => {
    if (!newProduct.name || !newProduct.price || !newProduct.image) {
      alert("Completa al menos nombre, precio e imagen");
      return;
    }

    await addDoc(collection(db, "products"), {
      ...newProduct,
      price: Number(newProduct.price),
    });

    setNewProduct({
      name: "",
      description: "",
      price: "",
      image: "",
      category: "",
      featured: false,
    });
    fetchProducts();
  };

  // Eliminar producto
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "products", id));
    fetchProducts();
  };

  return (
    <div style={{ padding: "20px", color: "#fff", backgroundColor: "#000", minHeight: "100vh" }}>
      <h1>🛠️ Panel de Administración</h1>

      <div style={{ marginBottom: "20px", border: "1px solid #333", padding: "15px", borderRadius: "8px" }}>
        <h2>Agregar nuevo producto</h2>
        <input
          placeholder="Nombre"
          value={newProduct.name}
          onChange={e => setNewProduct({ ...newProduct, name: e.target.value })}
        /><br/>
        <input
          placeholder="Descripción"
          value={newProduct.description}
          onChange={e => setNewProduct({ ...newProduct, description: e.target.value })}
        /><br/>
        <input
          placeholder="Precio"
          type="number"
          value={newProduct.price}
          onChange={e => setNewProduct({ ...newProduct, price: e.target.value })}
        /><br/>
        <input
          placeholder="URL de imagen"
          value={newProduct.image}
          onChange={e => setNewProduct({ ...newProduct, image: e.target.value })}
        /><br/>
        <input
          placeholder="Categoría"
          value={newProduct.category}
          onChange={e => setNewProduct({ ...newProduct, category: e.target.value })}
        /><br/>
        <label>
          <input
            type="checkbox"
            checked={newProduct.featured}
            onChange={e => setNewProduct({ ...newProduct, featured: e.target.checked })}
          />
          Producto destacado
        </label><br/>
        <button onClick={handleAdd} style={{ marginTop: "10px" }}>Agregar</button>
      </div>

      <h2>📦 Productos actuales</h2>
      <div>
        {products.map(p => (
          <div key={p.id} style={{ border: "1px solid #333", padding: "10px", margin: "10px 0", borderRadius: "6px" }}>
            <strong>{p.name}</strong> - ${p.price}
            <br />
            <img src={p.image} alt={p.name} width="150" />
            <br />
            <button onClick={() => handleDelete(p.id)} style={{ background: "red", color: "#fff", marginTop: "5px" }}>Eliminar</button>
          </div>
        ))}
      </div>
    </div>
  );
}
