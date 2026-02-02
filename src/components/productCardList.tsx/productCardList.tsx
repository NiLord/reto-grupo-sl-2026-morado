import { useEffect, useState } from "react";
import ProductoCard from "../productoCard.tsx/productoCard";

const LOCAL_STORAGE_KEY = "selectedProducts";

type Product = {
  id_producto: number;
  nombre: string;
  precio: number;
  cantidad: number;
};

type LocalProduct = {
  productId: number;
  quantity: number;
};

function ProductCardList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [localProducts, setLocalProducts] = useState<LocalProduct[]>([]);

  useEffect(() => {
async function fetchProducts() {
  const res = await fetch(
    "http://localhost:8080/producto",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!res.ok) {
    throw new Error("Error al obtener productos");
  }

  const data: Product[] = await res.json();
  data.map((e) => {
    console.log(e)
  })
  setProducts(data);
}

    fetchProducts();
  }, []);

  useEffect(() => {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLocalProducts(stored ? JSON.parse(stored) : []);
  }, []);

  const handleCardPress = (productId: number) => {
    setLocalProducts((prev) => {
      const existing = prev.find((p) => p.productId === productId);

      let updated: LocalProduct[];

      if (existing) {
        updated = prev.map((p) =>
          p.productId === productId ? { ...p, quantity: p.quantity + 1 } : p,
        );
      } else {
        updated = [...prev, { productId, quantity: 1 }];
      }

      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));

      return updated;
    });
  };

  const handleRemovePress = (productId: number) => {
    setLocalProducts((prev) => {
      const existing = prev.find((p) => p.productId === productId);
      if (!existing) return prev;

      let updated: LocalProduct[];

      if (existing.quantity > 1) {
        updated = prev.map((p) =>
          p.productId === productId ? { ...p, quantity: p.quantity - 1 } : p,
        );
      } else {
        updated = prev.filter((p) => p.productId !== productId);
      }

      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));

      return updated;
    });
  };

  return (
    <div>
      <p>Selecciona productos</p>
      <div className="productCardList">
        {products.map((product) => {
          const local = localProducts.find((lp) => lp.productId === product.id_producto);

          return (
            <ProductoCard
              key={product.id_producto}
              productId={product.id_producto}
              productName={product.nombre}
              productPrice={product.precio}
              productStock={product.cantidad}
              quantitySelected={local?.quantity ?? 0}
              onCardPress={handleCardPress}
              onRemovePress={handleRemovePress}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ProductCardList;
