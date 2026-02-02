import { useState } from "react"; 

const DENOMINATIONS = [20, 10, 5, 1, 0.25, 0.10, 0.05, 0.01];

export default function Caja() {
  const totalAPagar = 7.35;

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

  const cambioDesglosado = calculateChange(cambio);

  return (
    <div>
      <h3>Total a pagar: B/. {totalAPagar}</h3>

      <div>
        {DENOMINATIONS.map(value => (
          <button key={value} onClick={() => handlePago(value)}>
            {value < 1 ? `${value * 100}c` : `$${value}`}
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
                {Number(coin) < 1
                  ? `${Number(coin) * 100}c`
                  : `$${coin}`} → {qty}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

function calculateChange(change: number) {
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
