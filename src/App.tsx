import { useEffect, useState } from "react";
import { fetchClothingProducts } from "./services/fakeStoreService";
import { Product } from "./types/productTypes";

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchClothingProducts()
      .then((data) => setProducts(data))
      .catch((err) => setError(err.message));
  }, []);

  if (error) return <div>Error: {error}</div>;
  if (!products.length) return <div>Cargando productos…</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Inventario de Ropa</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((p) => (
          <li key={p.id} className="border p-4 rounded">
            <img
              src={p.image}
              alt={p.title}
              className="h-32 object-contain mx-auto"
            />
            <h2 className="mt-2 font-semibold">{p.title}</h2>
            <p className="text-sm text-gray-600">{p.category}</p>
            <p className="mt-1">Stock simulado: {p.rating.count}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
