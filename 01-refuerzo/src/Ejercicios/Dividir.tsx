import React, { useState } from 'react';

// Componente que utiliza el estado para acumular valores
export const Acumulador = () => {
  // Estado para el valor acumulado
  const [acumulado, setAcumulado] = useState<number>(5);

  // Función para incrementar el acumulado
  const incrementar = () => {
    setAcumulado(acumulado + 1);
  };

  // Función para disminuir el acumulado
  const disminuir = () => {
    setAcumulado(acumulado - 1);
  };

  // Función para sumar 5 al acumulado
  const sumarCinco = () => {
    setAcumulado(acumulado + 5);
  };

  // Función para restar 5 al acumulado
  const restarCinco = () => {
    setAcumulado(acumulado - 5);
  };

  return (
    <div>
      <h3>Acumulador de 5</h3>
      <p>Valor Acumulado: {acumulado}</p>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={disminuir}>Disminuir</button>

      {/* Representación visual */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ width: '100px', height: '50px', backgroundColor: 'lightgray' }}>
          {/* Rectángulo */}
        </div>
        <div style={{ width: '50px', height: '50px', backgroundColor: 'blue', marginLeft: '10px' }}>
          {/* Cuadrado -5 */}
        </div>
        <div style={{ width: '50px', height: '50px', backgroundColor: 'green', marginLeft: '10px' }}>
          {/* Cuadrado +5 */}
        </div>
      </div>

      <p style={{ textAlign: 'center' }}>
        <button onClick={restarCinco}>-5</button>
        <button onClick={sumarCinco}>+5</button>
      </p>
    </div>
  );
};
export {};
