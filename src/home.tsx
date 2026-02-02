import { useState } from "react";
import "./App.css";
import ProductCardList from "./components/productCardList.tsx/productCardList";
import CambioComponent from "./components/CambioComponent";

const LOCAL_STORAGE_KEY = "selectedProducts";

type LocalProduct = {
  productId: number;
  quantity: number;
};

function Home() {
  const [listKey, setListKey] = useState(0);

  const getProductosSelected = (): LocalProduct[] => {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  };

  const sendOrder = async () => {
    const productosSelected = getProductosSelected();

    if (productosSelected.length === 0) {
      console.warn("No se seleccionaron products");
      return;
    }

    try {
      const res = await fetch("/api/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productosSelected }),
      });

      if (!res.ok) {
        throw new Error("Failed to send order");
      }

      await res.json();
      localStorage.removeItem(LOCAL_STORAGE_KEY);

      setListKey((prev) => prev + 1);
    } catch (error) {
      console.error("Error sending order:", error);
    }
  };

  return (
    <div className="mainContainer">
      <h2>Productos</h2>

      <ProductCardList key={listKey} />

      <button onClick={sendOrder} style={{ marginTop: "24px" }}>
        Enviar pedido
      </button>
      <div>
        <CambioComponent cambioTotal={0}></CambioComponent>
      </div>
    </div>
  );
}

export default Home;
