import React, { useState } from 'react';

// Función que recibe un valor y devuelve el valor acumulado
const Acumulador = () => {
  // Estado para el acumulador
  const [acumulador, setAcumulador] = useState<number>(5);

  // Función para incrementar el acumulador
  const incrementar = () => {
    setAcumulador((prevAcumulador) => prevAcumulador + 1);
  };

  // Función para disminuir el acumulador
  const disminuir = () => {
    setAcumulador((prevAcumulador) => prevAcumulador - 1);
  };

  // Función para sumar 5 al acumulador
  const sumarCinco = () => {
    setAcumulador((prevAcumulador) => prevAcumulador + 5);
  };

  // Función para restar 5 al acumulador
  const restarCinco = () => {
    setAcumulador((prevAcumulador) => prevAcumulador - 5);
  };

  return (
    <div>
      <h3>Acumulador de 5</h3>
      <p>Valor del Acumulador: {acumulador}</p>
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

export { Acumulador };
export {};