import { useState } from "react";
import { FiMenu, FiShoppingCart, FiSearch } from "react-icons/fi";

export default function Header() {
  const [search, setSearch] = useState("");

  return (
    <header className="bg-black text-white py-4 shadow-lg">
      {/* Texto superior */}
      <div className="text-center text-sm text-gray-300 mb-1">
        ¡Streaming 24/7 sin interrupciones!
      </div>

      {/* Logo principal */}
      <div className="text-center font-extrabold text-3xl bg-gradient-to-r from-green-400 via-yellow-400 to-green-600 bg-clip-text text-transparent">
        Elite Digital
      </div>

      {/* Barra de navegación */}
      <div className="flex items-center justify-between px-4 mt-4">
        {/* Menú de 3 líneas */}
        <button className="text-2xl">
          <FiMenu />
        </button>

        {/* Buscador */}
        <div className="flex items-center bg-gray-900 rounded-full w-full mx-3 px-3 py-2 border border-gray-700">
          <input
            type="text"
            placeholder="Buscar productos"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-transparent outline-none text-white placeholder-gray-400 flex-grow px-2 text-sm"
          />
          <FiSearch className="text-yellow-400 text-xl" />
        </div>

        {/* Carrito */}
        <button className="bg-green-600 rounded-full p-2 text-2xl">
          <FiShoppingCart />
        </button>
      </div>
    </header>
  );
}
