import { useMemo, useState } from "react";

const DENOMINATIONS = [50, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01];

export type Producto = {
  id: number | string;
  nombre: string;
  precio: number;
};

export function usePagoConCambio(totalAPagar: number) {
  const [totalPagado, setTotalPagado] = useState(0);
  const [piezas, setPiezas] = useState(0);

  const handlePago = (valor: number) => {
    setTotalPagado(prev => Number((prev + valor).toFixed(2)));
    setPiezas(prev => prev + 1);
  };

  const cambio =
    totalPagado >= totalAPagar
      ? Number((totalPagado - totalAPagar).toFixed(2))
      : 0;

  const cambioDesglosado = useMemo(
    () => calculateChange(cambio),
    [cambio]
  );

  const resetPago = () => {
    setTotalPagado(0);
    setPiezas(0);
  };

  return {
    denominations: DENOMINATIONS,
    totalPagado,
    piezas,
    cambio,
    cambioDesglosado,
    handlePago,
    resetPago,
  };
}

export function useSeleccionProductos(productos: Producto[]) {
  const [seleccion, setSeleccion] = useState<Record<string, number>>({});

  const seleccionarProducto = (id: Producto["id"]) => {
    const key = String(id);
    setSeleccion(prev => ({
      ...prev,
      [key]: (prev[key] ?? 0) + 1,
    }));
  };

  const limpiarSeleccion = () => setSeleccion({});

  const seleccionados = useMemo(
    () =>
      productos
        .filter(item => (seleccion[String(item.id)] ?? 0) > 0)
        .map(item => ({
          ...item,
          piezas: seleccion[String(item.id)] ?? 0,
        })),
    [productos, seleccion]
  );

  const totalPiezas = useMemo(
    () => Object.values(seleccion).reduce((acc, qty) => acc + qty, 0),
    [seleccion]
  );

  return {
    seleccionados,
    totalPiezas,
    seleccionarProducto,
    limpiarSeleccion,
  };
}

function formatDenomination(value: number) {
  return value < 1 ? `${Math.round(value * 100)}c` : `$${value}`;
}

export default function Caja() {
  const totalAPagar = 0.00;
  const {
    denominations,
    totalPagado,
    piezas,
    cambio,
    cambioDesglosado,
    handlePago,
  } = usePagoConCambio(totalAPagar);

  return (
    <div>
      <h3>Total a pagar: B/. {totalAPagar}</h3>

      <div>
        {denominations.map(value => (
          <button key={value} onClick={() => handlePago(value)}>
            {formatDenomination(value)}
          </button>
        ))}
      </div>

      <hr />

      <p><strong>Pagado:</strong> B/. {totalPagado}</p>
      <p><strong>Piezas:</strong> {piezas}</p>

      {totalPagado >= totalAPagar && (
        <>
          <p><strong>Cambio:</strong> B/. {cambio}</p>

          <ul>
            {Object.entries(cambioDesglosado).map(([coin, qty]) => (
              <li key={coin}>
                {formatDenomination(Number(coin))} → {qty}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export function calculateChange(change: number) {
  const result: Record<number, number> = {};
  let remaining = Number(change.toFixed(2));

  for (const coin of DENOMINATIONS) {
    const count = Math.floor(remaining / coin);

    if (count > 0) {
      result[coin] = count;
      remaining = Number((remaining - count * coin).toFixed(2));
    }
  }

  return result;
}
