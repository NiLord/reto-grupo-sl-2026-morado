import React from "react";

interface Denominacion {
  valor: number;
  tipo: "billete" | "moneda";
  color: string;
}

interface DesgloseItem {
  valor: number;
  tipo: "billete" | "moneda";
  color: string;
}

interface CambioComponentProps {
  cambioTotal: number;
}

const CambioComponent: React.FC<CambioComponentProps> = ({ cambioTotal }) => {
  // Denominaciones disponibles en dólares (de mayor a menor)
  const denominaciones: Denominacion[] = [
    { valor: 20, tipo: "billete", color: "bg-green-100 border-green-400" },
    { valor: 10, tipo: "billete", color: "bg-green-100 border-green-400" },
    { valor: 5, tipo: "billete", color: "bg-green-100 border-green-400" },
    { valor: 1, tipo: "billete", color: "bg-green-200 border-green-500" },
    { valor: 0.25, tipo: "moneda", color: "bg-gray-200 border-gray-400" },
    { valor: 0.1, tipo: "moneda", color: "bg-gray-300 border-gray-500" },
    { valor: 0.05, tipo: "moneda", color: "bg-gray-300 border-gray-500" },
    { valor: 0.01, tipo: "moneda", color: "bg-orange-200 border-orange-400" },
  ];

  // Función para calcular el desglose del cambio (cada moneda/billete individual)
  const calcularDesglose = (cantidad: number): DesgloseItem[] => {
    let restante = Math.round(cantidad * 100) / 100;
    const desglose: DesgloseItem[] = [];

    denominaciones.forEach(({ valor, tipo, color }) => {
      const cantidadDenominacion = Math.floor(restante / valor);

      // Agregar cada moneda/billete individualmente
      for (let i = 0; i < cantidadDenominacion; i++) {
        desglose.push({
          valor,
          tipo,
          color,
        });
      }

      restante =
        Math.round((restante - cantidadDenominacion * valor) * 100) / 100;
    });

    return desglose;
  };

  const desglose = calcularDesglose(cambioTotal);

  const formatearMoneda = (valor: number): string => {
    return `$${valor.toFixed(2)}`;
  };

  const obtenerNombreDenominacion = (valor: number): string => {
    if (valor >= 1) return `$${valor}`;
    if (valor === 0.25) return "25¢";
    if (valor === 0.1) return "10¢";
    if (valor === 0.05) return "5¢";
    if (valor === 0.01) return "1¢";
    return `${valor}`;
  };

  return (
    <div className="w-full p-6 bg-white rounded-lg">
      {/* Título y Total */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Cambio</h3>
        <div className="text-center bg-blue-50 border-2 border-blue-300 rounded-lg p-4">
          <p className="text-sm text-gray-600 mb-1">A devolver:</p>
          <p className="text-3xl font-bold text-blue-600">
            {formatearMoneda(cambioTotal)}
          </p>
        </div>
      </div>

      {/* Desglose del Cambio */}
      {desglose.length > 0 ? (
        <div>
          <p className="text-sm text-gray-600 mb-3 font-medium">Desglose:</p>
          <div className="grid grid-cols-4 gap-2">
            {desglose.map((item, index) => (
              <div
                key={index}
                className={`${item.color} border-2 rounded-lg p-3 flex flex-col items-center justify-center transition-all hover:shadow-md hover:scale-105`}
              >
                {/* Denominación */}
                <div className="text-xl font-bold text-gray-800">
                  {obtenerNombreDenominacion(item.valor)}
                </div>

                {/* Tipo */}
                <div className="text-xs text-gray-500 mt-1">{item.tipo}</div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center text-gray-500 py-4">
          No hay cambio a devolver
        </div>
      )}

      {/* Botón para limpiar/confirmar */}
      <button className="w-full mt-6 bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-lg transition-colors">
        Limpiar
      </button>
    </div>
  );
};

export default CambioComponent;
