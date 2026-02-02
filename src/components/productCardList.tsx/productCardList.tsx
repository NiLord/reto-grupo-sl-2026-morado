import { useEffect, useState } from "react";
import ProductoCard from "../productoCard.tsx/productoCard";

const LOCAL_STORAGE_KEY = "selectedProducts";

type Product = {
  id: number;
  name: string;
  price: number;
  stock: number;
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
      const res = {
        json: () => {
          return [
            { id: 1, name: "Prueba", price: 20, stock: 2 },
            { id: 2, name: "Prueba", price: 20, stock: 2 },
            { id: 3, name: "Prueba", price: 20, stock: 2 },
          ];
        },
      };
      const data: Product[] = await res.json();
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
          const local = localProducts.find((lp) => lp.productId === product.id);

          return (
            <ProductoCard
              key={product.id}
              productId={product.id}
              productName={product.name}
              productPrice={product.price}
              productStock={product.stock}
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
