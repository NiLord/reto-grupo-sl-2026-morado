import { useMemo } from 'react'
import {
  usePagoConCambio,
  useSeleccionProductos,
  type Producto,
} from './components/productoCard.tsx/prueba/onCardpress'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//Es una prueba
function App() {
  const productos: Producto[] = useMemo(
    () => [
      { id: 1, nombre: 'Pan', precio: 0.85 },
      { id: 2, nombre: 'Leche', precio: 1.55 },
      { id: 3, nombre: 'Queso', precio: 2.25 },
      { id: 4, nombre: 'Galletas', precio: 1.15 },
      { id: 5, nombre: 'Jugo', precio: 1.75 },
    ],
    []
  )

  const {
    seleccionados,
    totalPiezas,
    seleccionarProducto,
    limpiarSeleccion,
  } = useSeleccionProductos(productos)

  const totalAPagar = useMemo(
    () =>
      Number(
        seleccionados
          .reduce((acc, item) => acc + item.precio * item.piezas, 0)
          .toFixed(2)
      ),
    [seleccionados]
  )

  const {
    denominations,
    totalPagado,
    piezas,
    cambio,
    cambioDesglosado,
    handlePago,
    resetPago,
  } = usePagoConCambio(totalAPagar)

  const handleLimpiar = () => {
    limpiarSeleccion()
    resetPago()
  }

  const formatMoney = (value: number) => value.toFixed(2)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      
      <h1>Vite + React</h1>
      <div className="card">
        <h3>Productos disponibles</h3>
        <div>
          {productos.map(item => (
            <button key={item.id} onClick={() => seleccionarProducto(item.id)}>
              {item.nombre} (B/. {formatMoney(item.precio)})
            </button>
          ))}
        </div>

        <h3>Productos seleccionados</h3>
        {seleccionados.length === 0 ? (
          <p>No hay productos seleccionados.</p>
        ) : (
          <ul>
            {seleccionados.map(item => (
              <li key={item.id}>
                {item.nombre} x{item.piezas} → B/. {formatMoney(item.precio * item.piezas)}
              </li>
            ))}
          </ul>
        )}
        <p><strong>Piezas seleccionadas:</strong> {totalPiezas}</p>

        <p><strong>Total a pagar:</strong> B/. {formatMoney(totalAPagar)}</p>

        <h3>Pago</h3>
        <div>
          {denominations.map(value => (
            <button key={value} onClick={() => handlePago(value)}>
              {value < 1 ? `${Math.round(value * 100)}c` : `$${value}`}
            </button>
          ))}
        </div>

        <p><strong>Total pagado:</strong> B/. {formatMoney(totalPagado)}</p>
        <p><strong>Piezas pagadas:</strong> {piezas}</p>

        {totalPagado >= totalAPagar && (
          <>
            <p><strong>Cambio:</strong> B/. {formatMoney(cambio)}</p>

            <ul>
              {Object.entries(cambioDesglosado).map(([coin, qty]) => (
                <li key={coin}>
                  {Number(coin) < 1 ? `${Number(coin) * 100}c` : `$${coin}`} → {qty}
                </li>
              ))}
            </ul>
          </>
        )}

        <button onClick={handleLimpiar}>Limpiar</button>
      </div>
    </>
  )
}

export default App
